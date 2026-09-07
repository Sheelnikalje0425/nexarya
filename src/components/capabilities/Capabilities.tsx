import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Capability {
  num: string;
  title: string;
  tag: string;
  slug: string;
  problemSolved: string;
  approach: string;
  concepts: string[];
  verifiedReference?: { title: string; href: string };
}

const CAPABILITIES: Capability[] = [
  {
    num: "01",
    title: "Custom Software",
    tag: "PURPOSE-BUILT SYSTEMS",
    slug: "custom-software",
    problemSolved: "Workflows that don't fit neatly into off-the-shelf software or rigid SaaS templates.",
    approach: "We design domain models, database schemas, and tailored application logic directly around your operational constraints, ensuring full IP ownership and zero technical debt.",
    concepts: ["Domain-Driven Modeling", "Relational Data Architecture", "Typed APIs", "Custom Logic"],
    verifiedReference: { title: "Railway Concession Management System", href: "/work/railway-concession-management-system" },
  },
  {
    num: "02",
    title: "AI & Automation",
    tag: "APPLIED AUTOMATION",
    slug: "ai-automation",
    problemSolved: "Manual data extraction bottlenecks, repetitive clerical work, and unstructured document processing.",
    approach: "We integrate deterministic parsing pipelines and intelligent automation where they measurably reduce turnaround time, backed by strict schema validation guardrails.",
    concepts: ["Document Intelligence", "Schema Validation", "Automated Pipelines", "Human-in-the-Loop"],
  },
  {
    num: "03",
    title: "Web Applications",
    tag: "FULL-STACK PLATFORMS",
    slug: "web-applications",
    problemSolved: "Complex stakeholder portals, interactive digital platforms, and slow legacy interfaces.",
    approach: "We build high-performance, responsive web platforms using clean component architecture, typed API communication, and relational databases.",
    concepts: ["React Architecture", "TypeScript Safety", "REST Gateways", "Relational Core"],
    verifiedReference: { title: "STEMFUSION Education Platform", href: "/work/stemfusion" },
  },
  {
    num: "04",
    title: "Business Systems",
    tag: "OPERATIONAL WORKFLOWS",
    slug: "business-systems",
    problemSolved: "Fragmented paper forms, multi-party verification queues, and lack of operational audit trails.",
    approach: "We engineer centralized operations platforms with structured verification workflows, role-based authorization gates, and immutable activity logs.",
    concepts: ["Sequential Verification", "Role Boundaries", "State Transitions", "Audit Logging"],
    verifiedReference: { title: "Railway Concession Management System", href: "/work/railway-concession-management-system" },
  },
  {
    num: "05",
    title: "Cloud & DevOps",
    tag: "INFRASTRUCTURE & HOSTING",
    slug: "cloud-devops",
    problemSolved: "Unreliable deployments, slow manual releases, and unmonitored infrastructure.",
    approach: "We configure secure cloud environments, reverse proxies, and automated CI/CD pipelines to ensure predictable, zero-downtime deployments.",
    concepts: ["Automated CI/CD", "Containerization", "Reverse Proxy", "Health Monitoring"],
  },
  {
    num: "06",
    title: "QA & Testing",
    tag: "SYSTEM RELIABILITY",
    slug: "qa-testing",
    problemSolved: "Unexpected production regressions, broken layouts on mobile viewports, and edge-case application crashes.",
    approach: "We establish static typechecking, end-to-end user journey tests, and multi-viewport regression suites before software ever ships.",
    concepts: ["Static Type Analysis", "Regression Suites", "Multi-Viewport QA", "Contract Validation"],
  },
  {
    num: "07",
    title: "Integrations",
    tag: "API & DATA CONNECTIVITY",
    slug: "integrations",
    problemSolved: "Siloed departmental tools, manual data reconciliation, and fragile third-party connections.",
    approach: "We construct reliable API gateways, webhook ingress verification, and persistent data synchronization pipelines.",
    concepts: ["API Gateways", "Webhook Ingress", "Payload Transformation", "Idempotent Retries"],
  },
  {
    num: "08",
    title: "SaaS Products",
    tag: "DIGITAL PRODUCTS",
    slug: "saas",
    problemSolved: "Monolithic spreadsheets, lack of customer self-service, and scaling operational workflows.",
    approach: "We engineer multi-user platforms with role-based access control, billing workflows, and activity reporting built for long-term scalability.",
    concepts: ["Role-Based Access", "Client Dashboards", "Billing Workflows", "Scalable Data Core"],
  },
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

  const activeCap = CAPABILITIES[activeIndex];

  const toggleMobile = (idx: number) => {
    setMobileExpanded(mobileExpanded === idx ? null : idx);
  };

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
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
                  CAPABILITIES
                </span>
              </div>
              <h2
                id="capabilities-heading"
                className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#0E1720] leading-[1.05] tracking-[-0.03em] font-normal"
              >
                Systems engineered around{" "}
                <span className="italic font-normal">the work.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] max-w-md font-light leading-relaxed">
              We design and build across eight core software engineering disciplines.
            </p>
          </div>
        </RevealOnScroll>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Split-Index Layout (Left 01-08 Index, Right Detail Panel)   */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Index Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_8px_30px_rgba(14,23,32,0.04)] overflow-hidden">
            <div className="px-6 py-3.5 bg-[#FAF8F5] border-b border-[#DCD6CA] flex items-center justify-between font-mono text-xs text-[#5C6975]">
              <span className="font-semibold text-[#0E1720]">ENGINEERING DISCIPLINES</span>
              <span>INDEX 01–08</span>
            </div>

            <div className="divide-y divide-[#EAE5DB]">
              {CAPABILITIES.map((cap, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={cap.num}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full text-left px-6 py-4 transition-all duration-150 flex items-center justify-between group cursor-pointer focus-visible:outline-none focus-visible:bg-[#FAF8F5] ${
                      isActive ? "bg-[#0E1720] text-[#FAF7F2]" : "bg-[#FFFFFF] text-[#0E1720] hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isActive ? "text-[#8C6D1F]" : "text-[#8E9CA8] group-hover:text-[#0E1720]"
                        }`}
                      >
                        {cap.num}
                      </span>
                      <span
                        className={`font-mono text-xs font-bold uppercase tracking-wider ${
                          isActive ? "text-[#FFFFFF]" : "text-[#0E1720]"
                        }`}
                      >
                        {cap.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-[9px] uppercase tracking-wider hidden xl:inline ${
                          isActive ? "text-[#8C6D1F]" : "text-[#8E9CA8]"
                        }`}
                      >
                        {cap.tag}
                      </span>
                      <ArrowRight
                        size={12}
                        className={`transition-transform duration-200 ${
                          isActive
                            ? "text-[#8C6D1F] translate-x-1"
                            : "text-[#8E9CA8] group-hover:text-[#0E1720] group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detail Panel (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_8px_30px_rgba(14,23,32,0.04)] overflow-hidden">
            {/* Top Bar */}
            <div className="px-6 py-3.5 bg-[#FAF8F5] border-b border-[#DCD6CA] flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2 text-[#5C6975]">
                <span className="font-bold text-[#0E1720]">{activeCap.num}</span>
                <span>/</span>
                <span className="uppercase text-[#8C6D1F] font-semibold">{activeCap.tag}</span>
              </div>

              <Link
                to={`/solutions/${activeCap.slug}`}
                className="text-[#0E1720] hover:text-[#8C6D1F] uppercase font-semibold text-[11px] underline underline-offset-4 flex items-center gap-1"
              >
                <span>FULL SPECIFICATION</span>
                <ArrowRight size={11} />
              </Link>
            </div>

            {/* Panel Content */}
            <div className="p-8 lg:p-10 space-y-8">
              
              {/* Title */}
              <div>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-normal leading-tight mb-2">
                  {activeCap.title}
                </h3>
              </div>

              {/* 1. WHAT PROBLEM DOES THIS SOLVE? */}
              <div className="p-5 bg-[#FAF8F5] border border-[#DCD6CA]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C6D1F] block mb-1.5 font-bold">
                  WHAT PROBLEM DOES THIS SOLVE?
                </span>
                <p className="font-sans text-base text-[#0E1720] font-normal leading-snug">
                  {activeCap.problemSolved}
                </p>
              </div>

              {/* 2. HOW WE APPROACH IT */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E9CA8] block mb-2 font-semibold">
                  HOW WE APPROACH IT
                </span>
                <p className="font-sans text-sm text-[#3A4753] font-light leading-relaxed">
                  {activeCap.approach}
                </p>
              </div>

              {/* 3. SUPPORTING CONCEPTS */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E9CA8] block mb-2.5 font-semibold">
                  ENGINEERING CONCEPTS
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCap.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="font-mono text-[11px] px-3 py-1 bg-[#FAF8F5] border border-[#DCD6CA] text-[#0E1720] tracking-wider uppercase"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4. FOOTER / VERIFIED PROJECT & CTA */}
              <div className="pt-6 border-t border-[#EAE5DB] flex flex-wrap items-center justify-between gap-4">
                {activeCap.verifiedReference ? (
                  <div className="text-xs font-sans text-[#5C6975]">
                    <span>VERIFIED IN: </span>
                    <Link
                      to={activeCap.verifiedReference.href}
                      className="text-[#0E1720] font-semibold underline underline-offset-2 hover:text-[#8C6D1F]"
                    >
                      {activeCap.verifiedReference.title}
                    </Link>
                  </div>
                ) : (
                  <div className="text-xs font-mono text-[#8E9CA8] uppercase">
                    MODULAR DISCIPLINES
                  </div>
                )}

                <Link
                  to="/contact"
                  className="font-mono text-xs uppercase tracking-wider text-[#0E1720] hover:text-[#8C6D1F] font-bold flex items-center gap-1.5"
                >
                  <span>DISCUSS A PROJECT</span>
                  <ArrowRight size={12} />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Clean Stacked Accordion                                      */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-3">
          {CAPABILITIES.map((cap, idx) => {
            const isExpanded = mobileExpanded === idx;
            return (
              <div
                key={cap.num}
                className="bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_4px_16px_rgba(14,23,32,0.03)] overflow-hidden"
              >
                {/* Header Toggle */}
                <button
                  type="button"
                  onClick={() => toggleMobile(idx)}
                  className="w-full text-left p-5 flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#8C6D1F]">
                      {cap.num}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#0E1720] uppercase tracking-wider">
                      {cap.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#8E9CA8]">
                      {cap.tag}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`text-[#0E1720] transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-2 border-t border-[#EAE5DB] space-y-4">
                    <div className="p-4 bg-[#FAF8F5] border border-[#DCD6CA]">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#8C6D1F] block mb-1 font-bold">
                        PROBLEM SOLVED
                      </span>
                      <p className="font-sans text-sm text-[#0E1720] font-normal leading-snug">
                        {cap.problemSolved}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#8E9CA8] block mb-1 font-semibold">
                        OUR APPROACH
                      </span>
                      <p className="font-sans text-xs text-[#3A4753] font-light leading-relaxed">
                        {cap.approach}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cap.concepts.map((c) => (
                        <span
                          key={c}
                          className="font-mono text-[10px] px-2.5 py-1 bg-[#FAF8F5] border border-[#DCD6CA] text-[#0E1720] uppercase"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#EAE5DB] flex items-center justify-between">
                      <Link
                        to={`/solutions/${cap.slug}`}
                        className="font-mono text-xs text-[#0E1720] font-semibold underline underline-offset-2 uppercase"
                      >
                        FULL SPECIFICATION
                      </Link>
                      <Link
                        to="/contact"
                        className="font-mono text-xs text-[#8C6D1F] font-bold uppercase"
                      >
                        INQUIRE →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section Footer Bar */}
        <div className="mt-12 pt-6 border-t border-[#DCD6CA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#5C6975]">
            <span className="font-bold text-[#0E1720]">ALL 8 CAPABILITIES SPECIFIED</span> — Explore individual capability briefs, workflows, and deliverables.
          </div>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0E1720] hover:bg-[#1A2530] text-[#FFFFFF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
          >
            <span>VIEW SOLUTIONS CATALOG</span>
            <ArrowRight size={12} className="text-[#D4A72C]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
