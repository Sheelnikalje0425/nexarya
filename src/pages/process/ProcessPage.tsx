import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "@/components/ui/Icons";

const PROCESS_STEPS = [
  {
    id: "understand",
    number: "01",
    phase: "UNDERSTAND",
    subtitle: "Operational Reality & Workflow Discovery",
    desc: "Map the business workflow, operator roles, operational bottlenecks, and constraints before writing code. We prioritize understanding how physical and departmental tasks occur in reality.",
    deliverables: ["Operational Workflow Map", "Domain Boundaries & Constraints", "Scoping Specification"],
  },
  {
    id: "structure",
    number: "02",
    phase: "STRUCTURE",
    subtitle: "Domain Modeling & Architecture Blueprint",
    desc: "Translate business rules into explicit domain schemas, state transitions, data models, and API contracts. Authorization boundaries and data validation gates are verified upfront.",
    deliverables: ["Domain Data Schemas", "State Machine Specifications", "API Contract Definitions"],
  },
  {
    id: "engineer",
    number: "03",
    phase: "ENGINEER",
    subtitle: "Strictly-Typed Construction & Testing",
    desc: "Construct full-stack software using modern, strictly typed foundations, responsive interfaces, and hardened backend services with automated unit, integration, and security regression suites.",
    deliverables: ["Tested Source Code", "Reliable Data Models & Persistence", "Automated Test Suites"],
  },
  {
    id: "deliver",
    number: "04",
    phase: "DELIVER",
    subtitle: "Production Deployment & Telemetry",
    desc: "Deploy systems to secured cloud runtimes with health monitoring, zero-downtime rolling updates, immutable audit logs, and complete handover documentation.",
    deliverables: ["Cloud Infrastructure Setup", "Automated CI/CD Pipelines", "Operational Documentation & Handover"],
  },
];

export default function ProcessPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const cleanHash = location.hash.replace("#", "");
      const el = document.getElementById(cleanHash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.hash]);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8F5EE] min-h-screen select-none">
      <SEOHead
        title="Engineering Process & Methodology | NEXARYA"
        description="Our deterministic 4-stage engineering lifecycle: Understand, Structure, Engineer, and Deliver. Disciplined software delivery for startups and institutions."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#17202B]" />
              <span className="font-mono text-xs tracking-[0.2em] text-[#394352] uppercase font-semibold">
                ENGINEERING METHODOLOGY
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#17202B] leading-[1.06] tracking-[-0.025em] mb-6">
              Disciplined engineering, <br />
              <span className="italic font-normal">predictable delivery.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#394352] font-light leading-relaxed">
              Software projects fail when assumptions replace architecture. We follow a deterministic 4-stage lifecycle ensuring quality, security, and maintainability from operational understanding to production delivery.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4-Stage Timeline List */}
        <div className="space-y-8 mb-20">
          {PROCESS_STEPS.map((step, idx) => (
            <RevealOnScroll key={step.id} delayMs={idx * 80}>
              <div
                id={step.id}
                className="p-8 sm:p-12 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_12px_40px_rgba(14,23,32,0.06)] hover:border-[#17202B] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-32"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-editorial text-4xl sm:text-5xl text-[#17202B]">{step.number}</span>
                    <span className="font-mono text-[10px] text-[#C59A3D] uppercase font-bold tracking-widest">
                      STAGE {step.number}
                    </span>
                  </div>
                  <div className="font-mono text-base sm:text-lg tracking-[0.14em] text-[#17202B] uppercase font-bold">
                    {step.phase}
                  </div>
                  <div className="font-sans text-xs text-[#394352] mt-1 font-medium">{step.subtitle}</div>
                </div>

                <div className="lg:col-span-4">
                  <p className="font-sans text-xs sm:text-sm text-[#394352] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="lg:col-span-4 p-6 bg-[#F1EDE3] border border-[#DED7C9]">
                  <div className="font-mono text-[10px] tracking-[0.2em] text-[#17202B] uppercase mb-3 font-semibold">
                    KEY DELIVERABLES
                  </div>
                  <ul className="space-y-2">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-sans text-[#394352]">
                        <span className="text-[#17202B] mt-0.5">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Process Flow Docket */}
        <RevealOnScroll>
          <div className="p-8 sm:p-10 bg-[#F1EDE3] border border-[#DED7C9] mb-20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#68717B] uppercase font-semibold block mb-1">
                LIFECYCLE FLOW
              </span>
              <div className="font-mono text-xs sm:text-sm text-[#17202B] font-bold tracking-wider">
                UNDERSTAND &rarr; STRUCTURE &rarr; ENGINEER &rarr; DELIVER
              </div>
            </div>

            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F1725] text-[#F7F5EF] hover:bg-[#141F30] font-mono text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
            >
              <span>Explore Solutions</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </RevealOnScroll>

        {/* Bottom CTA */}
        <RevealOnScroll>
          <div className="p-10 sm:p-16 bg-[#FFFFFF] border border-[#DED7C9] text-center max-w-3xl mx-auto shadow-[0_12px_40px_rgba(14,23,32,0.06)]">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#17202B] mb-4">
              Have a project in mind?
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#394352] mb-8 font-light max-w-xl mx-auto">
              Let&apos;s map out your system architecture and establish an unambiguous delivery roadmap.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
