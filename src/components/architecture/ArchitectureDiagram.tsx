import React from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const TIERS = [
  {
    tier: "01",
    name: "Client Tier",
    tech: "React 19 • Next.js • Responsive Interfaces",
    description: "Accessible, high-performance web frontends engineered for fast interaction and optimistic UI state management.",
  },
  {
    tier: "02",
    name: "API Gateway",
    tech: "Node.js • Express • RESTful Endpoints",
    description: "Strictly typed endpoint contracts with request payload validation, CORS policies, and rate-limiting rails.",
  },
  {
    tier: "03",
    name: "Domain Logic",
    tech: "RBAC Security • HMAC Signatures • Workflows",
    description: "Role-segregated permission gates, cryptographic verification, and deterministic business state machines.",
  },
  {
    tier: "04",
    name: "Persistence Tier",
    tech: "SQLite WAL • PostgreSQL • ACID Schemas",
    description: "Relational database durability with Write-Ahead Logging, prepared statements, and transactional integrity.",
  },
  {
    tier: "05",
    name: "Infrastructure Tier",
    tech: "Docker • GitHub Actions • Cloud Hosting",
    description: "Automated CI/CD deployment pipelines, containerized environments, and continuous system health checks.",
  },
];

export default function ArchitectureDiagram() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#08101B] border-b border-[#243247] select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-14 sm:mb-18">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
              <span className="font-tech text-xs tracking-[0.24em] text-[#C59A3D] uppercase font-medium">
                SYSTEM TOPOLOGY
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F8F5EE] leading-[1.08] tracking-[-0.02em] mb-4">
              5-tier architecture.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#89929B] font-light leading-relaxed">
              Every platform we build follows a clean separation of concerns, ensuring resilience, testability, and low maintenance overhead.
            </p>
          </div>
        </RevealOnScroll>

        {/* Clean Linear Architectural Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {TIERS.map((item, idx) => (
            <RevealOnScroll key={item.tier} delayMs={idx * 60}>
              <div className="group relative p-6 bg-[#0F1725] border border-[#243247] hover:border-[#C59A3D]/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  {/* Top Tier Label */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                    <span className="font-tech text-xs text-[#C59A3D] font-semibold">
                      TIER {item.tier}
                    </span>
                    <span className="font-tech text-[9px] text-[#68717B] uppercase">
                      {idx < 4 ? "↓" : "ROOT"}
                    </span>
                  </div>

                  {/* Tier Name */}
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#F8F5EE] group-hover:text-[#E0BD68] transition-colors mb-1.5">
                    {item.name}
                  </h3>

                  {/* Tech Stack */}
                  <div className="font-tech text-[10px] text-[#C59A3D] tracking-wide mb-3">
                    {item.tech}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-[#89929B] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Status Dot */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-tech text-[#68717B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]/60" />
                  <span>Verified Domain</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
