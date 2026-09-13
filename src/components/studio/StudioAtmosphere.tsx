import React from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function StudioAtmosphere() {
  return (
    <section
      id="studio"
      data-section="studio-environment"
      aria-label="Studio Engineering Environment"
      className="py-14 sm:py-18 lg:py-22 bg-[#E8E3D8] border-b border-[#DED7C9] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <RevealOnScroll>
          <div className="bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_8px_30px_rgba(15,23,37,0.03)] overflow-hidden">
            {/* Full-Width Large Editorial Photographic Frame */}
            <div className="relative bg-[#08101B] overflow-hidden aspect-[16/10] sm:aspect-[21/9] lg:aspect-[24/10]">
              <picture className="w-full h-full block">
                <source srcSet="/engineering/engineering-studio-space.webp" type="image/webp" />
                <img
                  src="/engineering/engineering-studio-space.jpg"
                  alt="NEXARYA architectural studio and software engineering environment"
                  loading="lazy"
                  decoding="async"
                  width="1024"
                  height="576"
                  className="w-full h-full object-cover object-center"
                />
              </picture>
            </div>

            {/* Restrained Architectural Docket Strip */}
            <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-[#F8F5EE] border-t border-[#DED7C9] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono text-[#394352]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="text-[#17202B] font-semibold text-[11px] uppercase tracking-wider">
                  BUILT AROUND THE WORK
                </span>
                <span className="text-[#DED7C9] hidden sm:inline">//</span>
                <span className="text-[#394352] text-[11px] hidden sm:inline">
                  Where architectural models, relational schemas, and hardened runtimes converge.
                </span>
              </div>
              <span className="text-[#C59A3D] text-[10px] uppercase tracking-wider font-semibold shrink-0">
                ACTIVE ENGINEERING ENVIRONMENT
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
