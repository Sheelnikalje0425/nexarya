import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";

export default function AdminPricing() {
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getPricingPlans()
      .then((data) => {
        setPlans(data.plans || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load pricing:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#0E1720]/10 pb-6">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-medium mb-1.5">
          COMMERCIAL // ENGAGEMENT MODELS
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
          Engagement & Pricing Models
        </h1>
        <p className="font-sans text-sm text-[#576371] mt-1.5">
          Commercial models, milestone-based product delivery rails, and dedicated engineering pods.
        </p>
      </div>

      {loading ? (
        <div className="py-12 text-center font-mono text-xs text-[#576371] tracking-wider">
          Loading pricing models...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.slug}
              className="p-6 sm:p-8 bg-white border border-[#0E1720]/15 rounded-sm shadow-[0_1px_3px_rgba(14,23,32,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-[10px] text-[#8C6D1F] uppercase mb-1 tracking-wider">{p.billing_type}</div>
                <h3 className="font-editorial text-2xl text-[#0E1720] font-semibold mb-2">{p.name}</h3>
                <div className="font-editorial text-2xl text-[#0E1720] mb-4 font-bold">{p.price}</div>
                <p className="font-sans text-xs text-[#576371] leading-relaxed mb-4">{p.description}</p>
              </div>
              <div className="pt-4 border-t border-[#0E1720]/10 font-mono text-[10px] text-[#576371] flex justify-between">
                <span>Featured: <strong className="text-[#0E1720]">{p.featured ? "YES" : "NO"}</strong></span>
                <span className="text-emerald-700 font-medium">● PUBLISHED</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
