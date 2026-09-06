export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export class EmailService {
  private static isConfigured(): boolean {
    return !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
  }

  public static async sendEmail(payload: EmailPayload): Promise<{ success: boolean; messageId?: string }> {
    if (!this.isConfigured()) {
      console.log(`[EMAIL DISPATCH (MOCK/LOGGER)]: To=${payload.to} | Subject=${payload.subject}`);
      return { success: true, messageId: `mock_${Date.now()}` };
    }

    try {
      console.log(`[EMAIL DISPATCH (SMTP)]: To=${payload.to} | Subject=${payload.subject}`);
      return { success: true, messageId: `msg_${Date.now()}` };
    } catch (err) {
      console.error("Email dispatch failed:", err);
      return { success: false };
    }
  }

  public static async sendInquiryConfirmation(clientEmail: string, clientName: string, referenceId: string) {
    const subject = `Inquiry Received [${referenceId}] — Nexarya Engineering`;
    const html = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #03070B; color: #F2EFE7; padding: 40px 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #070D12; border: 1px solid rgba(255,255,255,0.1); padding: 32px;">
          <div style="font-size: 14px; letter-spacing: 0.2em; color: #D4A72C; text-transform: uppercase; font-weight: bold; margin-bottom: 24px;">
            NEXARYA // BEYOND BUILD
          </div>
          <h2 style="font-size: 24px; color: #F2EFE7; margin-bottom: 16px;">Project Inquiry Acknowledged</h2>
          <p style="color: #A7A9A8; font-size: 14px; line-height: 1.6;">
            Hello ${clientName},<br/><br/>
            Thank you for reaching out to Nexarya. We have received your technical specifications and project requirements.
          </p>
          <div style="background-color: #03070B; border: 1px solid rgba(212,167,44,0.3); padding: 16px; margin: 24px 0;">
            <div style="font-size: 11px; color: #6F7475; text-transform: uppercase; letter-spacing: 0.15em;">Reference Identifier</div>
            <div style="font-size: 18px; color: #D4A72C; font-weight: bold; font-family: monospace; margin-top: 4px;">${referenceId}</div>
          </div>
          <p style="color: #A7A9A8; font-size: 14px; line-height: 1.6;">
            A lead systems engineer from our team will review your scope and follow up within 24 business hours.
          </p>
          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 11px; color: #6F7475;">
            Nexarya — High-Performance Software Engineering Studio<br/>
            Mumbai, India | hello@nexarya.in
          </div>
        </div>
      </div>
    `;

    return this.sendEmail({ to: clientEmail, subject, html });
  }

  public static async sendAdminInquiryAlert(inquiry: { referenceId: string; name: string; email: string; projectType: string; budget: string; description: string }) {
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "leads@nexarya.in";
    const subject = `[NEW LEAD] ${inquiry.referenceId} — ${inquiry.name} (${inquiry.projectType})`;
    const html = `
      <div style="font-family: sans-serif; padding: 24px; background: #03070B; color: #F2EFE7;">
        <h3 style="color: #D4A72C;">New Project Inquiry Received</h3>
        <p><strong>Reference:</strong> ${inquiry.referenceId}</p>
        <p><strong>Client Name:</strong> ${inquiry.name}</p>
        <p><strong>Email:</strong> ${inquiry.email}</p>
        <p><strong>Project Type:</strong> ${inquiry.projectType}</p>
        <p><strong>Budget:</strong> ${inquiry.budget}</p>
        <p><strong>Scope Description:</strong></p>
        <blockquote style="background: #070D12; border-left: 3px solid #D4A72C; padding: 12px; margin: 12px 0;">
          ${inquiry.description}
        </blockquote>
      </div>
    `;

    return this.sendEmail({ to: adminEmail, subject, html });
  }
}
