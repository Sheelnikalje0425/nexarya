import { db } from "../db/index";
import crypto from "crypto";

export function recordAuditLog(
  actorId: string | null,
  actorEmail: string | null,
  action: string,
  resource: string,
  resourceId: string | null,
  metadata: Record<string, any> | null,
  ipAddress?: string
) {
  try {
    const id = `audit_${crypto.randomUUID()}`;
    const now = new Date().toISOString();
    const metaString = metadata ? JSON.stringify(metadata) : null;

    const stmt = db.prepare(`
      INSERT INTO audit_logs (id, actor_id, actor_email, action, resource, resource_id, metadata, ip_address, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(id, actorId, actorEmail, action, resource, resourceId, metaString, ipAddress || "internal", now);
  } catch (err) {
    console.error("Failed to record audit log:", err);
  }
}
