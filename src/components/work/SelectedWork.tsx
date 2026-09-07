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
    desc: "Student identity intake, institutional eligibility details, and supporting document submission.",
    artifact: "Application Record",
  },
  {
    step: "02",
    name: "VERIFICATION",
    desc: "Institutional review queue cross-referencing academic records and eligibility criteria.",
    artifact: "Verification State",
  },
  {
    step: "03",
    name: "APPROVAL",
    desc: "Transit authority review and authorization against quota and route parameters.",
    artifact: "Authorization Sign-Off",
  },
  {
    step: "04",
    name: "PASS ISSUANCE",
    desc: "Generation of verified digital concession pass with verification QR identifier.",
    artifact: "Digital Concession Pass",
  },
  {
    step: "05",
    name: "AUDIT",
    desc: "Timestamped logging of verification actions, reviewer decisions, and pass status.",
    artifact: "Audit Log Entry",
  },
];

const STEMFUSION_VIEWS = [
  {
    id: "home",
    label: "Platform Home",
    caption: "Public education portal with program pathways, technology domains, and lab engagement overview.",
    image: "/projects/stemfusion/evidence/01-stemfusion-home-desktop.png",
  },
  {
    id: "library",
    label: "Project Library & Resource Repository",
    caption: "Categorized project repository indexing AI, robotics, IoT, and hardware projects with interactive filtering.",
    image: "/projects/stemfusion/evidence/02-stemfusion-project-library-desktop.png",
  },
  {
    id: "curriculum",
    label: "Learning Pathways",
    caption: "Structured curriculum pathways organizing progressive hardware and software modules across grade levels.",
    image: "/projects/stemfusion/evidence/04-stemfusion-curriculum-learning-desktop.png",
  },
  {
    id: "intake",
    label: "Demo Intake Pipeline",
    caption: "Institutional workshop demo intake pipeline for schools and educational institutions.",
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
      className="py-20 sm:py-24 lg:py-28 bg-[#F4EFE6] border-b border-[#DCD6CA] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[#DCD6CA] mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#8C6D1F] uppercase font-semibold">
                  SELECTED WORK
                </span>
              </div>
              <h2
                id="selected-work-heading"
                className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#0E1720] leading-[1.05] tracking-[-0.03em] font-normal"
              >
                Software built around{" "}
                <span className="italic font-normal">real operational needs.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] max-w-md font-light leading-relaxed">
              Verified software systems engineered and deployed for real-world workflows.
            </p>
          </div>
        </RevealOnScroll>

        {/* Case Files Stream */}
        <div className="space-y-14 sm:space-y-16">

          {/* ========================================================================= */}
          {/* PROJECT 01: STEMFUSION (Dominant Visual Presentation + Live Evidence)     */}
          {/* ========================================================================= */}
          <article
            aria-labelledby="project-stemfusion-title"
            className="group relative bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_8px_30px_rgba(14,23,32,0.04)] hover:border-[#0E1720]/40 transition-colors duration-200 overflow-hidden"
          >
            {/* Top Bar */}
            <div className="px-6 py-3.5 bg-[#FAF8F5] border-b border-[#DCD6CA] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#8C6D1F] tracking-widest">
                  01
                </span>
                <span className="text-[#DCD6CA]">/</span>
                <span className="font-mono text-xs text-[#0E1720] uppercase tracking-wider font-semibold">
                  STEMFUSION
                </span>
                <span className="text-[#DCD6CA] hidden sm:inline">/</span>
                <span className="font-mono text-xs text-[#5C6975] hidden sm:inline">
                  STEM & Robotics Education Platform
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#EAE5DB] border border-[#DCD6CA] text-[10px] font-mono text-[#0E1720] uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>LIVE PRODUCTION PLATFORM</span>
                </span>

                <a
                  href="https://stemfusion.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#0E1720] hover:text-[#8C6D1F] uppercase font-semibold underline underline-offset-4 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0E1720]"
                >
                  <span>stemfusion.in</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Case File Main Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              
              {/* Context & Description Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-8 pb-8 border-b border-[#EAE5DB]">
                <div className="lg:col-span-7">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#8C6D1F] uppercase font-semibold block mb-1.5">
                    WEB APPLICATION // EDUCATION & RESOURCE REPOSITORY
                  </span>
                  <h3
                    id="project-stemfusion-title"
                    className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-normal leading-tight mb-3"
                  >
                    STEMFUSION
                  </h3>
                  <p className="font-sans text-base text-[#3A4753] font-light leading-relaxed max-w-2xl">
                    An interactive education platform designed and engineered by NEXARYA to connect students, educators, and institutions with hands-on STEM curriculums, project repositories, and structured workshop intake pipelines.
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5">
                  <div>
                    <span className="font-mono text-[10px] text-[#8E9CA8] uppercase tracking-widest block mb-2">
                      VERIFIED TECHNOLOGY STACK
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {["JavaScript", "Python", "Flask", "MySQL", "Tailwind CSS"].map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs text-[#0E1720] px-3 py-1 bg-[#FAF8F5] border border-[#DCD6CA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Link
                      to="/work/stemfusion"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0E1720] hover:bg-[#1A2530] text-[#FFFFFF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E1720] focus-visible:ring-offset-2"
                    >
                      <span>VIEW CASE FILE</span>
                      <ArrowRight size={13} className="text-[#D4A72C] transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>

                    <a
                      href="https://stemfusion.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF8F5] hover:bg-[#F4EFE6] text-[#0E1720] border border-[#DCD6CA] font-mono text-xs uppercase tracking-wider font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E1720]"
                    >
                      <span>VISIT LIVE PROJECT</span>
                      <ExternalLink size={12} className="text-[#8C6D1F]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Dominant Real Product Evidence Showcase */}
              <div>
                {/* View Selector Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {STEMFUSION_VIEWS.map((view, idx) => (
                      <button
                        key={view.id}
                        type="button"
                        onClick={() => setActiveStemfusionView(idx)}
                        className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer border ${
                          activeStemfusionView === idx
                            ? "bg-[#0E1720] text-[#FAF7F2] border-[#0E1720] font-semibold"
                            : "bg-[#FAF8F5] text-[#5C6975] border-[#DCD6CA] hover:text-[#0E1720] hover:border-[#0E1720]/40"
                        }`}
                      >
                        {view.label}
                      </button>
                    ))}
                  </div>

                  <span className="font-mono text-[10px] text-[#8E9CA8] uppercase">
                    GENUINE PRODUCTION CAPTURE
                  </span>
                </div>

                {/* Primary Evidence Frame: Desktop Capture */}
                <div className="border border-[#DCD6CA] bg-[#FAF8F5] overflow-hidden group-hover:border-[#0E1720]/30 transition-all duration-200">
                  <div className="px-4 py-2 bg-[#FAF8F5] border-b border-[#DCD6CA] flex items-center justify-between text-[11px] font-mono text-[#5C6975]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#0E1720]/20" />
                      <span className="w-2 h-2 rounded-full bg-[#0E1720]/20" />
                      <span className="w-2 h-2 rounded-full bg-[#0E1720]/20" />
                      <span className="ml-2 text-[#0E1720] font-medium">https://stemfusion.in</span>
                    </div>
                    <span className="text-emerald-700 text-[10px] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      LIVE SITE // 200 OK
                    </span>
                  </div>

                  <div className="overflow-hidden bg-[#FFFFFF] relative">
                    <img
                      src={currentView.image}
                      alt={`STEMFUSION - ${currentView.label}`}
                      loading="lazy"
                      className="w-full h-auto object-cover transform transition-transform duration-300 ease-out group-hover:scale-[1.004]"
                    />
                  </div>
                </div>

                {/* Evidence Caption */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-[#5C6975]">
                  <span>{currentView.caption}</span>
                  <span className="font-mono text-[10px] text-[#0E1720] font-medium uppercase shrink-0">
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
            className="group relative bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_8px_30px_rgba(14,23,32,0.04)] hover:border-[#0E1720]/40 transition-colors duration-200 overflow-hidden"
          >
            {/* Top Bar */}
            <div className="px-6 py-3.5 bg-[#FAF8F5] border-b border-[#DCD6CA] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#8C6D1F] tracking-widest">
                  02
                </span>
                <span className="text-[#DCD6CA]">/</span>
                <span className="font-mono text-xs text-[#0E1720] uppercase tracking-wider font-semibold">
                  RAILWAY CONCESSION MANAGEMENT SYSTEM
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FFFFFF] border border-[#DCD6CA] text-[10px] font-mono text-[#5C6975] uppercase font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                  <span>OPERATIONAL WORKFLOW ARCHITECTURE</span>
                </span>
              </div>
            </div>

            {/* Case File Main Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              
              {/* Context & Description Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-8 pb-8 border-b border-[#EAE5DB]">
                <div className="lg:col-span-7">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#8C6D1F] uppercase font-semibold block mb-1.5">
                    OPERATIONAL SOFTWARE // VERIFICATION & APPROVAL WORKFLOW
                  </span>
                  <h3
                    id="project-railway-title"
                    className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-normal leading-tight mb-3"
                  >
                    Railway Concession Management System
                  </h3>
                  <p className="font-sans text-base text-[#3A4753] font-light leading-relaxed max-w-2xl">
                    An operations platform engineered to replace fragmented manual paperwork with structured document validation workflows, institutional verification steps, and activity logging for transit administrative officers.
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5">
                  <div>
                    <span className="font-mono text-[10px] text-[#8E9CA8] uppercase tracking-widest block mb-2">
                      VERIFIED TECHNOLOGY STACK
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {["Python", "Flask", "MySQL", "Docker", "AWS"].map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs text-[#0E1720] px-3 py-1 bg-[#FAF8F5] border border-[#DCD6CA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-1">
                    <Link
                      to="/work/railway-concession-management-system"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0E1720] hover:bg-[#1A2530] text-[#FFFFFF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E1720] focus-visible:ring-offset-2"
                    >
                      <span>VIEW CASE FILE</span>
                      <ArrowRight size={13} className="text-[#D4A72C] transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Verified 5-Stage Engineering Workflow Diagram */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#0E1720]">WORKFLOW DIAGRAM</span>
                    <span className="text-[#8E9CA8] font-mono text-xs">//</span>
                    <span className="font-mono text-xs text-[#5C6975] uppercase tracking-wider">
                      5-STAGE OPERATIONAL PIPELINE
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#8E9CA8] uppercase">
                    APPLICATION → VERIFICATION → APPROVAL → PASS ISSUANCE → AUDIT
                  </span>
                </div>

                {/* 5-Step Grid / Flow */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-px bg-[#DCD6CA] border border-[#DCD6CA]">
                  {RAILWAY_STAGES.map((wf, idx) => (
                    <div
                      key={wf.step}
                      onMouseEnter={() => setActiveRailwayStep(idx)}
                      onMouseLeave={() => setActiveRailwayStep(null)}
                      className={`p-5 bg-[#FAF8F5] hover:bg-[#FFFFFF] transition-colors duration-150 flex flex-col justify-between ${
                        activeRailwayStep === idx ? "bg-[#FFFFFF] ring-1 ring-[#8C6D1F] z-10" : ""
                      }`}
                    >
                      <div>
                        {/* Step Header */}
                        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#EAE5DB]">
                          <span className="font-editorial text-2xl sm:text-3xl text-[#0E1720]">
                            {wf.step}
                          </span>
                          <span className="font-mono text-[9px] tracking-widest text-[#8C6D1F] font-semibold">
                            STAGE
                          </span>
                        </div>

                        {/* Step Title */}
                        <h4 className="font-mono text-xs font-bold tracking-wider uppercase text-[#0E1720] mb-1.5">
                          {wf.name}
                        </h4>

                        {/* Step Summary */}
                        <p className="font-sans text-xs text-[#5C6975] font-light leading-relaxed mb-4">
                          {wf.desc}
                        </p>
                      </div>

                      {/* Step Output */}
                      <div className="pt-2.5 border-t border-[#EAE5DB]">
                        <span className="font-mono text-[9px] text-[#8E9CA8] uppercase tracking-wider block mb-0.5">
                          OUTPUT
                        </span>
                        <span className="font-sans text-xs text-[#0E1720] font-medium">
                          {wf.artifact}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Process Note */}
                <div className="mt-4 p-3.5 bg-[#FAF8F5] border border-[#EAE5DB] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#5C6975]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F] shrink-0" />
                    <span className="text-[#0E1720] font-semibold">WORKFLOW SPECIFICATION:</span>
                    <span>Sequential verification pipeline with officer approval and audit logging.</span>
                  </div>
                  <span className="text-[#8E9CA8] uppercase text-[10px]">VERIFIED CASE ARCHITECTURE</span>
                </div>

              </div>

            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
