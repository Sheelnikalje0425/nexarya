import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const INQUIRY_STAGES = [
  { num: "01", label: "TYPE" },
  { num: "02", label: "SCOPE" },
  { num: "03", label: "TIMELINE" },
  { num: "04", label: "BUDGET" },
  { num: "05", label: "CONTACT" },
];

const CAPABILITY_LINKS = [
  { label: "CUSTOM SOFTWARE", href: "/solutions/custom-software" },
  { label: "BUSINESS SYSTEMS", href: "/solutions/business-systems" },
  { label: "WEB APPLICATIONS", href: "/solutions/web-applications" },
  { label: "AI & AUTOMATION", href: "/solutions/ai-automation" },
];

export default function StartSomething() {
  return (
    <section
      id="contact"
      data-section="inquiry"
      className="py-20 sm:py-24 lg:py-28 bg-[#F4EFE6] border-b border-[#0E1720]/15 text-[#0E1720] relative select-none overflow-hidden"
      aria-label="Start a Project & Inquiry"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Section Tag, Headline, Supporting Copy, Principles */}
          {/* ============================================================ */}
          <div className="lg:col-span-6">
            <RevealOnScroll>
              {/* Section Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                <span className="font-mono text-xs tracking-[0.22em] text-[#8C6D1F] uppercase font-semibold">
                  07 // START A PROJECT
                </span>
              </div>

              {/* Primary Headline */}
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0E1720] leading-[1.05] tracking-[-0.025em] mb-5 font-normal">
                Let's build the right system <br className="hidden sm:inline" />
                <span className="italic font-normal">for the work.</span>
              </h2>

              {/* Supporting Copy */}
              <p className="font-sans text-base sm:text-lg text-[#3A4753] font-light leading-relaxed mb-6 max-w-xl">
                Tell us what you're trying to solve, how the work happens today, and where the existing tools fall short.
              </p>

              {/* Capability Quick Links Navigation */}
              <div className="mb-8">
                <div className="font-mono text-[10px] text-[#8C6D1F] uppercase tracking-[0.16em] font-semibold mb-2.5">
                  EXPLORE CAPABILITY SPECIFICATIONS
                </div>
                <div className="flex flex-wrap gap-2">
                  {CAPABILITY_LINKS.map((cap) => (
                    <Link
                      key={cap.label}
                      to={cap.href}
                      className="px-3 py-1.5 bg-[#FAF8F5] border border-[#0E1720]/15 hover:border-[#0E1720] font-mono text-[11px] text-[#0E1720] tracking-wider uppercase transition-colors duration-200"
                    >
                      {cap.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Closing Restrained Philosophy Line */}
              <div className="pt-5 border-t border-[#0E1720]/10">
                <p className="font-editorial text-xl sm:text-2xl text-[#0E1720] italic font-normal">
                  Software should fit the work — not the other way around.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Inquiry Workflow Card & Primary Conversion CTA */}
          {/* ============================================================ */}
          <div className="lg:col-span-6">
            <RevealOnScroll delayMs={100}>
              <div className="p-7 sm:p-9 lg:p-10 bg-[#FFFFFF] border border-[#0E1720]/15 relative shadow-[0_8px_30px_rgba(14,23,32,0.04)]">
                
                {/* Workflow Header */}
                <div className="flex items-center justify-between border-b border-[#0E1720]/10 pb-3 mb-5">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#8C6D1F] uppercase font-semibold">
                    PROJECT INITIATION WORKFLOW
                  </span>
                  <span className="font-mono text-[10px] text-[#5C6975] uppercase tracking-widest">
                    5 STAGES
                  </span>
                </div>

                {/* 5-Step Workflow Progression */}
                <div className="grid grid-cols-5 gap-1 text-center py-2.5 px-2 bg-[#FAF8F5] border border-[#0E1720]/10 mb-6 font-mono">
                  {INQUIRY_STAGES.map((st) => (
                    <div key={st.label} className="flex flex-col items-center">
                      <span className="text-[9px] text-[#8C6D1F] font-semibold">{st.num}</span>
                      <span className="text-[10px] text-[#0E1720] font-medium tracking-wider">{st.label}</span>
                    </div>
                  ))}
                </div>

                {/* Scoping Invitation */}
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#0E1720] font-normal mb-2.5">
                  Scope your system with engineering practitioners.
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-[#5C6975] leading-relaxed font-light mb-6">
                  Tell us what you're building, replacing, or trying to improve. We analyze requirements directly to formulate an actionable scoping architecture.
                </p>

                {/* Primary CTA Button */}
                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className="flex items-center justify-between w-full px-6 sm:px-8 py-3.5 bg-[#0E1720] text-[#FAF8F5] hover:bg-[#8C6D1F] transition-colors duration-200 font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold min-h-[48px] group"
                  >
                    <span>START A PROJECT</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  {/* Secondary Direct Email */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-[#0E1720]/10 text-xs font-mono text-[#5C6975]">
                    <span>DIRECT INQUIRIES:</span>
                    <a
                      href="mailto:hello@nexarya.in"
                      className="text-[#0E1720] font-semibold hover:text-[#8C6D1F] transition-colors"
                    >
                      hello@nexarya.in
                    </a>
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="mt-5 pt-3.5 border-t border-[#0E1720]/10 flex items-center justify-between font-mono text-[10px] text-[#5C6975]">
                  <span>MUMBAI &bull; REMOTE DEPLOYMENTS</span>
                  <span className="text-[#8C6D1F]">DIRECT LEADERSHIP ACCESS</span>
                </div>

              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
