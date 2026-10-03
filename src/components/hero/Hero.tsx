import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
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
    <section
      ref={containerRef}
      id="hero"
      aria-label="Nexarya Software Engineering Studio"
      className="relative min-h-[82vh] flex flex-col justify-end pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-18 bg-[#0A1117] text-[#F8F5EE] overflow-hidden select-none border-b border-[#243247]"
    >
      {/* Background Image with High-Contrast Dark Gradient Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <picture>
          <source srcSet="/hero/hero-cinematic-workspace.jpg" type="image/jpeg" />
          <img
            src="/hero/hero-cinematic-workspace.jpg"
            alt="Nexarya engineering studio workspace"
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
          <source srcSet="/hero/hero-cinematic-workspace.jpg" type="image/jpeg" />
          <img
            src="/hero/hero-cinematic-workspace.jpg"
            alt=""
            aria-hidden="true"
            decoding="async"
            className="w-full h-full object-cover object-center filter grayscale-[8%] brightness-[0.82] contrast-[1.12] scale-[1.02]"
          />
        </picture>
      </div>

      {/* Editorial Foreground Content */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Eyebrow */}
        <RevealOnScroll>
          <div className="flex items-center gap-2.5 pb-8 sm:pb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C] shrink-0" />
            <span className="font-sans text-[12px] sm:text-[13px] tracking-wider text-[#D4A72C] uppercase font-semibold">
              Software Engineering Studio &middot; Mumbai
            </span>
          </div>
        </RevealOnScroll>

        {/* Main Display Headline & Value Proposition */}
        <div className="max-w-3xl pb-4">
          <RevealOnScroll delayMs={40}>
            <h1 className="font-editorial text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[5.3rem] leading-[0.96] tracking-[-0.03em] text-[#F8F5EE] mb-6 sm:mb-8 font-normal">
              Software built <br />
              <span className="italic font-normal text-[#E8E3D8]">around your business.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#B9C0C9] max-w-lg font-sans font-light leading-relaxed mb-8 sm:mb-10">
              Digital systems for teams that need their work to move.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
              <Button href="/contact" variant="primary" size="lg">
                Start a Project &rarr;
              </Button>
              <Button href="/work" variant="dark" size="lg">
                See Our Work
              </Button>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
