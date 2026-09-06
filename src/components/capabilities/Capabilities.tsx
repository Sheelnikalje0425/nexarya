import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface CapabilityItem {
  num: string;
  title: string;
  description: string;
  slug: string;
  whatWeBuild: string;
  howItFits: string;
  tag: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    num: "01",
    title: "CUSTOM SOFTWARE",
    description: "Purpose-built web applications and business systems designed around specific workflows.",
    slug: "custom-software",
    whatWeBuild: "Purpose-built applications for workflows that don't fit off-the-shelf software.",
    howItFits: "Workflow → domain model → application logic → deployed system.",
    tag: "PURPOSE-BUILT SOFTWARE",
  },
  {
    num: "02",
    title: "AI & AUTOMATION",
    description: "AI-assisted workflows and automation integrated where they provide a practical advantage.",
    slug: "ai-automation",
    whatWeBuild: "Document extraction, assisted intake pipelines, and automated business routing rules.",
    howItFits: "Manual bottlenecks → structured models → assisted workflows → verified output.",
    tag: "APPLIED AUTOMATION",
  },
  {
    num: "03",
    title: "WEB APPLICATIONS",
    description: "Production web applications with responsive interfaces, application logic and backend systems.",
    slug: "web-applications",
    whatWeBuild: "Full-stack web applications with responsive interfaces, application logic, and secure APIs.",
    howItFits: "User context → interface design → application core → reliable hosting.",
    tag: "FULL-STACK APPLICATIONS",
  },
  {
    num: "04",
    title: "BUSINESS SYSTEMS",
    description: "Operational software for workflows, administration, data management and internal processes.",
    slug: "business-systems",
    whatWeBuild: "Verification platforms, administrative management systems, and role-governed review queues.",
    howItFits: "Operational rules → state machines → role-gated queues → audit logs.",
    tag: "OPERATIONAL SYSTEMS",
  },
  {
    num: "05",
    title: "CLOUD & DEVOPS",
    description: "Deployment, cloud infrastructure, containers and operational environments.",
    slug: "cloud-devops",
    whatWeBuild: "Containerized environments, automated deployment pipelines, and cloud hosting environments.",
    howItFits: "Code repository → container build → automated tests → live deployment.",
    tag: "INFRASTRUCTURE & RUNTIME",
  },
  {
    num: "06",
    title: "QA & TESTING",
    description: "Functional, responsive and reliability-focused testing for web applications.",
    slug: "qa-testing",
    whatWeBuild: "Regression test suites, cross-viewport verification, and functional API assertions.",
    howItFits: "Requirements → test assertions → automated validation → verified quality.",
    tag: "RELIABILITY TESTING",
  },
  {
    num: "07",
    title: "INTEGRATIONS",
    description: "Connecting applications, APIs and external systems where the workflow requires it.",
    slug: "integrations",
    whatWeBuild: "Custom REST and GraphQL gateways, webhook ingress, and external service connectors.",
    howItFits: "External systems → schema validation → transactional sync → reliable persistence.",
    tag: "API & SYSTEM INTEGRATION",
  },
  {
    num: "08",
    title: "SAAS",
    description: "Design and engineering of software products intended to serve multiple users, teams or organizations.",
    slug: "saas",
    whatWeBuild: "Multi-tenant software products, subscription billing workflows, and client portals.",
    howItFits: "Product concept → tenant boundaries → billing & auth → scalable release.",
    tag: "MULTI-TENANT PRODUCTS",
  },
];

export default function Capabilities() {
  const [activeIdx, setActiveIdx] = useState(0);

  const active = CAPABILITIES[activeIdx];

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="py-24 sm:py-32 lg:py-36 bg-[#F4EFE6] border-b border-[#DCD6CA] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Editorial Two-Column Structure: Left Sticky Anchor + Right Numbered Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================================= */}
          {/* Left Column: Sticky Header, Interactive Inspection Panel & CTA Box */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <RevealOnScroll>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                  <span className="font-mono text-xs tracking-[0.2em] text-[#8C6D1F] uppercase font-semibold">
                    CAPABILITIES
                  </span>
                </div>
                <h2
                  id="capabilities-heading"
                  className="font-editorial text-4xl sm:text-5xl lg:text-[3.8rem] text-[#0E1720] leading-[1.04] tracking-[-0.03em] font-normal mb-5"
                >
                  Systems designed <br className="hidden sm:inline" />
                  <span className="italic font-normal">around the work.</span>
                </h2>
                <p className="font-sans text-base sm:text-lg text-[#3A4753] font-light leading-relaxed">
                  From custom applications to the infrastructure behind them, we build the software systems businesses rely on.
                </p>
              </div>
            </RevealOnScroll>

            {/* Dynamic Workbench Detail Inspection Panel */}
            <div className="hidden lg:block bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_8px_30px_rgba(14,23,32,0.04)] overflow-hidden transition-all duration-200">
              {/* Docket Header */}
              <div className="px-5 py-3 bg-[#FAF8F5] border-b border-[#DCD6CA] flex items-center justify-between font-mono text-[11px] text-[#5C6975]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                  <span className="text-[#0E1720] font-semibold uppercase tracking-wider">
                    SPECIFICATION // ACTIVE DISCIPLINE
                  </span>
                </div>
                <span className="text-[#8E9CA8] uppercase">
                  {active.num} OF 08
                </span>
              </div>

              {/* Panel Content */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="font-mono text-[10px] text-[#8C6D1F] uppercase tracking-widest block mb-1 font-semibold">
                    {active.tag}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#0E1720] font-normal leading-snug">
                    {active.title}
                  </h3>
                </div>

                <div className="space-y-3 pt-3 border-t border-[#EAE5DB]">
                  <div>
                    <span className="font-mono text-[10px] text-[#8E9CA8] uppercase tracking-wider block mb-1">
                      WHAT WE BUILD
                    </span>
                    <p className="font-sans text-xs text-[#3A4753] font-light leading-relaxed">
                      {active.whatWeBuild}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[#8E9CA8] uppercase tracking-wider block mb-1">
                      HOW IT FITS
                    </span>
                    <p className="font-mono text-xs text-[#0E1720] bg-[#FAF8F5] p-2.5 border border-[#EAE5DB] font-medium leading-relaxed">
                      {active.howItFits}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EAE5DB] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8E9CA8] uppercase text-[10px]">
                    ENGINEERING SCOPE
                  </span>
                  <Link
                    to={`/solutions/${active.slug}`}
                    className="inline-flex items-center gap-1 text-[#0E1720] hover:text-[#8C6D1F] font-semibold transition-colors uppercase tracking-wider text-[11px]"
                  >
                    <span>SPECIFICATION</span>
                    <ArrowRight size={11} className="text-[#8C6D1F]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Section Ending Project Initiation Trigger Card */}
            <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] space-y-4">
              <h4 className="font-editorial text-xl sm:text-2xl text-[#0E1720] font-normal leading-snug">
                Have a workflow that doesn&apos;t fit the software you use today?
              </h4>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <Button href="/contact" variant="primary" size="md">
                  START A PROJECT
                </Button>
                <Button href="/work" variant="secondary" size="md">
                  VIEW OUR WORK
                </Button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Right Column: Numbered Editorial Capability Index */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.04)] overflow-hidden">
            
            {/* Index Header Strip */}
            <div className="px-6 py-3.5 bg-[#EAE5DB] border-b border-[#DCD6CA] flex items-center justify-between font-mono text-[11px] text-[#5C6975]">
              <span className="text-[#0E1720] uppercase font-semibold tracking-wider">
                ENGINEERING DISCIPLINES INDEX
              </span>
              <span className="text-[#8E9CA8] uppercase text-[10px]">
                8 CAPABILITIES
              </span>
            </div>

            {/* Capability Items Stream */}
            <div className="divide-y divide-[#DCD6CA]">
              {CAPABILITIES.map((cap, idx) => {
                const isSelected = activeIdx === idx;
                return (
                  <button
                    key={cap.num}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onFocus={() => setActiveIdx(idx)}
                    className={`w-full text-left p-6 sm:p-7 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0E1720] group block ${
                      isSelected
                        ? "bg-[#FFFFFF] ring-1 ring-[#8C6D1F]/50 z-10"
                        : "hover:bg-[#FFFFFF]/80"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      
                      {/* Left: Number + Title + Description */}
                      <div className="space-y-2 max-w-xl">
                        <div className="flex items-center gap-3">
                          <span className={`font-mono text-xs font-bold tracking-widest ${
                            isSelected ? "text-[#8C6D1F]" : "text-[#5C6975]"
                          }`}>
                            {cap.num}
                          </span>
                          <span className="text-[#DCD6CA] font-mono text-xs">//</span>
                          <h3 className={`font-mono text-sm sm:text-base font-semibold tracking-wider uppercase transition-colors ${
                            isSelected ? "text-[#0E1720]" : "text-[#0E1720] group-hover:text-[#8C6D1F]"
                          }`}>
                            {cap.title}
                          </h3>
                        </div>

                        <p className="font-sans text-xs sm:text-sm text-[#5C6975] font-light leading-relaxed pl-8">
                          {cap.description}
                        </p>

                        {/* Inline Detail Excerpt on Mobile */}
                        <div className="lg:hidden pl-8 pt-2">
                          <div className="p-3 bg-[#FAF8F5] border border-[#EAE5DB] text-[11px] font-mono text-[#3A4753] space-y-1">
                            <span className="text-[#8C6D1F] font-semibold block">{cap.whatWeBuild}</span>
                            <span className="text-[#5C6975] block">{cap.howItFits}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Subtle Interactive Indicator Arrow */}
                      <div className="shrink-0 pt-1">
                        <div className={`w-7 h-7 rounded-xs border flex items-center justify-center transition-all duration-200 ${
                          isSelected
                            ? "bg-[#0E1720] text-[#FFFFFF] border-[#0E1720]"
                            : "bg-[#FFFFFF] text-[#5C6975] border-[#DCD6CA] group-hover:border-[#0E1720] group-hover:text-[#0E1720]"
                        }`}>
                          <ArrowRight
                            size={12}
                            className={`transition-transform duration-200 ${
                              isSelected ? "translate-x-0.5 text-[#D4A72C]" : "group-hover:translate-x-0.5"
                            }`}
                          />
                        </div>
                      </div>

                    </div>
                  </button>
                );
              })}
            </div>

            {/* Index Footer Strip */}
            <div className="p-4 bg-[#FAF8F5] border-t border-[#DCD6CA] flex items-center justify-between text-xs font-mono text-[#5C6975]">
              <span className="text-[#8E9CA8] text-[10px] uppercase">NEXARYA ENGINEERING DISCIPLINES</span>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-1.5 text-[#0E1720] hover:text-[#8C6D1F] font-semibold uppercase tracking-wider text-[11px] transition-colors"
              >
                <span>VIEW ALL CAPABILITY SPECIFICATIONS</span>
                <ArrowRight size={11} className="text-[#8C6D1F]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

