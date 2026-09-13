import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const INQUIRY_STAGES = [
  { num: "01", label: "TYPE", hint: "Custom software, core modernization, or specialized web applications." },
  { num: "02", label: "SCOPE", hint: "Core workflow bottlenecks, integrations, and architectural constraints." },
  { num: "03", label: "TIMELINE", hint: "Target release horizons, milestone cadences, and phased delivery." },
  { num: "04", label: "BUDGET", hint: "Transparent resource allocation aligned with measurable engineering outcomes." },
  { num: "05", label: "CONTACT", hint: "Direct technical scoping session with studio leadership." },
];

const CAPABILITY_LINKS = [
  { label: "CUSTOM SOFTWARE", href: "/solutions/custom-software" },
  { label: "BUSINESS SYSTEMS", href: "/solutions/business-systems" },
  { label: "WEB APPLICATIONS", href: "/solutions/web-applications" },
  { label: "AI & AUTOMATION", href: "/solutions/ai-automation" },
];

export default function StartSomething() {
  const [activeStage, setActiveStage] = React.useState(0);

  return (
    <section
      id="contact"
      data-section="inquiry"
      className="py-18 sm:py-22 lg:py-26 bg-[#08101B] border-b border-[#243247] text-[#F7F5EF] relative select-none overflow-hidden"
      aria-label="Start a Project & Inquiry"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ========================================================================= */}
        {/* MOBILE VIEW: Focused Direct Conversion CTA (lg:hidden)                    */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
            <span className="font-mono text-xs tracking-[0.22em] text-[#C59A3D] uppercase font-semibold">
              08 // START A PROJECT
            </span>
          </div>

          <h2 className="font-editorial text-4xl text-[#F7F5EF] leading-[1.05] tracking-[-0.025em] font-normal">
            Let's build the right system <br />
            <span className="italic font-normal text-[#E8E3D8]">for the work.</span>
          </h2>

          <p className="font-sans text-base text-[#B9C0C9] font-light leading-relaxed">
            Tell us what you're trying to solve, how the work happens today, and where the existing tools fall short.
          </p>

          <div className="p-5 bg-[#141F30] border border-[#243247] space-y-4">
            <Link
              to="/contact"
              className="flex items-center justify-between w-full px-5 py-3.5 bg-[#C59A3D] text-[#0F1725] hover:bg-[#E0BD68] font-mono text-xs uppercase tracking-wider font-semibold transition-colors min-h-[48px]"
            >
              <span>START A PROJECT</span>
              <ArrowRight size={14} />
            </Link>

            <div className="flex items-center justify-between pt-3 border-t border-[#243247] text-xs font-mono text-[#B9C0C9]">
              <span>DIRECT INQUIRIES:</span>
              <a
                href="mailto:hello@nexarya.in"
                className="text-[#E0BD68] font-semibold hover:text-[#FFFFFF] transition-colors"
              >
                hello@nexarya.in
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Split Editorial & Workflow Card Layout (hidden lg:grid)     */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Section Tag, Headline, Supporting Copy, Principles */}
          {/* ============================================================ */}
          <div className="lg:col-span-6">
            <RevealOnScroll>
              {/* Section Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.22em] text-[#C59A3D] uppercase font-semibold">
                  08 // START A PROJECT
                </span>
              </div>

              {/* Primary Headline */}
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F7F5EF] leading-[1.05] tracking-[-0.025em] mb-4.5 font-normal">
                Let's build the right system <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#E8E3D8]">for the work.</span>
              </h2>

              {/* Supporting Copy */}
              <p className="font-sans text-base sm:text-lg text-[#B9C0C9] font-light leading-relaxed mb-5.5 max-w-xl">
                Tell us what you're trying to solve, how the work happens today, and where the existing tools fall short.
              </p>

              {/* Capability Quick Links Navigation */}
              <div className="mb-7">
                <div className="font-mono text-[10px] text-[#C59A3D] uppercase tracking-[0.16em] font-semibold mb-2.5">
                  EXPLORE CAPABILITY SPECIFICATIONS
                </div>
                <div className="flex flex-wrap gap-2">
                  {CAPABILITY_LINKS.map((cap) => (
                    <Link
                      key={cap.label}
                      to={cap.href}
                      className="px-3 py-1.5 bg-[#0F1725] border border-[#243247] hover:border-[#C59A3D] font-mono text-[11px] text-[#F7F5EF] tracking-wider uppercase transition-colors duration-200"
                    >
                      {cap.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Closing Restrained Philosophy Line */}
              <div className="pt-4.5 border-t border-[#243247]">
                <p className="font-editorial text-xl sm:text-2xl text-[#E8E3D8] italic font-normal">
                  Software should fit the work &mdash; not the other way around.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Inquiry Workflow Card & Primary Conversion CTA */}
          {/* ============================================================ */}
          <div className="lg:col-span-6">
            <RevealOnScroll delayMs={100}>
              <div className="p-6 sm:p-8 lg:p-9 bg-[#141F30] border border-[#243247] relative shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                
                {/* Workflow Header */}
                <div className="flex items-center justify-between border-b border-[#243247] pb-3 mb-4.5">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#C59A3D] uppercase font-semibold">
                    PROJECT INITIATION WORKFLOW
                  </span>
                  <span className="font-mono text-[10px] text-[#B9C0C9] uppercase tracking-widest">
                    STAGE {activeStage + 1} OF 5
                  </span>
                </div>

                {/* 5-Step Workflow Progression - Interactive Tabs */}
                <div className="grid grid-cols-5 gap-1 text-center p-1 bg-[#0F1725] border border-[#243247] mb-3 font-mono">
                  {INQUIRY_STAGES.map((st, idx) => {
                    const isActive = activeStage === idx;
                    return (
                      <button
                        key={st.label}
                        type="button"
                        onClick={() => setActiveStage(idx)}
                        className={`flex flex-col items-center py-2 px-1 rounded-none transition-all duration-150 ${
                          isActive
                            ? "bg-[#141F30] text-[#FFFFFF] shadow-sm border border-[#C59A3D]/40"
                            : "text-[#7F8A99] hover:text-[#B9C0C9] hover:bg-[#141F30]/40 border border-transparent"
                        }`}
                      >
                        <span className={`text-[9px] font-semibold ${isActive ? "text-[#C59A3D]" : "text-[#7F8A99]"}`}>
                          {st.num}
                        </span>
                        <span className="text-[10px] font-medium tracking-wider">{st.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Progressive Disclosure Stage Callout */}
                <div className="px-3.5 py-2.5 bg-[#0F1725]/80 border border-[#243247] mb-5 font-mono text-xs flex items-start gap-2.5 min-h-[46px]">
                  <span className="text-[#C59A3D] font-semibold whitespace-nowrap text-[11px]">
                    STAGE {INQUIRY_STAGES[activeStage].num}:
                  </span>
                  <span className="text-[#E8E3D8] font-light text-[11px] leading-relaxed">
                    {INQUIRY_STAGES[activeStage].hint}
                  </span>
                </div>

                {/* Scoping Invitation */}
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F5EF] font-normal mb-2">
                  Scope your system with engineering practitioners.
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-[#B9C0C9] leading-relaxed font-light mb-5">
                  Tell us what you're building, replacing, or trying to improve. We analyze requirements directly to formulate an actionable scoping architecture.
                </p>

                {/* Primary CTA Button */}
                <div className="space-y-3.5">
                  <Link
                    to="/contact"
                    className="flex items-center justify-between w-full px-6 sm:px-8 py-3.5 bg-[#C59A3D] text-[#0F1725] hover:bg-[#E0BD68] transition-colors duration-200 font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold min-h-[48px] group"
                  >
                    <span>START A PROJECT</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  {/* Secondary Direct Email */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#243247] text-xs font-mono text-[#B9C0C9]">
                    <span>DIRECT INQUIRIES:</span>
                    <a
                      href="mailto:hello@nexarya.in"
                      className="text-[#E0BD68] font-semibold hover:text-[#FFFFFF] transition-colors"
                    >
                      hello@nexarya.in
                    </a>
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="mt-4.5 pt-3 border-t border-[#243247] flex items-center justify-between font-mono text-[10px] text-[#7F8A99]">
                  <span>MUMBAI &bull; REMOTE DEPLOYMENTS</span>
                  <span className="text-[#C59A3D]">DIRECT LEADERSHIP ACCESS</span>
                </div>

              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
