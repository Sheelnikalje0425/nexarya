import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";

export default function AdminUsers() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.admin.getUsers()
      .then((data) => {
        setUsers(data.users || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load users:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#0E1720]/10 pb-6">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-medium mb-1.5">
          SECURITY // RBAC & OPERATORS
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
          Administrative Accounts & Roles
        </h1>
        <p className="font-sans text-sm text-[#576371] mt-1.5">
          Role-based access control (RBAC), operator identities, and session credentials.
        </p>
      </div>

      <div className="p-4 bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm font-sans text-xs text-[#576371]">
        <strong className="text-[#0E1720] font-mono text-[11px] uppercase tracking-wide">RBAC Hierarchy: </strong>
        Four segregated roles control platform capabilities (<span className="font-mono font-medium text-[#8C6D1F]">SUPER_ADMIN</span>, <span className="font-mono font-medium text-[#8C6D1F]">ADMIN</span>, <span className="font-mono font-medium text-[#8C6D1F]">EDITOR</span>, <span className="font-mono font-medium text-[#8C6D1F]">FINANCE</span>). Authentication passwords are cryptographically salted using bcrypt.
      </div>

      {loading ? (
        <div className="py-12 text-center font-mono text-xs text-[#576371] tracking-wider">
          Loading administrative accounts...
        </div>
      ) : (
        <div className="bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm overflow-hidden shadow-[0_1px_3px_rgba(14,23,32,0.02)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-[#0E1720]/10 bg-white/60 font-mono text-[10px] text-[#576371] uppercase tracking-wider">
                  <th className="p-4">Operator Name</th>
                  <th className="p-4">Email Address</th>
                  <th className="p-4">Assigned Role</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Last Authentication</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0E1720]/5 bg-white">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                    <td className="p-4 font-medium text-[#0E1720]">{u.name}</td>
                    <td className="p-4 font-mono text-xs text-[#576371]">{u.email}</td>
                    <td className="p-4">
                      <span className="font-mono text-[9px] px-2 py-0.5 bg-[#D4A72C]/15 text-[#8C6D1F] border border-[#D4A72C]/30 font-bold uppercase rounded-sm">
                        {u.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="font-mono text-[10px] text-emerald-700 flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        ACTIVE
                      </span>
                    </td>
                    <td className="p-4 font-mono text-[11px] text-[#576371]">
                      {u.last_login_at ? new Date(u.last_login_at).toLocaleString() : "Initial Setup"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
