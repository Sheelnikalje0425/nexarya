import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";

export default function AdminAuditLogs() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.admin.getAuditLogs()
      .then((data) => {
        setLogs(data.logs || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load audit logs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#0E1720]/10 pb-6">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-medium mb-1.5">
          GOVERNANCE // SECURITY AUDIT TRAIL
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
          System Security & Activity Audit
        </h1>
        <p className="font-sans text-sm text-[#576371] mt-1.5">
          Immutable chronological activity log of administrative mutations, scoping status changes, and webhook events.
        </p>
      </div>

      {loading ? (
        <div className="py-12 text-center font-mono text-xs text-[#576371] tracking-wider">
          Loading audit trail...
        </div>
      ) : (
        <div className="bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm overflow-hidden shadow-[0_1px_3px_rgba(14,23,32,0.02)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-[#0E1720]/10 bg-white/60 font-mono text-[10px] text-[#576371] uppercase tracking-wider">
                  <th className="p-4">Action Event</th>
                  <th className="p-4">Resource Target</th>
                  <th className="p-4">Operator / Actor</th>
                  <th className="p-4">Event Payload / Metadata</th>
                  <th className="p-4">IP Address</th>
                  <th className="p-4">Recorded Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0E1720]/5 bg-white">
                {logs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-[#6F7475] font-sans">
                      No audit events recorded yet.
                    </td>
                  </tr>
                ) : (
                  logs.map((log) => (
                    <tr key={log.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="p-4 font-mono text-xs font-semibold text-[#8C6D1F] whitespace-nowrap">
                        {log.action}
                      </td>
                      <td className="p-4 font-mono text-xs text-[#0E1720] whitespace-nowrap">{log.resource}</td>
                      <td className="p-4 text-[#576371]">{log.actor_email || "System / Webhook"}</td>
                      <td className="p-4 font-mono text-[11px] text-[#576371] max-w-xs truncate">
                        {log.metadata || "—"}
                      </td>
                      <td className="p-4 font-mono text-[11px] text-[#576371] whitespace-nowrap">{log.ip_address}</td>
                      <td className="p-4 font-mono text-[11px] text-[#576371] whitespace-nowrap">
                        {new Date(log.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
