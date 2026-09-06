import React from "react";
import SEOHead from "@/components/seo/SEOHead";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const PROCESS_STEPS = [
  {
    number: "01",
    phase: "DISCOVER & SCOPE",
    subtitle: "Architecture Blueprinting",
    desc: "We analyze your business workflow, technical dependencies, latency constraints, and operational security requirements before writing a single line of production code.",
    deliverables: ["Architecture Blueprint", "API Contract Specifications", "Milestone Roadmap"],
  },
  {
    number: "02",
    phase: "DESIGN & PROTOTYPE",
    subtitle: "High-Fidelity Interface Systems",
    desc: "We construct high-contrast, accessible UI layouts with deterministic component trees and state transitions designed for rapid user comprehension and zero layout shift.",
    deliverables: ["Interactive Component Specs", "Design Token System", "Accessibility Audit Matrix"],
  },
  {
    number: "03",
    phase: "ENGINEER & TEST",
    subtitle: "Strictly-Typed Construction",
    desc: "We develop full-stack modules using React 19, TypeScript, and hardened backend APIs with automated unit, integration, and security regression suites.",
    deliverables: ["Tested Source Code", "ACID Persistence Schemas", "Automated Test Suites"],
  },
  {
    number: "04",
    phase: "DEPLOY & STABILIZE",
    subtitle: "Zero-Downtime Releases",
    desc: "We configure containerized deployment pipelines with health probes, edge CDN routing, SSL certification, and automated rollback protections.",
    deliverables: ["Production Infrastructure", "Deployment Automation", "Uptime Telemetry"],
  },
  {
    number: "05",
    phase: "MAINTAIN & EVOLVE",
    subtitle: "Long-Term Partnership",
    desc: "We offer continuous maintenance, security vulnerability patching, performance profiling, and new capability expansions as your platform scales.",
    deliverables: ["SLA Support Coverage", "Performance Audits", "Feature Iteration Cycles"],
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title="Engineering Process & Methodology | NEXARYA"
        description="Our deterministic 5-stage software delivery process: Scoping, Interface Design, Strictly-Typed Construction, Automated Deployment, and Long-Term Evolution."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
              <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                ENGINEERING METHODOLOGY
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#0E1720] leading-[1.06] tracking-[-0.025em] mb-6">
              Disciplined engineering, <br />
              <span className="italic font-normal">predictable delivery.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] font-light leading-relaxed">
              Software projects fail when assumptions replace architecture. We follow a deterministic 5-stage lifecycle ensuring quality, security, and maintainability from initial scoping to production evolution.
            </p>
          </div>
        </RevealOnScroll>

        {/* 5-Step Timeline List */}
        <div className="space-y-8 mb-20">
          {PROCESS_STEPS.map((step, idx) => (
            <RevealOnScroll key={step.number} delayMs={idx * 80}>
              <div className="p-8 sm:p-12 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.06)] hover:border-[#0E1720] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-3">
                  <div className="font-editorial text-4xl sm:text-5xl text-[#0E1720] mb-2">{step.number}</div>
                  <div className="font-tech text-sm sm:text-base tracking-[0.14em] text-[#0E1720] uppercase font-bold">
                    {step.phase}
                  </div>
                  <div className="font-sans text-xs text-[#5C6975] mt-1">{step.subtitle}</div>
                </div>

                <div className="lg:col-span-5">
                  <p className="font-sans text-xs sm:text-sm text-[#5C6975] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="lg:col-span-4 p-6 bg-[#FAF8F5] border border-[#EAE5DB]">
                  <div className="font-tech text-[10px] tracking-[0.2em] text-[#0E1720] uppercase mb-3 font-semibold">
                    PRIMARY DELIVERABLES
                  </div>
                  <ul className="space-y-2">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-sans text-[#5C6975]">
                        <span className="text-[#0E1720] mt-0.5">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealOnScroll>
          <div className="p-10 sm:p-16 bg-[#FFFFFF] border border-[#DCD6CA] text-center max-w-3xl mx-auto shadow-[0_12px_40px_rgba(14,23,32,0.06)]">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] mb-4">
              Have a project in mind?
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#5C6975] mb-8 font-light max-w-xl mx-auto">
              Let&apos;s map out your system architecture and establish an unambiguous delivery roadmap.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Schedule an Architectural Review
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
