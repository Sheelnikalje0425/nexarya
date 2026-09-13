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
    <section id="work" className="py-24 sm:py-36 bg-[#F8F5EE] border-b border-[#DED7C9] select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header: Editorial Scale */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#17202B]" />
                <span className="font-mono text-xs tracking-[0.22em] text-[#394352] uppercase font-medium">
                  CASE 01 // LIVE PRODUCTION EVIDENCE
                </span>
              </div>
              <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.2rem] text-[#17202B] leading-[1.02] tracking-[-0.03em]">
                Real software, <br className="hidden sm:inline" />
                <span className="italic font-normal">in production.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#394352] max-w-md font-light leading-relaxed">
              STEMFUSION is an active educational platform designed and engineered by NEXARYA to connect students, mentors, and schools with hands-on STEM curriculums.
            </p>
          </div>
        </RevealOnScroll>

        {/* Primary Product Evidence Showcase: Project Library Dominant Focus */}
        <RevealOnScroll delayMs={60}>
          <div className="bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_16px_50px_rgba(14,23,32,0.07)] overflow-hidden mb-12">
            
            {/* Workbench Docket Header */}
            <div className="px-6 py-4 bg-[#F1EDE3] border-b border-[#DED7C9] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#17202B] font-bold uppercase tracking-wider">
                  STEMFUSION
                </span>
                <span className="text-[#DED7C9]">/</span>
                <span className="font-mono text-xs text-[#394352]">
                  STEM, AI & Robotics Education Platform
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#DED7C9] border border-[#DED7C9] text-[11px] font-mono text-[#17202B] uppercase font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Live Production Deployment</span>
                </span>

                <a
                  href="https://stemfusion.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#17202B] hover:text-[#C59A3D] uppercase font-semibold underline underline-offset-4 transition-colors flex items-center gap-1"
                >
                  <span>stemfusion.in ↗</span>
                </a>
              </div>
            </div>

            {/* Dominant Primary Screenshot: Project Library */}
            <div className="p-6 sm:p-10 bg-[#FFFFFF]">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#394352]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#17202B]">FIGURE 1.1</span>
                  <span>— CATEGORIZED PROJECT LIBRARY & TAXONOMY ENGINE</span>
                </div>
                <span className="text-[#68717B] uppercase">1440 × 900 LIVE CAPTURE</span>
              </div>

              <div className="border border-[#DED7C9] bg-[#F1EDE3] overflow-hidden">
                <img
                  src="/projects/stemfusion/evidence/02-stemfusion-project-library-desktop.png"
                  alt="STEMFUSION Project Library live screenshot"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <div className="pt-4 mt-3 flex items-center justify-between text-xs font-sans text-[#394352]">
                <span>Structured multi-category index with dynamic filtering across 9 domains</span>
                <span className="font-mono text-[10px] text-[#17202B] font-semibold">LIVE PRODUCTION EVIDENCE</span>
              </div>
            </div>

            {/* Supporting Secondary Screenshots Strip: Home Desktop & Mobile Viewport */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#DED7C9] border-t border-[#DED7C9]">
              
              {/* Supporting Secondary: Homepage Desktop (8 Cols) */}
              <div className="md:col-span-8 bg-[#F1EDE3] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2 text-[11px] font-mono text-[#394352]">
                    <span>FIGURE 1.2 — PUBLIC PORTAL & HERO INTERFACE</span>
                    <span className="text-[#68717B]">DESKTOP VIEWPORT</span>
                  </div>
                  <div className="border border-[#DED7C9] overflow-hidden bg-[#FFFFFF]">
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
                  <div className="flex items-center justify-between mb-2 text-[11px] font-mono text-[#394352]">
                    <span>FIGURE 1.3 — MOBILE VIEWPORT</span>
                    <span className="text-[#68717B]">RESPONSIVE</span>
                  </div>
                  <div className="w-28 mx-auto border border-[#DED7C9] overflow-hidden bg-[#F1EDE3] shadow-xs">
                    <img
                      src="/projects/stemfusion/evidence/01-stemfusion-home-mobile.png"
                      alt="STEMFUSION Mobile viewport"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DED7C9] flex items-center justify-between">
                  <div className="font-mono text-xs text-[#17202B] font-semibold">
                    COMPLETE SPECIFICATION
                  </div>
                  <Link
                    to="/work/stemfusion"
                    className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase text-[#17202B] hover:text-[#C59A3D] font-semibold transition-colors"
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
              <div className="p-7 bg-[#FFFFFF] border border-[#DED7C9] h-full flex flex-col justify-between hover:border-[#17202B] transition-colors">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#17202B] uppercase font-bold block mb-2">
                    {fact.tag}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#17202B] mb-2 leading-snug">
                    {fact.title}
                  </h3>
                  <p className="font-sans text-xs text-[#394352] leading-relaxed">
                    {fact.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#DED7C9] font-mono text-[10px] text-[#68717B] flex items-center justify-between">
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
