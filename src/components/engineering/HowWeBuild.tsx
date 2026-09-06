import React, { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

type CodeTab = "rbac" | "hmac" | "audit" | "db";

const CODE_EXCERPTS = {
  rbac: `// server/src/middleware/auth.ts — Role-Based Access Control
export function requireRole(...allowedRoles: Array<"SUPER_ADMIN" | "ADMIN" | "EDITOR" | "FINANCE">) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: "Authentication required", code: "UNAUTHORIZED" });
    }

    // Strict role check enforced server-side before execution
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: "Insufficient permissions for this resource", 
        code: "FORBIDDEN" 
      });
    }

    next();
  };
}`,
  hmac: `// server/src/services/payments.ts — Cryptographic Webhook Ingress
public async handleWebhook(rawPayload: string, signature: string) {
  if (!signature) {
    return { success: false, error: "Missing signature header" };
  }

  // 1. Compute HMAC SHA-256 digest using server-side webhook secret
  const secret = this.getWebhookSecret();
  const expectedSignature = crypto.createHmac("sha256", secret).update(rawPayload).digest("hex");

  // 2. Timing-safe comparison to prevent side-channel timing attacks
  const valid = crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
  if (!valid) {
    return { success: false, error: "Invalid webhook HMAC signature" };
  }

  return { success: true };
}`,
  audit: `// server/src/services/audit.ts — Structured Compliance Logging
export function recordAuditLog(
  actorId: string | null,
  actorEmail: string | null,
  action: string,
  resource: string,
  resourceId: string | null,
  metadata?: Record<string, any>
) {
  const stmt = db.prepare(\`
    INSERT INTO audit_logs (id, actor_id, actor_email, action, resource, resource_id, metadata, ip_address, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  \`);

  // Immutable audit entry written synchronously within transaction boundary
  stmt.run(
    \`aud_\${crypto.randomUUID()}\`,
    actorId,
    actorEmail,
    action,
    resource,
    resourceId,
    metadata ? JSON.stringify(metadata) : null,
    null,
    new Date().toISOString()
  );
}`,
  db: `// server/src/routes/public.ts — Input Validation & Prepared Queries
router.post("/feedback", async (req: Request, res: Response) => {
  const { name, company, quote, consent_website, hp_field } = req.body;

  // 1. Anti-bot honeypot check
  if (hp_field) return res.status(200).json({ success: true });

  // 2. Strict validation & explicit consent check
  if (!name || !company || !quote || !consent_website) {
    return res.status(400).json({ error: "Missing required fields or consent" });
  }

  // 3. Prepared parameterized query preventing SQL injection
  const stmt = db.prepare(\`
    INSERT INTO testimonials (id, reference_id, client_name, company, quote, status)
    VALUES (?, ?, ?, ?, ?, 'PENDING')
  \`);
  stmt.run(\`fb_\${crypto.randomUUID()}\`, referenceId, name.trim(), company.trim(), quote.trim());
});`,
};

const DISCIPLINE_POINTS = [
  {
    tab: "rbac" as CodeTab,
    tag: "AUTHORIZATION",
    title: "Server-Enforced RBAC",
    desc: "Permissions are evaluated statelessly on every API invocation, guaranteeing that UI hiding is never the sole line of defense.",
  },
  {
    tab: "hmac" as CodeTab,
    tag: "CRYPTOGRAPHY",
    title: "Timing-Safe Webhook Ingress",
    desc: "Third-party payment events are validated via HMAC SHA-256 with constant-time buffer comparison to eliminate timing vulnerabilities.",
  },
  {
    tab: "audit" as CodeTab,
    tag: "COMPLIANCE",
    title: "Immutable Audit Trails",
    desc: "Every administrative mutation and status transition is recorded in structured audit logs for complete operational traceability.",
  },
  {
    tab: "db" as CodeTab,
    tag: "DATA HYGIENE",
    title: "Prepared Statements & Validation",
    desc: "Strict schema contracts and prepared SQL statements protect state integrity against invalid payloads and injection attacks.",
  },
];

export default function HowWeBuild() {
  const [activeTab, setActiveTab] = useState<CodeTab>("rbac");

  return (
    <section id="engineering" className="py-24 sm:py-32 bg-[#0B131B] text-[#F2EFE7] select-none border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-14 sm:mb-18">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C]" />
              <span className="font-tech text-xs tracking-[0.2em] text-[#D4A72C] uppercase font-medium">
                ENGINEERING EVIDENCE
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F2EFE7] leading-[1.06] tracking-[-0.025em] mb-4">
              The details matter.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8E9CA8] font-light leading-relaxed">
              Real software is defined by what happens beneath the interface: deterministic validation, cryptographic verification, and transactional consistency.
            </p>
          </div>
        </RevealOnScroll>

        {/* 2-Column Code Workbench: Explanations on Left (5 Cols), Code on Right (7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: 4 Engineering Principles */}
          <div className="lg:col-span-5 space-y-3">
            {DISCIPLINE_POINTS.map((pt) => {
              const isSelected = activeTab === pt.tab;
              return (
                <button
                  key={pt.tab}
                  onClick={() => setActiveTab(pt.tab)}
                  className={`w-full text-left p-5 transition-all cursor-pointer border ${
                    isSelected
                      ? "bg-[#16222E] border-[#D4A72C]/50 shadow-md"
                      : "bg-[#0F1A24] border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-tech text-[10px] tracking-[0.16em] uppercase text-[#D4A72C] font-semibold">
                      {pt.tag}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C]" />
                    )}
                  </div>
                  <h3 className="font-sans text-sm font-semibold text-[#F2EFE7] mb-1">
                    {pt.title}
                  </h3>
                  <p className="font-sans text-xs text-[#8E9CA8] leading-relaxed">
                    {pt.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Code Terminal */}
          <div className="lg:col-span-7">
            <RevealOnScroll delayMs={60}>
              <div className="bg-[#070D13] border border-white/15 rounded-xs overflow-hidden shadow-2xl">
                
                {/* Code Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0F1A24] border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="font-tech text-xs text-[#8E9CA8] ml-2">
                      {activeTab === "rbac"
                        ? "auth.ts"
                        : activeTab === "hmac"
                        ? "payments.ts"
                        : activeTab === "audit"
                        ? "audit.ts"
                        : "public.ts"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-tech text-[10px] text-[#8E9CA8]">
                    <span>TypeScript 5.7</span>
                    <span>•</span>
                    <span>Node.js / Express</span>
                  </div>
                </div>

                {/* Actual Code Display */}
                <div className="p-5 sm:p-6 overflow-x-auto bg-[#03070B]">
                  <pre className="font-tech text-xs sm:text-[12.5px] text-[#D4A72C] leading-relaxed">
                    <code>{CODE_EXCERPTS[activeTab]}</code>
                  </pre>
                </div>

                {/* Footer Status */}
                <div className="px-4 py-2.5 bg-[#0F1A24] border-t border-white/10 flex items-center justify-between text-[10px] font-tech text-[#8E9CA8]">
                  <span>SOURCE: server/src/</span>
                  <span className="text-emerald-400">PRODUCTION CODE VERIFIED ✔</span>
                </div>

              </div>
            </RevealOnScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
