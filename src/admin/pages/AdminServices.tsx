import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";

export default function AdminServices() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getServices()
      .then((data) => {
        setServices(data.services || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load services:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#0E1720]/10 pb-6">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-medium mb-1.5">
          SERVICES // CAPABILITIES REGISTRY
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
          Engineering Solutions & Services
        </h1>
        <p className="font-sans text-sm text-[#576371] mt-1.5">
          Registry of 8 core technical disciplines, workflow models, and capability descriptions.
        </p>
      </div>

      {loading ? (
        <div className="py-12 text-center font-mono text-xs text-[#576371] tracking-wider">
          Loading services...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((srv) => (
            <div
              key={srv.slug}
              className="p-6 bg-white border border-[#0E1720]/15 rounded-sm shadow-[0_1px_3px_rgba(14,23,32,0.02)] flex items-start justify-between gap-4"
            >
              <div>
                <div className="font-mono text-xs text-[#8C6D1F] font-semibold mb-1">
                  {srv.number} // {srv.slug}
                </div>
                <h3 className="font-editorial text-xl text-[#0E1720] font-semibold mb-1.5">{srv.title}</h3>
                <p className="font-sans text-xs text-[#576371] leading-relaxed line-clamp-2">{srv.short_desc}</p>
              </div>
              <span className="font-mono text-[9px] px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase shrink-0 rounded-sm font-medium">
                ACTIVE
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
