import React, { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface ArchTier {
  id: string;
  step: string;
  name: string;
  tech: string;
  role: string;
  specifications: string[];
}

const TIERS: ArchTier[] = [
  {
    id: "client",
    step: "01",
    name: "Client Presentation",
    tech: "React 19 / TypeScript / Vite",
    role: "High-speed accessible UI with optimistic updates, mobile-first layouts, and zero render blocking.",
    specifications: [
      "Sub-second First Contentful Paint (<400ms)",
      "Strictly typed component design system",
      "Full offline-first caching and service fallbacks",
    ],
  },
  {
    id: "gateway",
    step: "02",
    name: "API & Gateway Layer",
    tech: "Express REST / JWT / HMAC",
    role: "Authoritative gateway validating incoming request contracts, rate limits, and cryptographic signatures.",
    specifications: [
      "JWT authentication & 4-role RBAC enforcement",
      "Brute-force protection & account lockout",
      "Cryptographic HMAC SHA-256 webhook verification",
    ],
  },
  {
    id: "logic",
    step: "03",
    name: "Business Logic Core",
    tech: "Deterministic State Machines",
    role: "Explicit domain logic processing approvals, milestone transitions, and transaction audit trails.",
    specifications: [
      "Atomic inquiry registration & reference IDs",
      "Payment lifecycle state machine",
      "Sanitized error handling with zero stack leaks",
    ],
  },
  {
    id: "db",
    step: "04",
    name: "Relational Persistence",
    tech: "SQLite WAL / ACID Transactions",
    role: "High-throughput relational core with foreign key integrity, indexed lookups, and append-only audit logs.",
    specifications: [
      "Write-Ahead Logging (WAL) concurrency",
      "12 normalized relational schema tables",
      "Immutable operator audit logging",
    ],
  },
  {
    id: "infra",
    step: "05",
    name: "Cloud & Infrastructure",
    tech: "AWS / Docker / CI Pipelines",
    role: "Isolated runtime pods with automated health checks, blue/green deployment rails, and secret isolation.",
    specifications: [
      "Containerized micro-services with health endpoints",
      "GitHub Actions automated lint & build checks",
      "Zero secret leakage in client-facing bundles",
    ],
  },
];

export default function ArchitectureFlow() {
  const [selectedTier, setSelectedTier] = useState<ArchTier>(TIERS[0]);
  const [hoveredTierId, setHoveredTierId] = useState<string | null>(null);

  const activeId = hoveredTierId || selectedTier.id;

  return (
    <div className="w-full bg-[#08101B] border border-[#243247] p-6 sm:p-10 select-none relative overflow-hidden">
      {/* Background Subtle Coordinate Markings */}
      <div className="absolute top-3 right-4 font-tech text-[8px] text-[#68717B]/40 select-none tracking-widest hidden sm:block">
        LAT: 19.0760° N • LON: 72.8777° E • TOPOLOGY: 5-TIER
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#243247] gap-4 mb-8">
        <div>
          <div className="font-tech text-[10px] tracking-[0.2em] text-[#C59A3D] uppercase font-semibold mb-1">
            TOPOLOGY SPECIFICATION
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#F8F5EE]">
            Full-Stack Architectural Assembly
          </h3>
        </div>
        <div className="font-tech text-xs text-[#68717B] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>5-TIER ACTIVE TOPOLOGY</span>
        </div>
      </div>

      {/* Visual Connecting Bus with Animated Signal (Desktop) */}
      <div className="hidden lg:block relative mb-6">
        {/* Horizontal Trace Line */}
        <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
          {/* Travelling Pulse Signal */}
          <div
            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#C59A3D] to-transparent"
            style={{
              animation: "signal-travel 6s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* 5-Tier Interactive Topology Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10 relative">
        {TIERS.map((tier) => {
          const isSelected = selectedTier.id === tier.id;
          const isHovered = hoveredTierId === tier.id;
          const isDominant = isSelected || isHovered;

          return (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier)}
              onMouseEnter={() => setHoveredTierId(tier.id)}
              onMouseLeave={() => setHoveredTierId(null)}
              className={`p-4 text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between h-32 relative ${
                isDominant
                  ? "bg-[#C59A3D]/10 border-[#C59A3D] shadow-[0_0_25px_rgba(197,154,61,0.18)] opacity-100 z-10 scale-[1.01]"
                  : activeId !== null
                  ? "bg-[#0F1725] border-[#243247] opacity-70 hover:opacity-90"
                  : "bg-[#0F1725] border-[#243247]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-tech text-[10px] text-[#C59A3D] font-semibold">
                  TIER {tier.step}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    isDominant ? "bg-[#C59A3D] shadow-[0_0_6px_#C59A3D]" : "bg-white/20"
                  }`}
                />
              </div>
              <div>
                <div className="font-sans text-xs sm:text-sm font-semibold text-[#F8F5EE] leading-snug">
                  {tier.name}
                </div>
                <div className="font-tech text-[9px] text-[#68717B] mt-1 truncate">
                  {tier.tech}
                </div>
              </div>

              {/* Bottom active accent bar */}
              {isDominant && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C59A3D]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Tier Deep-Dive Panel */}
      <RevealOnScroll>
        <div className="p-6 sm:p-8 bg-[#0F1725] border border-[#243247] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-tech text-xs text-[#C59A3D] font-semibold">TIER {selectedTier.step}</span>
              <span className="text-[#68717B]">•</span>
              <span className="font-tech text-xs text-[#F8F5EE]">{selectedTier.tech}</span>
            </div>
            <h4 className="font-editorial text-2xl sm:text-3xl text-[#F8F5EE] mb-3">
              {selectedTier.name}
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#89929B] font-light leading-relaxed">
              {selectedTier.role}
            </p>
          </div>

          <div className="lg:col-span-6 p-5 bg-[#08101B] border border-white/5 space-y-2.5">
            <div className="font-tech text-[10px] tracking-[0.2em] text-[#68717B] uppercase mb-2">
              TIER CHARACTERISTICS
            </div>
            {selectedTier.specifications.map((spec, i) => (
              <div key={i} className="flex items-start gap-2.5 font-sans text-xs text-[#F8F5EE]">
                <span className="text-[#C59A3D] mt-0.5 shrink-0">✔</span>
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
