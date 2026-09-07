import React, { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface StageNode {
  num: string;
  name: string;
  desc: string;
}

interface ApproachStage {
  num: string;
  name: string;
  subtitle: string;
  flow: string;
  headline: string;
  description: string;
  nodes: StageNode[];
  isDark?: boolean;
}

const STAGES: ApproachStage[] = [
  {
    num: "01",
    name: "UNDERSTAND",
    subtitle: "Business Workflow",
    flow: "Actors → Handoffs → Decisions → Rules",
    headline: "Mapping the operational reality before writing code.",
    description:
      "We begin by identifying who does the work, where handoffs happen between teams, what decisions get made, and the explicit business rules that govern them.",
    nodes: [
      {
        num: "01",
        name: "ACTORS",
        desc: "Identify key stakeholders, operational roles, and team responsibilities.",
      },
      {
        num: "02",
        name: "HANDOFFS",
        desc: "Map sequential information exchanges, document passes, and task transitions.",
      },
      {
        num: "03",
        name: "DECISIONS",
        desc: "Clarify approval criteria, escalation paths, and operational branch points.",
      },
      {
        num: "04",
        name: "RULES",
        desc: "Define explicit procedural constraints, validation limits, and business logic.",
      },
    ],
    isDark: false,
  },
  {
    num: "02",
    name: "STRUCTURE",
    subtitle: "System Model",
    flow: "Domains → Entities → Relationships → States",
    headline: "Translating business processes into clean system models.",
    description:
      "We translate operational findings into unambiguous domain boundaries, relational data structures, and deterministic state transitions.",
    nodes: [
      {
        num: "01",
        name: "DOMAINS",
        desc: "Isolate distinct business contexts and establish system boundaries.",
      },
      {
        num: "02",
        name: "ENTITIES",
        desc: "Model primary database records, attributes, and data structures.",
      },
      {
        num: "03",
        name: "RELATIONSHIPS",
        desc: "Enforce referential integrity, ownership hierarchies, and foreign mappings.",
      },
      {
        num: "04",
        name: "STATES",
        desc: "Define valid lifecycle statuses, allowed transitions, and audit checkpoints.",
      },
    ],
    isDark: false,
  },
  {
    num: "03",
    name: "ENGINEER",
    subtitle: "Software Architecture",
    flow: "Interface → Application Logic → Data → Runtime",
    headline: "Constructing reliable, strictly-typed full-stack systems.",
    description:
      "We build responsive interfaces, typed application logic, parameterized data access, and isolated server environments tailored to the workflow.",
    nodes: [
      {
        num: "01",
        name: "INTERFACE",
        desc: "Responsive, accessible frontend designed for fast daily operational use.",
      },
      {
        num: "02",
        name: "APPLICATION LOGIC",
        desc: "Strictly-typed backend business logic, validation, and route handlers.",
      },
      {
        num: "03",
        name: "DATA LAYER",
        desc: "Relational persistence, optimized queries, and transaction integrity.",
      },
      {
        num: "04",
        name: "RUNTIME",
        desc: "Containerized environments, reverse proxy routing, and process management.",
      },
    ],
    isDark: false,
  },
  {
    num: "04",
    name: "DELIVER",
    subtitle: "Production System",
    flow: "Application → Infrastructure → Deployment → Production",
    headline: "Deploying working software with operational visibility.",
    description:
      "We ship working software to production environments, complete with administrative consoles, automated deployment pipelines, and uptime monitoring.",
    nodes: [
      {
        num: "01",
        name: "APPLICATION",
        desc: "Production-ready software deployed and configured for daily use.",
      },
      {
        num: "02",
        name: "INFRASTRUCTURE",
        desc: "Secured cloud servers, SSL/TLS certificates, and network firewalls.",
      },
      {
        num: "03",
        name: "DEPLOYMENT",
        desc: "Automated build verification, zero-downtime reloads, and CI/CD.",
      },
      {
        num: "04",
        name: "PRODUCTION",
        desc: "Administrative management consoles, activity logs, and system telemetry.",
      },
    ],
    isDark: false,
  },
];

export default function EngineeringSection() {
  const [activeStage, setActiveStage] = useState(0);
  const current = STAGES[activeStage];

  return (
    <section
      id="engineering"
      aria-labelledby="engineering-heading"
      className="py-20 sm:py-24 lg:py-28 bg-[#F4EFE6] border-b border-[#DCD6CA] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[#DCD6CA] mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#8C6D1F] uppercase font-semibold">
                  ENGINEERING METHODOLOGY
                </span>
              </div>
              <h2
                id="engineering-heading"
                className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#0E1720] leading-[1.05] tracking-[-0.03em] font-normal"
              >
                From business complexity to{" "}
                <span className="italic font-normal">working software.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#3A4753] max-w-md font-light leading-relaxed">
              We start with the way the work actually happens, then shape the structure, architecture and software around it.
            </p>
          </div>
        </RevealOnScroll>

        {/* Primary Visual: 4-Stage Progressive Disclosure Workbench */}
        <div>
          
          {/* Layer 1: 4 Stage Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
            {STAGES.map((st, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 sm:p-5 text-left transition-all duration-200 border cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0E1720] ${
                    isActive
                      ? "bg-[#FFFFFF] border-[#8C6D1F] shadow-sm ring-1 ring-[#8C6D1F]/40"
                      : "bg-[#FAF8F5] border-[#DCD6CA] hover:border-[#8C6D1F]/50 hover:bg-[#FFFFFF]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-mono text-xs font-bold text-[#8C6D1F]">
                      {st.num}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#8E9CA8]">
                      STAGE
                    </span>
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-[#0E1720] tracking-wider uppercase mb-0.5">
                    {st.name}
                  </div>
                  <div className="font-sans text-xs text-[#5C6975] font-light truncate">
                    {st.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Layer 2: Deeper Technical Model Card */}
          <div className="border border-[#DCD6CA] bg-[#FFFFFF] shadow-[0_8px_30px_rgba(14,23,32,0.04)] overflow-hidden transition-all duration-300">
            {/* Top Bar */}
            <div className="px-6 py-3.5 bg-[#FAF8F5] border-b border-[#DCD6CA] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                <span className="font-semibold uppercase tracking-wider text-[#0E1720]">
                  STAGE {current.num}: {current.name}
                </span>
                <span className="text-[#8E9CA8]">//</span>
                <span className="text-[#5C6975] uppercase tracking-wider hidden sm:inline">
                  {current.subtitle}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#8C6D1F] font-semibold">
                  {current.flow}
                </span>
              </div>
            </div>

            {/* Stage Body */}
            <div className="p-6 sm:p-8 lg:p-10">
              
              {/* Context Header */}
              <div className="max-w-3xl mb-8">
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#0E1720] font-normal leading-tight mb-2">
                  {current.headline}
                </h3>
                <p className="font-sans text-base text-[#3A4753] font-light leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* 4 Node Progression Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-px bg-[#DCD6CA] border border-[#DCD6CA]">
                {current.nodes.map((node) => (
                  <div
                    key={node.name}
                    className="p-5 bg-[#FAF8F5] hover:bg-[#FFFFFF] transition-colors duration-150 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#EAE5DB]">
                        <span className="font-editorial text-xl sm:text-2xl text-[#0E1720]">
                          {node.num}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#8C6D1F] font-semibold">
                          DIMENSION
                        </span>
                      </div>

                      <h4 className="font-mono text-xs font-bold tracking-wider uppercase text-[#0E1720] mb-2">
                        {node.name}
                      </h4>

                      <p className="font-sans text-xs text-[#5C6975] font-light leading-relaxed">
                        {node.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 border-t border-[#EAE5DB] font-mono text-[10px] text-[#8E9CA8] flex items-center justify-between">
                      <span>SPECIFICATION</span>
                      <span className="text-[#8C6D1F]">✓</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
