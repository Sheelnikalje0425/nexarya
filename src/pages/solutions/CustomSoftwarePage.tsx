import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import { ArrowRight, ArrowLeft } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const ENGINEERING_DIMENSIONS = [
  {
    num: "01",
    id: "domain-model",
    title: "DOMAIN MODEL",
    headline: "Represent the business entities, relationships, and operational rules.",
    desc: "We translate your organizational roles, approval hierarchies, and business constraints directly into explicit domain logic and state schemas.",
  },
  {
    num: "02",
    id: "workflow",
    title: "WORKFLOW",
    headline: "Translate real operational processes into explicit system states.",
    desc: "Deterministic state machines replace informal handoffs, ensuring operations move forward only when required validation gates are verified.",
  },
  {
    num: "03",
    id: "interface",
    title: "INTERFACE",
    headline: "Create interfaces around the people and tasks that use the system.",
    desc: "Purpose-built operator consoles and stakeholder views designed around actual daily tasks, eliminating cognitive clutter and multi-tab confusion.",
  },
  {
    num: "04",
    id: "data",
    title: "DATA",
    headline: "Structure information so it can move reliably through the system.",
    desc: "Relational data structures, immutable audit logs, and transactional integrity protect critical records and eliminate data loss.",
  },
  {
    num: "05",
    id: "integrations",
    title: "INTEGRATIONS",
    headline: "Connect the system to required external services and existing tools.",
    desc: "Bi-directional API gateways and transactional webhooks bridge internal operations to legacy systems, banking rails, or external authorities.",
  },
  {
    num: "06",
    id: "runtime",
    title: "RUNTIME",
    headline: "Design deployment and infrastructure around the production needs.",
    desc: "Containerized environments, automated deployment pipelines, and monitored cloud infrastructure provisioned for high uptime and complete data ownership.",
  },
];

const METHODOLOGY_STAGES = [
  {
    num: "01",
    title: "UNDERSTAND",
    desc: "Understand the business workflow, operator roles, and operational reality before writing code.",
  },
  {
    num: "02",
    title: "STRUCTURE",
    desc: "Model domains, entities, relationships, and state transitions into explicit schemas.",
  },
  {
    num: "03",
    title: "ENGINEER",
    desc: "Turn the domain model into strictly-typed, modular, and maintainable software.",
  },
  {
    num: "04",
    title: "DELIVER",
    desc: "Deploy the system to secure cloud runtimes with monitoring, audit logs, and documentation.",
  },
];

export default function CustomSoftwarePage() {
  const [activeDimensionIdx, setActiveDimensionIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeDim = ENGINEERING_DIMENSIONS[activeDimensionIdx];

  return (
    <div className="bg-[#F1EDE3] text-[#17202B] min-h-screen select-none">
      <SEOHead
        title="Custom Software Development | NEXARYA"
        description="Custom software engineered around your business workflows, operations and requirements."
      />

      {/* ============================================================ */}
      {/* 01. HERO SECTION (Deep Navy #08101B / #0F1725)               */}
      {/* ============================================================ */}
      <section
        id="custom-software-hero"
        aria-label="Custom Software Engineering Overview"
        className="pt-32 sm:pt-36 lg:pt-42 pb-16 sm:pb-22 bg-[#08101B] text-[#F7F5EF] border-b border-[#243247] relative overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          
          {/* Back Navigation */}
          <div className="mb-6 sm:mb-8">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#B9C0C9] hover:text-[#E8E3D8] transition-colors duration-200"
            >
              <ArrowLeft size={13} className="text-[#C59A3D]" />
              <span>ALL SOLUTIONS</span>
            </Link>
          </div>

          {/* Mobile & Desktop Composition Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Headline & Content Column (7 cols desktop) */}
            <div className="lg:col-span-7">
              <RevealOnScroll>
                {/* Eyebrow */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                  <span className="font-mono text-[10px] sm:text-xs tracking-[0.24em] text-[#C59A3D] uppercase font-semibold">
                    01 // SOLUTION SPECIFICATION
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[4.3rem] leading-[1.04] tracking-[-0.03em] text-[#F7F5EF] font-normal mb-6">
                  Software built around <br />
                  <span className="italic font-normal text-[#E8E3D8]">your way of working.</span>
                </h1>

                {/* Mobile-Only Image Placement (Right after Headline) */}
                <div className="lg:hidden my-6">
                  <div className="bg-[#141F30] border border-[#243247] shadow-[0_12px_40px_rgba(0,0,0,0.4)] overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#08101B]">
                      <img
                        src="/engineering/engineering-studio-developer.jpg"
                        alt="Engineering workstation with multi-screen software architecture diagrams and workflow specifications"
                        loading="eager"
                        decoding="async"
                        width="1024"
                        height="576"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="px-4 py-2.5 bg-[#0F1725] border-t border-[#243247] flex items-center justify-between text-[10px] font-mono text-[#B9C0C9]">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                        <span className="text-[#F7F5EF] font-semibold uppercase">CONCEPTUAL ARCHITECTURE</span>
                      </div>
                      <span className="text-[#C59A3D] uppercase font-semibold">EDITORIAL EVIDENCE</span>
                    </div>
                  </div>
                </div>

                {/* Supporting Copy */}
                <p className="font-sans text-base sm:text-lg lg:text-[1.15rem] text-[#B9C0C9] max-w-xl font-light leading-relaxed mb-8 sm:mb-10">
                  When off-the-shelf software forces your business to work around its limitations, we design and engineer a system around the workflow itself.
                </p>

                {/* Action Triggers */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                  <Link
                    to="/contact"
                    className="px-7 py-3.5 bg-[#C59A3D] hover:bg-[#E0BD68] text-[#0F1725] font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200 text-center min-h-[48px] flex items-center justify-center gap-2"
                  >
                    <span>START A PROJECT</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    to="/work"
                    className="px-7 py-3.5 bg-transparent hover:bg-[#141F30] text-[#F7F5EF] border border-[#243247] font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200 text-center min-h-[48px] flex items-center justify-center"
                  >
                    <span>VIEW OUR WORK</span>
                  </Link>
                </div>

                {/* Restrained Transformation Flow Docket */}
                <div className="pt-5 border-t border-[#243247]/80 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#7F8A99]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C59A3D] font-semibold">TRANSFORMATION:</span>
                    <span className="text-[#B9C0C9]">
                      OPERATIONAL REALITY &rarr; DOMAIN MODEL &rarr; CUSTOM SOFTWARE
                    </span>
                  </div>
                  <span className="text-[#C59A3D] text-[10px] uppercase tracking-widest hidden sm:inline">
                    PURPOSE-BUILT SYSTEM
                  </span>
                </div>
              </RevealOnScroll>
            </div>

            {/* Desktop Large Conceptual Visual Column (5 cols, ~42% width) */}
            <div className="hidden lg:block lg:col-span-5">
              <RevealOnScroll delayMs={80}>
                <div className="bg-[#141F30] border border-[#243247] shadow-[0_16px_50px_rgba(0,0,0,0.45)] overflow-hidden">
                  <div className="relative aspect-[4/3] xl:aspect-[16/11] overflow-hidden bg-[#08101B]">
                    <img
                      src="/engineering/engineering-studio-developer.jpg"
                      alt="Engineering workstation with multi-screen software architecture diagrams and workflow specifications"
                      loading="eager"
                      decoding="async"
                      width="1024"
                      height="576"
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>

                  {/* Restrained Architectural Caption Strip */}
                  <div className="px-5 py-3.5 bg-[#0F1725] border-t border-[#243247] flex items-center justify-between gap-3 text-[11px] font-mono">
                    <div className="flex items-center gap-2 text-[#B9C0C9] truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D] shrink-0" />
                      <span className="text-[#F7F5EF] font-semibold uppercase tracking-wider truncate">
                        CONCEPTUAL ARCHITECTURE
                      </span>
                    </div>
                    <span className="text-[#C59A3D] text-[10px] uppercase tracking-wider font-semibold shrink-0">
                      EDITORIAL EVIDENCE
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02. THE PROBLEM (Warm Ivory #E8E3D8)                         */}
      {/* ============================================================ */}
      <section
        id="custom-software-problem"
        aria-labelledby="problem-heading"
        className="py-18 sm:py-24 bg-[#E8E3D8] border-b border-[#DED7C9] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-4xl mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  02 // THE OPERATIONAL REALITY
                </span>
              </div>

              <h2
                id="problem-heading"
                className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#17202B] leading-[1.06] tracking-[-0.03em] font-normal"
              >
                When the software doesn't fit, <br />
                <span className="italic font-normal">the work absorbs the cost.</span>
              </h2>
            </div>

            {/* Concise Statements with Hairline Rules (No Card Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 pt-8 border-t border-[#DED7C9]">
              <div className="space-y-2">
                <span className="font-mono text-[11px] font-bold text-[#17202B] uppercase tracking-wider block">
                  01 // TEAMS ADAPTING TO RIGID SOFTWARE
                </span>
                <p className="font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed">
                  Operations bend to match the constraints of generic tools, forcing operators to execute manual workarounds outside the software.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[11px] font-bold text-[#17202B] uppercase tracking-wider block">
                  02 // DUPLICATED WORK & SILOS
                </span>
                <p className="font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed">
                  Data is re-entered across multiple spreadsheets and detached portals, creating reconciliation delays and operational friction.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#DED7C9]/60 sm:border-t-0">
                <span className="font-mono text-[11px] font-bold text-[#17202B] uppercase tracking-wider block">
                  03 // FRAGMENTED INFORMATION
                </span>
                <p className="font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed">
                  Critical operational history lives scattered in email threads, shared drives, and tribal memory with no centralized audit log.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#DED7C9]/60 sm:border-t-0">
                <span className="font-mono text-[11px] font-bold text-[#17202B] uppercase tracking-wider block">
                  04 // WORKFLOWS CONSTRAINED BY TOOLS
                </span>
                <p className="font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed">
                  Business growth is throttled not by market opportunity, but by software architecture that cannot adapt to operational evolution.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03. THE SYSTEM RESPONSE (Warm Ivory #F8F5EE)                 */}
      {/* ============================================================ */}
      <section
        id="custom-software-response"
        aria-labelledby="response-heading"
        className="py-18 sm:py-26 bg-[#F8F5EE] border-b border-[#DED7C9] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-3xl mb-14 sm:mb-18">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  03 // THE SYSTEM RESPONSE
                </span>
              </div>

              <h2
                id="response-heading"
                className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#17202B] leading-[1.06] tracking-[-0.03em] font-normal mb-5"
              >
                Build the system around <br />
                <span className="italic font-normal">the operation.</span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#394352] font-light leading-relaxed">
                Instead of adapting the business to an existing product, the system is shaped around the actual workflow.
              </p>
            </div>

            {/* Architectural Sequence (Prominent Visual Moment: WORK -> RULES -> SYSTEM -> INTERFACE) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
              
              {/* Step 1 */}
              <div className="space-y-3 pb-6 border-b sm:border-b-0 sm:border-r border-[#DED7C9]/70 pr-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-editorial text-3xl text-[#17202B]">01</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C59A3D] font-bold">
                    INPUT
                  </span>
                </div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#17202B]">
                  WORK
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                  Map how physical, operational, and departmental tasks occur in reality.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-3 pb-6 border-b sm:border-b-0 sm:border-r border-[#DED7C9]/70 pr-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-editorial text-3xl text-[#17202B]">02</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C59A3D] font-bold">
                    LOGIC
                  </span>
                </div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#17202B]">
                  RULES
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                  Codify business constraints, validation gates, and authorization policies.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-3 pb-6 border-b sm:border-b-0 sm:border-r border-[#DED7C9]/70 pr-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-editorial text-3xl text-[#17202B]">03</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C59A3D] font-bold">
                    ENGINE
                  </span>
                </div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#17202B]">
                  SYSTEM
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                  Architect domain state machines, relational data schemas, and API rails.
                </p>
              </div>

              {/* Step 4 */}
              <div className="space-y-3 pb-6">
                <div className="flex items-baseline justify-between">
                  <span className="font-editorial text-3xl text-[#17202B]">04</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C59A3D] font-bold">
                    OUTPUT
                  </span>
                </div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#17202B]">
                  INTERFACE
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                  Deliver focused consoles tailored to the specific people executing the work.
                </p>
              </div>

            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 04. WHAT WE ENGINEER (Editorial Index #F1EDE3)               */}
      {/* ============================================================ */}
      <section
        id="custom-software-dimensions"
        aria-labelledby="dimensions-heading"
        className="py-18 sm:py-24 bg-[#F1EDE3] border-b border-[#DED7C9] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#DED7C9] mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                  <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                    04 // CORE ARCHITECTURE
                  </span>
                </div>
                <h2
                  id="dimensions-heading"
                  className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-[1.06] tracking-[-0.03em] font-normal"
                >
                  The engineering dimensions we build.
                </h2>
              </div>
              <p className="font-sans text-sm sm:text-base text-[#394352] max-w-md font-light leading-relaxed">
                Six architectural layers designed to translate business rules into reliable, production-ready software.
              </p>
            </div>

            {/* Desktop Split View: Left 01-06 Directory, Right Active Specification */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Numbered Dimension Index (5 cols) */}
              <div className="lg:col-span-5 bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_4px_16px_rgba(15,23,37,0.02)] overflow-hidden divide-y divide-[#DED7C9]">
                {ENGINEERING_DIMENSIONS.map((dim, idx) => {
                  const isActive = activeDimensionIdx === idx;
                  return (
                    <button
                      key={dim.id}
                      type="button"
                      onClick={() => setActiveDimensionIdx(idx)}
                      className={`w-full text-left px-6 py-4.5 transition-colors flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none ${isActive ? "bg-[#0F1725] text-[#F7F5EF]" : "bg-[#FFFFFF] text-[#17202B] hover:bg-[#F8F5EE]"} `}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-xs font-bold ${isActive ? "text-[#C59A3D]" : "text-[#C59A3D]"} `}>
                          {dim.num}
                        </span>
                        <span className={`font-mono text-xs font-bold uppercase tracking-wider ${isActive ? "text-[#F7F5EF]" : "text-[#17202B]"} `}>
                          {dim.title}
                        </span>
                      </div>
                      <ArrowRight
                        size={12}
                        className={`transition-transform ${isActive ? "text-[#C59A3D] translate-x-1" : "text-[#68717B]"} `}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Active Dimension Specification (7 cols) */}
              <div className="lg:col-span-7 bg-[#F8F5EE] border border-[#DED7C9] p-8 sm:p-10 shadow-[0_4px_16px_rgba(15,23,37,0.02)] space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#DED7C9] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#17202B]">{activeDim.num}</span>
                    <span className="text-[#DED7C9]">//</span>
                    <span className="text-[#C59A3D] font-semibold uppercase">{activeDim.title}</span>
                  </div>
                  <span className="text-[10px] text-[#68717B] uppercase tracking-wider">DIMENSION SPECIFICATION</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-[#17202B] leading-snug">
                  {activeDim.headline}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed">
                  {activeDim.desc}
                </p>

                <div className="pt-4 border-t border-[#DED7C9] flex items-center justify-between text-xs font-mono text-[#68717B]">
                  <span>PURPOSE-BUILT ARCHITECTURE</span>
                  <span className="text-[#C59A3D] font-semibold">TYPED & HARDENED</span>
                </div>
              </div>

            </div>

            {/* Mobile View: Compact Tab Selector + Single Active Card */}
            <div className="lg:hidden space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 p-1.5 bg-[#E8E3D8]/70 border border-[#DED7C9]">
                {ENGINEERING_DIMENSIONS.map((dim, idx) => {
                  const isActive = activeDimensionIdx === idx;
                  return (
                    <button
                      key={dim.id}
                      type="button"
                      onClick={() => setActiveDimensionIdx(idx)}
                      className={`p-2.5 text-left border cursor-pointer min-h-[48px] ${isActive ? "bg-[#0F1725] text-[#F7F5EF] border-[#0F1725]" : "bg-[#FFFFFF] text-[#17202B] border-[#DED7C9]"} `}
                    >
                      <span className="font-mono text-[10px] font-bold text-[#C59A3D] block">
                        {dim.num}
                      </span>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider truncate block">
                        {dim.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="p-6 bg-[#F8F5EE] border border-[#DED7C9] shadow-xs space-y-4">
                <span className="font-mono text-[10px] text-[#C59A3D] uppercase font-bold block">
                  {activeDim.num} // {activeDim.title}
                </span>
                <h3 className="font-editorial text-xl text-[#17202B] leading-snug">
                  {activeDim.headline}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                  {activeDim.desc}
                </p>
              </div>
            </div>

          </RevealOnScroll>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 05. ENGINEERING APPROACH (Warm Ivory #E8E3D8)                */}
      {/* ============================================================ */}
      <section
        id="custom-software-approach"
        aria-labelledby="approach-heading"
        className="py-18 sm:py-24 bg-[#E8E3D8] border-b border-[#DED7C9] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#DED7C9] mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                  <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                    05 // METHODOLOGY
                  </span>
                </div>
                <h2
                  id="approach-heading"
                  className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-[1.06] tracking-[-0.03em] font-normal"
                >
                  Our structured engineering approach.
                </h2>
              </div>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1725] hover:bg-[#1A273A] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors shrink-0 min-h-[44px]"
              >
                <span>VIEW OUR PROCESS</span>
                <ArrowRight size={12} className="text-[#C59A3D]" />
              </Link>
            </div>

            {/* 4 Stages Sequence with Light Editorial Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {METHODOLOGY_STAGES.map((st) => (
                <div
                  key={st.num}
                  className="p-6 bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_4px_16px_rgba(15,23,37,0.02)] space-y-3"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-[#E8E3D8]">
                    <span className="font-editorial text-2xl text-[#17202B]">
                      {st.num}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#C59A3D] font-bold">
                      STAGE
                    </span>
                  </div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#17202B]">
                    {st.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 06. THE DIFFERENCE: FIT OVER SUPERIORITY (Warm Ivory #F8F5EE) */}
      {/* ============================================================ */}
      <section
        id="custom-software-difference"
        aria-labelledby="difference-heading"
        className="py-18 sm:py-24 bg-[#F8F5EE] border-b border-[#DED7C9] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  06 // ARCHITECTURAL FIT
                </span>
              </div>
              <h2
                id="difference-heading"
                className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-[1.06] tracking-[-0.03em] font-normal mb-4"
              >
                A fundamental difference in fit.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#394352] font-light leading-relaxed">
                The choice is not about feature quantity, but whether the software shapes around the business or the business bends to the software.
              </p>
            </div>

            {/* Side-by-Side Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Off the Shelf */}
              <div className="p-8 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_4px_16px_rgba(15,23,37,0.02)] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E3D8]">
                  <span className="font-mono text-xs font-bold text-[#68717B] uppercase tracking-wider">
                    OFF-THE-SHELF
                  </span>
                  <span className="font-mono text-[10px] text-[#68717B] uppercase font-semibold">
                    GENERALIZED
                  </span>
                </div>
                <h3 className="font-editorial text-2xl text-[#17202B]">
                  Business adapts to software.
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                  Generalized feature sets designed for broad markets force teams to adjust established internal workflows to fit vendor assumptions.
                </p>
              </div>

              {/* Custom System */}
              <div className="p-8 bg-[#0F1725] text-[#F7F5EF] border border-[#243247] shadow-[0_8px_24px_rgba(15,23,37,0.08)] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#243247]">
                  <span className="font-mono text-xs font-bold text-[#C59A3D] uppercase tracking-wider">
                    CUSTOM SYSTEM
                  </span>
                  <span className="font-mono text-[10px] text-[#C59A3D] uppercase font-bold">
                    PURPOSE-BUILT
                  </span>
                </div>
                <h3 className="font-editorial text-2xl text-[#F7F5EF]">
                  Software adapts to the business.
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#B9C0C9] font-light leading-relaxed">
                  Engineered directly around your operational entities, roles, and validation rules—ensuring exact workflow fit and complete code ownership.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 07. REAL WORK EVIDENCE (Warm Ivory #F1EDE3)                  */}
      {/* ============================================================ */}
      <section
        id="custom-software-proof"
        aria-labelledby="proof-heading"
        className="py-18 sm:py-24 bg-[#F1EDE3] border-b border-[#DED7C9] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  07 // VERIFIED WORK
                </span>
              </div>
              <h2
                id="proof-heading"
                className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-[1.06] tracking-[-0.03em] font-normal mb-4"
              >
                Built around an institutional workflow.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#394352] font-light leading-relaxed">
                Evidence of custom software engineered to eliminate manual paper queues and establish deterministic verification gates.
              </p>
            </div>

            {/* Railway Concession Management System Proof Card */}
            <div className="p-8 sm:p-10 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_6px_24px_rgba(15,23,37,0.03)] space-y-7">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8E3D8]">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C59A3D] font-bold block mb-1">
                    VERIFIED PRODUCTION SYSTEM
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#17202B]">
                    Railway Concession Management System
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {["Python", "Flask", "MySQL", "Docker", "AWS"].map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2.5 py-1 bg-[#F8F5EE] border border-[#DED7C9] text-[#17202B] uppercase font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5-Stage Deterministic Workflow */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#68717B] font-bold block mb-3">
                  VERIFIED OPERATIONAL WORKFLOW:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center font-mono text-xs">
                  {["01 APPLICATION", "02 VERIFICATION", "03 APPROVAL", "04 PASS ISSUANCE", "05 AUDIT"].map((step) => (
                    <div
                      key={step}
                      className="p-3 bg-[#F8F5EE] border border-[#DED7C9] text-[#17202B] font-semibold text-[11px] truncate"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description & Action */}
              <div className="pt-4 border-t border-[#E8E3D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="font-sans text-xs sm:text-sm text-[#394352] font-light max-w-2xl leading-relaxed">
                  Replaced manual multi-office paper verification with an auditable institutional platform governing transit concession approvals.
                </p>
                <Link
                  to="/work/railway-concession-management"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#17202B] hover:text-[#C59A3D] font-bold uppercase tracking-wider transition-colors shrink-0"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight size={12} className="text-[#C59A3D]" />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 08. FINAL CONVERSION CTA (Deep Navy #08101B / #0F1725)       */}
      {/* ============================================================ */}
      <section
        id="custom-software-cta"
        aria-label="Start a Project CTA"
        className="py-18 sm:py-24 bg-[#08101B] text-[#F7F5EF] relative select-none overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Headline Column */}
            <div className="lg:col-span-7">
              <RevealOnScroll>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                  <span className="font-mono text-xs tracking-[0.22em] text-[#C59A3D] uppercase font-semibold">
                    08 // START A PROJECT
                  </span>
                </div>

                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F7F5EF] leading-[1.05] tracking-[-0.025em] mb-4.5 font-normal">
                  Have a workflow that <br />
                  <span className="italic font-normal text-[#E8E3D8]">existing software can't handle?</span>
                </h2>

                <p className="font-sans text-base sm:text-lg text-[#B9C0C9] font-light leading-relaxed max-w-xl">
                  Tell us how the work happens today. We'll help determine what the right system should look like.
                </p>
              </RevealOnScroll>
            </div>

            {/* Right Conversion Card */}
            <div className="lg:col-span-5">
              <RevealOnScroll delayMs={80}>
                <div className="p-7 sm:p-9 bg-[#141F30] border border-[#243247] shadow-[0_12px_40px_rgba(0,0,0,0.35)] space-y-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C59A3D] font-semibold block">
                    DIRECT LEADERSHIP ACCESS
                  </span>

                  <h3 className="font-editorial text-2xl text-[#F7F5EF] font-normal leading-snug">
                    Schedule a technical scoping session.
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#B9C0C9] font-light leading-relaxed">
                    We evaluate your operational workflows directly to define an actionable custom software architecture.
                  </p>

                  <Link
                    to="/contact"
                    className="flex items-center justify-between w-full px-6 py-3.5 bg-[#C59A3D] text-[#0F1725] hover:bg-[#E0BD68] transition-colors duration-200 font-mono text-xs uppercase tracking-wider font-semibold min-h-[48px] group"
                  >
                    <span>START A PROJECT</span>
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <div className="pt-3 border-t border-[#243247] flex items-center justify-between text-xs font-mono text-[#B9C0C9]">
                    <span>DIRECT INQUIRIES:</span>
                    <a
                      href="mailto:hello@nexarya.in"
                      className="text-[#E0BD68] font-semibold hover:text-[#FFFFFF] transition-colors"
                    >
                      hello@nexarya.in
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}