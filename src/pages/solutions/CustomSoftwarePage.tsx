import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import { ArrowRight, ArrowLeft } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";

const ENGINEERING_DIMENSIONS = [
  {
    num: "01",
    id: "domain-model",
    title: "Domain Model",
    headline: "Represent the business entities, relationships, and operational rules.",
    desc: "We translate your organizational roles, approval hierarchies, and business constraints directly into explicit domain logic and state schemas.",
  },
  {
    num: "02",
    id: "workflow",
    title: "Workflow",
    headline: "Translate real operational processes into explicit system states.",
    desc: "Deterministic state machines replace informal handoffs, ensuring operations move forward only when required validation gates are verified.",
  },
  {
    num: "03",
    id: "interface",
    title: "Interface",
    headline: "Create interfaces around the people and tasks that use the system.",
    desc: "Purpose-built operator consoles and stakeholder views designed around actual daily tasks, eliminating cognitive clutter and multi-tab confusion.",
  },
  {
    num: "04",
    id: "data",
    title: "Data",
    headline: "Structure information so it can move reliably through the system.",
    desc: "Relational data structures, immutable audit logs, and transactional integrity protect critical records and eliminate data loss.",
  },
  {
    num: "05",
    id: "integrations",
    title: "Integrations",
    headline: "Connect the system to required external services and existing tools.",
    desc: "Bi-directional API gateways and transactional webhooks bridge internal operations to legacy systems, banking rails, or external authorities.",
  },
  {
    num: "06",
    id: "runtime",
    title: "Runtime",
    headline: "Design deployment and infrastructure around production needs.",
    desc: "Containerized environments, automated deployment pipelines, and monitored cloud infrastructure provisioned for high uptime and complete data ownership.",
  },
];

export default function CustomSoftwarePage() {
  const [activeDimensionIdx, setActiveDimensionIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeDim = ENGINEERING_DIMENSIONS[activeDimensionIdx];

  return (
    <div className="bg-[#F8F5EE] text-[#141B26] min-h-screen select-none">
      <SEOHead
        title="Custom Software Development — Solutions | Nexarya"
        description="Custom software engineered around your business workflows, operations, and requirements."
      />

      {/* 01. Hero Section (Navy) */}
      <section
        id="custom-software-hero"
        aria-label="Custom Software Engineering Overview"
        className="pt-32 sm:pt-36 lg:pt-42 pb-16 sm:pb-22 bg-[#0A1117] text-[#F8F5EE] border-b border-[#243247] relative overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          
          <div className="mb-6 sm:mb-8">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-[#B9C0C9] hover:text-[#FFFFFF] transition-colors"
            >
              <ArrowLeft size={13} className="text-[#D4A72C]" />
              <span>All solutions</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <RevealOnScroll>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C]" />
                  <span className="font-sans text-[12px] sm:text-[13px] tracking-wider text-[#D4A72C] uppercase font-semibold">
                    Custom Software
                  </span>
                </div>

                <h1 className="font-editorial text-balance text-4xl sm:text-6xl md:text-7xl lg:text-[4.3rem] leading-[1.04] tracking-[-0.03em] text-[#F8F5EE] font-normal mb-6">
                  Software built around <br />
                  <span className="italic font-normal text-[#E8E3D8]">your way of working.</span>
                </h1>

                <div className="lg:hidden my-6">
                  <div className="bg-[#141F30] border border-[#243247] shadow-xl overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0A1117]">
                      <img
                        src="/engineering/engineering-studio-developer.jpg"
                        alt="Engineering workstation with software architecture diagrams"
                        loading="eager"
                        decoding="async"
                        width="1024"
                        height="576"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                <p className="font-sans text-base sm:text-lg lg:text-[1.15rem] text-[#B9C0C9] max-w-xl font-light leading-relaxed mb-8 sm:mb-10">
                  When off-the-shelf software forces your business to work around its limitations, we design and engineer a system around the workflow itself.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button href="/contact" variant="primary" size="md">
                    Start a project &rarr;
                  </Button>
                  <Button href="/work" variant="dark" size="md">
                    View our work
                  </Button>
                </div>
              </RevealOnScroll>
            </div>

            <div className="hidden lg:block lg:col-span-5">
              <RevealOnScroll delayMs={80}>
                <div className="bg-[#141F30] border border-[#243247] shadow-2xl overflow-hidden">
                  <div className="relative aspect-[4/3] xl:aspect-[16/11] overflow-hidden bg-[#0A1117]">
                    <img
                      src="/engineering/engineering-studio-developer.jpg"
                      alt="Engineering workstation with software architecture diagrams"
                      loading="eager"
                      decoding="async"
                      width="1024"
                      height="576"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="px-5 py-3.5 bg-[#0A1117] border-t border-[#243247] flex items-center justify-between gap-3 text-xs font-sans">
                    <div className="flex items-center gap-2 text-[#B9C0C9]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C] shrink-0" />
                      <span className="text-[#F8F5EE] font-semibold">
                        System Architecture
                      </span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* 02. The Problem */}
      <section
        id="custom-software-problem"
        aria-labelledby="problem-heading"
        className="py-18 sm:py-24 bg-[#F8F5EE] border-b border-[#E3DDCF] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-4xl mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  The Problem
                </span>
              </div>

              <h2
                id="problem-heading"
                className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#141B26] leading-[1.06] tracking-[-0.03em] font-normal"
              >
                When software doesn't fit, <br />
                <span className="italic font-normal">the work absorbs the cost.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 pt-8 border-t border-[#E3DDCF]">
              <div className="space-y-2">
                <span className="font-sans text-sm font-bold text-[#141B26] block">
                  Teams adapting to rigid software
                </span>
                <p className="font-sans text-sm text-[#4A5363] font-light leading-relaxed">
                  Operations bend to match the constraints of generic tools, forcing operators to execute manual workarounds outside the software.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-sans text-sm font-bold text-[#141B26] block">
                  Duplicated work and silos
                </span>
                <p className="font-sans text-sm text-[#4A5363] font-light leading-relaxed">
                  Data is re-entered across multiple spreadsheets and detached portals, creating reconciliation delays and operational friction.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#E3DDCF]/60 sm:border-t-0">
                <span className="font-sans text-sm font-bold text-[#141B26] block">
                  Fragmented information
                </span>
                <p className="font-sans text-sm text-[#4A5363] font-light leading-relaxed">
                  Critical operational history lives scattered in email threads, shared drives, and tribal memory with no centralized audit log.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#E3DDCF]/60 sm:border-t-0">
                <span className="font-sans text-sm font-bold text-[#141B26] block">
                  Workflows constrained by tools
                </span>
                <p className="font-sans text-sm text-[#4A5363] font-light leading-relaxed">
                  Business growth is throttled not by market opportunity, but by software architecture that cannot adapt to operational evolution.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 03. The System Response */}
      <section
        id="custom-software-response"
        aria-labelledby="response-heading"
        className="py-18 sm:py-24 bg-[#FFFFFF] border-b border-[#E3DDCF] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-3xl mb-14">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  The System Response
                </span>
              </div>

              <h2
                id="response-heading"
                className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#141B26] leading-[1.06] tracking-[-0.03em] font-normal mb-4"
              >
                Build the system around <br />
                <span className="italic font-normal">the operation.</span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#4A5363] font-light leading-relaxed">
                Instead of adapting the business to an existing product, the system is shaped around the actual workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="p-6 bg-[#F8F5EE] border border-[#E3DDCF] space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-editorial text-2xl text-[#141B26]">01</span>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#765406] font-semibold">
                    Input
                  </span>
                </div>
                <h3 className="font-sans text-sm font-bold text-[#141B26]">
                  Work
                </h3>
                <p className="font-sans text-xs text-[#4A5363] font-light leading-relaxed">
                  Map how physical, operational, and departmental tasks occur in reality.
                </p>
              </div>

              <div className="p-6 bg-[#F8F5EE] border border-[#E3DDCF] space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-editorial text-2xl text-[#141B26]">02</span>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#765406] font-semibold">
                    Logic
                  </span>
                </div>
                <h3 className="font-sans text-sm font-bold text-[#141B26]">
                  Rules
                </h3>
                <p className="font-sans text-xs text-[#4A5363] font-light leading-relaxed">
                  Codify business constraints, validation gates, and authorization policies.
                </p>
              </div>

              <div className="p-6 bg-[#F8F5EE] border border-[#E3DDCF] space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-editorial text-2xl text-[#141B26]">03</span>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#765406] font-semibold">
                    Engine
                  </span>
                </div>
                <h3 className="font-sans text-sm font-bold text-[#141B26]">
                  System
                </h3>
                <p className="font-sans text-xs text-[#4A5363] font-light leading-relaxed">
                  Architect domain state machines, relational data schemas, and API rails.
                </p>
              </div>

              <div className="p-6 bg-[#F8F5EE] border border-[#E3DDCF] space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-editorial text-2xl text-[#141B26]">04</span>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#765406] font-semibold">
                    Output
                  </span>
                </div>
                <h3 className="font-sans text-sm font-bold text-[#141B26]">
                  Interface
                </h3>
                <p className="font-sans text-xs text-[#4A5363] font-light leading-relaxed">
                  Deliver focused consoles tailored to the specific people executing the work.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 04. Engineering Dimensions */}
      <section
        id="custom-software-dimensions"
        aria-labelledby="dimensions-heading"
        className="py-18 sm:py-24 bg-[#F8F5EE] border-b border-[#E3DDCF] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E3DDCF] mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                  <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                    Architecture
                  </span>
                </div>
                <h2
                  id="dimensions-heading"
                  className="font-editorial text-3xl sm:text-5xl text-[#141B26] leading-[1.06] tracking-[-0.03em] font-normal"
                >
                  The engineering dimensions we build.
                </h2>
              </div>
              <p className="font-sans text-sm sm:text-base text-[#4A5363] max-w-md font-light leading-relaxed">
                Six architectural layers designed to translate business rules into reliable, production-ready software.
              </p>
            </div>

            {/* Desktop Split View */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs overflow-hidden divide-y divide-[#E3DDCF]">
                {ENGINEERING_DIMENSIONS.map((dim, idx) => {
                  const isActive = activeDimensionIdx === idx;
                  return (
                    <button
                      key={dim.id}
                      type="button"
                      onClick={() => setActiveDimensionIdx(idx)}
                      className={`w-full text-left px-6 py-4.5 transition-colors flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none ${
                        isActive
                          ? "bg-[#0A1117] text-[#F8F5EE]"
                          : "bg-[#FFFFFF] text-[#141B26] hover:bg-[#F8F5EE]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-editorial text-base ${isActive ? "text-[#D4A72C]" : "text-[#765406]"}`}>
                          {dim.num}
                        </span>
                        <span className={`font-sans text-sm font-semibold ${isActive ? "text-[#F8F5EE]" : "text-[#141B26]"}`}>
                          {dim.title}
                        </span>
                      </div>
                      <ArrowRight
                        size={14}
                        className={`transition-transform ${isActive ? "text-[#D4A72C] translate-x-1" : "text-[#68717B]"}`}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E3DDCF] p-8 sm:p-10 shadow-xs space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#E3DDCF] text-xs font-sans">
                  <div className="flex items-center gap-2">
                    <span className="font-editorial text-base font-bold text-[#141B26]">{activeDim.num}</span>
                    <span>&middot;</span>
                    <span className="text-[#765406] font-semibold">{activeDim.title}</span>
                  </div>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-[#141B26] leading-snug">
                  {activeDim.headline}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#4A5363] font-light leading-relaxed">
                  {activeDim.desc}
                </p>
              </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 p-1.5 bg-[#FFFFFF] border border-[#E3DDCF]">
                {ENGINEERING_DIMENSIONS.map((dim, idx) => {
                  const isActive = activeDimensionIdx === idx;
                  return (
                    <button
                      key={dim.id}
                      type="button"
                      onClick={() => setActiveDimensionIdx(idx)}
                      className={`p-2.5 text-left border cursor-pointer min-h-[48px] ${
                        isActive
                          ? "bg-[#0A1117] text-[#F8F5EE] border-[#0A1117]"
                          : "bg-[#FFFFFF] text-[#141B26] border-[#E3DDCF]"
                      }`}
                    >
                      <span className="font-editorial text-xs font-bold text-[#765406] block">
                        {dim.num}
                      </span>
                      <span className="font-sans text-xs font-semibold truncate block">
                        {dim.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="p-6 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs space-y-3">
                <span className="font-sans text-xs text-[#765406] uppercase font-semibold block">
                  {activeDim.num} &middot; {activeDim.title}
                </span>
                <h3 className="font-editorial text-xl text-[#141B26] leading-snug">
                  {activeDim.headline}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4A5363] font-light leading-relaxed">
                  {activeDim.desc}
                </p>
              </div>
            </div>

          </RevealOnScroll>
        </div>
      </section>

      {/* 05. How We Work / Process Bridge */}
      <section
        id="custom-software-approach"
        aria-labelledby="approach-heading"
        className="py-16 sm:py-20 bg-[#F8F5EE] border-b border-[#E3DDCF] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="p-8 sm:p-12 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                  <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                    Engineering Process
                  </span>
                </div>
                <h2
                  id="approach-heading"
                  className="font-editorial text-3xl sm:text-4xl text-[#141B26] leading-tight font-normal mb-3"
                >
                  Our structured engineering approach.
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#4A5363] font-light leading-relaxed">
                  We translate operational reality into reliable software through a 4-stage engineering cycle.
                </p>
              </div>
              <div className="shrink-0">
                <Button href="/process" variant="secondary" size="md">
                  View our process &rarr;
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 06. Off-the-shelf vs Custom */}
      <section
        id="custom-software-difference"
        aria-labelledby="difference-heading"
        className="py-18 sm:py-24 bg-[#F8F5EE] border-b border-[#E3DDCF] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  Architectural Fit
                </span>
              </div>
              <h2
                id="difference-heading"
                className="font-editorial text-3xl sm:text-5xl text-[#141B26] leading-[1.06] tracking-[-0.03em] font-normal mb-4"
              >
                A fundamental difference in fit.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#4A5363] font-light leading-relaxed">
                The choice is not about feature quantity, but whether the software shapes around the business or the business bends to the software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs space-y-4">
                <div className="pb-3 border-b border-[#E3DDCF]">
                  <span className="font-sans text-xs font-bold text-[#765406] uppercase tracking-wider">
                    Off-the-shelf software
                  </span>
                </div>
                <h3 className="font-editorial text-2xl text-[#141B26]">
                  Business adapts to software.
                </h3>
                <p className="font-sans text-sm text-[#4A5363] font-light leading-relaxed">
                  Generalized feature sets designed for broad markets force teams to adjust established internal workflows to fit vendor assumptions.
                </p>
              </div>

              <div className="p-8 bg-[#0A1117] text-[#F8F5EE] border border-[#243247] shadow-xl space-y-4">
                <div className="pb-3 border-b border-[#243247]">
                  <span className="font-sans text-xs font-bold text-[#D4A72C] uppercase tracking-wider">
                    Custom system
                  </span>
                </div>
                <h3 className="font-editorial text-2xl text-[#F8F5EE]">
                  Software adapts to the business.
                </h3>
                <p className="font-sans text-sm text-[#B9C0C9] font-light leading-relaxed">
                  Engineered directly around your operational entities, roles, and validation rules—ensuring exact workflow fit and complete code ownership.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 07. Real Work Evidence */}
      <section
        id="custom-software-proof"
        aria-labelledby="proof-heading"
        className="py-18 sm:py-24 bg-[#F8F5EE] border-b border-[#E3DDCF] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  Selected Case Study
                </span>
              </div>
              <h2
                id="proof-heading"
                className="font-editorial text-3xl sm:text-5xl text-[#141B26] leading-[1.06] tracking-[-0.03em] font-normal mb-4"
              >
                Built around an institutional workflow.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#4A5363] font-light leading-relaxed">
                Evidence of custom software engineered to eliminate manual paper queues and establish deterministic verification gates.
              </p>
            </div>

            <div className="p-8 sm:p-10 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E3DDCF]">
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#765406] font-bold block mb-1">
                    Verified Production System
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#141B26]">
                    Railway Concession Management System
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {["Python", "Flask", "MySQL", "Docker", "AWS"].map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 bg-[#F8F5EE] border border-[#E3DDCF] text-[#141B26]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="font-sans text-sm text-[#4A5363] font-light max-w-2xl leading-relaxed">
                  Replaced manual multi-office paper verification with an auditable institutional platform governing transit concession approvals.
                </p>
                <Link
                  to="/work/railway-concession-management"
                  className="inline-flex items-center gap-2 font-sans text-xs text-[#141B26] hover:text-[#765406] font-semibold transition-colors shrink-0"
                >
                  <span>View case study</span>
                  <ArrowRight size={12} className="text-[#765406]" />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 08. Final Conversion CTA */}
      <section
        id="custom-software-cta"
        aria-label="Start a Project CTA"
        className="py-18 sm:py-24 bg-[#0A1117] text-[#F8F5EE] relative select-none overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <RevealOnScroll>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C]" />
                  <span className="font-sans text-[12px] tracking-wider text-[#D4A72C] uppercase font-semibold">
                    Start a Project
                  </span>
                </div>

                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F8F5EE] leading-[1.05] tracking-[-0.025em] mb-4.5 font-normal">
                  Have a workflow that <br />
                  <span className="italic font-normal text-[#E8E3D8]">existing software can't handle?</span>
                </h2>

                <p className="font-sans text-base sm:text-lg text-[#B9C0C9] font-light leading-relaxed max-w-xl">
                  Tell us how the work happens today. We'll help determine what the right system should look like.
                </p>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-5">
              <RevealOnScroll delayMs={80}>
                <div className="p-7 sm:p-9 bg-[#141F30] border border-[#243247] shadow-xl space-y-5">
                  <span className="font-sans text-[12px] tracking-wider text-[#D4A72C] font-semibold uppercase block">
                    Direct Leadership Access
                  </span>

                  <h3 className="font-editorial text-2xl text-[#F8F5EE] font-normal leading-snug">
                    Schedule a technical scoping session.
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#B9C0C9] font-light leading-relaxed">
                    We evaluate your operational workflows directly to define an actionable custom software architecture.
                  </p>

                  <Button href="/contact" variant="primary" size="md" className="w-full text-center justify-center">
                    Start a project &rarr;
                  </Button>

                  <div className="pt-3 border-t border-[#243247] flex items-center justify-between text-xs font-sans text-[#B9C0C9]">
                    <span>Direct inquiries:</span>
                    <a
                      href="mailto:hello@nexarya.in"
                      className="text-[#D4A72C] font-semibold hover:text-[#FFFFFF] transition-colors"
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