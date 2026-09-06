import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const STEMFUSION_FACTS = [
  {
    tag: "TAXONOMY ENGINE",
    title: "Categorized Project Library",
    desc: "9-domain technical taxonomy indexing robotics, AI, IoT, Arduino, and 3D printing with real-time category filtering.",
  },
  {
    tag: "RESOURCE RAILS",
    title: "Curriculum & Asset Hub",
    desc: "Centralized repository delivering institutional brochures, downloadable program proposals, and student syllabus modules.",
  },
  {
    tag: "PROGRESSION",
    title: "Grade-Wise Learning Pathways",
    desc: "Structured pedagogical curriculum mapping hands-on hardware experiments from Grade 3 foundations to Grade 12 automation.",
  },
  {
    tag: "INTAKE WORKFLOW",
    title: "Institutional Registration",
    desc: "School demo scheduling and student intake pipelines with client-side validation and automated dispatch.",
  },
];

export default function StemfusionProof() {
  return (
    <section id="work" className="py-24 sm:py-36 bg-[#F4EFE6] border-b border-[#DCD6CA] select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header: Editorial Scale */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
                <span className="font-tech text-xs tracking-[0.22em] text-[#5C6975] uppercase font-medium">
                  CASE 01 // LIVE PRODUCTION EVIDENCE
                </span>
              </div>
              <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.2rem] text-[#0E1720] leading-[1.02] tracking-[-0.03em]">
                Real software, <br className="hidden sm:inline" />
                <span className="italic font-normal">in production.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] max-w-md font-light leading-relaxed">
              STEMFUSION is an active educational platform designed and engineered by NEXARYA to connect students, mentors, and schools with hands-on STEM curriculums.
            </p>
          </div>
        </RevealOnScroll>

        {/* Primary Product Evidence Showcase: Project Library Dominant Focus */}
        <RevealOnScroll delayMs={60}>
          <div className="bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_16px_50px_rgba(14,23,32,0.07)] overflow-hidden mb-12">
            
            {/* Workbench Docket Header */}
            <div className="px-6 py-4 bg-[#FAF8F5] border-b border-[#DCD6CA] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-tech text-xs text-[#0E1720] font-bold uppercase tracking-wider">
                  STEMFUSION
                </span>
                <span className="text-[#DCD6CA]">/</span>
                <span className="font-tech text-xs text-[#5C6975]">
                  STEM, AI & Robotics Education Platform
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EAE5DB] border border-[#DCD6CA] text-[11px] font-tech text-[#0E1720] uppercase font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Live Production Deployment</span>
                </span>

                <a
                  href="https://stemfusion.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-tech text-xs text-[#0E1720] hover:text-[#B58B1E] uppercase font-semibold underline underline-offset-4 transition-colors flex items-center gap-1"
                >
                  <span>stemfusion.in ↗</span>
                </a>
              </div>
            </div>

            {/* Dominant Primary Screenshot: Project Library */}
            <div className="p-6 sm:p-10 bg-[#FFFFFF]">
              <div className="flex items-center justify-between mb-3 text-xs font-tech text-[#5C6975]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#0E1720]">FIGURE 1.1</span>
                  <span>— CATEGORIZED PROJECT LIBRARY & TAXONOMY ENGINE</span>
                </div>
                <span className="text-[#8E9CA8] uppercase">1440 × 900 LIVE CAPTURE</span>
              </div>

              <div className="border border-[#DCD6CA] bg-[#FAF8F5] overflow-hidden">
                <img
                  src="/projects/stemfusion/evidence/02-stemfusion-project-library-desktop.png"
                  alt="STEMFUSION Project Library live screenshot"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <div className="pt-4 mt-3 flex items-center justify-between text-xs font-sans text-[#5C6975]">
                <span>Structured multi-category index with dynamic filtering across 9 domains</span>
                <span className="font-tech text-[10px] text-[#0E1720] font-semibold">LIVE PRODUCTION EVIDENCE</span>
              </div>
            </div>

            {/* Supporting Secondary Screenshots Strip: Home Desktop & Mobile Viewport */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#DCD6CA] border-t border-[#DCD6CA]">
              
              {/* Supporting Secondary: Homepage Desktop (8 Cols) */}
              <div className="md:col-span-8 bg-[#FAF8F5] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2 text-[11px] font-tech text-[#5C6975]">
                    <span>FIGURE 1.2 — PUBLIC PORTAL & HERO INTERFACE</span>
                    <span className="text-[#8E9CA8]">DESKTOP VIEWPORT</span>
                  </div>
                  <div className="border border-[#DCD6CA] overflow-hidden bg-[#FFFFFF]">
                    <img
                      src="/projects/stemfusion/evidence/01-stemfusion-home-desktop.png"
                      alt="STEMFUSION Live Homepage"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Supporting Secondary: Mobile Viewport & Case Study Trigger (4 Cols) */}
              <div className="md:col-span-4 bg-[#FFFFFF] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2 text-[11px] font-tech text-[#5C6975]">
                    <span>FIGURE 1.3 — MOBILE VIEWPORT</span>
                    <span className="text-[#8E9CA8]">RESPONSIVE</span>
                  </div>
                  <div className="w-28 mx-auto border border-[#DCD6CA] overflow-hidden bg-[#FAF8F5] shadow-xs">
                    <img
                      src="/projects/stemfusion/evidence/01-stemfusion-home-mobile.png"
                      alt="STEMFUSION Mobile viewport"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EAE5DB] flex items-center justify-between">
                  <div className="font-tech text-xs text-[#0E1720] font-semibold">
                    COMPLETE SPECIFICATION
                  </div>
                  <Link
                    to="/work/stemfusion"
                    className="inline-flex items-center gap-1.5 font-tech text-xs tracking-wider uppercase text-[#0E1720] hover:text-[#B58B1E] font-semibold transition-colors"
                  >
                    <span>CASE STUDY</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </RevealOnScroll>

        {/* 4 Concrete Product Facts Below Screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEMFUSION_FACTS.map((fact, idx) => (
            <RevealOnScroll key={fact.tag} delayMs={idx * 50}>
              <div className="p-7 bg-[#FFFFFF] border border-[#DCD6CA] h-full flex flex-col justify-between hover:border-[#0E1720] transition-colors">
                <div>
                  <span className="font-tech text-[10px] tracking-[0.18em] text-[#0E1720] uppercase font-bold block mb-2">
                    {fact.tag}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#0E1720] mb-2 leading-snug">
                    {fact.title}
                  </h3>
                  <p className="font-sans text-xs text-[#5C6975] leading-relaxed">
                    {fact.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#EAE5DB] font-tech text-[10px] text-[#8E9CA8] flex items-center justify-between">
                  <span>LIVE PRODUCTION EVIDENCE</span>
                  <span>✔</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
