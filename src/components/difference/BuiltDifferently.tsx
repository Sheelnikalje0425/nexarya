import React from "react";
import { TargetIcon, CodeIcon, LockIcon, TrendingUpIcon } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const PRINCIPLES = [
  {
    number: "01",
    title: "100% Code & IP Ownership",
    description: "Every line of code, infrastructure config, and schema belongs entirely to your organization with full source ownership.",
    icon: LockIcon,
  },
  {
    number: "02",
    title: "Direct Senior Engineering",
    description: "You work directly with the senior engineers designing your system architecture and writing production code.",
    icon: CodeIcon,
  },
  {
    number: "03",
    title: "Milestone Accountability",
    description: "Commercial milestones are tied directly to verified staging demonstrations, delivery checkpoints, and test pass rates.",
    icon: TargetIcon,
  },
  {
    number: "04",
    title: "Maintainable Architecture",
    description: "We engineer modular monoliths and clean domain boundaries that minimize long-term operational and cloud costs.",
    icon: TrendingUpIcon,
  },
];

export default function BuiltDifferently() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#08101B] border-b border-[#243247] select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Identifier & Headline */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-14 sm:mb-18">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
              <span className="font-tech text-xs tracking-[0.24em] text-[#C59A3D] uppercase font-medium">
                COMMERCIAL ENGAGEMENT PRINCIPLES
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F8F5EE] leading-[1.08] tracking-[-0.02em] mb-4">
              How we partner.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#89929B] font-light leading-relaxed">
              We treat engineering as an investment in your company&apos;s operational asset value, not an outsourced transaction.
            </p>
          </div>
        </RevealOnScroll>

        {/* Four Structured Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#243247] border border-[#243247] overflow-hidden">
          {PRINCIPLES.map((principle, idx) => {
            const IconComponent = principle.icon;
            return (
              <RevealOnScroll key={principle.number} delayMs={idx * 60}>
                <div className="group relative flex flex-col justify-between p-8 bg-[#0F1725] hover:bg-[#141F30] transition-all duration-300 h-full">
                  <div>
                    {/* Top Row: Icon + Number */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="p-2 rounded bg-white/[0.03] border border-white/10 group-hover:border-[#C59A3D]/40 group-hover:bg-[#C59A3D]/10 transition-colors duration-300">
                        <IconComponent size={22} className="text-[#C59A3D] group-hover:text-[#E0BD68] transition-colors duration-300" />
                      </div>
                      <span className="font-tech text-xs tracking-[0.2em] text-[#C59A3D] font-medium">
                        {principle.number}
                      </span>
                    </div>

                    {/* Principle Title */}
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#F8F5EE] group-hover:text-[#E0BD68] transition-colors duration-300 leading-snug mb-3">
                      {principle.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-[13px] text-[#89929B] leading-relaxed font-light mt-4">
                    {principle.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
