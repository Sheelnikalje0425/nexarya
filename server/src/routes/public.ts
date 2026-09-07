import { Router, Request, Response } from "express";
import crypto from "crypto";
import { db } from "../db/index";
import { EmailService } from "../services/email";
import { PaymentService } from "../services/payments";

const router = Router();

// 1. Services
router.get("/services", (req: Request, res: Response) => {
  const rows = db.prepare("SELECT * FROM services WHERE published = 1 ORDER BY sort_order ASC").all();
  const services = rows.map((r: any) => ({
    ...r,
    capabilities: JSON.parse(r.capabilities || "[]"),
    workflow: JSON.parse(r.workflow || "[]"),
    tech_stack: JSON.parse(r.tech_stack || "[]"),
    faq: JSON.parse(r.faq || "[]"),
  }));
  res.json({ services });
});

router.get("/services/:slug", (req: Request, res: Response) => {
  const r = db.prepare("SELECT * FROM services WHERE slug = ? AND published = 1").get(req.params.slug) as any;
  if (!r) {
    res.status(404).json({ error: "Service not found", code: "NOT_FOUND" });
    return;
  }
  const service = {
    ...r,
    capabilities: JSON.parse(r.capabilities || "[]"),
    workflow: JSON.parse(r.workflow || "[]"),
    tech_stack: JSON.parse(r.tech_stack || "[]"),
    faq: JSON.parse(r.faq || "[]"),
  };
  res.json({ service });
});

// 2. Case Studies
router.get("/case-studies", (req: Request, res: Response) => {
  const rows = db.prepare("SELECT * FROM case_studies WHERE published = 1 ORDER BY sort_order ASC").all();
  const caseStudies = rows.map((r: any) => ({
    ...r,
    features: JSON.parse(r.features || "[]"),
    technologies: JSON.parse(r.technologies || "[]"),
  }));
  res.json({ caseStudies });
});

router.get("/case-studies/:slug", (req: Request, res: Response) => {
  const r = db.prepare("SELECT * FROM case_studies WHERE slug = ? AND published = 1").get(req.params.slug) as any;
  if (!r) {
    res.status(404).json({ error: "Case study not found", code: "NOT_FOUND" });
    return;
  }
  const caseStudy = {
    ...r,
    features: JSON.parse(r.features || "[]"),
    technologies: JSON.parse(r.technologies || "[]"),
  };
  res.json({ caseStudy });
});

// 3. Pricing
router.get("/pricing", (req: Request, res: Response) => {
  const rows = db.prepare("SELECT * FROM pricing_plans WHERE published = 1 ORDER BY sort_order ASC").all();
  const plans = rows.map((r: any) => ({
    ...r,
    features: JSON.parse(r.features || "[]"),
  }));
  res.json({ plans });
});

// 4. Articles / Insights
router.get("/articles", (req: Request, res: Response) => {
  const rows = db.prepare("SELECT id, slug, title, excerpt, cover_image, author, category, tags, published_at FROM articles WHERE status = 'PUBLISHED' ORDER BY published_at DESC").all();
  const articles = rows.map((r: any) => ({
    ...r,
    tags: JSON.parse(r.tags || "[]"),
  }));
  res.json({ articles });
});

router.get("/articles/:slug", (req: Request, res: Response) => {
  const r = db.prepare("SELECT * FROM articles WHERE slug = ? AND status = 'PUBLISHED'").get(req.params.slug) as any;
  if (!r) {
    res.status(404).json({ error: "Article not found", code: "NOT_FOUND" });
    return;
  }
  const article = {
    ...r,
    tags: JSON.parse(r.tags || "[]"),
  };
  res.json({ article });
});

// 5. Testimonials (Strictly returns APPROVED & PUBLISHED authentic testimonials)
router.get("/testimonials", (req: Request, res: Response) => {
  const testimonials = db.prepare(`
    SELECT id, reference_id, client_name, designation, company, project, rating, quote, recommendation, photo, company_logo, consent_website, consent_social, featured, published_at
    FROM testimonials
    WHERE status = 'APPROVED' AND published = 1
    ORDER BY sort_order ASC, created_at DESC
  `).all();
  res.json({ testimonials });
});

// 6. Client Feedback Submission (Standard Public Route)
router.post("/feedback", async (req: Request, res: Response) => {
  const {
    name,
    company,
    role,
    project,
    rating = 5,
    quote,
    recommendation,
    photo,
    consent_website = 1,
    consent_social = 0,
    hp_field,
  } = req.body;

  // Honeypot trap
  if (hp_field) {
    res.status(200).json({ success: true, referenceId: "NXN-FB-2026-9999", message: "Feedback acknowledged." });
    return;
  }

  if (!name || !company || !quote) {
    res.status(400).json({
      error: "Please provide all required fields: name, company, quote",
      code: "VALIDATION_FAILED",
    });
    return;
  }

  if (!consent_website) {
    res.status(400).json({
      error: "Website publication consent is required to submit feedback for review.",
      code: "CONSENT_REQUIRED",
    });
    return;
  }

  const id = `fb_${crypto.randomUUID()}`;
  const referenceId = `NXN-FB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const now = new Date().toISOString();

  try {
    const stmt = db.prepare(`
      INSERT INTO testimonials (id, reference_id, client_name, designation, company, project, rating, quote, recommendation, photo, consent_website, consent_social, status, published, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'PENDING', 0, ?, ?)
    `);

    stmt.run(
      id,
      referenceId,
      name.trim(),
      (role || "Executive").trim(),
      company.trim(),
      project ? project.trim() : null,
      Number(rating) || 5,
      quote.trim(),
      recommendation ? recommendation.trim() : null,
      photo || null,
      consent_website ? 1 : 0,
      consent_social ? 1 : 0,
      now,
      now
    );

    // Create Notification using valid 'SYSTEM' enum type
    const notifStmt = db.prepare(`
      INSERT INTO notifications (id, title, message, type, is_read, link, created_at)
      VALUES (?, ?, ?, 'SYSTEM', 0, ?, ?)
    `);
    notifStmt.run(
      `notif_${crypto.randomUUID()}`,
      `New Client Feedback: ${referenceId}`,
      `Submitted by ${name} (${company}) for ${project || "General Engagement"}`,
      `/admin/testimonials`,
      now
    );

    res.status(201).json({
      success: true,
      referenceId,
      message: "Thank you. Your feedback has been received and queued for review.",
    });
  } catch (err) {
    console.error("Feedback submission error:", err);
    res.status(500).json({ error: "Internal server error", code: "SERVER_ERROR" });
  }
});

// 7. Secure Client Feedback Invitation Validation
router.get("/feedback/invite/:token", async (req: Request, res: Response) => {
  const { token } = req.params;
  if (!token || typeof token !== "string" || token.length < 16) {
    res.status(404).json({
      error: "This feedback invitation link is invalid or malformed.",
      code: "INVITATION_INVALID",
    });
    return;
  }

  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  const invitation = db.prepare(`
    SELECT id, recipient_name, company, designation, project_ref, expires_at, status
    FROM feedback_invitations
    WHERE token_hash = ?
  `).get(tokenHash) as any;

  if (!invitation) {
    res.status(404).json({
      error: "This feedback invitation link is invalid or does not exist.",
      code: "INVITATION_NOT_FOUND",
    });
    return;
  }

  if (invitation.status === "USED") {
    res.status(410).json({
      error: "This invitation link has already been used to submit verified project feedback.",
      code: "INVITATION_ALREADY_USED",
    });
    return;
  }

  if (invitation.status === "REVOKED") {
    res.status(410).json({
      error: "This invitation link has been revoked by administration.",
      code: "INVITATION_REVOKED",
    });
    return;
  }

  const isExpired = new Date(invitation.expires_at).getTime() < Date.now();
  if (isExpired || invitation.status === "EXPIRED") {
    if (invitation.status !== "EXPIRED") {
      db.prepare("UPDATE feedback_invitations SET status = 'EXPIRED' WHERE id = ?").run(invitation.id);
    }
    res.status(410).json({
      error: "This feedback invitation link has expired. Please contact Nexarya for a refreshed link.",
      code: "INVITATION_EXPIRED",
    });
    return;
  }

  // Return sanitized invitation details without exposing internal IDs or database tokens
  res.json({
    valid: true,
    invitation: {
      recipientName: invitation.recipient_name,
      company: invitation.company,
      designation: invitation.designation || "",
      projectRef: invitation.project_ref || "",
      expiresAt: invitation.expires_at,
    },
  });
});

// 8. Secure Client Feedback Submission via Invitation (Atomic Single-Use)
router.post("/feedback/invite/:token", async (req: Request, res: Response) => {
  const { token } = req.params;
  const rawBody = req.body || {};
  const name = rawBody.name || rawBody.client_name;
  const designation = rawBody.designation || rawBody.role;
  const company = rawBody.company;
  const project = rawBody.project;
  const rating = rawBody.rating !== undefined ? rawBody.rating : 5;
  const quote = rawBody.quote || rawBody.review;
  const recommendation = rawBody.recommendation;
  const photo = rawBody.photo;
  const consent_website = rawBody.consent_website !== undefined ? (rawBody.consent_website ? 1 : 0) : 1;
  const consent_social = rawBody.consent_social ? 1 : 0;
  const hp_field = rawBody.hp_field;

  // Honeypot anti-bot trap
  if (hp_field) {
    res.status(400).json({ error: "Automated submission detected", code: "BOT_DETECTED" });
    return;
  }

  if (!token || typeof token !== "string") {
    res.status(400).json({ error: "Missing invitation token", code: "TOKEN_REQUIRED" });
    return;
  }

  if (!name || !company || !quote) {
    res.status(400).json({
      error: "Please complete all required fields: name, company, quote",
      code: "VALIDATION_FAILED",
    });
    return;
  }

  if (!consent_website) {
    res.status(400).json({
      error: "Website publication consent is required to submit feedback for review.",
      code: "CONSENT_REQUIRED",
    });
    return;
  }

  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  const id = `fb_${crypto.randomUUID()}`;
  const referenceId = `NXN-FB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const now = new Date().toISOString();

  try {
    // Atomic SQLite Transaction: Validates, inserts testimonial, marks invitation USED
    const submitTransaction = db.transaction(() => {
      const inv = db.prepare(`
        SELECT id, project_ref, company, recipient_name, status, expires_at
        FROM feedback_invitations
        WHERE token_hash = ?
      `).get(tokenHash) as any;

      if (!inv) {
        throw new Error("INVITATION_NOT_FOUND");
      }

      if (inv.status !== "ACTIVE") {
        throw new Error(`INVITATION_STATUS_${inv.status}`);
      }

      if (new Date(inv.expires_at).getTime() < Date.now()) {
        throw new Error("INVITATION_EXPIRED");
      }

      // 1. Insert into testimonials (Pending moderation)
      const insertStmt = db.prepare(`
        INSERT INTO testimonials (id, reference_id, client_name, designation, company, project, rating, quote, recommendation, photo, consent_website, consent_social, status, published, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'PENDING', 0, ?, ?)
      `);

      insertStmt.run(
        id,
        referenceId,
        name.trim(),
        (designation || "Executive").trim(),
        company.trim(),
        (project || inv.project_ref || "Custom Engineering").trim(),
        Number(rating) || 5,
        quote.trim(),
        recommendation ? recommendation.trim() : null,
        photo || null,
        consent_website ? 1 : 0,
        consent_social ? 1 : 0,
        now,
        now
      );

      // 2. Consume invitation token (Guarantees single-use idempotency)
      const updateInvStmt = db.prepare(`
        UPDATE feedback_invitations
        SET status = 'USED', used_at = ?
        WHERE id = ?
      `);
      updateInvStmt.run(now, inv.id);

      // 3. Insert notification for admin moderation
      const notifStmt = db.prepare(`
        INSERT INTO notifications (id, title, message, type, is_read, link, created_at)
        VALUES (?, ?, ?, 'SYSTEM', 0, ?, ?)
      `);
      notifStmt.run(
        `notif_${crypto.randomUUID()}`,
        `Verified Client Feedback Received: ${referenceId}`,
        `Submitted by ${name} (${company}) via secure invitation for ${project || inv.project_ref || "Project"}`,
        `/admin/testimonials`,
        now
      );
    });

    submitTransaction();

    res.status(201).json({
      success: true,
      referenceId,
      message: "Thank you. Your verified project feedback has been received and queued for review.",
    });
  } catch (err: any) {
    if (err.message === "INVITATION_NOT_FOUND") {
      res.status(404).json({ error: "Invalid invitation link.", code: "INVITATION_NOT_FOUND" });
      return;
    }
    if (err.message === "INVITATION_STATUS_USED") {
      res.status(410).json({ error: "This invitation link has already been used.", code: "INVITATION_ALREADY_USED" });
      return;
    }
    if (err.message === "INVITATION_STATUS_REVOKED") {
      res.status(410).json({ error: "This invitation link has been revoked.", code: "INVITATION_REVOKED" });
      return;
    }
    if (err.message === "INVITATION_EXPIRED") {
      res.status(410).json({ error: "This invitation link has expired.", code: "INVITATION_EXPIRED" });
      return;
    }

    console.error("Invited feedback submission error:", err);
    res.status(500).json({ error: "Internal server error", code: "SERVER_ERROR" });
  }
});


// 7. Project Inquiries Submission (with honeypot anti-spam)
router.post("/inquiries", async (req: Request, res: Response) => {
  const { name, company, email, phone, projectType, budget, timeline, description, hp_field } = req.body;

  // Honeypot anti-bot check
  if (hp_field) {
    res.status(200).json({ success: true, referenceId: "NXN-2026-9999", message: "Inquiry registered." });
    return;
  }

  // Validation
  if (!name || !email || !projectType || !budget || !description) {
    res.status(400).json({
      error: "Please provide all required fields: name, email, projectType, budget, description",
      code: "VALIDATION_FAILED",
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: "Invalid email format", code: "INVALID_EMAIL" });
    return;
  }

  const id = `inq_${crypto.randomUUID()}`;
  const referenceId = `NXN-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const now = new Date().toISOString();
  const ip = req.ip || req.socket.remoteAddress || "unknown";

  try {
    const stmt = db.prepare(`
      INSERT INTO inquiries (id, reference_id, name, company, email, phone, project_type, budget, timeline, description, status, ip_address, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'NEW', ?, ?, ?)
    `);

    stmt.run(
      id,
      referenceId,
      name.trim(),
      (company || "Independent").trim(),
      email.trim(),
      phone || null,
      projectType,
      budget,
      timeline || "Flexible",
      description.trim(),
      ip,
      now,
      now
    );

    // Create Notification in DB
    const notifStmt = db.prepare(`
      INSERT INTO notifications (id, title, message, type, is_read, link, created_at)
      VALUES (?, ?, ?, 'INQUIRY', 0, ?, ?)
    `);
    notifStmt.run(
      `notif_${crypto.randomUUID()}`,
      `New Inquiry: ${referenceId}`,
      `Received from ${name} (${company || "Independent"}) for ${projectType}`,
      `/admin/inquiries`,
      now
    );

    // Trigger transactional emails
    await EmailService.sendInquiryConfirmation(email, name, referenceId);
    await EmailService.sendAdminInquiryAlert({
      referenceId,
      name,
      email,
      projectType,
      budget,
      description,
    });

    res.status(201).json({
      success: true,
      referenceId,
      message: "Your project specifications have been acknowledged. Reference: " + referenceId,
    });
  } catch (err) {
    console.error("Inquiry insertion error:", err);
    res.status(500).json({ error: "Internal server error", code: "SERVER_ERROR" });
  }
});

// 8. Payment Intent Creation
router.post("/payments/create", async (req: Request, res: Response) => {
  const { amount, currency = "USD", clientEmail, clientName, projectRef } = req.body;
  if (!amount || !clientEmail || !clientName) {
    res.status(400).json({ error: "Missing required payment fields", code: "INVALID_INPUT" });
    return;
  }

  try {
    const result = await PaymentService.createPayment({
      amount: Number(amount),
      currency,
      clientEmail,
      clientName,
      projectRef,
    });
    res.json({ success: true, ...result });
  } catch (err: any) {
    console.error("Payment creation error:", err);
    res.status(500).json({ error: err.message || "Failed to initialize payment", code: "PAYMENT_INIT_FAILED" });
  }
});

// 9. Payment Webhook Verification (Authoritative server-side HMAC check)
router.post("/payments/webhook", async (req: Request, res: Response) => {
  const signature = req.headers["x-signature"] as string;
  const rawPayload = (req as any).rawBody || JSON.stringify(req.body);

  const result = await PaymentService.handleWebhook(rawPayload, signature);
  if (!result.success) {
    res.status(401).json({ error: result.error || "Invalid signature", code: "INVALID_SIGNATURE" });
    return;
  }

  res.json(result);
});

export default router;
