import { Router, Request, Response } from "express";
import crypto from "crypto";
import { db } from "../db/index";
import { requireAuth, requireRole } from "../middleware/auth";
import { recordAuditLog } from "../services/audit";
import { EmailService } from "../services/email";

const router = Router();

// All routes here require valid JWT authentication
router.use(requireAuth);

// 1. Overview & Telemetry Metrics (SUPER_ADMIN, ADMIN, EDITOR, FINANCE)
router.get("/overview", (req: Request, res: Response) => {
  const totalInquiries = db.prepare("SELECT COUNT(*) as count FROM inquiries").get() as any;
  const newInquiries = db.prepare("SELECT COUNT(*) as count FROM inquiries WHERE status = 'NEW'").get() as any;
  const activeCaseStudies = db.prepare("SELECT COUNT(*) as count FROM case_studies WHERE published = 1").get() as any;
  const publishedArticles = db.prepare("SELECT COUNT(*) as count FROM articles WHERE status = 'PUBLISHED'").get() as any;
  const pendingFeedback = db.prepare("SELECT COUNT(*) as count FROM testimonials WHERE status = 'PENDING'").get() as any;
  const totalPayments = db.prepare("SELECT COUNT(*) as count, COALESCE(SUM(amount), 0) as total_volume FROM payments WHERE status = 'COMPLETED'").get() as any;

  const recentInquiries = db.prepare("SELECT id, reference_id, name, company, project_type, budget, status, created_at FROM inquiries ORDER BY created_at DESC LIMIT 5").all();
  const recentAuditLogs = db.prepare("SELECT id, actor_email, action, resource, created_at FROM audit_logs ORDER BY created_at DESC LIMIT 8").all();

  res.json({
    metrics: {
      totalInquiries: totalInquiries.count,
      newInquiries: newInquiries.count,
      activeCaseStudies: activeCaseStudies.count,
      publishedArticles: publishedArticles.count,
      pendingFeedbackCount: pendingFeedback.count,
      completedPaymentsCount: totalPayments.count,
      totalPaymentVolume: totalPayments.total_volume,
    },
    recentInquiries,
    recentAuditLogs,
  });
});

// 2. Inquiries Management (SUPER_ADMIN, ADMIN)
router.get("/inquiries", requireRole(["SUPER_ADMIN", "ADMIN"]), (req: Request, res: Response) => {
  const inquiries = db.prepare("SELECT * FROM inquiries ORDER BY created_at DESC").all();
  res.json({ inquiries });
});

router.patch("/inquiries/:id/status", requireRole(["SUPER_ADMIN", "ADMIN"]), (req: Request, res: Response) => {
  const { status, internalNotes } = req.body;
  const now = new Date().toISOString();

  const stmt = db.prepare(`
    UPDATE inquiries
    SET status = COALESCE(?, status), internal_notes = COALESCE(?, internal_notes), updated_at = ?
    WHERE id = ?
  `);

  stmt.run(status, internalNotes, now, req.params.id);
  recordAuditLog(req.user!.id, req.user!.email, "UPDATE", "inquiries", req.params.id, { status, internalNotes }, req.ip);

  res.json({ success: true, message: "Inquiry status updated" });
});

// 3. Case Studies (SUPER_ADMIN, ADMIN, EDITOR)
router.get("/case-studies", requireRole(["SUPER_ADMIN", "ADMIN", "EDITOR"]), (req: Request, res: Response) => {
  const caseStudies = db.prepare("SELECT * FROM case_studies ORDER BY sort_order ASC").all();
  res.json({ caseStudies });
});

router.post("/case-studies", requireRole(["SUPER_ADMIN", "ADMIN", "EDITOR"]), (req: Request, res: Response) => {
  const { slug, title, category, client_type, overview, challenge, solution, architecture, features, technologies, image, published = 1, sort_order = 0 } = req.body;
  const id = `cs_${crypto.randomUUID()}`;
  const now = new Date().toISOString();

  const stmt = db.prepare(`
    INSERT INTO case_studies (id, slug, title, category, client_type, overview, challenge, solution, architecture, features, technologies, image, sort_order, published, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    id,
    slug,
    title,
    category,
    client_type,
    overview,
    challenge,
    solution,
    architecture,
    JSON.stringify(features || []),
    JSON.stringify(technologies || []),
    image || "/projects/railway-device.png",
    sort_order,
    published ? 1 : 0,
    now,
    now
  );

  recordAuditLog(req.user!.id, req.user!.email, "CREATE", "case_studies", id, { title, slug }, req.ip);
  res.status(201).json({ success: true, id });
});

// 4. Testimonials & Client Feedback Moderation (SUPER_ADMIN, ADMIN, EDITOR)
router.get("/testimonials", requireRole(["SUPER_ADMIN", "ADMIN", "EDITOR"]), (req: Request, res: Response) => {
  const testimonials = db.prepare("SELECT * FROM testimonials ORDER BY created_at DESC").all();
  res.json({ testimonials });
});

router.post("/testimonials", requireRole(["SUPER_ADMIN", "ADMIN", "EDITOR"]), (req: Request, res: Response) => {
  const { client_name, designation, company, project, rating = 5, quote, recommendation, photo, company_logo, consent_website = 1, consent_social = 0, status = "APPROVED", published = 0, sort_order = 0 } = req.body;
  const id = `test_${crypto.randomUUID()}`;
  const referenceId = `NXN-FB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const now = new Date().toISOString();

  const stmt = db.prepare(`
    INSERT INTO testimonials (id, reference_id, client_name, designation, company, project, rating, quote, recommendation, photo, company_logo, consent_website, consent_social, status, published, sort_order, published_at, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    id,
    referenceId,
    client_name,
    designation,
    company,
    project || null,
    Number(rating) || 5,
    quote,
    recommendation || null,
    photo || null,
    company_logo || null,
    consent_website ? 1 : 0,
    consent_social ? 1 : 0,
    status,
    published ? 1 : 0,
    sort_order,
    published ? now : null,
    now,
    now
  );

  recordAuditLog(req.user!.id, req.user!.email, "CREATE", "testimonials", id, { client_name, company, status }, req.ip);
  res.status(201).json({ success: true, id, referenceId });
});

router.patch("/testimonials/:id", requireRole(["SUPER_ADMIN", "ADMIN", "EDITOR"]), (req: Request, res: Response) => {
  const { status, published, client_name, designation, company, project, quote, recommendation, featured, sort_order } = req.body;
  const now = new Date().toISOString();

  const existing = db.prepare("SELECT * FROM testimonials WHERE id = ?").get(req.params.id) as any;
  if (!existing) {
    res.status(404).json({ error: "Testimonial record not found", code: "NOT_FOUND" });
    return;
  }

  const newStatus = status !== undefined ? status : existing.status;
  const newPublished = published !== undefined ? (published ? 1 : 0) : existing.published;
  const publishedAt = newPublished && !existing.published_at ? now : (newPublished ? existing.published_at : null);

  const stmt = db.prepare(`
    UPDATE testimonials
    SET status = ?, published = ?, client_name = COALESCE(?, client_name), designation = COALESCE(?, designation),
        company = COALESCE(?, company), project = COALESCE(?, project), quote = COALESCE(?, quote),
        recommendation = COALESCE(?, recommendation), featured = COALESCE(?, featured),
        sort_order = COALESCE(?, sort_order), published_at = ?, updated_at = ?
    WHERE id = ?
  `);

  stmt.run(
    newStatus,
    newPublished,
    client_name,
    designation,
    company,
    project,
    quote,
    recommendation,
    featured !== undefined ? (featured ? 1 : 0) : null,
    sort_order,
    publishedAt,
    now,
    req.params.id
  );

  recordAuditLog(req.user!.id, req.user!.email, "UPDATE", "testimonials", req.params.id, { status: newStatus, published: newPublished }, req.ip);
  res.json({ success: true, message: "Testimonial updated successfully" });
});

router.delete("/testimonials/:id", requireRole(["SUPER_ADMIN", "ADMIN"]), (req: Request, res: Response) => {
  const stmt = db.prepare("DELETE FROM testimonials WHERE id = ?");
  const result = stmt.run(req.params.id);

  if (result.changes > 0) {
    recordAuditLog(req.user!.id, req.user!.email, "DELETE", "testimonials", req.params.id, {}, req.ip);
    res.json({ success: true, message: "Testimonial deleted" });
  } else {
    res.status(404).json({ error: "Testimonial not found", code: "NOT_FOUND" });
  }
});

// 4b. Feedback Invitations (SUPER_ADMIN, ADMIN, EDITOR)
router.get("/feedback-invitations", requireRole(["SUPER_ADMIN", "ADMIN", "EDITOR"]), (req: Request, res: Response) => {
  const invitations = db.prepare(`
    SELECT id, recipient_name, recipient_email, company, designation, project_ref, expires_at, used_at, created_at, created_by, status
    FROM feedback_invitations
    ORDER BY created_at DESC
  `).all();
  res.json({ invitations });
});

router.post("/feedback-invitations", requireRole(["SUPER_ADMIN", "ADMIN"]), async (req: Request, res: Response) => {
  const { recipient_name, recipient_email, company, designation, project_ref, expires_in_days = 30 } = req.body;

  if (!recipient_name || !recipient_email || !company) {
    res.status(400).json({
      error: "Please provide recipient_name, recipient_email, and company",
      code: "VALIDATION_FAILED",
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(recipient_email)) {
    res.status(400).json({ error: "Invalid recipient email address", code: "INVALID_EMAIL" });
    return;
  }

  const id = `inv_${crypto.randomUUID()}`;
  const rawToken = crypto.randomBytes(32).toString("hex"); // 64-char cryptographically secure random token
  const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");
  const now = new Date().toISOString();
  const days = Math.max(1, Math.min(Number(expires_in_days) || 30, 90)); // Between 1 and 90 days
  const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();

  try {
    const stmt = db.prepare(`
      INSERT INTO feedback_invitations (id, token_hash, project_ref, recipient_name, recipient_email, company, designation, expires_at, created_at, created_by, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'ACTIVE')
    `);

    stmt.run(
      id,
      tokenHash,
      project_ref ? project_ref.trim() : null,
      recipient_name.trim(),
      recipient_email.trim(),
      company.trim(),
      designation ? designation.trim() : null,
      expiresAt,
      now,
      req.user!.email
    );

    recordAuditLog(
      req.user!.id,
      req.user!.email,
      "CREATE",
      "feedback_invitations",
      id,
      { recipient_email, company, project_ref, expiresAt },
      req.ip
    );

    // Form absolute invitation link
    const host = req.get("host") || "localhost:3000";
    const protocol = req.protocol === "https" || req.headers["x-forwarded-proto"] === "https" ? "https" : "http";
    const inviteUrl = `${protocol}://${host}/feedback/invite/${rawToken}`;

    // Send invitation email
    await EmailService.sendFeedbackInvitation({
      recipientEmail: recipient_email.trim(),
      recipientName: recipient_name.trim(),
      company: company.trim(),
      projectRef: project_ref ? project_ref.trim() : undefined,
      inviteUrl,
      expiresAt,
    });

    // Return invitation details and raw link once upon generation
    res.status(201).json({
      success: true,
      id,
      inviteUrl,
      expiresAt,
      message: "Feedback invitation generated and dispatched.",
    });
  } catch (err) {
    console.error("Failed to create feedback invitation:", err);
    res.status(500).json({ error: "Failed to create feedback invitation", code: "SERVER_ERROR" });
  }
});

router.patch("/feedback-invitations/:id/revoke", requireRole(["SUPER_ADMIN", "ADMIN"]), (req: Request, res: Response) => {
  const { id } = req.params;
  const stmt = db.prepare(`
    UPDATE feedback_invitations
    SET status = 'REVOKED'
    WHERE id = ? AND status = 'ACTIVE'
  `);
  const result = stmt.run(id);

  if (result.changes > 0) {
    recordAuditLog(req.user!.id, req.user!.email, "REVOKE", "feedback_invitations", id, {}, req.ip);
    res.json({ success: true, message: "Feedback invitation revoked." });
  } else {
    res.status(404).json({ error: "Active invitation not found or already used/revoked", code: "NOT_FOUND" });
  }
});

// 5. Articles / Insights (SUPER_ADMIN, ADMIN, EDITOR)
router.get("/articles", requireRole(["SUPER_ADMIN", "ADMIN", "EDITOR"]), (req: Request, res: Response) => {
  const articles = db.prepare("SELECT * FROM articles ORDER BY created_at DESC").all();
  res.json({ articles });
});

router.post("/articles", requireRole(["SUPER_ADMIN", "ADMIN", "EDITOR"]), (req: Request, res: Response) => {
  const { slug, title, excerpt, content, cover_image, author, category, tags, status = "DRAFT", seo_title, seo_description } = req.body;
  const id = `art_${crypto.randomUUID()}`;
  const now = new Date().toISOString();

  const stmt = db.prepare(`
    INSERT INTO articles (id, slug, title, excerpt, content, cover_image, author, category, tags, status, published_at, seo_title, seo_description, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    id,
    slug,
    title,
    excerpt,
    content,
    cover_image,
    author || "Nexarya Engineering Team",
    category || "Architecture",
    JSON.stringify(tags || []),
    status,
    status === "PUBLISHED" ? now : null,
    seo_title,
    seo_description,
    now,
    now
  );

  recordAuditLog(req.user!.id, req.user!.email, "CREATE", "articles", id, { title, slug, status }, req.ip);
  res.status(201).json({ success: true, id });
});

// 6. Payments & Ledger (SUPER_ADMIN, FINANCE)
router.get("/payments", requireRole(["SUPER_ADMIN", "FINANCE"]), (req: Request, res: Response) => {
  const payments = db.prepare("SELECT * FROM payments ORDER BY created_at DESC").all();
  res.json({ payments });
});

// 7. Users & RBAC (SUPER_ADMIN only)
router.get("/users", requireRole(["SUPER_ADMIN"]), (req: Request, res: Response) => {
  const users = db.prepare("SELECT id, email, name, role, is_active, last_login_at, created_at FROM users ORDER BY created_at ASC").all();
  res.json({ users });
});

// 8. Audit Logs (SUPER_ADMIN, ADMIN)
router.get("/audit-logs", requireRole(["SUPER_ADMIN", "ADMIN"]), (req: Request, res: Response) => {
  const logs = db.prepare("SELECT * FROM audit_logs ORDER BY created_at DESC LIMIT 100").all();
  res.json({ logs });
});

// 9. Notifications
router.get("/notifications", (req: Request, res: Response) => {
  const notifications = db.prepare("SELECT * FROM notifications ORDER BY created_at DESC LIMIT 20").all();
  res.json({ notifications });
});

router.post("/notifications/mark-read", (req: Request, res: Response) => {
  db.prepare("UPDATE notifications SET is_read = 1").run();
  res.json({ success: true });
});

// 10. Platform Settings (SUPER_ADMIN)
router.get("/settings", requireRole(["SUPER_ADMIN", "ADMIN"]), (req: Request, res: Response) => {
  const settings = db.prepare("SELECT * FROM settings").all();
  res.json({ settings });
});

router.patch("/settings", requireRole(["SUPER_ADMIN"]), (req: Request, res: Response) => {
  const { key, value } = req.body;
  const now = new Date().toISOString();
  db.prepare("UPDATE settings SET value = ?, updated_at = ? WHERE key = ?").run(value, now, key);
  recordAuditLog(req.user!.id, req.user!.email, "SETTINGS_CHANGE", "settings", key, { key, value }, req.ip);
  res.json({ success: true });
});

export default router;
