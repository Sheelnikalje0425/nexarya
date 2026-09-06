import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import { db } from "../db/index";
import { generateToken, requireAuth } from "../middleware/auth";
import { recordAuditLog } from "../services/audit";

const router = Router();

// Rate limiting state for brute force protection
const loginAttempts = new Map<string, { count: number; lockedUntil: number }>();

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  const ip = req.ip || req.socket.remoteAddress || "unknown";

  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required", code: "INVALID_INPUT" });
    return;
  }

  // Brute force check
  const now = Date.now();
  const attempt = loginAttempts.get(email);
  if (attempt && attempt.lockedUntil > now) {
    const remainingSeconds = Math.ceil((attempt.lockedUntil - now) / 1000);
    res.status(429).json({
      error: `Too many failed attempts. Account locked for ${remainingSeconds} seconds.`,
      code: "RATE_LIMITED",
    });
    return;
  }

  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email) as any;

  if (!user || !user.is_active || !bcrypt.compareSync(password, user.password_hash)) {
    const currentAttempts = attempt ? attempt.count + 1 : 1;
    const lockedUntil = currentAttempts >= 5 ? now + 15 * 60 * 1000 : 0; // 15 min lockout after 5 fails
    loginAttempts.set(email, { count: currentAttempts, lockedUntil });

    recordAuditLog(user?.id || null, email, "FAILED_LOGIN", "auth", null, { ip, reason: "invalid_credentials" }, ip);
    res.status(401).json({ error: "Invalid email or password", code: "INVALID_CREDENTIALS" });
    return;
  }

  // Reset failed attempts on success
  loginAttempts.delete(email);

  const authUser = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  };

  const token = generateToken(authUser);
  const nowIso = new Date().toISOString();
  db.prepare("UPDATE users SET last_login_at = ?, updated_at = ? WHERE id = ?").run(nowIso, nowIso, user.id);

  recordAuditLog(user.id, user.email, "LOGIN", "auth", user.id, { role: user.role }, ip);

  res.json({
    token,
    user: authUser,
  });
});

router.post("/logout", requireAuth, (req: Request, res: Response) => {
  const user = req.user!;
  recordAuditLog(user.id, user.email, "LOGOUT", "auth", user.id, null, req.ip);
  res.json({ success: true, message: "Logged out successfully" });
});

router.get("/me", requireAuth, (req: Request, res: Response) => {
  const user = db.prepare("SELECT id, email, name, role, is_active, last_login_at, created_at FROM users WHERE id = ?").get(req.user!.id);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.json({ user });
});

router.post("/change-password", requireAuth, (req: Request, res: Response) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword || newPassword.length < 8) {
    res.status(400).json({ error: "New password must be at least 8 characters long", code: "INVALID_PASSWORD" });
    return;
  }

  const user = db.prepare("SELECT * FROM users WHERE id = ?").get(req.user!.id) as any;
  if (!user || !bcrypt.compareSync(currentPassword, user.password_hash)) {
    res.status(400).json({ error: "Current password is incorrect", code: "INVALID_CREDENTIALS" });
    return;
  }

  const newHash = bcrypt.hashSync(newPassword, 10);
  const nowIso = new Date().toISOString();
  db.prepare("UPDATE users SET password_hash = ?, updated_at = ? WHERE id = ?").run(newHash, nowIso, user.id);

  recordAuditLog(user.id, user.email, "PASSWORD_CHANGE", "users", user.id, null, req.ip);
  res.json({ success: true, message: "Password updated successfully" });
});

export default router;
