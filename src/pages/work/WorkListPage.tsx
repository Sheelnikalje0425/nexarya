import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowRight, ExternalLink } from "@/components/ui/Icons";

export default function WorkListPage() {
  const containerRef = useRef<HTMLElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const updateDimensions = () => {
      const rect = container.getBoundingClientRect();
      const defaultX = rect.width * 0.62;
      const defaultY = rect.height * 0.48;
      const radius = window.innerWidth < 640 ? 200 : window.innerWidth < 1024 ? 280 : 360;

      container.style.setProperty("--reveal-x", `${defaultX}px`);
      container.style.setProperty("--reveal-y", `${defaultY}px`);
      container.style.setProperty("--reveal-r", `${radius}px`);
      isInitialized.current = true;
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    if (prefersReducedMotion || window.innerWidth < 768) {
      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = container.getBoundingClientRect();
      container.style.setProperty("--reveal-x", `${e.clientX - rect.left}px`);
      container.style.setProperty("--reveal-y", `${e.clientY - rect.top}px`);
    };

    const handlePointerLeave = () => {
      const rect = container.getBoundingClientRect();
      container.style.setProperty("--reveal-x", `${rect.width * 0.62}px`);
      container.style.setProperty("--reveal-y", `${rect.height * 0.48}px`);
    };

    container.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      window.removeEventListener("resize", updateDimensions);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="bg-[#F8F5EE] text-[#141B26] min-h-screen select-none">
      <SEOHead
        title="Our Work — Production Case Studies | Nexarya"
        description="Explore production software systems engineered by Nexarya: STEMFUSION educational platform and Railway Concession Management System."
      />

      {/* Hero: Full-Bleed Architectural Image with High-Contrast Dark Gradient Scrim */}
      <section
        ref={containerRef}
        id="work-hero"
        aria-label="Nexarya Selected Work"
        className="relative min-h-[65vh] sm:min-h-[72vh] flex flex-col justify-end pt-32 sm:pt-40 lg:pt-44 pb-14 sm:pb-18 bg-[#0A1117] text-[#F8F5EE] overflow-hidden select-none border-b border-[#243247]"
      >
        {/* Background Image with High-Contrast Dark Gradient Scrim */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <picture>
            <source srcSet="/editorial/work-header.jpg" type="image/jpeg" />
            <img
              src="/editorial/work-header.jpg"
              alt="Corporate architectural facade at twilight"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center filter grayscale-[35%] blur-[2px] brightness-[0.32] contrast-[1.02] scale-[1.02]"
            />
          </picture>

          {/* High contrast scrim for mobile and desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1117]/95 via-[#0A1117]/72 to-[#0A1117]/35 hidden md:block" />
          <div className="absolute inset-0 bg-[#0A1117]/85 md:hidden" />
        </div>

        {/* Interactive Cursor Reveal (Desktop only) */}
        <div
          className="hidden md:block absolute inset-0 z-[1] overflow-hidden pointer-events-none transition-opacity duration-500"
          style={{
            maskImage:
              "radial-gradient(circle var(--reveal-r) at var(--reveal-x) var(--reveal-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.2) 65%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle var(--reveal-r) at var(--reveal-x) var(--reveal-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.2) 65%, transparent 100%)",
          }}
        >
          <picture>
            <source srcSet="/editorial/work-header.jpg" type="image/jpeg" />
            <img
              src="/editorial/work-header.jpg"
              alt=""
              aria-hidden="true"
              decoding="async"
              className="w-full h-full object-cover object-center filter grayscale-[8%] brightness-[0.82] contrast-[1.12] scale-[1.02]"
            />
          </picture>
        </div>

        {/* Editorial Foreground Content */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl pb-4">
            <RevealOnScroll>
              <div className="flex items-center gap-2.5 pb-6 sm:pb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C] shrink-0" />
                <span className="font-sans text-[12px] sm:text-[13px] tracking-wider text-[#D4A72C] uppercase font-semibold">
                  Our Work
                </span>
              </div>

              <h1 className="font-editorial text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[5.3rem] leading-[0.98] tracking-[-0.03em] text-[#F8F5EE] mb-6 sm:mb-8 font-normal">
                Real projects. <br />
                <span className="italic font-normal text-[#E8E3D8]">Real workflows.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#B9C0C9] max-w-xl font-sans font-light leading-relaxed">
                Software built for institutional needs, operational realities, and real users.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Projects: Screenshots are the Visual Identity (No Boxed Cards) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">

          {/* Project 01: STEMFUSION */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="font-sans text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block">
                  Education Platform
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#0F1725] font-normal">
                  STEMFUSION
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#4A5363] font-light leading-relaxed">
                  Education platform for hands-on STEM learning and interactive curriculum delivery.
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <Link
                    to="/work/stemfusion"
                    className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#0F1725] hover:text-[#8A6B1E] transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                  <a
                    href="https://stemfusion.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-sans text-xs text-[#8A6B1E] hover:text-[#0F1725] transition-colors"
                  >
                    <span>stemfusion.in</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="border border-[#E8E3D8] bg-[#F1EDE3] overflow-hidden">
                  <img
                    src="/projects/stemfusion/evidence/02-stemfusion-project-library-desktop.png"
                    alt="STEMFUSION Platform Library Interface"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Project 02: Railway Concession Management System */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="font-sans text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block">
                  Institutional Platform
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#0F1725] font-normal">
                  Railway Concession Management System
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#4A5363] font-light leading-relaxed">
                  Institutional verification and concession management platform for student transit passes.
                </p>
                <div className="pt-2">
                  <Link
                    to="/work/railway-concession-management"
                    className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#0F1725] hover:text-[#8A6B1E] transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="border border-[#E8E3D8] bg-[#F1EDE3] overflow-hidden">
                  <img
                    src="/projects/railway/evidence/01-railway-student-applications.jpg"
                    alt="Railway Concession Management System Console"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* Restrained Bottom CTA */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="pt-8 border-t border-[#E8E3D8] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#0F1725] font-normal">
                  Have a similar challenge?
                </h3>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#8A6B1E] hover:text-[#0F1725] transition-colors"
                >
                  <span>Start a Project</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
}
