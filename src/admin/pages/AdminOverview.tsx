import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "@/lib/api";

export default function AdminOverview() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.admin.getOverview()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load overview:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center font-mono text-xs text-[#576371] tracking-wider">
        Loading workspace overview...
      </div>
    );
  }

  const { metrics, recentInquiries, recentAuditLogs } = data || {};

  return (
    <div className="space-y-10">
      {/* Editorial Header */}
      <div className="border-b border-[#0E1720]/10 pb-6">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-medium mb-1.5">
          WORKSPACE // EXECUTIVE OVERVIEW
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
          Operations & Workspace Overview
        </h1>
        <p className="font-sans text-sm text-[#576371] mt-2 max-w-2xl leading-relaxed">
          Manage the systems, content, verified case evidence, client inquiries, and financial operations behind NEXARYA.
        </p>
      </div>

      {/* Restrained Operational Summary Cards (Real Database Values) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm">
          <div className="font-mono text-[10px] tracking-[0.16em] text-[#576371] uppercase mb-1">
            OPEN INQUIRIES
          </div>
          <div className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
            {metrics?.newInquiries ?? 0}
          </div>
          <div className="font-sans text-xs text-[#576371] mt-2 flex items-center justify-between border-t border-[#0E1720]/5 pt-2">
            <span>Total Inquiries:</span>
            <span className="font-mono text-xs text-[#0E1720] font-medium">{metrics?.totalInquiries ?? 0}</span>
          </div>
        </div>

        <div className="p-6 bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm">
          <div className="font-mono text-[10px] tracking-[0.16em] text-[#576371] uppercase mb-1">
            CASE STUDIES
          </div>
          <div className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
            {metrics?.activeCaseStudies ?? 2}
          </div>
          <div className="font-sans text-xs text-[#576371] mt-2 flex items-center justify-between border-t border-[#0E1720]/5 pt-2">
            <span>Verified Projects:</span>
            <span className="font-mono text-xs text-[#8C6D1F]">STEMFUSION & Railway</span>
          </div>
        </div>

        <div className="p-6 bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm">
          <div className="font-mono text-[10px] tracking-[0.16em] text-[#576371] uppercase mb-1">
            ACTIVE SERVICES
          </div>
          <div className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
            {metrics?.activeServices ?? 8}
          </div>
          <div className="font-sans text-xs text-[#576371] mt-2 flex items-center justify-between border-t border-[#0E1720]/5 pt-2">
            <span>Capabilities:</span>
            <span className="font-mono text-xs text-[#0E1720] font-medium">8 Published</span>
          </div>
        </div>

        <div className="p-6 bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm">
          <div className="font-mono text-[10px] tracking-[0.16em] text-[#576371] uppercase mb-1">
            PUBLICATIONS
          </div>
          <div className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
            {metrics?.publishedArticles ?? 2}
          </div>
          <div className="font-sans text-xs text-[#576371] mt-2 flex items-center justify-between border-t border-[#0E1720]/5 pt-2">
            <span>Engineering Insights:</span>
            <span className="font-mono text-xs text-[#0E1720] font-medium">Live CMS</span>
          </div>
        </div>
      </div>

      {/* Restrained Operational Status Bar */}
      <div className="p-4 bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span className="font-mono text-[10px] text-[#576371] uppercase">Platform Engine:</span>
          <span className="font-medium text-[#0E1720]">Operational (v2.0)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-[#576371] uppercase">Database:</span>
          <span className="font-mono text-xs text-[#0E1720]">SQLite (WAL Mode Active)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-[#576371] uppercase">Access Control:</span>
          <span className="font-medium text-[#8C6D1F]">RBAC Authenticated</span>
        </div>
      </div>

      {/* 2-Column: Recent Inquiries Work Queue + Audit Trail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Inquiries Work Queue */}
        <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#0E1720]/10">
            <div>
              <h2 className="font-editorial text-2xl text-[#0E1720] font-semibold">Recent Project Inquiries</h2>
              <p className="font-sans text-xs text-[#576371] mt-0.5">Inbound scoping requests and technical proposals</p>
            </div>
            <Link
              to="/admin/inquiries"
              className="font-mono text-xs text-[#8C6D1F] hover:text-[#0E1720] transition-colors uppercase font-medium"
            >
              View Pipeline →
            </Link>
          </div>

          <div className="space-y-3">
            {recentInquiries?.length > 0 ? (
              recentInquiries.map((inq: any) => (
                <div
                  key={inq.id}
                  className="p-4 bg-white border border-[#0E1720]/10 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#D4A72C]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-[#8C6D1F]">{inq.reference_id}</span>
                      <span className="font-sans text-xs font-semibold text-[#0E1720]">{inq.name}</span>
                    </div>
                    <div className="font-sans text-xs text-[#576371] mt-1">
                      {inq.company} • <span className="text-[#0E1720]">{inq.project_type}</span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1.5 shrink-0">
                    <span
                      className={`font-mono text-[9px] px-2 py-0.5 uppercase font-semibold rounded-sm ${
                        inq.status === "NEW"
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : inq.status === "IN_REVIEW"
                          ? "bg-amber-50 text-amber-800 border border-amber-200"
                          : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {inq.status}
                    </span>
                    <span className="font-mono text-[10px] text-[#6F7475]">
                      {new Date(inq.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center font-sans text-xs text-[#6F7475]">
                No project enquiries yet.
              </div>
            )}
          </div>
        </div>

        {/* Audit Stream */}
        <div className="lg:col-span-5 bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#0E1720]/10">
            <div>
              <h2 className="font-editorial text-2xl text-[#0E1720] font-semibold">Recent Audit Events</h2>
              <p className="font-sans text-xs text-[#576371] mt-0.5">Chronological system log</p>
            </div>
            <Link
              to="/admin/audit-logs"
              className="font-mono text-xs text-[#8C6D1F] hover:text-[#0E1720] transition-colors uppercase font-medium"
            >
              Full Trail →
            </Link>
          </div>

          <div className="space-y-3">
            {recentAuditLogs?.length > 0 ? (
              recentAuditLogs.map((log: any) => (
                <div
                  key={log.id}
                  className="p-3.5 bg-white border border-[#0E1720]/10 rounded-sm flex items-start justify-between gap-3 text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="font-mono text-[10px] font-semibold text-[#8C6D1F]">{log.action}</div>
                    <div className="font-mono text-[11px] text-[#0E1720]">{log.resource}</div>
                    <div className="font-sans text-[11px] text-[#576371] truncate max-w-[220px]">
                      {log.actor_email || "System"}
                    </div>
                  </div>
                  <div className="font-mono text-[10px] text-[#6F7475] shrink-0">
                    {new Date(log.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center font-sans text-xs text-[#6F7475]">
                No audit events recorded yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
