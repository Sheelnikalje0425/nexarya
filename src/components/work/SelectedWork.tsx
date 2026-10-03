import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="py-14 sm:py-16 bg-[#F8F5EE] border-b border-[#E8E3D8] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5 border-b border-[#E8E3D8] mb-10 sm:mb-12">
            <div className="h-full">
              <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block mb-2">
                Selected Work
              </span>
              <h2
                id="selected-work-heading"
                className="font-editorial text-3xl sm:text-4xl lg:text-[3.2rem] text-[#0F1725] leading-tight font-normal"
              >
                Real work. <br />
                <span className="italic">Built for real workflows.</span>
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#4A5363] max-w-sm font-light leading-relaxed">
              Selected systems, built and deployed.
            </p>
          </div>
        </RevealOnScroll>

        {/* 2 Genuine Projects (Screenshots Dominant, No Boxed Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Project 01: STEMFUSION */}
          <RevealOnScroll>
            <div>
              <div className="border border-[#E8E3D8] bg-[#F1EDE3] overflow-hidden mb-5">
                <img
                  src="/projects/stemfusion/evidence/02-stemfusion-project-library-desktop.png"
                  alt="STEMFUSION Platform Interface"
                  loading="eager"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="lg:min-h-[84px]">
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#0F1725] font-normal mb-1">
                  STEMFUSION
                </h3>
                <p className="font-sans text-sm text-[#4A5363] font-light leading-relaxed mb-3">
                  Education platform for hands-on STEM learning.
                </p>
              </div>

              <Link
                to="/work/stemfusion"
                className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#0F1725] hover:text-[#8A6B1E] transition-colors"
              >
                <span>View Case Study</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </RevealOnScroll>

          {/* Project 02: Railway Concession Management System */}
          <RevealOnScroll delayMs={50}>
            <div className="h-full">
              <div className="border border-[#E8E3D8] bg-[#F1EDE3] overflow-hidden mb-5">
                <img
                  src="/projects/railway/evidence/01-railway-student-applications.jpg"
                  alt="Railway Concession Management System Console"
                  loading="eager"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="lg:min-h-[84px]">
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#0F1725] font-normal mb-1">
                  Railway Concession Management
                </h3>
                <p className="font-sans text-sm text-[#4A5363] font-light leading-relaxed mb-3">
                  Institutional verification and concession management platform.
                </p>
              </div>

              <Link
                to="/work/railway-concession-management"
                className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#0F1725] hover:text-[#8A6B1E] transition-colors"
              >
                <span>View Case Study</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </RevealOnScroll>

        </div>

      </div>
    </section>
  );
}
