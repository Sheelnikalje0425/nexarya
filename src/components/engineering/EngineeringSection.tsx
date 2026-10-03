import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function EngineeringSection() {
  return (
    <section
      id="engineering"
      aria-labelledby="engineering-heading"
      className="py-14 sm:py-18 bg-[#F8F5EE] border-b border-[#E8E3D8] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-6 border-y border-[#E8E3D8]">
            <div>
              <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block mb-2">
                How We Work
              </span>
              <h2
                id="engineering-heading"
                className="font-editorial text-2xl sm:text-3xl lg:text-[2.2rem] text-[#0F1725] font-normal leading-tight"
              >
                Understand &rarr; Structure &rarr; Engineer &rarr; Deliver
              </h2>
            </div>

            <div className="shrink-0">
              <Link
                to="/process"
                className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#0F1725] hover:text-[#8A6B1E] transition-colors"
              >
                <span>Our process</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
