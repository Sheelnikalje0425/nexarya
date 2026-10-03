import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function StartSomething() {
  return (
    <section
      id="contact"
      className="py-18 sm:py-24 bg-[#08101B] border-b border-[#1A2638] text-[#F8F5EE] select-none"
      aria-label="Start a Project"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <RevealOnScroll>
          <div className="max-w-2xl space-y-6">
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F8F5EE] leading-tight font-normal">
              Have something <br />
              <span className="italic text-[#E8E3D8]">worth building?</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#B9C0C9] font-light leading-relaxed max-w-xl">
              Tell us what needs to move. We&apos;ll help shape the right engineering approach.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D2AA4E] hover:bg-[#E0BD68] text-[#0F1725] font-sans text-sm font-semibold transition-colors"
              >
                <span>Start a Project</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
