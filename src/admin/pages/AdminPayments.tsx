import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";

export default function AdminPayments() {
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.admin.getPayments()
      .then((data) => {
        setPayments(data.payments || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load payments:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#0E1720]/10 pb-6">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-medium mb-1.5">
          FINANCE // TRANSACTION LEDGER
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
          Transactions & Milestone Payments
        </h1>
        <p className="font-sans text-sm text-[#576371] mt-1.5">
          Financial transaction records, client milestone billing, and Stripe webhook payment audit trails.
        </p>
      </div>

      {loading ? (
        <div className="py-12 text-center font-mono text-xs text-[#576371] tracking-wider">
          Loading payment ledger...
        </div>
      ) : (
        <div className="bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm overflow-hidden shadow-[0_1px_3px_rgba(14,23,32,0.02)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-[#0E1720]/10 bg-white/60 font-mono text-[10px] text-[#576371] uppercase tracking-wider">
                  <th className="p-4">Transaction ID</th>
                  <th className="p-4">Reference</th>
                  <th className="p-4">Client / Payer</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Gateway</th>
                  <th className="p-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0E1720]/5 bg-white">
                {payments.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-[#6F7475] font-sans">
                      No payment transactions recorded in the ledger yet.
                    </td>
                  </tr>
                ) : (
                  payments.map((p) => (
                    <tr key={p.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="p-4 font-mono text-xs font-semibold text-[#8C6D1F] whitespace-nowrap">
                        {p.transaction_id}
                      </td>
                      <td className="p-4 font-mono text-xs text-[#0E1720] whitespace-nowrap">{p.reference_id}</td>
                      <td className="p-4">
                        <div className="font-medium text-[#0E1720]">{p.client_name}</div>
                        <div className="text-[11px] text-[#576371]">{p.client_email}</div>
                      </td>
                      <td className="p-4 font-mono font-semibold text-[#0E1720] whitespace-nowrap">
                        ${p.amount?.toLocaleString()} {p.currency}
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <span className={`font-mono text-[9px] px-2 py-0.5 uppercase font-semibold rounded-sm ${
                          p.status === "COMPLETED"
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                            : p.status === "PENDING"
                            ? "bg-amber-50 text-amber-800 border border-amber-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="p-4 font-mono text-[#576371] text-[11px]">{p.provider}</td>
                      <td className="p-4 font-mono text-[#576371] text-[11px] whitespace-nowrap">
                        {new Date(p.created_at).toLocaleDateString()}
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
