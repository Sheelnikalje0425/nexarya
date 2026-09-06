import React from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const SYSTEM_THINKING_LAYERS = [
  {
    number: "01",
    phase: "REQUIREMENT",
    focus: "Operational Constraints & Boundaries",
    summary: "Map operational rules, physical constraints, user workflows, and core failure modes before writing software specifications.",
    marginNote: "Failure mode analysis & boundary definition",
    invariant: "INVARIANT: No software without documented domain constraints",
  },
  {
    number: "02",
    phase: "DOMAIN",
    focus: "State Machine & Business Logic",
    summary: "Model data entities, permission hierarchies, state transition rules, and deterministic invariants independently of the UI.",
    marginNote: "Explicit state transitions & RBAC contracts",
    invariant: "INVARIANT: State rules reside strictly on the server",
  },
  {
    number: "03",
    phase: "APPLICATION",
    focus: "User Interfaces & Accessibility",
    summary: "Engineer responsive, accessible client interfaces with strictly typed state management, clear feedback, and resilient error recovery.",
    marginNote: "Strict TypeScript types & responsive layouts",
    invariant: "INVARIANT: Deterministic feedback for every user mutation",
  },
  {
    number: "04",
    phase: "DATA",
    focus: "Persistence, Queues & API Rails",
    summary: "Structure normalized relational schemas, idempotent background queues, transactional isolation, and secure API boundaries.",
    marginNote: "ACID guarantees & idempotent webhooks",
    invariant: "INVARIANT: Zero data loss and immutable audit logging",
  },
  {
    number: "05",
    phase: "PRODUCTION",
    focus: "Hardened Infrastructure & Telemetry",
    summary: "Deploy to hardened Linux/cloud environments with automated CI/CD pipelines, containerization, structured monitoring, and verified backups.",
    marginNote: "Automated pipelines & active telemetry",
    invariant: "INVARIANT: Reversible deployments with continuous observability",
  },
];

export default function SystemInTheWork() {
  return (
    <section className="py-24 sm:py-36 bg-[#FAF8F5] border-b border-[#DCD6CA] select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 sm:mb-24">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
              <span className="font-tech text-xs tracking-[0.22em] text-[#5C6975] uppercase font-medium">
                ENGINEERING PHILOSOPHY // SYSTEM THINKING
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#0E1720] leading-[1.04] tracking-[-0.025em] mb-5">
              The system, in the work.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] font-light leading-relaxed">
              We do not treat software as a superficial design layer. Every platform is architected from fundamental domain constraints through to verified production deployment.
            </p>
          </div>
        </RevealOnScroll>

        {/* Vertical Editorial Sequence with Explanatory Margin Notes */}
        <div className="space-y-0 border-t border-[#DCD6CA]">
          {SYSTEM_THINKING_LAYERS.map((layer, idx) => (
            <RevealOnScroll key={layer.number} delayMs={idx * 40}>
              <div className="py-10 sm:py-14 border-b border-[#DCD6CA] hover:bg-[#F4EFE6]/40 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
                  
                  {/* Column 1: Large Editorial Numeral + Phase (3 Cols) */}
                  <div className="lg:col-span-3 flex items-baseline gap-4">
                    <span className="font-editorial text-4xl sm:text-5xl text-[#0E1720] font-normal tabular-nums">
                      {layer.number}
                    </span>
                    <div>
                      <div className="font-tech text-[10px] tracking-[0.2em] text-[#8E9CA8] uppercase">
                        LAYER SPEC
                      </div>
                      <h3 className="font-tech text-sm tracking-[0.16em] uppercase text-[#0E1720] font-bold">
                        {layer.phase}
                      </h3>
                    </div>
                  </div>

                  {/* Column 2: Focus & Editorial Explanation (6 Cols) */}
                  <div className="lg:col-span-6 space-y-2">
                    <div className="font-editorial text-2xl sm:text-3xl text-[#0E1720] leading-snug">
                      {layer.focus}
                    </div>
                    <p className="font-sans text-sm sm:text-base text-[#5C6975] leading-relaxed font-light">
                      {layer.summary}
                    </p>
                  </div>

                  {/* Column 3: Architectural Margin Note & Invariant (3 Cols) */}
                  <div className="lg:col-span-3 space-y-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#EAE5DB]">
                    <div className="font-tech text-xs text-[#0E1720] font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C]" />
                      <span>{layer.marginNote}</span>
                    </div>
                    <div className="font-tech text-[11px] text-[#8E9CA8] leading-tight">
                      {layer.invariant}
                    </div>
                  </div>

                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
