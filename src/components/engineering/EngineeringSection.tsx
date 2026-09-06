import React, { useState, useEffect } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface TransformationStage {
  num: string;
  name: string;
  subtitle: string;
  description: string;
  facets: string[];
  treeTitle: string;
  treeNodes: { key: string; val: string }[];
  isDark?: boolean;
  statusBadge?: string;
}

const STAGES: TransformationStage[] = [
  {
    num: "01",
    name: "UNDERSTAND",
    subtitle: "Business Workflow",
    description:
      "We begin with the actual operational reality: how people communicate, the rules that govern decisions, the handoffs between teams, and the operational constraints that exist.",
    facets: ["PEOPLE", "RULES", "HANDOFFS", "CONSTRAINTS", "DECISIONS"],
    treeTitle: "OPERATIONAL CONTEXT",
    treeNodes: [
      { key: "STAKEHOLDERS", val: "Roles, responsibilities & operational incentives" },
      { key: "WORKFLOWS", val: "Sequential handoffs & decision branches" },
      { key: "INVARIANTS", val: "Business rules & regulatory requirements" },
      { key: "CONSTRAINTS", val: "Legacy boundaries & operational limits" },
    ],
    isDark: false,
    statusBadge: "INPUT REALITY",
  },
  {
    num: "02",
    name: "STRUCTURE",
    subtitle: "System Model",
    description:
      "We translate messy operational realities into clear domain models: identifying bounded contexts, explicit state machines, and relational structures before writing application code.",
    facets: ["DOMAINS", "RELATIONSHIPS", "STATES", "BOUNDARIES"],
    treeTitle: "DOMAIN MODEL",
    treeNodes: [
      { key: "BOUNDED CONTEXTS", val: "Clear domain boundaries & service ownership" },
      { key: "ENTITIES & SCHEMAS", val: "Explicit relational data models" },
      { key: "STATE MACHINES", val: "Deterministic lifecycle transitions" },
      { key: "INTERFACES", val: "Structured contracts between subsystems" },
    ],
    isDark: false,
    statusBadge: "DOMAIN SPECIFICATION",
  },
  {
    num: "03",
    name: "ENGINEER",
    subtitle: "Software Architecture",
    description:
      "We design and build clean application logic, relational data layers, robust API integrations, and resilient deployment infrastructure tailored to the workflow.",
    facets: ["APPLICATION", "DATA", "INTEGRATIONS", "INTERFACES", "INFRASTRUCTURE"],
    treeTitle: "CORE ARCHITECTURE",
    treeNodes: [
      { key: "APPLICATION CORE", val: "TypeScript / Node.js / React application logic" },
      { key: "DATA LAYER", val: "Structured relational schemas & data integrity" },
      { key: "INGRESS & EGRESS", val: "API endpoints & integration boundaries" },
      { key: "INFRASTRUCTURE", val: "Isolated containerization & cloud deployments" },
    ],
    isDark: true,
    statusBadge: "SOFTWARE ARCHITECTURE",
  },
  {
    num: "04",
    name: "DELIVER",
    subtitle: "Working System",
    description:
      "We ship working, production software that staff can actually use, accompanied by complete administrative tooling, clean documentation, and a codebase built for evolution.",
    facets: ["USABLE SOFTWARE", "DEPLOYMENT", "OPERATIONAL HANDOFF", "EVOLUTION"],
    treeTitle: "PRODUCTION RUNTIME",
    treeNodes: [
      { key: "DEPLOYED SYSTEM", val: "Fast, responsive web applications" },
      { key: "ADMINISTRATIVE TOOLING", val: "Operational management & auditability" },
      { key: "HANDOFF & SPECS", val: "Clean documentation & maintainable structure" },
      { key: "LIFECYCLE", val: "Long-term maintainability & system evolution" },
    ],
    isDark: true,
    statusBadge: "OPERATIONAL RUNTIME",
  },
];

const ENGINEERING_PRINCIPLES = [
  {
    num: "01",
    title: "UNDERSTAND THE DOMAIN",
    desc: "Software starts with understanding the work, not selecting a technology.",
  },
  {
    num: "02",
    title: "MODEL THE SYSTEM",
    desc: "We make rules, relationships, states and boundaries explicit before implementation.",
  },
  {
    num: "03",
    title: "BUILD AROUND THE WORKFLOW",
    desc: "Architecture follows the requirements of the system rather than forcing the business into a generic product.",
  },
  {
    num: "04",
    title: "ENGINEER FOR PRODUCTION",
    desc: "The goal is working software that can be used, maintained and evolved.",
  },
];

const CONTEXTUAL_TECH = [
  { category: "APPLICATION", stack: "React / TypeScript / Node.js" },
  { category: "DATA", stack: "SQL / relational systems" },
  { category: "INFRASTRUCTURE", stack: "Cloud / containers / deployment" },
];

export default function EngineeringSection() {
  const [activeStage, setActiveStage] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const current = STAGES[activeStage];

  return (
    <section
      id="engineering"
      aria-labelledby="engineering-heading"
      className="py-24 sm:py-32 lg:py-36 bg-[#F4EFE6] border-b border-[#DCD6CA] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* Section Header */}
        {/* ========================================================================= */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 sm:pb-16 border-b border-[#DCD6CA] mb-16 sm:mb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#8C6D1F] uppercase font-semibold">
                  ENGINEERING
                </span>
              </div>
              <h2
                id="engineering-heading"
                className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] text-[#0E1720] leading-[1.04] tracking-[-0.03em] font-normal"
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

        {/* ========================================================================= */}
        {/* Primary Visual: 4-Stage State Transformation Workbench */}
        {/* ========================================================================= */}
        <div className="mb-20 sm:mb-28">
          
          {/* Transformation Stages Navigation Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6">
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
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-[#8C6D1F]">
                      {st.num}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#8E9CA8]">
                      STAGE
                    </span>
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-[#0E1720] tracking-wider uppercase mb-1">
                    {st.name}
                  </div>
                  <div className="font-sans text-xs text-[#5C6975] font-light truncate">
                    {st.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Transformation Visualization Card */}
          <div
            className={`border border-[#DCD6CA] transition-all duration-300 overflow-hidden shadow-[0_12px_40px_rgba(14,23,32,0.06)] ${
              current.isDark ? "bg-[#0E1720] text-[#F4EFE6]" : "bg-[#FFFFFF] text-[#0E1720]"
            }`}
          >
            {/* Docket Top Bar */}
            <div
              className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4 font-mono text-xs ${
                current.isDark
                  ? "bg-[#141E28] border-white/10 text-[#A7B4C2]"
                  : "bg-[#FAF8F5] border-[#DCD6CA] text-[#5C6975]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C]" />
                <span
                  className={`font-semibold uppercase tracking-wider ${
                    current.isDark ? "text-[#FFFFFF]" : "text-[#0E1720]"
                  }`}
                >
                  FIGURE 3.1 // SYSTEM TRANSFORMATION
                </span>
                <span className="text-[#8E9CA8]">/</span>
                <span className="uppercase tracking-wider">
                  STAGE {current.num}: {current.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 border text-[10px] uppercase font-semibold ${
                    current.isDark
                      ? "bg-[#0E1720] border-white/20 text-[#D4A72C]"
                      : "bg-[#FFFFFF] border-[#DCD6CA] text-[#0E1720]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      current.num === "04" ? "bg-emerald-400" : "bg-[#8C6D1F]"
                    }`}
                  />
                  <span>{current.statusBadge}</span>
                </span>
              </div>
            </div>

            {/* Transformation Card Body */}
            <div className="p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                
                {/* Left Column: Conceptual Stage Context (6 Cols) */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#8C6D1F] tracking-[0.2em] uppercase font-semibold block mb-2">
                      STAGE {current.num} — {current.name}
                    </span>
                    <h3
                      className={`font-editorial text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight mb-4 font-normal ${
                        current.isDark ? "text-[#FFFFFF]" : "text-[#0E1720]"
                      }`}
                    >
                      {current.subtitle}
                    </h3>
                    <p
                      className={`font-sans text-base font-light leading-relaxed mb-6 ${
                        current.isDark ? "text-[#A7B4C2]" : "text-[#3A4753]"
                      }`}
                    >
                      {current.description}
                    </p>

                    {/* Operational Facets Tags */}
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E9CA8] block mb-2.5 font-semibold">
                        PRIMARY DIMENSIONS
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {current.facets.map((facet) => (
                          <span
                            key={facet}
                            className={`font-mono text-[11px] px-3 py-1 border tracking-wider uppercase ${
                              current.isDark
                                ? "bg-[#16222E] border-white/15 text-[#D4A72C]"
                                : "bg-[#FAF8F5] border-[#DCD6CA] text-[#0E1720]"
                            }`}
                          >
                            {facet}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Flow Sequence Breadcrumb */}
                  <div
                    className={`pt-5 border-t text-xs font-mono flex items-center gap-2 overflow-x-auto ${
                      current.isDark ? "border-white/10 text-[#8E9CA8]" : "border-[#EAE5DB] text-[#5C6975]"
                    }`}
                  >
                    <span>WORKFLOW</span>
                    <span>→</span>
                    <span>STRUCTURE</span>
                    <span>→</span>
                    <span>ENGINEERING</span>
                    <span>→</span>
                    <span className="font-semibold text-[#8C6D1F]">PRODUCTION</span>
                  </div>
                </div>

                {/* Right Column: Technical Artifact & Tree Notation (6 Cols) */}
                <div className="lg:col-span-6">
                  <div
                    className={`p-6 sm:p-8 border font-mono rounded-xs shadow-inner ${
                      current.isDark
                        ? "bg-[#070D13] border-white/15 text-[#FAF7F2]"
                        : "bg-[#FAF8F5] border-[#DCD6CA] text-[#0E1720]"
                    }`}
                  >
                    <div className="flex items-center justify-between pb-3 mb-5 border-b border-inherit/20 text-xs">
                      <span className="font-semibold tracking-wider text-[#8C6D1F]">
                        {current.treeTitle}
                      </span>
                      <span className="text-[10px] text-[#8E9CA8] uppercase">SPECIFICATION TREE</span>
                    </div>

                    <div className="space-y-4 text-xs sm:text-[13px] leading-relaxed">
                      {current.treeNodes.map((node, i) => {
                        const isLast = i === current.treeNodes.length - 1;
                        return (
                          <div key={node.key} className="flex items-start gap-2.5">
                            <span className="text-[#8C6D1F] select-none font-bold">
                              {isLast ? "└──" : "├──"}
                            </span>
                            <div>
                              <span
                                className={`font-semibold tracking-wider uppercase mr-2 ${
                                  current.isDark ? "text-[#D4A72C]" : "text-[#0E1720]"
                                }`}
                              >
                                {node.key}:
                              </span>
                              <span
                                className={current.isDark ? "text-[#A7B4C2]" : "text-[#5C6975]"}
                              >
                                {node.val}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tree Annotation Footnote */}
                    <div className="pt-4 mt-6 border-t border-inherit/20 flex items-center justify-between text-[10px] text-[#8E9CA8]">
                      <span>NEXARYA ENGINEERING MODEL</span>
                      <span>STRUCTURED SPECIFICATION</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* Four Engineering Principles Grid */}
        {/* ========================================================================= */}
        <RevealOnScroll delayMs={60}>
          <div className="mb-16 sm:mb-20">
            <div className="mb-6 flex items-center justify-between text-xs font-mono text-[#5C6975]">
              <span className="font-semibold uppercase tracking-wider text-[#0E1720]">
                CORE ENGINEERING PRINCIPLES
              </span>
              <span className="text-[#8E9CA8] uppercase text-[10px]">
                NEXARYA PHILOSOPHY
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ENGINEERING_PRINCIPLES.map((principle) => (
                <div
                  key={principle.num}
                  className="p-6 sm:p-7 bg-[#FFFFFF] border border-[#DCD6CA] hover:border-[#8C6D1F]/60 transition-colors duration-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-[#8C6D1F] font-bold tracking-widest block mb-3">
                      {principle.num}
                    </span>
                    <h3 className="font-mono text-xs sm:text-sm font-semibold text-[#0E1720] tracking-wider uppercase mb-2.5 leading-snug">
                      {principle.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#5C6975] font-light leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#EAE5DB] font-mono text-[10px] text-[#8E9CA8] flex items-center justify-between">
                    <span>ENGINEERING DISCIPLINE</span>
                    <span className="text-[#8C6D1F]">✔</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* ========================================================================= */}
        {/* Contextual Technology References Strip */}
        {/* ========================================================================= */}
        <RevealOnScroll delayMs={90}>
          <div className="p-6 sm:p-7 bg-[#FAF8F5] border border-[#DCD6CA] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-semibold block mb-1">
                ENGINEERING CAPABILITIES
              </span>
              <span className="font-sans text-xs sm:text-sm text-[#3A4753] font-light">
                Modern full-stack application logic, structured relational data systems, and resilient infrastructure.
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              {CONTEXTUAL_TECH.map((item) => (
                <div
                  key={item.category}
                  className="px-3.5 py-2 bg-[#FFFFFF] border border-[#DCD6CA] flex items-center gap-2 text-[#0E1720]"
                >
                  <span className="text-[#8C6D1F] font-semibold text-[10px]">{item.category}:</span>
                  <span className="text-[#3A4753] text-[11px]">{item.stack}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
