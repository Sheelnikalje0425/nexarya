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
    <div className="w-full bg-[#070D12] border border-white/10 p-6 sm:p-10 select-none relative overflow-hidden">
      {/* Background Subtle Coordinate Markings */}
      <div className="absolute top-3 right-4 font-tech text-[8px] text-[#6F7475]/40 select-none tracking-widest hidden sm:block">
        LAT: 19.0760° N • LON: 72.8777° E • TOPOLOGY: 5-TIER
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/10 gap-4 mb-8">
        <div>
          <div className="font-tech text-[10px] tracking-[0.2em] text-[#D4A72C] uppercase font-semibold mb-1">
            TOPOLOGY SPECIFICATION
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#F2EFE7]">
            Full-Stack Architectural Assembly
          </h3>
        </div>
        <div className="font-tech text-xs text-[#6F7475] flex items-center gap-2">
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
            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#D4A72C] to-transparent"
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
                  ? "bg-[#D4A72C]/10 border-[#D4A72C] shadow-[0_0_25px_rgba(212,167,44,0.18)] opacity-100 z-10 scale-[1.01]"
                  : activeId !== null
                  ? "bg-[#03070B] border-white/10 opacity-70 hover:opacity-90"
                  : "bg-[#03070B] border-white/10"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-tech text-[10px] text-[#D4A72C] font-semibold">
                  TIER {tier.step}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    isDominant ? "bg-[#D4A72C] shadow-[0_0_6px_#D4A72C]" : "bg-white/20"
                  }`}
                />
              </div>
              <div>
                <div className="font-sans text-xs sm:text-sm font-semibold text-[#F2EFE7] leading-snug">
                  {tier.name}
                </div>
                <div className="font-tech text-[9px] text-[#6F7475] mt-1 truncate">
                  {tier.tech}
                </div>
              </div>

              {/* Bottom active accent bar */}
              {isDominant && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4A72C]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Tier Deep-Dive Panel */}
      <RevealOnScroll>
        <div className="p-6 sm:p-8 bg-[#03070B] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-tech text-xs text-[#D4A72C] font-semibold">TIER {selectedTier.step}</span>
              <span className="text-[#6F7475]">•</span>
              <span className="font-tech text-xs text-[#F2EFE7]">{selectedTier.tech}</span>
            </div>
            <h4 className="font-editorial text-2xl sm:text-3xl text-[#F2EFE7] mb-3">
              {selectedTier.name}
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#A7A9A8] font-light leading-relaxed">
              {selectedTier.role}
            </p>
          </div>

          <div className="lg:col-span-6 p-5 bg-[#070D12] border border-white/5 space-y-2.5">
            <div className="font-tech text-[10px] tracking-[0.2em] text-[#6F7475] uppercase mb-2">
              TIER CHARACTERISTICS
            </div>
            {selectedTier.specifications.map((spec, i) => (
              <div key={i} className="flex items-start gap-2.5 font-sans text-xs text-[#F2EFE7]">
                <span className="text-[#D4A72C] mt-0.5 shrink-0">✔</span>
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
