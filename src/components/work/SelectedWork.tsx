import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface RailwayStage {
  step: string;
  name: string;
  desc: string;
  artifact: string;
}

const RAILWAY_STAGES: RailwayStage[] = [
  {
    step: "01",
    name: "APPLICATION",
    desc: "Student identity intake, eligibility details, and document upload.",
    artifact: "Application Record",
  },
  {
    step: "02",
    name: "VERIFICATION",
    desc: "Institutional review queue cross-referencing academic records.",
    artifact: "Verification State",
  },
  {
    step: "03",
    name: "APPROVAL",
    desc: "Transit authority authorization against quota and route rules.",
    artifact: "Authorization Sign-Off",
  },
  {
    step: "04",
    name: "PASS ISSUANCE",
    desc: "Generation of verified digital pass with security QR identifier.",
    artifact: "Digital Concession Pass",
  },
  {
    step: "05",
    name: "AUDIT",
    desc: "Timestamped logging of reviewer actions and state transitions.",
    artifact: "Audit Log Entry",
  },
];

const STEMFUSION_VIEWS = [
  {
    id: "home",
    label: "Platform Home",
    caption: "Public education portal with program pathways, technology domains, and lab engagement.",
    image: "/projects/stemfusion/evidence/01-stemfusion-home-desktop.png",
  },
  {
    id: "library",
    label: "Project Library",
    caption: "Interactive project repository indexing AI, robotics, IoT, and hardware projects.",
    image: "/projects/stemfusion/evidence/02-stemfusion-project-library-desktop.png",
  },
  {
    id: "curriculum",
    label: "Learning Pathways",
    caption: "Structured curriculum pathways organizing progressive STEM modules.",
    image: "/projects/stemfusion/evidence/04-stemfusion-curriculum-learning-desktop.png",
  },
  {
    id: "intake",
    label: "Demo Intake",
    caption: "Institutional demo intake pipeline for schools and educational organizations.",
    image: "/projects/stemfusion/evidence/06-stemfusion-contact-inquiry-desktop.png",
  },
];

export default function SelectedWork() {
  const [activeRailwayStep, setActiveRailwayStep] = useState<number | null>(null);
  const [activeStemfusionView, setActiveStemfusionView] = useState(0);

  const currentView = STEMFUSION_VIEWS[activeStemfusionView];

  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="py-18 sm:py-22 lg:py-26 bg-[#F1EDE3] border-b border-[#DED7C9] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-9 sm:pb-11 border-b border-[#DED7C9] mb-11 sm:mb-14">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  02 // SELECTED WORK
                </span>
              </div>
              <h2
                id="selected-work-heading"
                className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] text-[#17202B] leading-[1.05] tracking-[-0.03em] font-normal"
              >
                Software built around{" "}
                <span className="italic font-normal">real operational needs.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#394352] max-w-md font-light leading-relaxed">
              Verified software systems engineered and deployed for real-world workflows.
            </p>
          </div>
        </RevealOnScroll>

        {/* Case Files Stream */}
        <div className="space-y-12 sm:space-y-14">

          {/* ========================================================================= */}
          {/* PROJECT 01: STEMFUSION (Dominant Visual Presentation + Live Evidence)     */}
          {/* ========================================================================= */}
          <article
            aria-labelledby="project-stemfusion-title"
            className="bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_6px_24px_rgba(15,23,37,0.03)] hover:border-[#17202B]/40 transition-colors duration-200 overflow-hidden"
          >
            {/* Top Bar */}
            <div className="px-6 py-3.5 bg-[#E8E3D8]/70 border-b border-[#DED7C9] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C59A3D]">01</span>
                <span className="text-[#DED7C9]">//</span>
                <span className="font-mono text-xs text-[#17202B] uppercase tracking-wider font-semibold">
                  STEMFUSION
                </span>
                <span className="text-[#DED7C9] hidden sm:inline">&mdash;</span>
                <span className="font-mono text-xs text-[#394352] hidden sm:inline">
                  STEM, AI &amp; Robotics Education Platform
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#F8F5EE] border border-[#DED7C9] text-[10px] font-mono text-[#17202B] uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>LIVE PLATFORM</span>
                </span>

                <a
                  href="https://stemfusion.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#17202B] hover:text-[#C59A3D] uppercase font-semibold underline underline-offset-4 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#17202B]"
                >
                  <span>stemfusion.in</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Case File Content */}
            <div className="p-6 sm:p-8 lg:p-9">
              
              {/* Context & Description Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-7 pb-6 border-b border-[#DED7C9]">
                <div className="max-w-2xl">
                  <h3
                    id="project-stemfusion-title"
                    className="font-editorial text-3xl sm:text-4xl text-[#17202B] font-normal leading-tight mb-2"
                  >
                    STEMFUSION
                  </h3>
                  <p className="font-sans text-base text-[#394352] font-light leading-relaxed">
                    An interactive educational platform engineered for structured STEM learning and resource distribution.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href="https://stemfusion.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C59A3D] hover:bg-[#E0BD68] text-[#08101B] font-mono text-xs uppercase tracking-wider font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3D]"
                  >
                    <span>VIEW LIVE PROJECT</span>
                    <ExternalLink size={12} />
                  </a>

                  <Link
                    to="/work/stemfusion"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFFFFF] hover:bg-[#E8E3D8] text-[#17202B] border border-[#DED7C9] font-mono text-xs uppercase tracking-wider font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17202B]"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight size={12} className="text-[#C59A3D]" />
                  </Link>
                </div>
              </div>

              {/* Dominant Real Product Evidence Showcase */}
              <div>
                {/* View Selector Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {STEMFUSION_VIEWS.map((view, idx) => (
                      <button
                        key={view.id}
                        type="button"
                        onClick={() => setActiveStemfusionView(idx)}
                        className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer border ${
                          activeStemfusionView === idx
                            ? "bg-[#0F1725] text-[#F7F5EF] border-[#0F1725] font-semibold"
                            : "bg-[#FFFFFF] text-[#394352] border-[#DED7C9] hover:text-[#17202B] hover:border-[#17202B]/40"
                        }`}
                      >
                        {view.label}
                      </button>
                    ))}
                  </div>

                  <span className="font-mono text-[10px] text-[#68717B] uppercase">
                    PRODUCTION EVIDENCE
                  </span>
                </div>

                {/* Primary Evidence Frame: Desktop Capture */}
                <div className="border border-[#DED7C9] bg-[#FFFFFF] overflow-hidden">
                  <div className="px-4 py-2 bg-[#E8E3D8]/70 border-b border-[#DED7C9] flex items-center justify-between text-[11px] font-mono text-[#394352]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#17202B]/20" />
                      <span className="w-2 h-2 rounded-full bg-[#17202B]/20" />
                      <span className="w-2 h-2 rounded-full bg-[#17202B]/20" />
                      <span className="ml-2 text-[#17202B] font-medium">https://stemfusion.in</span>
                    </div>
                    <span className="text-emerald-700 text-[10px] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      LIVE PLATFORM
                    </span>
                  </div>

                  <div className="overflow-hidden bg-[#FFFFFF] relative">
                    <img
                      src={currentView.image}
                      alt={`STEMFUSION - ${currentView.label}`}
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Evidence Caption */}
                <div className="pt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-[#394352]">
                  <span>{currentView.caption}</span>
                  <span className="font-mono text-[10px] text-[#17202B] font-medium uppercase shrink-0">
                    VIEW {activeStemfusionView + 1} OF {STEMFUSION_VIEWS.length}
                  </span>
                </div>
              </div>

            </div>
          </article>

          {/* ========================================================================= */}
          {/* PROJECT 02: Railway Concession Management System (Workflow Engineering)   */}
          {/* ========================================================================= */}
          <article
            aria-labelledby="project-railway-title"
            className="bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_6px_24px_rgba(15,23,37,0.03)] hover:border-[#17202B]/40 transition-colors duration-200 overflow-hidden"
          >
            {/* Top Bar */}
            <div className="px-6 py-3.5 bg-[#E8E3D8]/70 border-b border-[#DED7C9] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C59A3D]">02</span>
                <span className="text-[#DED7C9]">//</span>
                <span className="font-mono text-xs text-[#17202B] uppercase tracking-wider font-semibold">
                  RAILWAY CONCESSION MANAGEMENT SYSTEM
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F8F5EE] border border-[#DED7C9] text-[10px] font-mono text-[#394352] uppercase font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                  <span>5-STAGE OPERATIONAL PIPELINE</span>
                </span>
              </div>
            </div>

            {/* Case File Content */}
            <div className="p-6 sm:p-8 lg:p-9">
              
              {/* Context & Description Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-7 pb-6 border-b border-[#DED7C9]">
                <div className="max-w-2xl">
                  <h3
                    id="project-railway-title"
                    className="font-editorial text-3xl sm:text-4xl text-[#17202B] font-normal leading-tight mb-2"
                  >
                    Railway Concession Management System
                  </h3>
                  <p className="font-sans text-base text-[#394352] font-light leading-relaxed">
                    An institutional workflow platform for student verification, approval and concession records.
                  </p>
                </div>

                <div className="shrink-0">
                  <Link
                    to="/work/railway-concession-management"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1725] hover:bg-[#141F30] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F1725]"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight size={12} className="text-[#C59A3D]" />
                  </Link>
                </div>
              </div>

              {/* ===================================================================== */}
              {/* MOBILE VIEW: Large Authentic Screenshot (lg:hidden)                  */}
              {/* ===================================================================== */}
              <div className="lg:hidden space-y-3">
                <div className="border border-[#DED7C9] bg-[#FFFFFF] overflow-hidden">
                  <div className="px-4 py-2 bg-[#E8E3D8]/70 border-b border-[#DED7C9] flex items-center justify-between text-[11px] font-mono text-[#394352]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#17202B]/20" />
                      <span className="w-2 h-2 rounded-full bg-[#17202B]/20" />
                      <span className="w-2 h-2 rounded-full bg-[#17202B]/20" />
                      <span className="ml-2 text-[#17202B] font-medium">concession.transit.internal</span>
                    </div>
                    <span className="text-[#C59A3D] text-[10px] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                      LIVE SYSTEM
                    </span>
                  </div>

                  <div className="overflow-hidden bg-[#FFFFFF] relative">
                    <img
                      src="/projects/railway/evidence/01-railway-student-applications.jpg"
                      alt="Railway Concession Management System - Student Verification Queue"
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[#394352]">
                  <span>Student validation &amp; approval console</span>
                  <span className="text-[10px] text-[#68717B] uppercase font-medium">
                    VERIFIED EVIDENCE
                  </span>
                </div>
              </div>

              {/* ===================================================================== */}
              {/* DESKTOP VIEW: Dominant 5-Stage Engineering Workflow Pipeline (hidden lg:block) */}
              {/* ===================================================================== */}
              <div className="hidden lg:block">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#17202B]">
                    <span>OPERATIONAL WORKFLOW PIPELINE</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#68717B] uppercase">
                    APPLICATION &rarr; VERIFICATION &rarr; APPROVAL &rarr; PASS ISSUANCE &rarr; AUDIT
                  </span>
                </div>

                {/* 5-Step Grid / Flow */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-px bg-[#DED7C9] border border-[#DED7C9]">
                  {RAILWAY_STAGES.map((wf, idx) => (
                    <div
                      key={wf.step}
                      onMouseEnter={() => setActiveRailwayStep(idx)}
                      onMouseLeave={() => setActiveRailwayStep(null)}
                      className={`p-4.5 bg-[#FFFFFF] hover:bg-[#F8F5EE] transition-colors duration-150 flex flex-col justify-between ${
                        activeRailwayStep === idx ? "bg-[#F8F5EE] ring-1 ring-[#C59A3D] z-10" : ""
                      }`}
                    >
                      <div>
                        {/* Step Header */}
                        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#E8E3D8]">
                          <span className="font-editorial text-2xl text-[#17202B]">
                            {wf.step}
                          </span>
                          <span className="font-mono text-[9px] tracking-widest text-[#C59A3D] font-semibold">
                            STAGE
                          </span>
                        </div>

                        {/* Step Title */}
                        <h4 className="font-mono text-xs font-bold tracking-wider uppercase text-[#17202B] mb-1.5">
                          {wf.name}
                        </h4>

                        {/* Step Summary */}
                        <p className="font-sans text-xs text-[#394352] font-light leading-relaxed mb-3">
                          {wf.desc}
                        </p>
                      </div>

                      {/* Step Output */}
                      <div className="pt-2 border-t border-[#E8E3D8]">
                        <span className="font-mono text-[9px] text-[#68717B] uppercase tracking-wider block mb-0.5">
                          OUTPUT
                        </span>
                        <span className="font-sans text-xs text-[#17202B] font-medium">
                          {wf.artifact}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Process Note Docket */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#394352]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D] shrink-0" />
                    <span className="text-[#17202B] font-semibold">OPERATIONAL DISCIPLINE:</span>
                    <span>Role-governed state transitions with immutable audit logging.</span>
                  </div>
                  <span className="text-[#68717B] uppercase text-[10px] shrink-0">VERIFIED ARCHITECTURE</span>
                </div>

              </div>

            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
