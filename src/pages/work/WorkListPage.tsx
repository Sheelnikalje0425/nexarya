import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "@/components/ui/Icons";

const RAILWAY_WORKFLOW_PREVIEW = [
  { step: "01", name: "APPLICATION", role: "Student identity intake & document staging" },
  { step: "02", name: "VERIFICATION", role: "Institutional officer validation queue" },
  { step: "03", name: "APPROVAL", role: "Role-gated administrative authorization" },
  { step: "04", name: "PASS ISSUANCE", role: "Concession certificate generation & QR verification" },
  { step: "05", name: "AUDIT", role: "Structured officer review & compliance logging" },
];

export default function WorkListPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 sm:pt-40 pb-28 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title="Selected Work & Engineering Case Files | NEXARYA"
        description="Explore verified production case studies engineered by NEXARYA: STEMFUSION educational platform and Railway Concession Management System."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Editorial Page Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 sm:mb-24">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
              <span className="font-tech text-xs tracking-[0.22em] text-[#5C6975] uppercase font-medium">
                SELECTED WORK // CASE FILES
              </span>
            </div>
            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] text-[#0E1720] leading-[1.02] tracking-[-0.03em] mb-6">
              Selected Work.
            </h1>
            <p className="font-sans text-lg sm:text-xl text-[#3A4753] font-light leading-relaxed">
              Software built around real workflows, real constraints and real users.
            </p>
          </div>
        </RevealOnScroll>

        {/* Case Files Stack (Two Verified Projects Only) */}
        <div className="space-y-16 sm:space-y-24 mb-24">
          
          {/* CASE FILE 01: STEMFUSION */}
          <RevealOnScroll>
            <div className="bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_16px_50px_rgba(14,23,32,0.06)] overflow-hidden">
              
              {/* Case File Docket Header */}
              <div className="px-6 py-4 bg-[#FAF8F5] border-b border-[#DCD6CA] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-editorial text-xl text-[#0E1720]">01</span>
                  <span className="font-tech text-xs text-[#0E1720] font-bold uppercase tracking-wider">
                    CASE FILE: STEMFUSION
                  </span>
                  <span className="text-[#DCD6CA]">/</span>
                  <span className="font-tech text-xs text-[#5C6975] uppercase">
                    STEM, AI & Robotics Education Platform
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EAE5DB] border border-[#DCD6CA] text-[11px] font-tech text-[#0E1720] uppercase font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>Live Production Deployment</span>
                  </span>

                  <a
                    href="https://stemfusion.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-tech text-xs text-[#0E1720] hover:text-[#B58B1E] uppercase font-bold underline underline-offset-4 transition-colors"
                  >
                    VISIT LIVE PROJECT ↗
                  </a>
                </div>
              </div>

              {/* Case File Body: Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[#DCD6CA]">
                
                {/* Left: Dominant Primary Product Screenshot (7 Cols) */}
                <div className="lg:col-span-7 bg-[#FFFFFF] p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs font-tech text-[#5C6975]">
                      <span>FIGURE 1.0 — PROJECT LIBRARY & TAXONOMY ENGINE</span>
                      <span className="text-[#8E9CA8]">1440 × 900 CAPTURE</span>
                    </div>

                    <div className="border border-[#DCD6CA] bg-[#FAF8F5] overflow-hidden">
                      <img
                        src="/projects/stemfusion/evidence/02-stemfusion-project-library-desktop.png"
                        alt="STEMFUSION Project Library live capture"
                        className="w-full h-auto object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#EAE5DB] flex items-center justify-between text-xs font-sans text-[#5C6975]">
                    <span>Multi-category technical index with instant domain filtering</span>
                    <span className="font-tech text-[10px] text-[#0E1720] font-semibold">LIVE PRODUCTION EVIDENCE</span>
                  </div>
                </div>

                {/* Right: Narrative & Verified Deliverables (5 Cols) */}
                <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-10 flex flex-col justify-between space-y-8">
                  <div>
                    <span className="font-tech text-[10px] tracking-[0.2em] text-[#8E9CA8] uppercase block mb-2 font-semibold">
                      PUBLIC PLATFORM SPECIFICATION
                    </span>

                    <h2 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] leading-tight mb-4">
                      Categorized learning repository & interactive catalog.
                    </h2>

                    <p className="font-sans text-sm text-[#5C6975] leading-relaxed mb-6 font-light">
                      STEMFUSION is an active educational platform engineered by NEXARYA to connect students, mentors, and schools with hands-on STEM curriculums and project builds across 9 distinct engineering domains.
                    </p>

                    {/* Verified Capabilities */}
                    <div className="space-y-2.5 pt-4 border-t border-[#DCD6CA]">
                      <div className="flex items-start gap-2 text-xs font-sans text-[#0E1720]">
                        <span className="font-tech text-[11px] text-[#8E9CA8] mt-0.5">01</span>
                        <span>9-domain project library with structured category filtering</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs font-sans text-[#0E1720]">
                        <span className="font-tech text-[11px] text-[#8E9CA8] mt-0.5">02</span>
                        <span>Downloadable curriculum proposals, brochures & syllabus modules</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs font-sans text-[#0E1720]">
                        <span className="font-tech text-[11px] text-[#8E9CA8] mt-0.5">03</span>
                        <span>Grade-wise progression mapping (Grade 3 to Grade 12)</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs font-sans text-[#0E1720]">
                        <span className="font-tech text-[11px] text-[#8E9CA8] mt-0.5">04</span>
                        <span>School demo booking workflows with automated client dispatch</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tech & Action */}
                  <div className="pt-6 border-t border-[#DCD6CA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="font-tech text-[11px] text-[#5C6975]">
                      Production Web Platform • Interactive Taxonomy • Resource Rails
                    </span>

                    <Link
                      to="/work/stemfusion"
                      className="inline-flex items-center gap-2 font-tech text-xs tracking-[0.14em] uppercase text-[#0E1720] hover:text-[#B58B1E] font-bold transition-colors shrink-0"
                    >
                      <span>READ CASE SPECIFICATION</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </RevealOnScroll>

          {/* CASE FILE 02: RAILWAY CONCESSION MANAGEMENT SYSTEM */}
          <RevealOnScroll>
            <div className="bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_16px_50px_rgba(14,23,32,0.06)] overflow-hidden">
              
              {/* Case File Docket Header */}
              <div className="px-6 py-4 bg-[#EAE5DB] border-b border-[#DCD6CA] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-editorial text-xl text-[#0E1720]">02</span>
                  <span className="font-tech text-xs text-[#0E1720] font-bold uppercase tracking-wider">
                    CASE FILE: RAILWAY CONCESSION MANAGEMENT
                  </span>
                  <span className="text-[#8E9CA8]">/</span>
                  <span className="font-tech text-xs text-[#5C6975] uppercase">
                    Western Transit & Education Consortium
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFFFF] border border-[#DCD6CA] text-[11px] font-tech text-[#0E1720] uppercase font-semibold">
                    INSTITUTIONAL PROJECT RECORD
                  </span>
                </div>
              </div>

              {/* Narrative Section: Software for Accountability */}
              <div className="p-8 sm:p-12 border-b border-[#DCD6CA] bg-[#FFFFFF]">
                <div className="max-w-3xl">
                  <span className="font-tech text-[10px] tracking-[0.2em] text-[#8E9CA8] uppercase block mb-2 font-semibold">
                    INSTITUTIONAL OPERATIONS PLATFORM
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] leading-tight mb-4">
                    Software for accountability.
                  </h2>
                  <p className="font-sans text-base text-[#5C6975] leading-relaxed font-light">
                    An enterprise operations platform engineered to digitize student verification workflows, institutional authorization, and concession record tracking.
                  </p>
                </div>
              </div>

              {/* 5-Stage Verified Workflow */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[#DCD6CA]">
                {RAILWAY_WORKFLOW_PREVIEW.map((st) => (
                  <div key={st.step} className="p-6 sm:p-8 bg-[#FFFFFF] hover:bg-[#FAF8F5] transition-colors flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE5DB]">
                        <span className="font-editorial text-2xl text-[#0E1720]">{st.step}</span>
                        <span className="font-tech text-[9px] text-[#8E9CA8] tracking-widest uppercase">STAGE</span>
                      </div>
                      <h3 className="font-tech text-xs tracking-[0.16em] uppercase text-[#0E1720] font-bold mb-2">
                        {st.name}
                      </h3>
                      <p className="font-sans text-xs text-[#5C6975] leading-relaxed">
                        {st.role}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-[#EAE5DB] font-tech text-[9.5px] text-[#8E9CA8]">
                      OPERATIONAL STAGE
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Footer Bar */}
              <div className="p-6 sm:p-8 bg-[#FAF8F5] border-t border-[#DCD6CA] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-tech text-[10px] text-[#8E9CA8] uppercase tracking-wider mr-2 font-semibold">
                    CORE STACK:
                  </span>
                  {["Python", "Flask", "MySQL (Relational Core)", "Docker", "AWS"].map((tech) => (
                    <span
                      key={tech}
                      className="font-tech text-[11px] text-[#0E1720] px-3 py-1 bg-[#FFFFFF] border border-[#DCD6CA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to="/work/railway"
                  className="inline-flex items-center gap-2 font-tech text-xs tracking-[0.14em] uppercase text-[#0E1720] hover:text-[#B58B1E] font-bold transition-colors shrink-0"
                >
                  <span>READ COMPLETE CASE SPECIFICATION</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </RevealOnScroll>

        </div>

        {/* Intentional Authenticity & Trust Statement */}
        <RevealOnScroll>
          <div className="p-10 sm:p-14 bg-[#FAF8F5] border border-[#DCD6CA] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
                <span className="font-tech text-xs text-[#5C6975] uppercase tracking-widest font-semibold">
                  VERIFIED PROOF OF WORK
                </span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#0E1720] mb-2">
                Selected work speaks first.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#5C6975] font-light leading-relaxed">
                We believe in genuine software demonstrations over manufactured claims. All showcased systems represent production codebases engineered and delivered by our team.
              </p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-4 bg-[#0E1720] text-[#FFFFFF] hover:bg-[#1A2530] font-tech text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
            >
              Start a Discussion →
            </Link>
          </div>
        </RevealOnScroll>

      </div>
    </div>
  );
}
