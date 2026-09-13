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
    <div className="pt-32 sm:pt-40 pb-28 bg-[#F8F5EE] min-h-screen select-none">
      <SEOHead
        title="Selected Work & Engineering Case Files | NEXARYA"
        description="Explore verified production case studies engineered by NEXARYA: STEMFUSION educational platform and Railway Concession Management System."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Editorial Page Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 sm:mb-24">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
              <span className="font-mono text-xs tracking-[0.22em] text-[#C59A3D] uppercase font-semibold">
                SELECTED WORK // CASE FILES
              </span>
            </div>
            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] text-[#17202B] leading-[1.02] tracking-[-0.03em] mb-6">
              Selected Work.
            </h1>
            <p className="font-sans text-lg sm:text-xl text-[#394352] font-light leading-relaxed">
              Software built around real workflows, real constraints and real users.
            </p>
          </div>
        </RevealOnScroll>

        {/* Case Files Stack (Two Verified Projects Only) */}
        <div className="space-y-16 sm:space-y-24 mb-24">
          
          {/* CASE FILE 01: STEMFUSION */}
          <RevealOnScroll>
            <div className="bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_16px_50px_rgba(15,23,37,0.04)] overflow-hidden">
              
              {/* Case File Docket Header */}
              <div className="px-6 py-4 bg-[#F1EDE3] border-b border-[#DED7C9] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-editorial text-xl text-[#17202B]">01</span>
                  <span className="font-mono text-xs text-[#17202B] font-bold uppercase tracking-wider">
                    CASE FILE: STEMFUSION
                  </span>
                  <span className="text-[#DED7C9]">/</span>
                  <span className="font-mono text-xs text-[#394352] uppercase">
                    STEM, AI & Robotics Education Platform
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8E3D8] border border-[#DED7C9] text-[11px] font-mono text-[#17202B] uppercase font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>Live Production Deployment</span>
                  </span>

                  <a
                    href="https://stemfusion.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#17202B] hover:text-[#C59A3D] uppercase font-bold underline underline-offset-4 transition-colors"
                  >
                    VISIT LIVE PROJECT ↗
                  </a>
                </div>
              </div>

              {/* Case File Body: Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[#DED7C9]">
                
                {/* Left: Dominant Primary Product Screenshot (7 Cols) */}
                <div className="lg:col-span-7 bg-[#FFFFFF] p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#68717B]">
                      <span>FIGURE 1.0 — PROJECT LIBRARY & TAXONOMY ENGINE</span>
                      <span className="text-[#68717B]">1440 × 900 CAPTURE</span>
                    </div>

                    <div className="border border-[#DED7C9] bg-[#F1EDE3] overflow-hidden">
                      <img
                        src="/projects/stemfusion/evidence/02-stemfusion-project-library-desktop.png"
                        alt="STEMFUSION Project Library live capture"
                        className="w-full h-auto object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#DED7C9] flex items-center justify-between text-xs font-sans text-[#394352]">
                    <span>Multi-category technical index with instant domain filtering</span>
                    <span className="font-mono text-[10px] text-[#17202B] font-semibold">LIVE PRODUCTION EVIDENCE</span>
                  </div>
                </div>

                {/* Right: Narrative & Verified Deliverables (5 Cols) */}
                <div className="lg:col-span-5 bg-[#F1EDE3] p-6 sm:p-10 flex flex-col justify-between space-y-8">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#68717B] uppercase block mb-2 font-semibold">
                      CASE SPECIFICATION
                    </span>

                    <h2 className="font-editorial text-3xl sm:text-4xl text-[#17202B] leading-tight mb-4">
                      Categorized learning repository & interactive catalog.
                    </h2>

                    <p className="font-sans text-sm text-[#394352] leading-relaxed mb-6 font-light">
                      STEMFUSION is an active educational platform engineered by NEXARYA to connect students, mentors, and schools with hands-on STEM curriculums and project builds across 9 distinct engineering domains.
                    </p>

                    {/* Verified Capabilities */}
                    <div className="space-y-2.5 pt-4 border-t border-[#DED7C9]">
                      <div className="flex items-start gap-2 text-xs font-sans text-[#17202B]">
                        <span className="font-mono text-[11px] text-[#C59A3D] mt-0.5">01</span>
                        <span>9-domain project library with structured category filtering</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs font-sans text-[#17202B]">
                        <span className="font-mono text-[11px] text-[#C59A3D] mt-0.5">02</span>
                        <span>Downloadable curriculum proposals, brochures & syllabus modules</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs font-sans text-[#17202B]">
                        <span className="font-mono text-[11px] text-[#C59A3D] mt-0.5">03</span>
                        <span>Grade-wise progression mapping (Grade 3 to Grade 12)</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs font-sans text-[#17202B]">
                        <span className="font-mono text-[11px] text-[#C59A3D] mt-0.5">04</span>
                        <span>School demo booking workflows with automated client dispatch</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tech & Action */}
                  <div className="pt-6 border-t border-[#DED7C9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="font-mono text-[11px] text-[#394352]">
                      Production Web Platform • Interactive Taxonomy • Resource Rails
                    </span>

                    <Link
                      to="/work/stemfusion"
                      className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase text-[#17202B] hover:text-[#C59A3D] font-bold transition-colors shrink-0"
                    >
                      <span>READ CASE STUDY</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </RevealOnScroll>

          {/* CASE FILE 02: RAILWAY CONCESSION MANAGEMENT SYSTEM */}
          <RevealOnScroll>
            <div className="bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_16px_50px_rgba(15,23,37,0.04)] overflow-hidden">
              
              {/* Case File Docket Header */}
              <div className="px-6 py-4 bg-[#E8E3D8] border-b border-[#DED7C9] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-editorial text-xl text-[#17202B]">02</span>
                  <span className="font-mono text-xs text-[#17202B] font-bold uppercase tracking-wider">
                    CASE FILE: RAILWAY CONCESSION MANAGEMENT
                  </span>
                  <span className="text-[#68717B]">/</span>
                  <span className="font-mono text-xs text-[#394352] uppercase">
                    Western Transit & Education Consortium
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFFFF] border border-[#DED7C9] text-[11px] font-mono text-[#17202B] uppercase font-semibold">
                    CASE STUDY
                  </span>
                </div>
              </div>

              {/* Case File Body: Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[#DED7C9]">
                
                {/* Left: Dominant Primary Product Screenshot (7 Cols) */}
                <div className="lg:col-span-7 bg-[#FFFFFF] p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#68717B]">
                      <span>FIGURE 2.0 &mdash; STUDENT VALIDATION &amp; VERIFICATION QUEUE</span>
                      <span className="text-[#68717B]">OPERATIONAL CONSOLE</span>
                    </div>

                    <div className="border border-[#DED7C9] bg-[#F1EDE3] overflow-hidden">
                      <img
                        src="/projects/railway/evidence/01-railway-student-applications.jpg"
                        alt="Railway Concession Management System - Student Verification Queue"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#DED7C9] flex items-center justify-between text-xs font-sans text-[#394352]">
                    <span>Institutional verification queue with role-based validation checkpoints</span>
                    <span className="font-mono text-[10px] text-[#17202B] font-semibold">VERIFIED EVIDENCE</span>
                  </div>
                </div>

                {/* Right: Narrative & Verified Deliverables (5 Cols) */}
                <div className="lg:col-span-5 bg-[#F1EDE3] p-6 sm:p-10 flex flex-col justify-between space-y-8">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#68717B] uppercase block mb-2 font-semibold">
                      CASE SPECIFICATION
                    </span>

                    <h2 className="font-editorial text-3xl sm:text-4xl text-[#17202B] leading-tight mb-4">
                      Software for institutional accountability.
                    </h2>

                    <p className="font-sans text-sm text-[#394352] leading-relaxed mb-6 font-light">
                      An enterprise operations platform engineered to digitize student verification workflows, institutional authorization gates, and concession pass record tracking for transit authorities.
                    </p>

                    {/* Verified Capabilities */}
                    <div className="space-y-2.5 pt-4 border-t border-[#DED7C9]">
                      <div className="flex items-start gap-2 text-xs font-sans text-[#17202B]">
                        <span className="font-mono text-[11px] text-[#C59A3D] mt-0.5">01</span>
                        <span>Structured student identity intake, eligibility rules &amp; document staging</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs font-sans text-[#17202B]">
                        <span className="font-mono text-[11px] text-[#C59A3D] mt-0.5">02</span>
                        <span>Institutional officer review queue cross-referencing academic records</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs font-sans text-[#17202B]">
                        <span className="font-mono text-[11px] text-[#C59A3D] mt-0.5">03</span>
                        <span>Digital pass generation with QR code verification and security safeguards</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs font-sans text-[#17202B]">
                        <span className="font-mono text-[11px] text-[#C59A3D] mt-0.5">04</span>
                        <span>Immutable audit trails with reviewer action timestamps and state transitions</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tech & Action */}
                  <div className="pt-6 border-t border-[#DED7C9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="font-mono text-[11px] text-[#394352]">
                      Python • Flask • MySQL • Docker • AWS
                    </span>

                    <Link
                      to="/work/railway-concession-management"
                      className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase text-[#17202B] hover:text-[#C59A3D] font-bold transition-colors shrink-0"
                    >
                      <span>READ CASE STUDY</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </RevealOnScroll>

        </div>

        {/* Intentional Authenticity & Trust Statement */}
        <RevealOnScroll>
          <div className="p-10 sm:p-14 bg-[#F1EDE3] border border-[#DED7C9] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs text-[#68717B] uppercase tracking-widest font-semibold">
                  VERIFIED PROOF OF WORK
                </span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#17202B] mb-2">
                Selected work speaks first.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                We believe in genuine software demonstrations over manufactured claims. All showcased systems represent production codebases engineered and delivered by our team.
              </p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-4 bg-[#0F1725] text-[#F7F5EF] hover:bg-[#141F30] font-mono text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
            >
              Start a Project &rarr;
            </Link>
          </div>
        </RevealOnScroll>

      </div>
    </div>
  );
}
