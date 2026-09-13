import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
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
        desc: "Isolate distinct business contexts and establish clear system boundaries.",
      },
      {
        num: "02",
        name: "ENTITIES",
        desc: "Model primary database records, attributes, and core schemas.",
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
  },
];

export default function EngineeringSection() {
  const [activeStage, setActiveStage] = useState(0);
  const current = STAGES[activeStage];

  return (
    <section
      id="engineering"
      aria-labelledby="engineering-heading"
      className="py-18 sm:py-22 lg:py-26 bg-[#E8E3D8] border-b border-[#DED7C9] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-9 sm:pb-11 border-b border-[#DED7C9] mb-11 sm:mb-14">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  03 // ENGINEERING METHODOLOGY
                </span>
              </div>
              <h2
                id="engineering-heading"
                className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] text-[#17202B] leading-[1.05] tracking-[-0.03em] font-normal"
              >
                From business complexity to{" "}
                <span className="italic font-normal">working software.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#394352] max-w-md font-light leading-relaxed">
              We start with the way the work actually happens, then shape the structure, architecture and software around it.
            </p>
          </div>
        </RevealOnScroll>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Visual-Led Single Concept Layout (lg:hidden)                 */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-5">
          {/* Large Engineering/Workstation Visual */}
          <div className="bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_6px_24px_rgba(15,23,37,0.03)] overflow-hidden">
            <div className="relative bg-[#08101B] overflow-hidden aspect-[16/10]">
              <picture>
                <source srcSet="/engineering/engineering-studio-workstation.webp" type="image/webp" />
                <img
                  src="/engineering/engineering-studio-workstation.jpg"
                  alt="Engineering workstation environment showing dual monitors with code architecture and open technical notebooks"
                  loading="lazy"
                  decoding="async"
                  width="1024"
                  height="576"
                  className="w-full h-full object-cover object-center"
                />
              </picture>
            </div>

            <div className="px-4 py-2.5 bg-[#E8E3D8]/70 border-t border-[#DED7C9] flex items-center justify-between text-xs font-mono text-[#394352]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="text-[#17202B] font-semibold text-[11px] uppercase tracking-wider">
                  STUDIO WORKBENCH
                </span>
              </div>
              <span className="text-[#68717B] text-[10px] uppercase tracking-wider">
                ACTIVE ENVIRONMENT
              </span>
            </div>
          </div>

          {/* Compact Process Line & Scoping CTA */}
          <div className="p-4 bg-[#F8F5EE] border border-[#DED7C9] space-y-4">
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#DED7C9] font-mono text-xs text-[#17202B]">
              <span className="text-[10px] uppercase tracking-widest text-[#C59A3D] font-semibold">
                METHODOLOGY
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-[#17202B]">
                WORKFLOW &rarr; SYSTEM &rarr; SOFTWARE
              </span>
            </div>

            <Link
              to="/process"
              className="flex items-center justify-between w-full px-5 py-3 bg-[#0F1725] hover:bg-[#141F30] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors min-h-[44px]"
            >
              <span>EXPLORE HOW WE BUILD</span>
              <ArrowRight size={12} className="text-[#C59A3D]" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Side-by-Side Workbench & Interactive Layout (hidden lg:grid) */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Dominant Engineering Studio Workbench Photo (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_6px_24px_rgba(15,23,37,0.03)] overflow-hidden flex flex-col justify-between">
            {/* Editorial Image Frame */}
            <div className="relative bg-[#08101B] overflow-hidden flex-1 min-h-[320px] sm:min-h-[420px]">
              <picture>
                <source srcSet="/engineering/engineering-studio-workstation.webp" type="image/webp" />
                <img
                  src="/engineering/engineering-studio-workstation.jpg"
                  alt="Engineering workstation environment showing dual monitors with code architecture and open technical notebooks with workflow sketches"
                  loading="eager"
                  decoding="async"
                  width="1024"
                  height="576"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
              </picture>
            </div>

            {/* Restrained Caption Strip */}
            <div className="px-5 py-3 bg-[#E8E3D8]/70 border-t border-[#DED7C9] flex items-center justify-between text-xs font-mono text-[#394352]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="text-[#17202B] font-semibold text-[11px] uppercase tracking-wider">
                  STUDIO WORKBENCH
                </span>
              </div>
              <span className="text-[#68717B] text-[10px] uppercase tracking-wider">
                ACTIVE ENVIRONMENT
              </span>
            </div>
          </div>

          {/* Right Column: 4-Stage Progressive Disclosure Workbench (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Layer 1: 4 Stage Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2">
              {STAGES.map((st, idx) => {
                const isActive = activeStage === idx;
                return (
                  <button
                    key={st.num}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className={`p-3 text-left transition-all duration-150 border cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#17202B] ${
                      isActive
                        ? "bg-[#0F1725] text-[#F7F5EF] border-[#0F1725] shadow-sm"
                        : "bg-[#FFFFFF] text-[#17202B] border-[#DED7C9] hover:border-[#C59A3D]/50 hover:bg-[#F8F5EE]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className={`font-mono text-xs font-bold ${isActive ? "text-[#C59A3D]" : "text-[#C59A3D]"}`}>
                        {st.num}
                      </span>
                      <span className={`font-mono text-[9px] uppercase tracking-wider ${isActive ? "text-[#B9C0C9]" : "text-[#68717B]"}`}>
                        STAGE
                      </span>
                    </div>
                    <div className="font-mono text-xs font-bold tracking-wider uppercase mb-0.5">
                      {st.name}
                    </div>
                    <div className={`font-sans text-[11px] font-light truncate ${isActive ? "text-[#B9C0C9]" : "text-[#394352]"}`}>
                      {st.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Layer 2: Progressive Disclosure Engineering Panel */}
            <div className="border border-[#DED7C9] bg-[#F8F5EE] shadow-[0_6px_24px_rgba(15,23,37,0.03)] overflow-hidden flex-1 flex flex-col justify-between">
              
              {/* Top Bar */}
              <div className="px-5 py-3 bg-[#E8E3D8]/70 border-b border-[#DED7C9] flex items-center justify-between gap-2 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                  <span className="font-semibold uppercase tracking-wider text-[#17202B] text-[11px]">
                    STAGE {current.num}: {current.name}
                  </span>
                </div>

                <span className="font-mono text-[10px] text-[#C59A3D] font-semibold tracking-wider">
                  {current.flow}
                </span>
              </div>

              {/* Stage Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                
                {/* Headline & Context */}
                <div className="mb-4">
                  <h3 className="font-editorial text-2xl sm:text-[1.65rem] text-[#17202B] font-normal leading-tight mb-2">
                    {current.headline}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* 4 Node Sequential Steps */}
                <div className="space-y-2 pt-3 border-t border-[#DED7C9]">
                  {current.nodes.map((node) => (
                    <div
                      key={node.name}
                      className="p-2.5 bg-[#FFFFFF] border border-[#DED7C9] flex items-start gap-2.5 text-xs"
                    >
                      <span className="font-mono text-[10px] text-[#C59A3D] font-semibold uppercase shrink-0 mt-0.5">
                        {node.num} // {node.name}:
                      </span>
                      <span className="font-sans text-[11px] text-[#394352] font-light leading-relaxed">
                        {node.desc}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
