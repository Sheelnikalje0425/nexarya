import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SystemVisualization from "./SystemVisualization";

const HERO_INDEX = [
  { num: "01", label: "WORK", href: "/work" },
  { num: "02", label: "ETHOS", href: "/process" },
  { num: "03", label: "ENGINEERING", href: "/solutions" },
  { num: "04", label: "INQUIRE", href: "/contact" },
];

const PRINCIPLES = [
  {
    num: "01",
    title: "DOMAIN-SPECIFIC ARCHITECTURE",
    desc: "Systems mapped to the actual operational context.",
  },
  {
    num: "02",
    title: "BESPOKE WORKFLOW SYNTHESIS",
    desc: "Software designed around how the work actually moves.",
  },
  {
    num: "03",
    title: "PURPOSE-BUILT SOFTWARE",
    desc: "Built for the specific requirements of the business.",
  },
];

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 overflow-hidden bg-[#F4EFE6] border-b border-[#DCD6CA]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Primary Hero Row: Asymmetric Headline + System Artifact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16 sm:mb-20 lg:mb-24">
          
          {/* Left Column: Headline, Copy, CTAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <RevealOnScroll>
              {/* Studio Descriptor */}
              <div className="flex items-center gap-2 mb-6 sm:mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720] shrink-0" />
                <span className="font-mono text-[9px] sm:text-xs tracking-[0.14em] sm:tracking-[0.22em] text-[#5C6975] uppercase font-medium">
                  SOFTWARE ENGINEERING STUDIO // MUMBAI // INDIA
                </span>
              </div>

              {/* Editorial Display Headline */}
              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[4.4rem] xl:text-[5.2rem] leading-[1.02] tracking-[-0.03em] text-[#0E1720] mb-7 sm:mb-8 font-normal">
                Software built for the way your business{" "}
                <span className="italic font-normal">actually works.</span>
              </h1>

              {/* Exact Approved Supporting Copy */}
              <p className="text-lg sm:text-xl lg:text-[1.3rem] text-[#3A4753] max-w-2xl font-sans font-light leading-relaxed mb-9 sm:mb-11">
                We design and engineer custom software for businesses whose workflows don&apos;t fit neatly into off-the-shelf tools.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
                <Button href="/work" variant="primary" size="lg">
                  VIEW OUR WORK
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  START A PROJECT
                </Button>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Three-Stage System Visualization (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <RevealOnScroll delayMs={60}>
              <SystemVisualization />
            </RevealOnScroll>
          </div>

        </div>

        {/* Hero Index Strip (Part of Normal Document Flow) */}
        <RevealOnScroll delayMs={90}>
          <div className="pt-8 pb-8 border-t border-[#DCD6CA] flex flex-wrap items-center justify-between gap-4">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-semibold">
              STUDIO INDEX
            </div>
            <nav className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-mono">
              {HERO_INDEX.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center gap-2 text-[#5C6975] hover:text-[#0E1720] transition-colors py-1 group"
                >
                  <span className="text-[#8C6D1F] text-[10px] font-semibold">{item.num}</span>
                  <span className="tracking-wider uppercase group-hover:underline underline-offset-4">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </RevealOnScroll>

        {/* Supporting Principles Section (3-Column Restrained Architectural Tenets) */}
        <RevealOnScroll delayMs={120}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-[#EAE5DB]">
            {PRINCIPLES.map((item) => (
              <div
                key={item.num}
                className="p-6 sm:p-7 bg-[#FAF8F5] border border-[#EAE5DB] hover:border-[#DCD6CA] transition-colors"
              >
                <div className="font-mono text-xs text-[#8C6D1F] font-semibold tracking-widest mb-3">
                  {item.num}
                </div>
                <h2 className="font-mono text-xs sm:text-sm font-semibold text-[#0E1720] tracking-wider uppercase mb-2">
                  {item.title}
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#5C6975] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
