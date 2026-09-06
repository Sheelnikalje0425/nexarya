
import React from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const CLIENT_ENGAGEMENT_PHASES = [
  {
    step: "01",
    phase: "DISCOVER",
    timeline: "WEEK 1–2",
    objective: "Map business failure modes, user personas, and operational boundaries into a fixed scope specification.",
    deliverable: "Scope & Architecture Blueprint",
  },
  {
    step: "02",
    phase: "DESIGN",
    timeline: "WEEK 2–3",
    objective: "Define relational schemas, API contracts, RBAC permission models, and production UI wireframes.",
    deliverable: "Schema & Interface Contract",
  },
  {
    step: "03",
    phase: "BUILD",
    timeline: "WEEK 3–8",
    objective: "Engineer verified source code with automated unit tests, continuous staging deployments, and weekly demos.",
    deliverable: "Tested Source Code & APIs",
  },
  {
    step: "04",
    phase: "LAUNCH",
    timeline: "WEEK 8–9",
    objective: "Hardened deployment to cloud infrastructure, load validation, DNS cutover, and telemetry verification.",
    deliverable: "Production Deployment & CI/CD",
  },
  {
    step: "05",
    phase: "EVOLVE",
    timeline: "ONGOING",
    objective: "Continuous monitoring, quarterly dependency upgrades, performance tuning, and planned feature extensions.",
    deliverable: "Direct Engineer SLA & Support",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-36 bg-[#F4EFE6] border-b border-[#DCD6CA] select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
                <span className="font-tech text-xs tracking-[0.22em] text-[#5C6975] uppercase font-medium">
                  CLIENT DELIVERY // ENGAGEMENT PROGRESSION
                </span>
              </div>
              <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] text-[#0E1720] leading-[1.02] tracking-[-0.03em]">
                How we build.
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] max-w-md font-light leading-relaxed">
              Every client engagement progresses through five predictable milestones with transparent source code access and concrete deliverables.
            </p>
          </div>
        </RevealOnScroll>

        {/* Compact Process Index */}
        <div className="border border-[#DCD6CA] bg-[#FFFFFF] shadow-[0_12px_40px_rgba(14,23,32,0.05)] overflow-hidden">
          
          {/* Index Docket Header */}
          <div className="px-6 py-3.5 bg-[#FAF8F5] border-b border-[#DCD6CA] flex items-center justify-between text-xs font-tech text-[#5C6975]">
            <span className="font-bold text-[#0E1720] tracking-wider uppercase">
              ENGAGEMENT DELIVERY PROTOCOL
            </span>
            <span className="text-[#8E9CA8]">5 LINEAR PHASES // DIRECT SENIOR ENGINEERS</span>
          </div>

          {/* 5 Stacked Compact Rows */}
          <div className="divide-y divide-[#DCD6CA]">
            {CLIENT_ENGAGEMENT_PHASES.map((phase, idx) => (
              <RevealOnScroll key={phase.step} delayMs={idx * 35}>
                <div className="p-6 sm:p-8 bg-[#FFFFFF] hover:bg-[#FAF8F5] transition-colors">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
                    
                    {/* Step Num & Phase Name (3 Cols) */}
                    <div className="lg:col-span-3 flex items-center gap-4">
                      <span className="font-editorial text-3xl text-[#0E1720] tabular-nums font-normal">
                        {phase.step}
                      </span>
                      <div>
                        <div className="font-tech text-[10px] tracking-[0.16em] text-[#8E9CA8] uppercase">
                          {phase.timeline}
                        </div>
                        <h3 className="font-tech text-sm tracking-[0.16em] uppercase text-[#0E1720] font-bold">
                          {phase.phase}
                        </h3>
                      </div>
                    </div>

                    {/* Objective Description (6 Cols) */}
                    <div className="lg:col-span-6">
                      <p className="font-sans text-xs sm:text-sm text-[#5C6975] leading-relaxed">
                        {phase.objective}
                      </p>
                    </div>

                    {/* Concrete Deliverable Tag (3 Cols) */}
                    <div className="lg:col-span-3 flex lg:justify-end">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF8F5] border border-[#DCD6CA] text-xs font-tech text-[#0E1720]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                        <span className="truncate">{phase.deliverable}</span>
                      </div>
                    </div>

                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
