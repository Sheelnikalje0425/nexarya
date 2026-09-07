import React, { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface ApproachStage {
  num: string;
  name: string;
  subtitle: string;
  flow: string;
  description: string;
  facets: string[];
  treeTitle: string;
  treeNodes: { key: string; val: string }[];
  diagramTitle: string;
  diagramSteps: { step: string; label: string; detail: string }[];
  isDark?: boolean;
}

const STAGES: ApproachStage[] = [
  {
    num: "01",
    name: "UNDERSTAND",
    subtitle: "Business Workflow",
    flow: "Actors → Handoffs → Decisions → Rules",
    description:
      "We begin by understanding the operational reality: identifying key actors, mapping sequential handoffs between teams, and clarifying the business rules that govern decisions.",
    facets: ["ACTORS", "HANDOFFS", "DECISIONS", "RULES"],
    treeTitle: "WORKFLOW SPECIFICATION",
    treeNodes: [
      { key: "ACTORS", val: "Operational roles and stakeholder responsibilities" },
      { key: "HANDOFFS", val: "Sequential handoffs and information exchanges" },
      { key: "DECISIONS", val: "Approval criteria and operational branch points" },
      { key: "RULES", val: "Explicit constraints and procedural requirements" },
    ],
    diagramTitle: "WORKFLOW MAPPING DIAGRAM",
    diagramSteps: [
      { step: "01", label: "ACTOR INTAKE", detail: "Capture inputs & operational constraints" },
      { step: "02", label: "HANDOFF FLOW", detail: "Define sequential stage progression" },
      { step: "03", label: "DECISION GATE", detail: "Apply operational business logic" },
      { step: "04", label: "OUTCOME STATE", detail: "Confirm verified stage completion" },
    ],
    isDark: false,
  },
  {
    num: "02",
    name: "STRUCTURE",
    subtitle: "System Model",
    flow: "Domains → Entities → Relationships → States",
    description:
      "We translate operational realities into clear domain models: defining bounded contexts, core entity schemas, relational data structures, and deterministic state transitions.",
    facets: ["DOMAINS", "ENTITIES", "RELATIONSHIPS", "STATES"],
    treeTitle: "DOMAIN MODEL SPECIFICATION",
    treeNodes: [
      { key: "DOMAINS", val: "Clear domain boundaries and system contexts" },
      { key: "ENTITIES", val: "Structured records and primary data schemas" },
      { key: "RELATIONSHIPS", val: "Explicit relational foreign keys and mappings" },
      { key: "STATES", val: "Deterministic lifecycle transitions and validation" },
    ],
    diagramTitle: "DOMAIN STRUCTURE MODEL",
    diagramSteps: [
      { step: "01", label: "BOUNDED CONTEXT", detail: "Isolate distinct domain areas" },
      { step: "02", label: "SCHEMA ENTITIES", detail: "Model relational database tables" },
      { step: "03", label: "RELATIONSHIPS", detail: "Enforce referential integrity" },
      { step: "04", label: "STATE MACHINE", detail: "Model valid status progressions" },
    ],
    isDark: false,
  },
  {
    num: "03",
    name: "ENGINEER",
    subtitle: "Software Architecture",
    flow: "Interface → Application Logic → Data → Runtime",
    description:
      "We design and build clean application logic, relational data layers, secure interfaces, and isolated deployment configurations tailored directly to the workflow.",
    facets: ["INTERFACE", "APPLICATION LOGIC", "DATA LAYER", "RUNTIME"],
    treeTitle: "ARCHITECTURE SPECIFICATION",
    treeNodes: [
      { key: "INTERFACE", val: "Responsive, accessible frontend presentation layer" },
      { key: "APPLICATION LOGIC", val: "Typed business logic and transaction handlers" },
      { key: "DATA LAYER", val: "Relational persistence with parameterized queries" },
      { key: "RUNTIME", val: "Containerized environments and server configuration" },
    ],
    diagramTitle: "SYSTEM ARCHITECTURE SCHEMATIC",
    diagramSteps: [
      { step: "01", label: "PRESENTATION", detail: "Responsive UI & typed API client" },
      { step: "02", label: "API & LOGIC", detail: "REST endpoints & route middleware" },
      { step: "03", label: "DATA PERSISTENCE", detail: "Relational SQL database engine" },
      { step: "04", label: "SERVER RUNTIME", detail: "Node.js application host process" },
    ],
    isDark: true,
  },
  {
    num: "04",
    name: "DELIVER",
    subtitle: "Production System",
    flow: "Application → Infrastructure → Deployment → Production",
    description:
      "We ship working, production software that staff can actually use, accompanied by administrative tooling, operational documentation, and clean deployment procedures.",
    facets: ["APPLICATION", "INFRASTRUCTURE", "DEPLOYMENT", "PRODUCTION"],
    treeTitle: "DELIVERY SPECIFICATION",
    treeNodes: [
      { key: "APPLICATION", val: "Deployed web application ready for daily use" },
      { key: "INFRASTRUCTURE", val: "Production server, proxy routing, and TLS" },
      { key: "DEPLOYMENT", val: "Predictable release and service reload process" },
      { key: "PRODUCTION", val: "Operational administration and audit visibility" },
    ],
    diagramTitle: "PRODUCTION RUNTIME MODEL",
    diagramSteps: [
      { step: "01", label: "BUILD VALIDATION", detail: "Typecheck & optimized compilation" },
      { step: "02", label: "SERVER HOSTING", detail: "Reverse proxy & static asset delivery" },
      { step: "03", label: "SERVICE RUNTIME", detail: "Process management & health checking" },
      { step: "04", label: "OPERATIONS", detail: "Admin management & data oversight" },
    ],
    isDark: true,
  },
];

export default function EngineeringSection() {
  const [activeStage, setActiveStage] = useState(0);
  const current = STAGES[activeStage];

  return (
    <section
      id="engineering"
      aria-labelledby="engineering-heading"
      className="py-24 sm:py-32 lg:py-36 bg-[#F4EFE6] border-b border-[#DCD6CA] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 sm:pb-16 border-b border-[#DCD6CA] mb-16 sm:mb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#8C6D1F] uppercase font-semibold">
                  ENGINEERING METHODOLOGY
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

        {/* Primary Visual: 4-Stage State Transformation Workbench */}
        <div className="mb-16 sm:mb-20">
          
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
                  ENGINEERING APPROACH
                </span>
                <span className="text-[#8E9CA8]">/</span>
                <span className="uppercase tracking-wider">
                  STAGE {current.num}: {current.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-[#8C6D1F] font-semibold">
                  {current.flow}
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

                    {/* Operational Facets */}
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
                    <span>ARCHITECTURE</span>
                    <span>→</span>
                    <span className="font-semibold text-[#8C6D1F]">SOFTWARE</span>
                  </div>
                </div>

                {/* Right Column: Explanatory Diagram & Specification Tree (6 Cols) */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Visual Process Diagram */}
                  <div
                    className={`p-5 border ${
                      current.isDark
                        ? "bg-[#0B131C] border-white/15 text-[#F4EFE6]"
                        : "bg-[#FAF8F5] border-[#DCD6CA] text-[#0E1720]"
                    }`}
                  >
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-inherit/20 text-xs font-mono">
                      <span className="font-semibold tracking-wider text-[#8C6D1F]">
                        {current.diagramTitle}
                      </span>
                      <span className="text-[10px] text-[#8E9CA8] uppercase">4-STEP FLOW</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {current.diagramSteps.map((dStep) => (
                        <div
                          key={dStep.step}
                          className={`p-3 border ${
                            current.isDark
                              ? "bg-[#141E28] border-white/10"
                              : "bg-[#FFFFFF] border-[#EAE5DB]"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono text-[10px] font-bold text-[#8C6D1F]">
                              {dStep.step}
                            </span>
                            <span className="font-mono text-[9px] uppercase tracking-wider text-[#8E9CA8]">
                              NODE
                            </span>
                          </div>
                          <div className="font-mono text-[11px] font-semibold uppercase mb-1">
                            {dStep.label}
                          </div>
                          <div
                            className={`text-[11px] font-sans leading-snug ${
                              current.isDark ? "text-[#A7B4C2]" : "text-[#5C6975]"
                            }`}
                          >
                            {dStep.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specification Tree */}
                  <div
                    className={`p-5 border font-mono text-xs ${
                      current.isDark
                        ? "bg-[#070D13] border-white/15 text-[#FAF7F2]"
                        : "bg-[#FAF8F5] border-[#DCD6CA] text-[#0E1720]"
                    }`}
                  >
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-inherit/20 text-xs">
                      <span className="font-semibold tracking-wider text-[#8C6D1F]">
                        {current.treeTitle}
                      </span>
                      <span className="text-[10px] text-[#8E9CA8] uppercase">ELEMENTS</span>
                    </div>

                    <div className="space-y-2.5 text-[12px] leading-relaxed">
                      {current.treeNodes.map((node, i) => {
                        const isLast = i === current.treeNodes.length - 1;
                        return (
                          <div key={node.key} className="flex items-start gap-2">
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
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
