import React, { useState, useEffect } from "react";

interface TerminalTab {
  id: string;
  label: string;
  badge: string;
  lines: Array<{
    num: string;
    text: string;
    highlight?: "gold" | "green" | "cyan" | "muted";
  }>;
  status: string;
  metadata: string;
}

const TERMINAL_TABS: TerminalTab[] = [
  {
    id: "pipeline",
    label: "01 INQUIRY PIPELINE",
    badge: "API.RUNTIME",
    status: "OPERATIONAL",
    metadata: "LATENCY: 24ms • REST / V1",
    lines: [
      { num: "01", text: "INCOMING REQUEST → POST /api/v1/inquiries", highlight: "gold" },
      { num: "02", text: "PAYLOAD: { type: 'Custom Software', budget: '$50k-$100k' }", highlight: "muted" },
      { num: "03", text: "VERIFY_SCHEMA(payload) → VALIDATED [STRICT_TYPE]", highlight: "green" },
      { num: "04", text: "CHECK_HONEYPOT(hp_field) → CLEAN [HUMAN_VERIFIED]", highlight: "green" },
      { num: "05", text: "GENERATE_REFERENCE() → NXN-2026-9932", highlight: "cyan" },
      { num: "06", text: "SQLITE.EXEC(INSERT INTO inquiries) → WAL_COMMIT_OK", highlight: "cyan" },
      { num: "07", text: "DISPATCH_NOTIFICATION() → ADMIN_QUEUE_ACK", highlight: "muted" },
      { num: "08", text: "HTTP_RESPONSE → 201 CREATED [REF: NXN-2026-9932]", highlight: "gold" },
    ],
  },
  {
    id: "rbac",
    label: "02 AUTH / RBAC",
    badge: "SECURITY.RBAC",
    status: "ENFORCED",
    metadata: "4 ROLES • BCRYPT 10 ROUNDS",
    lines: [
      { num: "01", text: "SESSION_INIT → POST /api/v1/auth/login", highlight: "gold" },
      { num: "02", text: "FETCH_USER_RECORD('admin@nexarya.in') → FOUND", highlight: "muted" },
      { num: "03", text: "BCRYPT_VERIFY(hash, payload.pass) → VALIDATED", highlight: "green" },
      { num: "04", text: "SIGN_JWT_TOKEN(role: 'ADMIN', exp: '24h') → ISSUED", highlight: "cyan" },
      { num: "05", text: "REQUEST → GET /api/v1/admin/payments", highlight: "gold" },
      { num: "06", text: "CHECK_PERMISSION('ADMIN', 'payments') → 403 FORBIDDEN", highlight: "muted" },
      { num: "07", text: "REQUEST → GET /api/v1/admin/inquiries", highlight: "gold" },
      { num: "08", text: "CHECK_PERMISSION('ADMIN', 'inquiries') → 200 AUTHORIZED", highlight: "green" },
    ],
  },
  {
    id: "crypto",
    label: "03 WEBHOOK CRYPTO",
    badge: "PAYMENTS.HMAC",
    status: "ACTIVE",
    metadata: "SHA-256 • TIMING-SAFE",
    lines: [
      { num: "01", text: "INGRESS → POST /api/v1/payments/webhook", highlight: "gold" },
      { num: "02", text: "HEADER: x-signature: 8f4e2b...d48d [HMAC_SHA256]", highlight: "muted" },
      { num: "03", text: "RAW_BUFFER_CAPTURE(req.body) → 184 BYTES", highlight: "muted" },
      { num: "04", text: "COMPUTE_HMAC(rawBuffer, PAYMENT_WEBHOOK_SECRET)", highlight: "cyan" },
      { num: "05", text: "CRYPTO_TIMING_SAFE_EQUAL(sig, expected) → MATCH [TRUE]", highlight: "green" },
      { num: "06", text: "SQLITE.EXEC(UPDATE payments SET status='COMPLETED')", highlight: "cyan" },
      { num: "07", text: "RECORD_AUDIT_LOG('PAYMENT_STATUS_CHANGE', tx_17882)", highlight: "green" },
      { num: "08", text: "RESPONSE → 200 OK [STATUS: COMPLETED]", highlight: "gold" },
    ],
  },
];

export default function EngineeringTerminal() {
  const [activeTabId, setActiveTabId] = useState("pipeline");
  const [activeLineIdx, setActiveLineIdx] = useState(2);
  const activeTab = TERMINAL_TABS.find((t) => t.id === activeTabId) || TERMINAL_TABS[0];

  // Subtle cyclic active line highlight
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIdx((prev) => (prev + 1) % 8);
    }, 2800);
    return () => clearInterval(interval);
  }, [activeTabId]);

  return (
    <div className="w-full bg-[#070D12] border border-white/10 select-none overflow-hidden shadow-2xl">
      {/* Terminal Title Bar & Tab Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 bg-[#03070B] px-4 py-2.5 gap-3">
        {/* Left Telemetry indicator dots */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4A72C]/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
          <span className="font-tech text-[10px] text-[#6F7475] tracking-widest uppercase ml-2 hidden md:inline-block">
            RUNTIME INSTRUMENTATION // LOGIC FLOW
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {TERMINAL_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTabId(tab.id);
                setActiveLineIdx(0);
              }}
              className={`px-3 py-1 font-tech text-[10px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeTabId === tab.id
                  ? "bg-[#D4A72C] text-[#03070B] font-bold"
                  : "bg-white/[0.03] text-[#A7A9A8] hover:text-[#F2EFE7] hover:bg-white/[0.06] border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body with horizontal scroll container */}
      <div className="p-4 sm:p-7 font-mono text-xs sm:text-sm bg-[#04080D] min-h-[260px] flex flex-col justify-between overflow-x-auto relative">
        {/* Subtle scanline effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none animate-scanline" />

        <div className="space-y-2 min-w-[340px] relative z-10">
          {activeTab.lines.map((line, idx) => {
            const isActive = idx === activeLineIdx;
            let textColor = "text-[#A7A9A8]";
            if (line.highlight === "gold") textColor = "text-[#F0C75E] font-medium";
            if (line.highlight === "green") textColor = "text-emerald-400";
            if (line.highlight === "cyan") textColor = "text-sky-300";
            if (line.highlight === "muted") textColor = "text-[#6F7475]";

            return (
              <div
                key={line.num}
                className={`flex items-start gap-3 sm:gap-4 leading-relaxed font-tech px-2 py-0.5 rounded-xs transition-colors duration-300 ${
                  isActive ? "bg-white/[0.04] border-l-2 border-[#D4A72C]" : "border-l-2 border-transparent"
                }`}
              >
                <span className="text-[#6F7475] select-none text-[11px] w-6 shrink-0 text-right font-light">
                  {line.num}
                </span>
                <span className={`${textColor} text-[11px] sm:text-xs whitespace-nowrap sm:whitespace-normal`}>
                  {line.text}
                </span>
                {isActive && (
                  <span className="ml-auto font-tech text-[9px] text-[#D4A72C] uppercase tracking-wider hidden sm:inline-block">
                    ● ACTIVE
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Status Telemetry Footer */}
        <div className="pt-4 mt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-tech text-[10px] text-[#6F7475] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[#F2EFE7] font-semibold">{activeTab.status}</span>
            <span>•</span>
            <span>DATABASE: SQLITE/WAL</span>
          </div>
          <div className="text-[#D4A72C]">
            {activeTab.metadata}
          </div>
        </div>
      </div>
    </div>
  );
}
