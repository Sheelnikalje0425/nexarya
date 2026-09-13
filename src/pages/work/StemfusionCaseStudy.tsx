import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "@/components/ui/Icons";

const STEMFUSION_DOMAINS = [
  { name: "Robotics", desc: "Autonomous rovers, motorized chassis, and robotic arm kinematics." },
  { name: "Artificial Intelligence", desc: "Computer vision sorting, voice triggers, and neural classification models." },
  { name: "IoT & Smart Systems", desc: "ESP32 sensors, MQTT telemetry streaming, and environmental monitoring." },
  { name: "Arduino & Microcontrollers", desc: "C++ firmware, analog sensor interfacing, and pulse-width modulation." },
  { name: "Drone Aviation", desc: "Quadcopter flight controllers, telemetry logging, and aerodynamic builds." },
  { name: "Atal Tinkering Lab (ATL)", desc: "Government STEM lab compliance modules, equipment mapping, and kits." },
  { name: "DIY Electronics", desc: "Breadboard prototyping, logic circuits, and component troubleshooting." },
  { name: "3D Printing & CAD", desc: "Parametric solid modeling, slicing configurations, and rapid prototyping." },
  { name: "Integrated STEM", desc: "Cross-disciplinary physics and algorithmic logic applications." },
];

const PRODUCT_EXPERIENCE_POINTS = [
  {
    step: "01",
    tag: "TAXONOMY NAVIGATION",
    title: "Instant Multi-Domain Filtering",
    summary: "Students and educators filter hands-on engineering builds across 9 domains in real time, navigating from elementary breadboard circuits to advanced IoT systems without page reloads.",
  },
  {
    step: "02",
    tag: "PEDAGOGICAL PROGRESSION",
    title: "Grade-Wise Learning Pathways",
    summary: "Curriculums are structured sequentially from Grade 3 foundational logic through Grade 12 applied robotics, providing clear milestones for classroom instruction.",
  },
  {
    step: "03",
    tag: "DOCUMENT DISTRIBUTION",
    title: "Zero-Friction Resource Rails",
    summary: "Centralized repository providing instant access to institutional workshop proposals, course syllabi, and technical brochures without authentication barriers.",
  },
  {
    step: "04",
    tag: "RESPONSIVE ACCESSIBILITY",
    title: "Classroom & Mobile Parity",
    summary: "Engineered with sub-second page loads and adaptive layouts ensuring consistent usability across lab workstations, classroom tablets, and personal smartphones.",
  },
];

const TECH_STACK = [
  { name: "Python", role: "Backend runtime & resource indexing services" },
  { name: "Flask", role: "Lightweight API routing & dynamic endpoints" },
  { name: "MySQL", role: "Relational database for project catalogs & inquiry logs" },
  { name: "JavaScript", role: "Client-side category filtering & dynamic interactions" },
  { name: "Tailwind CSS", role: "Responsive layout system & typographic hierarchy" },
  { name: "Cloud Infrastructure", role: "High-availability deployment with SSL termination" },
];

export default function StemfusionCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 sm:pt-40 pb-28 bg-[#F8F5EE] min-h-screen select-none">
      <SEOHead
        title="STEMFUSION Educational Platform | Case File | NEXARYA"
        description="Engineering case file for STEMFUSION: interactive STEM, AI & Robotics learning platform, 9-domain project taxonomy, and curriculum distribution engine."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Navigation & Live Status Bar */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.16em] uppercase text-[#394352] hover:text-[#17202B] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to All Case Files</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#68717B] uppercase tracking-wider hidden md:inline">
              CASE SPECIFICATION
            </span>
            <a
              href="https://stemfusion.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F1EDE3] border border-[#DED7C9] hover:border-[#17202B] text-[#17202B] font-mono text-[11px] uppercase tracking-wider font-bold transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>stemfusion.in ↗</span>
            </a>
          </div>
        </div>

        {/* 01 // THE PRODUCT: Header & Editorial Metadata */}
        <RevealOnScroll>
          <div className="mb-16 sm:mb-20">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#17202B]" />
              <span className="font-mono text-xs tracking-[0.22em] text-[#394352] uppercase font-semibold">
                CASE FILE 01 // CASE STUDY
              </span>
              <span className="font-mono text-[10px] tracking-[0.16em] text-[#17202B] uppercase px-2.5 py-0.5 border border-[#DED7C9] bg-[#F1EDE3] font-semibold">
                STEM / AI / ROBOTICS EDUCATION
              </span>
              <span className="font-mono text-[10px] tracking-[0.16em] text-emerald-700 uppercase px-2.5 py-0.5 border border-emerald-200 bg-emerald-50 font-semibold">
                LIVE IN PRODUCTION
              </span>
            </div>

            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[4.8rem] text-[#17202B] leading-[1.02] tracking-[-0.03em] mb-6 max-w-4xl">
              STEMFUSION
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#394352] font-light leading-relaxed max-w-3xl mb-10">
              An interactive educational web platform engineered by NEXARYA to connect students, mentors, and academic institutions through structured workshops, hands-on engineering builds, and centralized curriculum distribution.
            </p>

            {/* Structured Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#DED7C9] border border-[#DED7C9]">
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-mono text-[10px] text-[#68717B] uppercase tracking-wider block mb-1">CLIENT SECTOR</span>
                <span className="font-sans text-xs text-[#17202B] font-medium">STEM & Robotics Education</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-mono text-[10px] text-[#68717B] uppercase tracking-wider block mb-1">SYSTEM ROLE</span>
                <span className="font-sans text-xs text-[#17202B] font-medium">Project Catalog & Resource Hub</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-mono text-[10px] text-[#68717B] uppercase tracking-wider block mb-1">PLATFORM PROFILE</span>
                <span className="font-sans text-xs text-[#17202B] font-medium">Public Web Application</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-mono text-[10px] text-[#68717B] uppercase tracking-wider block mb-1">DEPLOYMENT</span>
                <a
                  href="https://stemfusion.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-emerald-700 hover:text-emerald-900 font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>stemfusion.in ↗</span>
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 02 // THE PLATFORM: Public Portal Interface Evidence */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#17202B]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#394352] uppercase font-semibold">
                  02 // THE PLATFORM
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-tight mb-4">
                Public portal & student-mentor entrance.
              </h2>
              <p className="font-sans text-base text-[#394352] leading-relaxed font-light">
                The primary platform entry point introduces the Mobile STEM Innovation Lab initiative, showcases core academic programs, and provides clear call-to-actions for school demo bookings and curriculum exploration.
              </p>
            </div>

            {/* Dominant Screenshot: Home Desktop */}
            <div className="bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_12px_40px_rgba(14,23,32,0.05)] overflow-hidden">
              <div className="px-6 py-4 bg-[#F1EDE3] border-b border-[#DED7C9] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#17202B] font-bold uppercase tracking-wider">
                    FIGURE 1.1 — PUBLIC PORTAL & HERO INTERFACE
                  </span>
                  <span className="text-[#DED7C9]">/</span>
                  <span className="font-mono text-xs text-[#394352]">
                    DESKTOP VIEWPORT
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-[#394352]">
                  <span>1440 × 900 CAPTURE</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-semibold">stemfusion.in</span>
                </div>
              </div>

              <div className="p-6 sm:p-10 bg-[#FFFFFF]">
                <div className="border border-[#DED7C9] bg-[#F1EDE3] overflow-hidden">
                  <img
                    src="/projects/stemfusion/evidence/01-stemfusion-home-desktop.png"
                    alt="STEMFUSION Public Portal live screenshot"
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>

                <div className="pt-4 mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-[#394352]">
                  <span>Hero interface introducing mobile lab capabilities, course pathways, and institutional outreach</span>
                  <span className="font-mono text-[10px] text-[#17202B] font-semibold uppercase tracking-wider">
                    Product interface — live production environment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 03 // CONTENT & DISCOVERY: Verified Modules */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#17202B]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#394352] uppercase font-semibold">
                  03 // CONTENT & DISCOVERY
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-tight mb-4">
                Structured project taxonomy & resource delivery.
              </h2>
              <p className="font-sans text-base text-[#394352] leading-relaxed font-light">
                STEMFUSION organizes complex engineering coursework into accessible digital modules. The system features a categorized 9-domain project library, pedagogical curriculum pathways, and friction-free resource downloads.
              </p>
            </div>

            {/* 1. Primary Feature: Project Library (Full Width) */}
            <div className="mb-14 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_12px_40px_rgba(14,23,32,0.05)] overflow-hidden">
              <div className="px-6 py-4 bg-[#F1EDE3] border-b border-[#DED7C9] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#17202B] font-bold uppercase tracking-wider">
                    FIGURE 1.2 — 9-DOMAIN PROJECT LIBRARY & TAXONOMY ENGINE
                  </span>
                  <span className="text-[#DED7C9]">/</span>
                  <span className="font-mono text-xs text-[#394352]">
                    /project-library
                  </span>
                </div>
                <div className="font-mono text-xs text-[#68717B]">
                  DYNAMIC CLIENT-SIDE FILTERING
                </div>
              </div>

              <div className="p-6 sm:p-10 bg-[#FFFFFF]">
                <div className="border border-[#DED7C9] bg-[#F1EDE3] overflow-hidden mb-6">
                  <img
                    src="/projects/stemfusion/evidence/02-stemfusion-project-library-desktop.png"
                    alt="STEMFUSION Project Library live screenshot"
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-[#394352] pb-6 border-b border-[#DED7C9]">
                  <span>Categorized repository indexing projects across robotics, artificial intelligence, IoT, and embedded controllers</span>
                  <span className="font-mono text-[10px] text-[#17202B] font-semibold uppercase tracking-wider">
                    Product interface — live production environment
                  </span>
                </div>

                {/* 9 Domains Matrix Strip */}
                <div className="mt-8">
                  <div className="font-mono text-xs text-[#17202B] font-bold uppercase tracking-wider mb-4">
                    INDEXED ENGINEERING DOMAINS
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {STEMFUSION_DOMAINS.map((dom, idx) => (
                      <div key={dom.name} className="p-4 bg-[#F1EDE3] border border-[#DED7C9]">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#DED7C9]">
                          <span className="font-mono text-[10px] text-[#68717B] uppercase tracking-wider">0{idx + 1}</span>
                          <span className="font-mono text-[9px] text-[#394352] uppercase font-semibold">TAXONOMY</span>
                        </div>
                        <h3 className="font-mono text-xs text-[#17202B] font-bold uppercase tracking-wide mb-1">
                          {dom.name}
                        </h3>
                        <p className="font-sans text-[11px] text-[#394352] leading-relaxed">
                          {dom.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Side-by-Side: Technology Domains & Curriculum Learning */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
              
              {/* Technology Domains Matrix */}
              <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_12px_40px_rgba(14,23,32,0.05)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DED7C9] text-xs font-mono text-[#394352]">
                    <span className="font-bold text-[#17202B]">FIGURE 1.3 — TECHNOLOGY DOMAINS</span>
                    <span className="text-[#68717B]">/technology-domains</span>
                  </div>
                  <div className="border border-[#DED7C9] bg-[#F1EDE3] overflow-hidden mb-4">
                    <img
                      src="/projects/stemfusion/evidence/05-stemfusion-technology-domains-desktop.png"
                      alt="STEMFUSION Technology Domains matrix"
                      className="w-full h-auto object-contain block"
                      loading="eager"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-editorial text-xl text-[#17202B] mb-1">Domain Curriculum Specifications</h3>
                  <p className="font-sans text-xs text-[#394352] leading-relaxed mb-3">
                    Technical overview defining learning objectives, hardware kits, and software environments across core engineering disciplines.
                  </p>
                  <span className="font-mono text-[10px] text-[#68717B] uppercase">
                    Product interface — live production environment
                  </span>
                </div>
              </div>

              {/* Curriculum Progression */}
              <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_12px_40px_rgba(14,23,32,0.05)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DED7C9] text-xs font-mono text-[#394352]">
                    <span className="font-bold text-[#17202B]">FIGURE 1.4 — CURRICULUM PROGRESSION</span>
                    <span className="text-[#68717B]">/curriculum-mapped-learning</span>
                  </div>
                  <div className="border border-[#DED7C9] bg-[#F1EDE3] overflow-hidden mb-4">
                    <img
                      src="/projects/stemfusion/evidence/04-stemfusion-curriculum-learning-desktop.png"
                      alt="STEMFUSION Curriculum-Mapped Learning progression"
                      className="w-full h-auto object-contain block"
                      loading="eager"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-editorial text-xl text-[#17202B] mb-1">Grade-Mapped Progression Pathways</h3>
                  <p className="font-sans text-xs text-[#394352] leading-relaxed mb-3">
                    Pedagogical sequence scaffolding foundational circuitry in primary grades through full industrial prototyping in secondary grades.
                  </p>
                  <span className="font-mono text-[10px] text-[#68717B] uppercase">
                    Product interface — live production environment
                  </span>
                </div>
              </div>

            </div>

            {/* 3. Resource Distribution & Downloads Hub */}
            <div className="p-6 sm:p-10 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_12px_40px_rgba(14,23,32,0.05)]">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DED7C9] text-xs font-mono text-[#394352]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#17202B]">FIGURE 1.5 — RESOURCE DISTRIBUTION HUB</span>
                  <span className="text-[#DED7C9]">/</span>
                  <span className="text-[#394352]">/downloads</span>
                </div>
                <span className="text-[#68717B]">INSTITUTIONAL ASSET REPOSITORY</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 border border-[#DED7C9] bg-[#F1EDE3] overflow-hidden">
                  <img
                    src="/projects/stemfusion/evidence/03-stemfusion-downloads-desktop.png"
                    alt="STEMFUSION Downloads repository"
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>
                <div className="lg:col-span-4 space-y-4">
                  <h3 className="font-editorial text-2xl text-[#17202B]">Direct Document Distribution</h3>
                  <p className="font-sans text-xs text-[#394352] leading-relaxed font-light">
                    The platform centralizes all institutional collateral, providing schools, educators, and event organizers with immediate PDF downloads of course catalogues, company profiles, and curriculum proposals.
                  </p>
                  <div className="pt-3 border-t border-[#DED7C9] font-mono text-[10px] text-[#68717B] uppercase">
                    Product interface — live production environment
                  </div>
                </div>
              </div>
            </div>

          </div>
        </RevealOnScroll>

        {/* 04 // PRODUCT EXPERIENCE: User-Facing Experience & Mobile Parity */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#17202B]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#394352] uppercase font-semibold">
                  04 // PRODUCT EXPERIENCE
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-tight mb-4">
                Designed for direct student and educator engagement.
              </h2>
              <p className="font-sans text-base text-[#394352] leading-relaxed font-light">
                The product interface is optimized for rapid discovery, allowing students in classroom environments and administrators on mobile devices to access materials with zero friction.
              </p>
            </div>

            {/* 4 Product Experience Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {PRODUCT_EXPERIENCE_POINTS.map((pt) => (
                <div key={pt.step} className="p-6 bg-[#FFFFFF] border border-[#DED7C9] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DED7C9]">
                      <span className="font-editorial text-2xl text-[#17202B]">{pt.step}</span>
                      <span className="font-mono text-[9px] text-[#68717B] uppercase tracking-wider">{pt.tag}</span>
                    </div>
                    <h3 className="font-editorial text-xl text-[#17202B] mb-2 leading-snug">
                      {pt.title}
                    </h3>
                    <p className="font-sans text-xs text-[#394352] leading-relaxed font-light">
                      {pt.summary}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-[#DED7C9] font-mono text-[9.5px] text-[#68717B] uppercase flex items-center justify-between">
                    <span>LIVE CAPABILITY</span>
                    <span>✔</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Responsive Mobile Verification Docket */}
            <div className="p-6 sm:p-10 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_12px_40px_rgba(14,23,32,0.05)]">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-[#DED7C9] text-xs font-mono text-[#394352]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#17202B]">RESPONSIVE MOBILE VERIFICATION</span>
                  <span className="text-[#DED7C9]">/</span>
                  <span>390 × 844 VIEWPORT</span>
                </div>
                <span className="text-[#68717B] uppercase">MOBILE-FIRST ACCESSIBILITY</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Mobile Home */}
                <div className="p-5 bg-[#F1EDE3] border border-[#DED7C9]">
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-[#394352]">
                    <span className="font-semibold text-[#17202B]">FIGURE 1.6 — MOBILE PORTAL ENTRY</span>
                    <span className="text-[#68717B]">/</span>
                  </div>
                  <div className="max-w-[280px] mx-auto border border-[#DED7C9] bg-[#FFFFFF] overflow-hidden mb-3">
                    <img
                      src="/projects/stemfusion/evidence/01-stemfusion-home-mobile.png"
                      alt="STEMFUSION Mobile Home screenshot"
                      className="w-full h-auto object-contain block"
                      loading="eager"
                    />
                  </div>
                  <p className="font-sans text-xs text-[#394352] text-center">
                    Adaptive mobile navigation and quick demo booking triggers.
                  </p>
                </div>

                {/* Mobile Library */}
                <div className="p-5 bg-[#F1EDE3] border border-[#DED7C9]">
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-[#394352]">
                    <span className="font-semibold text-[#17202B]">FIGURE 1.7 — MOBILE TAXONOMY VIEW</span>
                    <span className="text-[#68717B]">/project-library</span>
                  </div>
                  <div className="max-w-[280px] mx-auto border border-[#DED7C9] bg-[#FFFFFF] overflow-hidden mb-3">
                    <img
                      src="/projects/stemfusion/evidence/02-stemfusion-project-library-mobile.png"
                      alt="STEMFUSION Mobile Project Library screenshot"
                      className="w-full h-auto object-contain block"
                      loading="eager"
                    />
                  </div>
                  <p className="font-sans text-xs text-[#394352] text-center">
                    Touch-optimized category selection and project build indexing.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </RevealOnScroll>

        {/* 05 // ENGINEERING: Verified Technology Architecture */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28 p-8 sm:p-14 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_12px_40px_rgba(14,23,32,0.05)]">
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#17202B]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#394352] uppercase font-semibold">
                  05 // ENGINEERING
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-tight mb-4">
                Lightweight, responsive web architecture.
              </h2>
              <p className="font-sans text-base text-[#394352] leading-relaxed font-light">
                The STEMFUSION platform is constructed with a responsive client-side interface, modular Python/Flask service endpoints, and an ACID relational data store optimized for sub-second resource discovery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_STACK.map((tech) => (
                <div key={tech.name} className="p-6 bg-[#F1EDE3] border border-[#DED7C9]">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#68717B] mb-1">TECHNOLOGY</div>
                  <h3 className="font-editorial text-2xl text-[#17202B] mb-2">{tech.name}</h3>
                  <p className="font-sans text-xs text-[#394352] font-light leading-relaxed">{tech.role}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* 06 // LIVE PRODUCT: Prominent Live Deployment CTA */}
        <RevealOnScroll>
          <div className="mb-14 p-10 sm:p-14 bg-[#F1EDE3] border border-[#DED7C9] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#17202B] uppercase font-bold">
                  06 // LIVE PRODUCT
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#17202B] mb-3">
                Experience STEMFUSION in live production.
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed">
                Visit the live deployed platform at <strong className="text-[#17202B]">stemfusion.in</strong> to browse the 9-domain project taxonomy, downloadable curriculum assets, and institutional workshop modules.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://stemfusion.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0F1725] hover:bg-[#141F30] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-bold transition-colors shadow-sm text-center"
              >
                <span>VISIT LIVE PROJECT ↗</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* 07 // START A PROJECT: Primary Conversion CTA */}
        <RevealOnScroll>
          <div className="p-10 sm:p-16 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_16px_50px_rgba(14,23,32,0.06)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#17202B]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#17202B] uppercase font-bold">
                  07 // START A PROJECT
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#17202B] mb-3">
                Have an educational platform or web product to engineer?
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed">
                We design and build bespoke web platforms, resource distribution engines, and digital software tailored to your domain.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" className="px-8 py-4 text-center justify-center">
                Start a Project &rarr;
              </Button>
              <a
                href="mailto:hello@nexarya.in"
                className="px-6 py-4 border border-[#DED7C9] hover:border-[#17202B] text-xs font-mono tracking-wider uppercase text-[#17202B] text-center transition-colors bg-[#F1EDE3]"
              >
                hello@nexarya.in
              </a>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </div>
  );
}

