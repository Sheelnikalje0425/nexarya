import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import { ArrowLeft, Mail } from "@/components/ui/Icons";

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
    tag: "Taxonomy Navigation",
    title: "Instant Multi-Domain Filtering",
    summary: "Students and educators filter hands-on engineering builds across 9 domains in real time, navigating from elementary breadboard circuits to advanced IoT systems without page reloads.",
  },
  {
    step: "02",
    tag: "Pedagogical Progression",
    title: "Grade-Wise Learning Pathways",
    summary: "Curriculums are structured sequentially from Grade 3 foundational logic through Grade 12 applied robotics, providing clear milestones for classroom instruction.",
  },
  {
    step: "03",
    tag: "Document Distribution",
    title: "Zero-Friction Resource Rails",
    summary: "Centralized repository providing instant access to institutional workshop proposals, course syllabi, and technical brochures without authentication barriers.",
  },
  {
    step: "04",
    tag: "Responsive Accessibility",
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
        title="STEMFUSION Educational Platform — Case Study | Nexarya"
        description="Engineering case study for STEMFUSION: interactive STEM, AI & Robotics learning platform, 9-domain project taxonomy, and curriculum distribution engine."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Navigation & Live Status Bar */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-sans text-xs text-[#4A5363] hover:text-[#141B26] font-semibold transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to all work</span>
          </Link>
          
          <a
            href="https://stemfusion.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] border border-[#E3DDCF] hover:border-[#141B26] text-[#141B26] font-sans text-xs font-semibold transition-colors shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>stemfusion.in ↗</span>
          </a>
        </div>

        {/* 1. Header & Editorial Metadata */}
        <RevealOnScroll>
          <div className="mb-16 sm:mb-20">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
              <span className="font-sans text-[12px] sm:text-[13px] tracking-wider text-[#765406] uppercase font-semibold">
                STEM &middot; AI &middot; Robotics Education &middot; Live in Production
              </span>
            </div>

            <h1 className="font-editorial text-balance text-4xl sm:text-6xl md:text-7xl lg:text-[4.6rem] text-[#141B26] leading-[1.02] tracking-[-0.03em] mb-6 max-w-4xl">
              STEMFUSION
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#4A5363] font-light leading-relaxed max-w-3xl mb-10">
              An interactive educational web platform engineered by Nexarya to connect students, mentors, and academic institutions through structured workshops, hands-on engineering builds, and centralized curriculum distribution.
            </p>

            {/* Structured Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E3DDCF] border border-[#E3DDCF]">
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-sans text-[11px] text-[#765406] uppercase font-semibold block mb-1">Client Sector</span>
                <span className="font-sans text-xs text-[#141B26] font-medium">STEM & Robotics Education</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-sans text-[11px] text-[#765406] uppercase font-semibold block mb-1">System Role</span>
                <span className="font-sans text-xs text-[#141B26] font-medium">Project Catalog & Resource Hub</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-sans text-[11px] text-[#765406] uppercase font-semibold block mb-1">Platform Profile</span>
                <span className="font-sans text-xs text-[#141B26] font-medium">Public Web Application</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-sans text-[11px] text-[#765406] uppercase font-semibold block mb-1">Deployment</span>
                <a
                  href="https://stemfusion.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-emerald-700 hover:text-emerald-900 font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>stemfusion.in ↗</span>
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 2. The Platform Entry & Portal */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  The Platform
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#141B26] leading-tight mb-4 font-normal">
                Public portal and student-mentor entrance.
              </h2>
              <p className="font-sans text-base text-[#4A5363] leading-relaxed font-light">
                The primary platform entry point introduces the Mobile STEM Innovation Lab initiative, showcases core academic programs, and provides clear pathways for school demo bookings and curriculum exploration.
              </p>
            </div>

            {/* Main Screenshot: Home Desktop */}
            <div className="bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs overflow-hidden">
              <div className="px-6 py-4 bg-[#F8F5EE] border-b border-[#E3DDCF] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-xs text-[#141B26] font-semibold">
                    Public Portal &amp; Hero Interface
                  </span>
                  <span className="text-[#D8D2C2]">&middot;</span>
                  <span className="font-sans text-xs text-[#68717B]">
                    Desktop Viewport
                  </span>
                </div>
                <div className="flex items-center gap-3 font-sans text-xs text-[#68717B]">
                  <span className="text-emerald-700 font-semibold">stemfusion.in</span>
                </div>
              </div>

              <div className="p-6 sm:p-10 bg-[#FFFFFF]">
                <div className="border border-[#E3DDCF] overflow-hidden">
                  <img
                    src="/projects/stemfusion/evidence/01-stemfusion-home-desktop.png"
                    alt="STEMFUSION Public Portal live screenshot"
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>

                <div className="pt-4 mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-[#68717B]">
                  <span>Hero interface introducing mobile lab capabilities, course pathways, and institutional outreach</span>
                  <span className="font-sans text-[11px] text-[#765406] font-medium">
                    Live production environment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 3. Content & Discovery */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  Content &amp; Discovery
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#141B26] leading-tight mb-4 font-normal">
                Structured project taxonomy and resource delivery.
              </h2>
              <p className="font-sans text-base text-[#4A5363] leading-relaxed font-light">
                STEMFUSION organizes complex engineering coursework into accessible digital modules. The system features a categorized 9-domain project library, pedagogical curriculum pathways, and friction-free resource downloads.
              </p>
            </div>

            {/* Primary Feature: Project Library */}
            <div className="mb-14 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs overflow-hidden">
              <div className="px-6 py-4 bg-[#F8F5EE] border-b border-[#E3DDCF] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-xs text-[#141B26] font-semibold">
                    9-Domain Project Library &amp; Taxonomy Engine
                  </span>
                  <span className="text-[#D8D2C2]">&middot;</span>
                  <span className="font-mono text-xs text-[#68717B]">
                    /project-library
                  </span>
                </div>
                <div className="font-sans text-xs text-[#765406] font-medium">
                  Dynamic Client-Side Filtering
                </div>
              </div>

              <div className="p-6 sm:p-10 bg-[#FFFFFF]">
                <div className="border border-[#E3DDCF] overflow-hidden mb-6">
                  <img
                    src="/projects/stemfusion/evidence/02-stemfusion-project-library-desktop.png"
                    alt="STEMFUSION Project Library live screenshot"
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-[#68717B] pb-6 border-b border-[#E3DDCF]">
                  <span>Categorized repository indexing projects across robotics, artificial intelligence, IoT, and embedded controllers</span>
                  <span className="font-sans text-[11px] text-[#765406] font-medium">
                    Live production environment
                  </span>
                </div>

                {/* 9 Domains Matrix Strip */}
                <div className="mt-8">
                  <h3 className="font-editorial text-2xl text-[#141B26] mb-4">
                    Indexed Engineering Domains
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {STEMFUSION_DOMAINS.map((dom, idx) => (
                      <div key={dom.name} className="p-4 bg-[#F8F5EE] border border-[#E3DDCF]">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E3DDCF]">
                          <span className="font-editorial text-lg text-[#141B26]">0{idx + 1}</span>
                          <span className="font-sans text-[10px] text-[#765406] font-semibold uppercase tracking-wider">Domain</span>
                        </div>
                        <h4 className="font-sans text-sm text-[#141B26] font-semibold mb-1">
                          {dom.name}
                        </h4>
                        <p className="font-sans text-xs text-[#4A5363] leading-relaxed">
                          {dom.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Side-by-Side: Technology Domains & Curriculum Learning */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
              {/* Technology Domains */}
              <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E3DDCF] text-xs font-sans text-[#68717B]">
                    <span className="font-semibold text-[#141B26]">Technology Domains</span>
                    <span className="font-mono text-xs">/technology-domains</span>
                  </div>
                  <div className="border border-[#E3DDCF] overflow-hidden mb-4">
                    <img
                      src="/projects/stemfusion/evidence/05-stemfusion-technology-domains-desktop.png"
                      alt="STEMFUSION Technology Domains matrix"
                      className="w-full h-auto object-contain block"
                      loading="eager"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-editorial text-xl text-[#141B26] mb-1">Domain Curriculum Specifications</h3>
                  <p className="font-sans text-xs text-[#4A5363] leading-relaxed mb-3">
                    Technical overview defining learning objectives, hardware kits, and software environments across core engineering disciplines.
                  </p>
                </div>
              </div>

              {/* Curriculum Progression */}
              <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E3DDCF] text-xs font-sans text-[#68717B]">
                    <span className="font-semibold text-[#141B26]">Curriculum Progression</span>
                    <span className="font-mono text-xs">/curriculum-mapped-learning</span>
                  </div>
                  <div className="border border-[#E3DDCF] overflow-hidden mb-4">
                    <img
                      src="/projects/stemfusion/evidence/04-stemfusion-curriculum-learning-desktop.png"
                      alt="STEMFUSION Curriculum-Mapped Learning progression"
                      className="w-full h-auto object-contain block"
                      loading="eager"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-editorial text-xl text-[#141B26] mb-1">Grade-Mapped Progression Pathways</h3>
                  <p className="font-sans text-xs text-[#4A5363] leading-relaxed mb-3">
                    Pedagogical sequence scaffolding foundational circuitry in primary grades through full industrial prototyping in secondary grades.
                  </p>
                </div>
              </div>
            </div>

            {/* Resource Distribution & Downloads Hub */}
            <div className="p-6 sm:p-10 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E3DDCF] text-xs font-sans text-[#68717B]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#141B26]">Resource Distribution Hub</span>
                  <span className="text-[#D8D2C2]">&middot;</span>
                  <span className="font-mono text-xs">/downloads</span>
                </div>
                <span className="text-[#765406] font-medium">Institutional Asset Repository</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 border border-[#E3DDCF] overflow-hidden">
                  <img
                    src="/projects/stemfusion/evidence/03-stemfusion-downloads-desktop.png"
                    alt="STEMFUSION Downloads repository"
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>
                <div className="lg:col-span-4 space-y-4">
                  <h3 className="font-editorial text-2xl text-[#141B26]">Direct Document Distribution</h3>
                  <p className="font-sans text-xs text-[#4A5363] leading-relaxed font-light">
                    The platform centralizes all institutional collateral, providing schools, educators, and event organizers with immediate PDF downloads of course catalogues, company profiles, and curriculum proposals.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </RevealOnScroll>

        {/* 4. Product Experience & Mobile Parity */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  Product Experience
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#141B26] leading-tight mb-4 font-normal">
                Designed for direct student and educator engagement.
              </h2>
              <p className="font-sans text-base text-[#4A5363] leading-relaxed font-light">
                The product interface is optimized for rapid discovery, allowing students in classroom environments and administrators on mobile devices to access materials with zero friction.
              </p>
            </div>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {PRODUCT_EXPERIENCE_POINTS.map((pt) => (
                <div key={pt.step} className="p-6 bg-[#FFFFFF] border border-[#E3DDCF] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E3DDCF]">
                      <span className="font-editorial text-2xl text-[#141B26]">{pt.step}</span>
                      <span className="font-sans text-[11px] text-[#765406] font-medium">{pt.tag}</span>
                    </div>
                    <h3 className="font-editorial text-xl text-[#141B26] mb-2 leading-snug">
                      {pt.title}
                    </h3>
                    <p className="font-sans text-xs text-[#4A5363] leading-relaxed font-light">
                      {pt.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Responsive Mobile Verification */}
            <div className="p-6 sm:p-10 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-[#E3DDCF] text-xs font-sans text-[#68717B]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#141B26]">Responsive Mobile Layout</span>
                  <span className="text-[#D8D2C2]">&middot;</span>
                  <span>Mobile Viewports</span>
                </div>
                <span className="text-[#765406] font-medium">Mobile-First Accessibility</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="p-5 bg-[#F8F5EE] border border-[#E3DDCF]">
                  <div className="flex items-center justify-between mb-3 text-xs font-sans text-[#68717B]">
                    <span className="font-semibold text-[#141B26]">Mobile Portal Entry</span>
                    <span className="font-mono">/</span>
                  </div>
                  <div className="max-w-[280px] mx-auto border border-[#E3DDCF] bg-[#FFFFFF] overflow-hidden mb-3">
                    <img
                      src="/projects/stemfusion/evidence/01-stemfusion-home-mobile.png"
                      alt="STEMFUSION Mobile Home screenshot"
                      className="w-full h-auto object-contain block"
                      loading="eager"
                    />
                  </div>
                  <p className="font-sans text-xs text-[#4A5363] text-center">
                    Adaptive mobile navigation and quick demo booking triggers.
                  </p>
                </div>

                <div className="p-5 bg-[#F8F5EE] border border-[#E3DDCF]">
                  <div className="flex items-center justify-between mb-3 text-xs font-sans text-[#68717B]">
                    <span className="font-semibold text-[#141B26]">Mobile Taxonomy View</span>
                    <span className="font-mono">/project-library</span>
                  </div>
                  <div className="max-w-[280px] mx-auto border border-[#E3DDCF] bg-[#FFFFFF] overflow-hidden mb-3">
                    <img
                      src="/projects/stemfusion/evidence/02-stemfusion-project-library-mobile.png"
                      alt="STEMFUSION Mobile Project Library screenshot"
                      className="w-full h-auto object-contain block"
                      loading="eager"
                    />
                  </div>
                  <p className="font-sans text-xs text-[#4A5363] text-center">
                    Touch-optimized category selection and project build indexing.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </RevealOnScroll>

        {/* 5. Engineering Architecture */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28 p-8 sm:p-14 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs">
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  Engineering
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#141B26] leading-tight mb-4 font-normal">
                Lightweight, responsive web architecture.
              </h2>
              <p className="font-sans text-base text-[#4A5363] leading-relaxed font-light">
                The STEMFUSION platform is constructed with a responsive client-side interface, modular Python and Flask service endpoints, and a relational data store optimized for sub-second resource discovery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_STACK.map((tech) => (
                <div key={tech.name} className="p-6 bg-[#F8F5EE] border border-[#E3DDCF]">
                  <div className="font-sans text-[11px] uppercase tracking-wider text-[#765406] font-semibold mb-1">Technology</div>
                  <h3 className="font-mono text-lg font-bold text-[#141B26] mb-2">{tech.name}</h3>
                  <p className="font-sans text-xs text-[#4A5363] font-light leading-relaxed">{tech.role}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* 6. Live Project Banner & CTA */}
        <RevealOnScroll>
          <div className="p-10 sm:p-16 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  Start a Project
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#141B26] mb-3 font-normal">
                Have an educational platform or web product to engineer?
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#4A5363] font-light leading-relaxed">
                We design and build bespoke web platforms, resource distribution engines, and digital software tailored to your domain.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" className="px-8 py-3.5 text-center justify-center">
                Start a project &rarr;
              </Button>
              <a
                href="mailto:hello@nexarya.in"
                className="px-6 py-3.5 border border-[#E3DDCF] hover:border-[#141B26] text-xs font-sans font-semibold text-[#141B26] text-center transition-colors bg-[#F8F5EE] inline-flex items-center justify-center gap-2"
              >
                <Mail size={14} />
                <span>hello@nexarya.in</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </div>
  );
}
