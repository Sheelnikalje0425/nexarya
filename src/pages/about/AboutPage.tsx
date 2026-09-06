import React from "react";
import SEOHead from "@/components/seo/SEOHead";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import BrandLogo from "@/components/navigation/BrandLogo";
import LeadershipTeam from "@/components/team/LeadershipTeam";

const PRINCIPLES = [
  {
    number: "01",
    title: "Purpose-Built Solutions",
    desc: "We do not believe in one-size-fits-all templates or premature abstractions. Every database schema, API route, and user interaction is architected specifically around the business requirements of the engagement.",
  },
  {
    number: "02",
    title: "Architectural Integrity",
    desc: "Code elegance without structural resilience is debt. We enforce strict typing, comprehensive testing, secure authentication boundaries, and defensive API design across every layer.",
  },
  {
    number: "03",
    title: "Total IP & Code Ownership",
    desc: "When we finish engineering a platform, our clients receive full intellectual property assignment, clean version-controlled repositories, and clear documentation. You own your technology stack completely.",
  },
  {
    number: "04",
    title: "Engineered to Evolve",
    desc: "Software is an ongoing asset, not a static deliverable. We build modular, extensible architectures with automated deployment pipelines that allow seamless iteration post-launch.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title="About NEXARYA | Software Engineering Studio & Digital Products"
        description="Learn about NEXARYA's engineering philosophy, mission, core principles, and leadership headquartered in Mumbai, India."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
              <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                STUDIO OVERVIEW
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#0E1720] leading-[1.06] tracking-[-0.025em] mb-6">
              We engineer digital products <br />
              <span className="italic font-normal">beyond the build.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] font-light leading-relaxed">
              NEXARYA was established on a single premise: from complex ideas to production-ready software, we design, build, and evolve digital products that move businesses forward.
            </p>
          </div>
        </RevealOnScroll>

        {/* Brand Core Card */}
        <RevealOnScroll>
          <div className="p-8 sm:p-14 bg-[#FFFFFF] border border-[#DCD6CA] mb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_12px_40px_rgba(14,23,32,0.06)]">
            <div className="max-w-xl">
              <BrandLogo size="lg" />
              <p className="font-sans text-sm sm:text-base text-[#5C6975] font-light leading-relaxed mt-6">
                Headquartered in Mumbai, India, NEXARYA partners with forward-thinking enterprises, founders, and public institutions to architect scalable software platforms, custom internal tools, and intelligent systems.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] font-tech text-xs space-y-3 shrink-0 w-full md:w-auto">
              <div className="text-[#8E9CA8] uppercase tracking-[0.2em] text-[10px] font-semibold">ORGANIZATION OVERVIEW</div>
              <div className="flex justify-between gap-6 text-[#0E1720]">
                <span className="text-[#5C6975]">HQ:</span>
                <span className="font-bold">Mumbai, India</span>
              </div>
              <div className="flex justify-between gap-6 text-[#0E1720]">
                <span className="text-[#5C6975]">Primary Inquiries:</span>
                <span className="font-bold">hello@nexarya.in</span>
              </div>
              <div className="flex justify-between gap-6 text-[#0E1720]">
                <span className="text-[#5C6975]">Operations:</span>
                <span className="text-emerald-700 font-semibold">● Active Production</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 4 Pillars Grid */}
        <div className="mb-20">
          <RevealOnScroll>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
                <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                  CORE PRINCIPLES
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] mt-2">
                Engineering tenets that guide every build.
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRINCIPLES.map((item, idx) => (
              <RevealOnScroll key={item.number} delayMs={idx * 80}>
                <div className="p-8 bg-[#FFFFFF] border border-[#DCD6CA] h-full hover:border-[#0E1720] transition-colors duration-200">
                  <div className="font-tech text-xs text-[#0E1720] font-bold mb-3">{item.number}</div>
                  <h3 className="font-editorial text-2xl text-[#0E1720] mb-3">{item.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#5C6975] leading-relaxed font-light">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Leadership Team / People Behind The System */}
        <LeadershipTeam />

        {/* Bottom CTA */}
        <RevealOnScroll>
          <div className="p-10 sm:p-16 bg-[#FFFFFF] border border-[#DCD6CA] text-center max-w-3xl mx-auto mt-20 shadow-[0_12px_40px_rgba(14,23,32,0.06)]">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] mb-4">
              Partner with NEXARYA.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#5C6975] mb-8 font-light max-w-xl mx-auto">
              From technical discovery to continuous production delivery, let&apos;s build something meaningful together.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start a Conversation
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
