import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";

export default function AdminCaseStudies() {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.admin.getCaseStudies()
      .then((data) => {
        setCaseStudies(data.caseStudies || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load case studies:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#0E1720]/10 pb-6">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-medium mb-1.5">
          PORTFOLIO // EVIDENCE REGISTRY
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
          Verified Case Studies
        </h1>
        <p className="font-sans text-sm text-[#576371] mt-1.5">
          Authentic engineering case records, system architectures, and production proof.
        </p>
      </div>

      {loading ? (
        <div className="py-12 text-center font-mono text-xs text-[#576371] tracking-wider">
          Loading case studies...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-8 bg-white border border-[#0E1720]/15 rounded-sm shadow-[0_1px_3px_rgba(14,23,32,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-[#8C6D1F] uppercase px-2.5 py-0.5 border border-[#D4A72C]/30 bg-[#D4A72C]/10 rounded-sm font-semibold">
                    {cs.category}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-700 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    PUBLISHED
                  </span>
                </div>
                <h2 className="font-editorial text-2xl text-[#0E1720] font-semibold mb-2">{cs.title}</h2>
                <p className="font-sans text-xs text-[#576371] leading-relaxed mb-4">{cs.overview}</p>
                <div className="font-mono text-xs text-[#576371]">Slug: <span className="text-[#0E1720]">/work/{cs.slug}</span></div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#0E1720]/10 flex items-center justify-between text-xs">
                <span className="font-sans text-[#576371]">Sector: <span className="text-[#0E1720] font-medium">{cs.client_type}</span></span>
                <span className="font-mono text-[#8C6D1F] font-semibold">INDEX #{cs.sort_order}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
