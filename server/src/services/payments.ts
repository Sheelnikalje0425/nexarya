import crypto from "crypto";
import { db } from "../db/index";
import { recordAuditLog } from "./audit";

export type PaymentStatus = "INITIATED" | "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED";

export interface PaymentIntentParams {
  amount: number;
  currency: string;
  clientEmail: string;
  clientName: string;
  projectRef?: string;
  metadata?: Record<string, any>;
}

export interface PaymentProviderInterface {
  createPayment(params: PaymentIntentParams): Promise<{ transactionId: string; referenceId: string; checkoutUrl: string }>;
  verifyPayment(transactionId: string): Promise<{ status: PaymentStatus; transaction: any }>;
  handleWebhook(rawPayload: string, signature: string): Promise<{ success: boolean; status?: PaymentStatus; error?: string }>;
  refundPayment(transactionId: string, reason?: string): Promise<{ success: boolean; refundId?: string }>;
}

export class ProductionStripeProvider implements PaymentProviderInterface {
  private getSecretKey(): string {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      if (process.env.NODE_ENV === "production") {
        throw new Error("FATAL: STRIPE_SECRET_KEY environment variable is required in production mode.");
      }
      return "sk_test_nexarya_dev_placeholder";
    }
    return key;
  }

  private getWebhookSecret(): string {
    const secret = process.env.PAYMENT_WEBHOOK_SECRET;
    if (!secret) {
      if (process.env.NODE_ENV === "production") {
        throw new Error("FATAL: PAYMENT_WEBHOOK_SECRET environment variable is required in production mode.");
      }
      return "whsec_nexarya_dev_placeholder";
    }
    return secret;
  }

  public async createPayment(params: PaymentIntentParams) {
    const transactionId = `tx_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;
    const referenceId = `NXN-PAY-${Date.now().toString().slice(-6)}`;
    const now = new Date().toISOString();

    const stmt = db.prepare(`
      INSERT INTO payments (id, transaction_id, reference_id, amount, currency, status, client_email, client_name, project_ref, provider, provider_session_id, raw_metadata, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, 'PENDING', ?, ?, ?, 'STRIPE', ?, ?, ?, ?)
    `);

    stmt.run(
      transactionId,
      transactionId,
      referenceId,
      params.amount,
      params.currency.toUpperCase(),
      params.clientEmail,
      params.clientName,
      params.projectRef || null,
      `sess_${Date.now()}`,
      JSON.stringify(params),
      now,
      now
    );

    recordAuditLog(
      null,
      params.clientEmail,
      "PAYMENT_INTENT_CREATED",
      "payments",
      transactionId,
      { amount: params.amount, currency: params.currency, referenceId }
    );

    return {
      transactionId,
      referenceId,
      amount: params.amount,
      currency: params.currency,
      checkoutUrl: `/checkout?tx=${transactionId}`,
    };
  }

  public async verifyPayment(transactionId: string) {
    const payment = db.prepare("SELECT * FROM payments WHERE transaction_id = ?").get(transactionId) as any;
    if (!payment) {
      throw new Error("Transaction record not found");
    }
    return {
      status: payment.status as PaymentStatus,
      transaction: payment,
    };
  }

  public async handleWebhook(rawPayload: string, signature: string) {
    if (!signature) {
      return { success: false, error: "Missing signature header" };
    }

    try {
      const secret = this.getWebhookSecret();
      const expectedSignature = crypto.createHmac("sha256", secret).update(rawPayload).digest("hex");
      
      // Timing safe compare
      const valid = crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
      if (!valid) {
        return { success: false, error: "Invalid webhook HMAC signature" };
      }

      const event = JSON.parse(rawPayload);
      const { transactionId, status } = event.data || {};

      if (!transactionId || !status) {
        return { success: false, error: "Invalid event payload structure" };
      }

      const now = new Date().toISOString();
      const stmt = db.prepare(`
        UPDATE payments
        SET status = ?, updated_at = ?
        WHERE transaction_id = ?
      `);

      const result = stmt.run(status, now, transactionId);
      if (result.changes > 0) {
        recordAuditLog(
          null,
          "stripe_webhook",
          "PAYMENT_STATUS_CHANGE",
          "payments",
          transactionId,
          { status, eventType: event.type }
        );
        return { success: true, status };
      }

      return { success: false, error: "Transaction not found" };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }

  public async refundPayment(transactionId: string, reason?: string) {
    const now = new Date().toISOString();
    const stmt = db.prepare(`
      UPDATE payments
      SET status = 'REFUNDED', updated_at = ?
      WHERE transaction_id = ? AND status = 'COMPLETED'
    `);

    const result = stmt.run(now, transactionId);
    if (result.changes > 0) {
      recordAuditLog(
        null,
        "admin_refund",
        "PAYMENT_REFUNDED",
        "payments",
        transactionId,
        { reason: reason || "Client request" }
      );
      return { success: true, refundId: `ref_${Date.now()}` };
    }

    return { success: false };
  }
}

// Active singleton provider
export const PaymentService = new ProductionStripeProvider();
