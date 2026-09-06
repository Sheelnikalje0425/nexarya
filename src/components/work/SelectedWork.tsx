import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface WorkflowStep {
  step: string;
  name: string;
  desc: string;
  deliverable: string;
}

const RAILWAY_WORKFLOW: WorkflowStep[] = [
  {
    step: "01",
    name: "APPLICATION",
    desc: "Student identity intake, institutional eligibility validation, and document staging.",
    deliverable: "Structured Intake & Attachment Pipeline",
  },
  {
    step: "02",
    name: "VERIFICATION",
    desc: "Institutional officer review queue, academic roster cross-referencing, and state checks.",
    deliverable: "Role-Segregated Review Queue",
  },
  {
    step: "03",
    name: "APPROVAL",
    desc: "Transit authority sign-off with role-gated state transitions and quota enforcement.",
    deliverable: "Role-Gated Authorization Record",
  },
  {
    step: "04",
    name: "PASS ISSUANCE",
    desc: "Digital concession pass generation embedding cryptographic verification QR code.",
    deliverable: "Digital Concession Pass & QR",
  },
  {
    step: "05",
    name: "AUDIT",
    desc: "Structured relational audit logging of officer review actions, timestamps, and decisions.",
    deliverable: "Operational Compliance Audit Trail",
  },
];

const STEMFUSION_PILLARS = [
  {
    tag: "TAXONOMY ENGINE",
    title: "9-Domain Project Library",
    desc: "Categorized project repository indexing robotics, AI, IoT, Arduino, and 3D printing with real-time filtering.",
  },
  {
    tag: "RESOURCE HUB",
    title: "Curriculum & Asset Distribution",
    desc: "Centralized repository delivering institutional brochures, program proposals, and student workshop modules.",
  },
  {
    tag: "PROGRESSION",
    title: "Grade-Wise Learning Pathways",
    desc: "Structured pedagogical curriculum mapping hands-on hardware experiments from Grade 3 to Grade 12.",
  },
  {
    tag: "INTAKE WORKFLOW",
    title: "School Demo Intake Pipeline",
    desc: "Institutional workshop demo scheduling and school intake workflows with validation and dispatch.",
  },
];

export default function SelectedWork() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="py-24 sm:py-32 lg:py-36 bg-[#F4EFE6] border-b border-[#DCD6CA] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* Section Header: Editorial & Restrained */}
        {/* ========================================================================= */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 sm:pb-16 border-b border-[#DCD6CA] mb-16 sm:mb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#8C6D1F] uppercase font-semibold">
                  SELECTED WORK
                </span>
              </div>
              <h2
                id="selected-work-heading"
                className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] text-[#0E1720] leading-[1.04] tracking-[-0.03em] font-normal"
              >
                Software built around{" "}
                <span className="italic font-normal">real operational needs.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] max-w-md font-light leading-relaxed">
              A small selection of systems we&apos;ve designed and engineered.
            </p>
          </div>
        </RevealOnScroll>

        {/* ========================================================================= */}
        {/* Case Files Stream: 01 Railway & 02 STEMFUSION */}
        {/* ========================================================================= */}
        <div className="space-y-20 sm:space-y-28">

          {/* ----------------------------------------------------------------------- */}
          {/* PROJECT 01: Railway Concession Management System */}
          {/* ----------------------------------------------------------------------- */}
          <article
            aria-labelledby="project-01-title"
            className="group relative bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.05)] hover:border-[#0E1720]/40 transition-colors duration-200 overflow-hidden"
          >
            {/* Case File Docket Top Bar */}
            <div className="px-6 py-4 bg-[#FAF8F5] border-b border-[#DCD6CA] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#8C6D1F] tracking-widest">
                  01
                </span>
                <span className="text-[#DCD6CA]">/</span>
                <span className="font-mono text-[11px] text-[#0E1720] uppercase tracking-wider font-semibold">
                  RAILWAY CONCESSION MANAGEMENT SYSTEM
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFFFF] border border-[#DCD6CA] text-[10px] font-mono text-[#5C6975] uppercase font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                  <span>OPERATIONAL WORKFLOW ARCHITECTURE</span>
                </span>
              </div>
            </div>

            {/* Case File Main Content */}
            <div className="p-6 sm:p-10 lg:p-12">
              
              {/* Context & Description Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 pb-10 border-b border-[#EAE5DB]">
                <div className="lg:col-span-7">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#8C6D1F] uppercase font-semibold block mb-2">
                    INSTITUTIONAL // ENTERPRISE OPERATIONAL WORKFLOW
                  </span>
                  <h3
                    id="project-01-title"
                    className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0E1720] font-normal leading-tight mb-4"
                  >
                    Railway Concession Management System
                  </h3>
                  <p className="font-sans text-base text-[#3A4753] font-light leading-relaxed max-w-2xl">
                    An operations platform engineered to replace fragmented manual paperwork with automated document validation workflows, multi-tier institutional verification gates, and tamper-evident audit logs for railway administrative officers.
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <span className="font-mono text-[10px] text-[#8E9CA8] uppercase tracking-widest block mb-2">
                      VERIFIED TECHNOLOGY STACK
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {["Python", "Flask", "MySQL", "Docker", "AWS"].map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs text-[#0E1720] px-3 py-1.5 bg-[#FAF8F5] border border-[#DCD6CA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/work/railway-concession-management-system"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#0E1720] hover:bg-[#1A2530] text-[#FFFFFF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E1720] focus-visible:ring-offset-2"
                    >
                      <span>VIEW CASE FILE</span>
                      <ArrowRight size={13} className="text-[#D4A72C] transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Verified 5-Stage Engineering Workflow Diagram */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#0E1720]">FIGURE 01.1</span>
                    <span className="text-[#8E9CA8] font-mono text-xs">//</span>
                    <span className="font-mono text-xs text-[#5C6975] uppercase tracking-wider">
                      VERIFIED 5-STAGE OPERATIONAL WORKFLOW MAP
                    </span>
                  </div>
                  <span className="hidden sm:inline font-mono text-[10px] text-[#8E9CA8] uppercase">
                    APPLICATION → VERIFICATION → APPROVAL → PASS ISSUANCE → AUDIT
                  </span>
                </div>

                {/* 5-Step Grid / Flow */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-px bg-[#DCD6CA] border border-[#DCD6CA]">
                  {RAILWAY_WORKFLOW.map((wf, idx) => (
                    <div
                      key={wf.step}
                      onMouseEnter={() => setActiveStep(idx)}
                      onMouseLeave={() => setActiveStep(null)}
                      className={`p-5 sm:p-6 bg-[#FAF8F5] hover:bg-[#FFFFFF] transition-colors duration-150 flex flex-col justify-between ${
                        activeStep === idx ? "bg-[#FFFFFF] ring-1 ring-[#8C6D1F] z-10" : ""
                      }`}
                    >
                      <div>
                        {/* Step Header */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE5DB]">
                          <span className="font-editorial text-2xl sm:text-3xl text-[#0E1720]">
                            {wf.step}
                          </span>
                          <span className="font-mono text-[9px] tracking-widest text-[#8C6D1F] font-semibold">
                            STAGE
                          </span>
                        </div>

                        {/* Step Title */}
                        <h4 className="font-mono text-xs font-bold tracking-wider uppercase text-[#0E1720] mb-2">
                          {wf.name}
                        </h4>

                        {/* Step Summary */}
                        <p className="font-sans text-xs text-[#5C6975] font-light leading-relaxed mb-6">
                          {wf.desc}
                        </p>
                      </div>

                      {/* Step Deliverable */}
                      <div className="pt-3 border-t border-[#EAE5DB]">
                        <span className="font-mono text-[9px] text-[#8E9CA8] uppercase tracking-wider block mb-0.5">
                          OUTPUT ARTIFACT
                        </span>
                        <span className="font-sans text-xs text-[#0E1720] font-medium">
                          {wf.deliverable}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Invariant Statement Strip */}
                <div className="mt-4 p-4 bg-[#FAF8F5] border border-[#EAE5DB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#5C6975]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F] shrink-0" />
                    <span className="text-[#0E1720] font-semibold">SYSTEM INVARIANT:</span>
                    <span>Role-segregated verification queue with timestamped officer attribution.</span>
                  </div>
                  <span className="text-[#8E9CA8] uppercase text-[10px]">TAMPER-EVIDENT AUDIT TRAIL</span>
                </div>

              </div>

            </div>
          </article>


          {/* ----------------------------------------------------------------------- */}
          {/* PROJECT 02: STEMFUSION (Live Production Platform Evidence) */}
          {/* ----------------------------------------------------------------------- */}
          <article
            aria-labelledby="project-02-title"
            className="group relative bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.05)] hover:border-[#0E1720]/40 transition-colors duration-200 overflow-hidden"
          >
            {/* Case File Docket Top Bar */}
            <div className="px-6 py-4 bg-[#FAF8F5] border-b border-[#DCD6CA] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#8C6D1F] tracking-widest">
                  02
                </span>
                <span className="text-[#DCD6CA]">/</span>
                <span className="font-mono text-[11px] text-[#0E1720] uppercase tracking-wider font-semibold">
                  STEMFUSION
                </span>
                <span className="text-[#DCD6CA]">/</span>
                <span className="font-mono text-[11px] text-[#5C6975]">
                  STEM, AI & Robotics Education Platform
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EAE5DB] border border-[#DCD6CA] text-[10px] font-mono text-[#0E1720] uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>LIVE PRODUCTION DEPLOYMENT</span>
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
            <div className="p-6 sm:p-10 lg:p-12">
              
              {/* Context & Description Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 pb-10 border-b border-[#EAE5DB]">
                <div className="lg:col-span-7">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#8C6D1F] uppercase font-semibold block mb-2">
                    DIGITAL PLATFORM // TAXONOMY & CURRICULUM ENGINE
                  </span>
                  <h3
                    id="project-02-title"
                    className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0E1720] font-normal leading-tight mb-4"
                  >
                    STEMFUSION
                  </h3>
                  <p className="font-sans text-base text-[#3A4753] font-light leading-relaxed max-w-2xl">
                    An interactive education platform designed and engineered by NEXARYA to connect students, educators, and institutions with hands-on STEM curriculums, categorized project repositories, and structured workshop intake pipelines.
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <span className="font-mono text-[10px] text-[#8E9CA8] uppercase tracking-widest block mb-2">
                      VERIFIED TECHNOLOGY STACK
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {["JavaScript", "Python", "Flask", "MySQL", "Tailwind CSS"].map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs text-[#0E1720] px-3 py-1.5 bg-[#FAF8F5] border border-[#DCD6CA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      to="/work/stemfusion"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#0E1720] hover:bg-[#1A2530] text-[#FFFFFF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E1720] focus-visible:ring-offset-2"
                    >
                      <span>VIEW CASE FILE</span>
                      <ArrowRight size={13} className="text-[#D4A72C] transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>

                    <a
                      href="https://stemfusion.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 bg-[#FAF8F5] hover:bg-[#F4EFE6] text-[#0E1720] border border-[#DCD6CA] font-mono text-xs uppercase tracking-wider font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E1720]"
                    >
                      <span>VISIT LIVE PROJECT</span>
                      <ExternalLink size={12} className="text-[#8C6D1F]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Dominant Real Product Evidence Showcase */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#5C6975]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#0E1720]">FIGURE 02.1</span>
                    <span className="text-[#8E9CA8]">//</span>
                    <span className="uppercase tracking-wider">LIVE PRODUCTION PLATFORM INTERFACE</span>
                  </div>
                  <span className="text-[#8E9CA8] uppercase text-[10px]">1440 × 900 LOSSLESS CAPTURE</span>
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
                      SECURE HTTPS // 200 OK
                    </span>
                  </div>

                  <div className="overflow-hidden bg-[#FFFFFF]">
                    <img
                      src="/projects/stemfusion/evidence/01-stemfusion-home-desktop.png"
                      alt="STEMFUSION live production platform interface"
                      loading="lazy"
                      className="w-full h-auto object-cover transform transition-transform duration-300 ease-out group-hover:scale-[1.008]"
                    />
                  </div>
                </div>

                {/* Evidence Annotation Sub-strip */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-[#5C6975]">
                  <span>Public Innovation Lab portal with interactive program pathways and demo intake.</span>
                  <span className="font-mono text-[10px] text-[#0E1720] font-semibold uppercase">GENUINE PRODUCTION CAPTURE</span>
                </div>
              </div>

              {/* 4 Concrete Functional Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-6 border-t border-[#EAE5DB]">
                {STEMFUSION_PILLARS.map((pillar) => (
                  <div
                    key={pillar.tag}
                    className="p-5 bg-[#FAF8F5] border border-[#EAE5DB] hover:border-[#DCD6CA] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.16em] text-[#8C6D1F] uppercase font-bold block mb-2">
                        {pillar.tag}
                      </span>
                      <h4 className="font-editorial text-xl text-[#0E1720] font-normal leading-snug mb-2">
                        {pillar.title}
                      </h4>
                      <p className="font-sans text-xs text-[#5C6975] font-light leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 border-t border-[#EAE5DB] font-mono text-[10px] text-[#8E9CA8] flex items-center justify-between">
                      <span>VERIFIED FEATURE</span>
                      <span className="text-[#8C6D1F]">✔</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
