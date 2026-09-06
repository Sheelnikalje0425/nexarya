import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "@/components/ui/Icons";

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

const VERIFIED_ROUTES = [
  { route: "/", name: "Public Homepage", desc: "Mobile Innovation Lab presentation, institutional program overviews, and partner outreach." },
  { route: "/project-library", name: "Project Library", desc: "Categorized 9-domain project repository with real-time filtering and build specifications." },
  { route: "/downloads", name: "Resource Hub", desc: "Downloadable institutional proposals, course brochures, and student workshop modules." },
  { route: "/curriculum-mapped-learning", name: "Curriculum Pathways", desc: "Pedagogical progression mapping hands-on hardware experiments from Grade 3 to Grade 12." },
  { route: "/technology-domains", name: "Technology Domains", desc: "Technical specifications across robotics, IoT, embedded systems, and machine learning." },
  { route: "/contact", name: "School Demo Intake", desc: "Inbound registration and school workshop demo scheduling workflows." },
  { route: "/about", name: "Studio Background", desc: "Institutional mission, teaching philosophy, and regional educational impact." },
];

export default function StemfusionCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 sm:pt-40 pb-28 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title="STEMFUSION Platform Case File | NEXARYA"
        description="Engineering case file for STEMFUSION: interactive STEM, AI & Robotics learning platform, project library taxonomy, and curriculum distribution engine."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Navigation & Live Link Action Bar */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-tech text-xs tracking-[0.16em] uppercase text-[#5C6975] hover:text-[#0E1720] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to All Case Files</span>
          </Link>

          <a
            href="https://stemfusion.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F5] border border-[#DCD6CA] text-[#0E1720] hover:text-[#B58B1E] font-tech text-xs uppercase tracking-wider font-bold transition-colors shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>VISIT LIVE PRODUCTION SITE (STEMFUSION.IN) ↗</span>
          </a>
        </div>

        {/* 1. PROJECT INTRO: Editorial Header & Metadata */}
        <RevealOnScroll>
          <div className="mb-16 sm:mb-20">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
              <span className="font-tech text-xs tracking-[0.22em] text-[#5C6975] uppercase font-semibold">
                CASE FILE 01 // LIVE PRODUCTION EVIDENCE
              </span>
              <span className="font-tech text-[10px] tracking-[0.16em] text-[#0E1720] uppercase px-2.5 py-0.5 border border-[#DCD6CA] bg-[#FAF8F5] font-semibold">
                STEM / AI / ROBOTICS EDUCATION
              </span>
            </div>

            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[4.8rem] text-[#0E1720] leading-[1.02] tracking-[-0.03em] mb-6 max-w-4xl">
              STEMFUSION
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#3A4753] font-light leading-relaxed max-w-3xl mb-10">
              An interactive educational platform engineered by NEXARYA to connect students, mentors, and institutions through structured workshops, hands-on project builds, and categorized curriculum distribution.
            </p>

            {/* Structured Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#DCD6CA] border border-[#DCD6CA]">
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-tech text-[10px] text-[#8E9CA8] uppercase tracking-wider block mb-1">CLIENT SECTOR</span>
                <span className="font-sans text-xs text-[#0E1720] font-medium">STEM & Robotics Education</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-tech text-[10px] text-[#8E9CA8] uppercase tracking-wider block mb-1">SYSTEM ROLE</span>
                <span className="font-sans text-xs text-[#0E1720] font-medium">Project Catalog & Resource Hub</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-tech text-[10px] text-[#8E9CA8] uppercase tracking-wider block mb-1">PLATFORM PROFILE</span>
                <span className="font-sans text-xs text-[#0E1720] font-medium">Production Web Platform & Educational Resource Architecture</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-tech text-[10px] text-[#8E9CA8] uppercase tracking-wider block mb-1">DEPLOYMENT</span>
                <span className="font-tech text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Live Production Deployment</span>
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 2. REAL PRODUCT EVIDENCE: Dominant Project Library Screenshot */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_16px_50px_rgba(14,23,32,0.07)] overflow-hidden">
            <div className="px-6 py-4 bg-[#FAF8F5] border-b border-[#DCD6CA] flex flex-wrap items-center justify-between gap-4">
              <div className="font-tech text-xs text-[#0E1720] font-bold uppercase tracking-wider flex items-center gap-2">
                <span>FIGURE 1.0 — CATEGORIZED PROJECT LIBRARY & TAXONOMY ENGINE</span>
              </div>
              <div className="flex items-center gap-3 font-tech text-xs text-[#5C6975]">
                <span>1440 × 900 CAPTURE</span>
                <span>•</span>
                <a
                  href="https://stemfusion.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0E1720] hover:text-[#B58B1E] font-bold underline underline-offset-4"
                >
                  stemfusion.in/project-library ↗
                </a>
              </div>
            </div>

            <div className="p-6 sm:p-10 bg-[#FFFFFF]">
              <div className="border border-[#DCD6CA] bg-[#FAF8F5] overflow-hidden">
                <img
                  src="/projects/stemfusion/evidence/02-stemfusion-project-library-desktop.png"
                  alt="STEMFUSION Project Library live screenshot"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>

              <div className="pt-4 mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-[#5C6975]">
                <span>Structured multi-category index with dynamic client-side filtering</span>
                <span className="font-tech text-[10px] text-[#0E1720] font-semibold">LIVE PRODUCTION EVIDENCE</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 3. PROJECT LIBRARY & TAXONOMY DEEP DIVE */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
                <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                  01 // TAXONOMY & ENGINE ARCHITECTURE
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] leading-tight mb-4">
                Structured 9-Domain Engineering Catalog.
              </h2>
              <p className="font-sans text-base text-[#5C6975] leading-relaxed font-light">
                To support diverse school curriculums and student workshops, the Project Library organizes builds across 9 distinct technical domains with real-time filtering, instant category navigation, and technical specifications.
              </p>
            </div>

            {/* 9 Domains Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#DCD6CA] border border-[#DCD6CA]">
              {STEMFUSION_DOMAINS.map((dom, idx) => (
                <div key={dom.name} className="p-6 sm:p-7 bg-[#FFFFFF] hover:bg-[#FAF8F5] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE5DB]">
                      <span className="font-editorial text-xl text-[#0E1720]">0{idx + 1}</span>
                      <span className="font-tech text-[9px] text-[#8E9CA8] tracking-widest uppercase">DOMAIN</span>
                    </div>
                    <h3 className="font-tech text-xs tracking-[0.14em] uppercase text-[#0E1720] font-bold mb-2">
                      {dom.name}
                    </h3>
                    <p className="font-sans text-xs text-[#5C6975] leading-relaxed">
                      {dom.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-[#EAE5DB] font-tech text-[9px] text-[#8E9CA8]">
                    LIVE PRODUCTION EVIDENCE
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* 4. PRODUCT STRUCTURE & PUBLIC ROUTES */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
                <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                  02 // PRODUCT STRUCTURE & ROUTES
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] leading-tight mb-4">
                Verified public route topology.
              </h2>
              <p className="font-sans text-base text-[#5C6975] leading-relaxed font-light">
                The platform is architected across verified public endpoints, each designed for high accessibility, quick loading times, and intuitive educational navigation.
              </p>
            </div>

            {/* Public Routes Table */}
            <div className="border border-[#DCD6CA] bg-[#FFFFFF] shadow-sm overflow-hidden mb-12">
              <div className="px-6 py-3.5 bg-[#FAF8F5] border-b border-[#DCD6CA] flex items-center justify-between text-xs font-tech text-[#5C6975]">
                <span className="font-bold text-[#0E1720] uppercase tracking-wider">ENDPOINT SPECIFICATION</span>
                <span>PRODUCTION ROUTE AUDIT</span>
              </div>
              <div className="divide-y divide-[#DCD6CA]">
                {VERIFIED_ROUTES.map((r) => (
                  <div key={r.route} className="p-5 sm:p-6 bg-[#FFFFFF] hover:bg-[#FAF8F5] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="md:w-1/4">
                      <span className="font-tech text-xs text-[#0E1720] px-2.5 py-1 bg-[#FAF8F5] border border-[#DCD6CA] font-semibold">
                        {r.route}
                      </span>
                    </div>
                    <div className="md:w-1/4 font-editorial text-lg text-[#0E1720]">
                      {r.name}
                    </div>
                    <div className="md:w-1/2 font-sans text-xs sm:text-sm text-[#5C6975] font-light leading-relaxed">
                      {r.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Evidence: Homepage Desktop Capture */}
            <div className="bg-[#FFFFFF] border border-[#DCD6CA] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-3 text-xs font-tech text-[#5C6975]">
                <span className="font-semibold text-[#0E1720]">FIGURE 1.1 — PUBLIC PORTAL & HERO INTERFACE (DESKTOP)</span>
                <span className="text-[#8E9CA8]">1440 × 900 CAPTURE</span>
              </div>
              <div className="border border-[#DCD6CA] bg-[#FAF8F5] overflow-hidden">
                <img
                  src="/projects/stemfusion/evidence/01-stemfusion-home-desktop.png"
                  alt="STEMFUSION Public Homepage live screenshot"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 5. CURRICULUM & RESOURCE EVIDENCE */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
                <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                  03 // CURRICULUM & RESOURCE EVIDENCE
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] leading-tight mb-4">
                Institutional assets & grade-mapped learning.
              </h2>
              <p className="font-sans text-base text-[#5C6975] leading-relaxed font-light">
                Direct evidence from the live resource distribution hubs, facilitating institutional brochure downloads, workshop syllabi, and structured grade progression.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Downloads Asset */}
              <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#DCD6CA] shadow-xs">
                <div className="flex items-center justify-between mb-3 text-xs font-tech text-[#5C6975]">
                  <span className="font-semibold text-[#0E1720]">FIGURE 1.2 — RESOURCE DOWNLOAD HUB</span>
                  <span className="text-[#8E9CA8]">/downloads</span>
                </div>
                <div className="border border-[#DCD6CA] bg-[#FAF8F5] overflow-hidden mb-4">
                  <img
                    src="/projects/stemfusion/evidence/03-stemfusion-downloads-desktop.png"
                    alt="STEMFUSION Downloads Hub"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="font-sans text-xs text-[#5C6975] leading-relaxed">
                  Repository delivering institutional workshop brochures, program proposals, and downloadable student guides.
                </p>
              </div>

              {/* Curriculum Asset */}
              <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#DCD6CA] shadow-xs">
                <div className="flex items-center justify-between mb-3 text-xs font-tech text-[#5C6975]">
                  <span className="font-semibold text-[#0E1720]">FIGURE 1.3 — CURRICULUM PROGRESSION</span>
                  <span className="text-[#8E9CA8]">/curriculum-mapped-learning</span>
                </div>
                <div className="border border-[#DCD6CA] bg-[#FAF8F5] overflow-hidden mb-4">
                  <img
                    src="/projects/stemfusion/evidence/04-stemfusion-curriculum-learning-desktop.png"
                    alt="STEMFUSION Curriculum Learning"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="font-sans text-xs text-[#5C6975] leading-relaxed">
                  Pedagogical framework mapping foundational electronic logic to advanced industrial automation across grade levels.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 6. RESPONSIVE EXPERIENCE (Genuine Mobile Captures) */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
                <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                  04 // RESPONSIVE MOBILE EXPERIENCE
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] leading-tight mb-4">
                Mobile-first accessibility.
              </h2>
              <p className="font-sans text-base text-[#5C6975] leading-relaxed font-light">
                Verified viewport captures from mobile devices, ensuring students, teachers, and school administrators can access project modules on any screen.
              </p>
            </div>

            {/* 4 Mobile Captures Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 sm:p-5 bg-[#FFFFFF] border border-[#DCD6CA] shadow-xs">
                <span className="font-tech text-[10px] text-[#5C6975] uppercase block mb-2 font-semibold">
                  FIGURE 1.4 — MOBILE HOME
                </span>
                <div className="border border-[#DCD6CA] bg-[#FAF8F5] overflow-hidden mb-3">
                  <img
                    src="/projects/stemfusion/evidence/01-stemfusion-home-mobile.png"
                    alt="STEMFUSION Mobile Home"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="font-tech text-[9.5px] text-[#8E9CA8]">Responsive Navigation</span>
              </div>

              <div className="p-4 sm:p-5 bg-[#FFFFFF] border border-[#DCD6CA] shadow-xs">
                <span className="font-tech text-[10px] text-[#5C6975] uppercase block mb-2 font-semibold">
                  FIGURE 1.5 — MOBILE LIBRARY
                </span>
                <div className="border border-[#DCD6CA] bg-[#FAF8F5] overflow-hidden mb-3">
                  <img
                    src="/projects/stemfusion/evidence/02-stemfusion-project-library-mobile.png"
                    alt="STEMFUSION Mobile Library"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="font-tech text-[9.5px] text-[#8E9CA8]">Touch-Optimized Filters</span>
              </div>

              <div className="p-4 sm:p-5 bg-[#FFFFFF] border border-[#DCD6CA] shadow-xs">
                <span className="font-tech text-[10px] text-[#5C6975] uppercase block mb-2 font-semibold">
                  FIGURE 1.6 — MOBILE DOWNLOADS
                </span>
                <div className="border border-[#DCD6CA] bg-[#FAF8F5] overflow-hidden mb-3">
                  <img
                    src="/projects/stemfusion/evidence/03-stemfusion-downloads-mobile.png"
                    alt="STEMFUSION Mobile Downloads"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="font-tech text-[9.5px] text-[#8E9CA8]">Brochure Direct Download</span>
              </div>

              <div className="p-4 sm:p-5 bg-[#FFFFFF] border border-[#DCD6CA] shadow-xs">
                <span className="font-tech text-[10px] text-[#5C6975] uppercase block mb-2 font-semibold">
                  FIGURE 1.7 — MOBILE CURRICULUM
                </span>
                <div className="border border-[#DCD6CA] bg-[#FAF8F5] overflow-hidden mb-3">
                  <img
                    src="/projects/stemfusion/evidence/04-stemfusion-curriculum-learning-mobile.png"
                    alt="STEMFUSION Mobile Curriculum"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="font-tech text-[9.5px] text-[#8E9CA8]">Grade Level Cards</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 7. LIVE PROJECT CTA BLOCK */}
        <RevealOnScroll>
          <div className="p-10 sm:p-16 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_16px_50px_rgba(14,23,32,0.06)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span className="font-tech text-xs tracking-[0.2em] text-[#0E1720] uppercase font-bold">
                  ACTIVE PRODUCTION PLATFORM
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] mb-3">
                Explore STEMFUSION in live production.
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#5C6975] font-light leading-relaxed">
                Visit the live deployed platform at <strong className="text-[#0E1720]">stemfusion.in</strong> to experience the project library taxonomy, downloadable resources, and workshop scheduling workflows firsthand.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://stemfusion.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#0E1720] text-[#FFFFFF] hover:bg-[#1A2530] font-tech text-xs uppercase tracking-wider font-bold transition-colors text-center"
              >
                VISIT LIVE PROJECT ↗
              </a>
              <Link
                to="/contact"
                className="px-6 py-4 border border-[#DCD6CA] hover:border-[#0E1720] text-[#0E1720] font-tech text-xs uppercase tracking-wider font-semibold transition-colors text-center bg-[#FAF8F5]"
              >
                Discuss Your Platform
              </Link>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </div>
  );
}
