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
    verifiedReference: { title: "Railway Concession Management System", href: "/work/railway-concession-management" },
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
    verifiedReference: { title: "Railway Concession Management System", href: "/work/railway-concession-management" },
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
      className="py-18 sm:py-22 lg:py-26 bg-[#F1EDE3] border-b border-[#DED7C9] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-9 sm:pb-11 border-b border-[#DED7C9] mb-10 sm:mb-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  05 // ENGINEERING DISCIPLINES
                </span>
              </div>
              <h2
                id="capabilities-heading"
                className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] text-[#17202B] leading-[1.05] tracking-[-0.03em] font-normal"
              >
                Disciplines behind <br className="hidden sm:inline" />
                <span className="italic font-normal">the solutions.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#394352] max-w-md font-light leading-relaxed">
              We design and construct software platforms across eight core engineering disciplines.
            </p>
          </div>
        </RevealOnScroll>

        {/* Visual Anchor: Product Engineering & Built Systems (Asset 03 - Desktop) */}
        <RevealOnScroll delayMs={40}>
          <div className="hidden lg:block mb-10 sm:mb-12 bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_6px_24px_rgba(15,23,37,0.03)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 bg-[#08101B] overflow-hidden aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9]">
                <picture className="w-full h-full block">
                  <source srcSet="/engineering/engineering-studio-design.webp" type="image/webp" />
                  <img
                    src="/engineering/engineering-studio-design.jpg"
                    alt="Product engineering and technical system design environment showing interactive interfaces and component specifications"
                    loading="eager"
                    decoding="async"
                    width="1024"
                    height="576"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                  />
                </picture>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#DED7C9]">
                <div>
                  <div className="flex items-center gap-2 mb-2 font-mono text-[10px] text-[#C59A3D] uppercase tracking-widest font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                    <span>PRODUCT ENGINEERING // 08 DISCIPLINES</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#17202B] font-normal leading-tight mb-3">
                    Disciplined software execution from schema to interface.
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                    Every capability is backed by typed architecture, rigorous state validation, and clean domain boundaries tailored to operational demands.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#DED7C9] flex items-center justify-between text-xs font-mono text-[#394352]">
                  <span>CAPABILITY SPECIFICATION</span>
                  <span className="text-[#17202B] font-semibold">INDEX 01 &mdash; 08</span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Split-Index Layout (Left 01-08 Index, Right Detail Panel)   */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Index Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_6px_24px_rgba(15,23,37,0.03)] overflow-hidden">
            <div className="px-6 py-3.5 bg-[#E8E3D8]/70 border-b border-[#DED7C9] flex items-center justify-between font-mono text-xs text-[#394352]">
              <span className="font-semibold text-[#17202B]">ENGINEERING DISCIPLINES</span>
              <span>INDEX 01–08</span>
            </div>

            <div className="divide-y divide-[#DED7C9]">
              {CAPABILITIES.map((cap, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={cap.num}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full text-left px-6 py-3.5 transition-all duration-150 flex items-center justify-between group cursor-pointer focus-visible:outline-none focus-visible:bg-[#E8E3D8] ${
                      isActive ? "bg-[#0F1725] text-[#F7F5EF]" : "bg-[#FFFFFF] text-[#17202B] hover:bg-[#F8F5EE]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isActive ? "text-[#C59A3D]" : "text-[#68717B] group-hover:text-[#17202B]"
                        }`}
                      >
                        {cap.num}
                      </span>
                      <span
                        className={`font-mono text-xs font-bold uppercase tracking-wider ${
                          isActive ? "text-[#F7F5EF]" : "text-[#17202B]"
                        }`}
                      >
                        {cap.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-[9px] uppercase tracking-wider hidden xl:inline ${
                          isActive ? "text-[#E0BD68]" : "text-[#68717B]"
                        }`}
                      >
                        {cap.tag}
                      </span>
                      <ArrowRight
                        size={12}
                        className={`transition-transform duration-200 ${
                          isActive
                            ? "text-[#C59A3D] translate-x-1"
                            : "text-[#68717B] group-hover:text-[#17202B] group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detail Panel (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_6px_24px_rgba(15,23,37,0.03)] overflow-hidden">
            {/* Top Bar */}
            <div className="px-6 py-3.5 bg-[#E8E3D8]/70 border-b border-[#DED7C9] flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2 text-[#394352]">
                <span className="font-bold text-[#17202B]">{activeCap.num}</span>
                <span>/</span>
                <span className="uppercase text-[#C59A3D] font-semibold">{activeCap.tag}</span>
              </div>

              <Link
                to={`/solutions/${activeCap.slug}`}
                className="text-[#17202B] hover:text-[#C59A3D] uppercase font-semibold text-[11px] underline underline-offset-4 flex items-center gap-1"
              >
                <span>FULL SPECIFICATION</span>
                <ArrowRight size={11} />
              </Link>
            </div>

            {/* Panel Content */}
            <div className="p-8 lg:p-9 space-y-5">
              
              {/* Title & Problem Statement */}
              <div>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#17202B] font-normal leading-tight mb-2">
                  {activeCap.title}
                </h3>
                <p className="font-editorial text-xl text-[#17202B] italic font-normal leading-relaxed">
                  &ldquo;{activeCap.problemSolved}&rdquo;
                </p>
              </div>

              {/* Engineering Approach */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C59A3D] block mb-1.5 font-semibold">
                  ENGINEERING APPROACH
                </span>
                <p className="font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed">
                  {activeCap.approach}
                </p>
              </div>

              {/* Core Principles & Concepts */}
              <div className="pt-1">
                <div className="flex flex-wrap gap-2">
                  {activeCap.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="font-mono text-xs px-2.5 py-1 bg-[#FFFFFF] border border-[#DED7C9] text-[#17202B] tracking-wider uppercase"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer / Case Reference & Direct Scoping */}
              <div className="pt-5 border-t border-[#DED7C9] flex flex-wrap items-center justify-between gap-4">
                {activeCap.verifiedReference ? (
                  <div className="text-xs font-sans text-[#394352]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#68717B] mr-1">VERIFIED IN:</span>
                    <Link
                      to={activeCap.verifiedReference.href}
                      className="text-[#17202B] font-semibold underline underline-offset-2 hover:text-[#C59A3D]"
                    >
                      {activeCap.verifiedReference.title}
                    </Link>
                  </div>
                ) : (
                  <div className="text-xs font-mono text-[#68717B] uppercase">
                    MODULAR DISCIPLINES
                  </div>
                )}

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F1725] hover:bg-[#1A273A] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight size={11} className="text-[#C59A3D]" />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Compact Editorial Directory List (lg:hidden)                 */}
        {/* ========================================================================= */}
        <div className="lg:hidden bg-[#F8F5EE] border border-[#DED7C9] divide-y divide-[#DED7C9] shadow-[0_4px_16px_rgba(15,23,37,0.03)]">
          {CAPABILITIES.map((cap) => (
            <Link
              key={cap.num}
              to={`/solutions/${cap.slug}`}
              className="p-4 flex items-start justify-between gap-3 hover:bg-[#F1EDE3] transition-colors group"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-[#C59A3D]">{cap.num}</span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#17202B] group-hover:text-[#C59A3D] transition-colors">
                    {cap.title}
                  </span>
                </div>
                <p className="font-sans text-xs text-[#394352] font-light leading-relaxed pl-6">
                  {cap.problemSolved}
                </p>
              </div>
              <ArrowRight size={13} className="text-[#68717B] group-hover:text-[#C59A3D] transition-transform group-hover:translate-x-1 shrink-0 mt-1" />
            </Link>
          ))}
        </div>

        {/* Section Footer Bar */}
        <div className="mt-10 pt-5 border-t border-[#DED7C9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#394352]">
            <span className="font-bold text-[#17202B]">ALL 8 DISCIPLINES SPECIFIED</span> &mdash; Supporting tailored systems from architecture to production release.
          </div>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1725] hover:bg-[#1A273A] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
          >
            <span>VIEW ALL SOLUTIONS</span>
            <ArrowRight size={12} className="text-[#C59A3D]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
