import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const HERO_INDEX = [
  { num: "01", label: "WORK", href: "/work" },
  { num: "02", label: "SOLUTIONS", href: "/solutions" },
  { num: "03", label: "PROCESS", href: "/process" },
  { num: "04", label: "CONTACT", href: "/contact" },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const rafIdRef = useRef<number | null>(null);

  // Interaction Coordinates and State (LOCKED PHYSICS)
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const isHovered = useRef(false);
  const isTouch = useRef(false);
  const lastInteractionTime = useRef(0);
  const isInitialized = useRef(false);
  const startTime = useRef(Date.now());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Initial default positions (centered over the workspace desk)
    const updateDimensions = () => {
      const rect = container.getBoundingClientRect();
      const defaultX = rect.width * 0.62;
      const defaultY = rect.height * 0.48;
      const radius = window.innerWidth < 640 ? 230 : window.innerWidth < 1024 ? 300 : 360;

      if (!isInitialized.current) {
        targetPos.current = { x: defaultX, y: defaultY };
        currentPos.current = { x: defaultX, y: defaultY };
        container.style.setProperty("--reveal-x", `${defaultX}px`);
        container.style.setProperty("--reveal-y", `${defaultY}px`);
        container.style.setProperty("--reveal-r", `${radius}px`);
        isInitialized.current = true;
      } else {
        container.style.setProperty("--reveal-r", `${radius}px`);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    if (prefersReducedMotion) {
      // Set static graceful reveal for reduced motion
      const rect = container.getBoundingClientRect();
      container.style.setProperty("--reveal-x", `${rect.width * 0.58}px`);
      container.style.setProperty("--reveal-y", `${rect.height * 0.48}px`);
      container.style.setProperty("--reveal-r", `380px`);
      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }

    // Direct pointer movement handler with zero latency
    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return; // Handled by touch events
      const rect = container.getBoundingClientRect();
      targetPos.current.x = e.clientX - rect.left;
      targetPos.current.y = e.clientY - rect.top;
      isHovered.current = true;
      isTouch.current = false;
      lastInteractionTime.current = Date.now();
    };

    const handlePointerLeave = () => {
      isHovered.current = false;
      isTouch.current = false;
      const rect = container.getBoundingClientRect();
      targetPos.current.x = rect.width * 0.58;
      targetPos.current.y = rect.height * 0.48;
    };

    // Touch event handlers for mobile & tablet
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        targetPos.current.x = touch.clientX - rect.left;
        targetPos.current.y = touch.clientY - rect.top;
        isHovered.current = true;
        isTouch.current = true;
        lastInteractionTime.current = Date.now();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        targetPos.current.x = touch.clientX - rect.left;
        targetPos.current.y = touch.clientY - rect.top;
        isHovered.current = true;
        isTouch.current = true;
        lastInteractionTime.current = Date.now();
      }
    };

    const handleTouchEnd = () => {
      isHovered.current = false;
      isTouch.current = false;
      const rect = container.getBoundingClientRect();
      targetPos.current.x = rect.width * 0.52;
      targetPos.current.y = rect.height * 0.46;
    };

    container.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Ultra-responsive Animation Loop (LOCKED PHYSICS: 0.22 desktop, 0.30 touch, 0.12 settle)
    const animate = () => {
      const rect = container.getBoundingClientRect();
      const now = Date.now();
      const timeSinceInteraction = now - lastInteractionTime.current;

      // Ambient drift ONLY resumes if pointer has been unhovered/idle for > 1800ms
      if (!isHovered.current && timeSinceInteraction > 1800) {
        const elapsed = (now - startTime.current) * 0.0007;
        const driftX = rect.width * 0.58 + Math.sin(elapsed) * (rect.width * 0.06);
        const driftY = rect.height * 0.48 + Math.cos(elapsed * 0.6) * (rect.height * 0.04);
        targetPos.current.x = driftX;
        targetPos.current.y = driftY;
      }

      // Responsive interpolation: 0.22 for desktop pointer, 0.30 for touch, 0.12 for graceful return
      const lerp = isTouch.current ? 0.30 : isHovered.current ? 0.22 : 0.12;
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += dx * lerp;
      currentPos.current.y += dy * lerp;

      container.style.setProperty("--reveal-x", `${currentPos.current.x.toFixed(1)}px`);
      container.style.setProperty("--reveal-y", `${currentPos.current.y.toFixed(1)}px`);

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("resize", updateDimensions);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="NEXARYA Studio Hero"
      className="relative min-h-[88vh] sm:min-h-[92vh] lg:min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-20 overflow-hidden bg-[#08101B] text-[#F7F5EF] border-b border-[#243247] select-none flex flex-col justify-between"
      style={{
        // Default CSS fallback variables
        "--reveal-x": "58%",
        "--reveal-y": "48%",
        "--reveal-r": "360px",
      } as React.CSSProperties}
    >
      {/* ============================================================ */}
      {/* LAYER 1: BASE ATMOSPHERIC PHOTOGRAPHIC FIELD (N950/N900)     */}
      {/* ============================================================ */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <picture>
          <source srcSet="/hero/hero-cinematic-workspace.jpg" type="image/jpeg" />
          <img
            src="/hero/hero-cinematic-workspace.jpg"
            alt="NEXARYA architectural workspace, model sketches, and engineering workstation"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center filter grayscale-[40%] brightness-[0.48] contrast-[1.02] saturate-[0.60]"
          />
        </picture>

        {/* Asymmetric Directional Scrim: Deep Navy negative space on left, open discovery on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08101B]/95 via-[#0F1725]/80 to-[#08101B]/25 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08101B]/95 via-[#0F1725]/85 to-[#08101B]/95 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08101B]/85 via-transparent to-[#08101B]" />
      </div>

      {/* ============================================================ */}
      {/* LAYER 2: INTERACTIVE CURSOR-CONTROLLED VIBRANT REVEAL         */}
      {/* ============================================================ */}
      <div
        className="absolute inset-0 z-[1] overflow-hidden pointer-events-none transition-opacity duration-500"
        style={{
          maskImage:
            "radial-gradient(circle var(--reveal-r) at var(--reveal-x) var(--reveal-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.05) 85%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--reveal-r) at var(--reveal-x) var(--reveal-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.05) 85%, transparent 100%)",
        }}
      >
        <picture>
          <source srcSet="/hero/hero-cinematic-workspace.jpg" type="image/jpeg" />
          <img
            src="/hero/hero-cinematic-workspace.jpg"
            alt=""
            aria-hidden="true"
            decoding="async"
            className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.08] saturate-[1.12]"
          />
        </picture>

        {/* Ambient Warm Brass Feathering Aura */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle var(--reveal-r) at var(--reveal-x) var(--reveal-y), rgba(197,154,61,0.08) 0%, rgba(224,189,104,0.03) 45%, transparent 75%)",
          }}
        />
      </div>

      {/* ============================================================ */}
      {/* LAYER 3: EDITORIAL FOREGROUND CONTENT                        */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 flex-1 flex flex-col justify-between">
        
        {/* Restrained Editorial Eyebrow */}
        <RevealOnScroll>
          <div className="flex items-center justify-between gap-4 pt-2 sm:pt-4">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D] shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.24em] text-[#C59A3D] uppercase font-semibold">
                SOFTWARE ENGINEERING STUDIO // MUMBAI &bull; WORLDWIDE
              </span>
            </div>

            {/* Subtle Telemetry Hint */}
            <div className="hidden sm:inline-flex items-center gap-2 text-[10px] font-mono text-[#7F8A99] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]/70 animate-pulse" />
              <span>MOVE CURSOR TO REVEAL</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Main Display Headline & Value Proposition */}
        <div className="max-w-4xl py-8 sm:py-14 my-auto">
          <RevealOnScroll delayMs={40}>
            {/* Display Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.4rem] leading-[1.03] tracking-[-0.03em] text-[#F7F5EF] mb-6 sm:mb-8 font-normal">
              From how work happens <br />
              <span className="italic font-normal text-[#E8E3D8]">to software that works.</span>
            </h1>

            {/* Approved Supporting Positioning Copy */}
            <p className="text-base sm:text-lg lg:text-[1.28rem] text-[#B9C0C9] max-w-xl font-sans font-light leading-relaxed mb-8 sm:mb-12">
              We help businesses turn complexity into clear, usable systems.
            </p>

            {/* Action Conversion CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
              <Button href="/work" variant="primary" size="lg">
                VIEW OUR WORK
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                START A PROJECT
              </Button>
            </div>
          </RevealOnScroll>
        </div>

        {/* Bottom Section: Minimal Studio Directory */}
        <div className="pt-6 sm:pt-8">
          <RevealOnScroll delayMs={80}>
            <div className="pt-4 border-t border-[#243247]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#7F8A99] uppercase font-medium">
                STUDIO DIRECTORY
              </span>
              <nav className="grid grid-cols-2 gap-x-6 gap-y-2 sm:flex sm:flex-wrap sm:items-center sm:gap-8 lg:gap-10 text-xs font-mono">
                {HERO_INDEX.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center gap-1.5 text-[#B9C0C9] hover:text-[#FFFFFF] transition-colors py-1 group"
                  >
                    <span className="text-[#C59A3D] text-[10px] font-semibold">{item.num}</span>
                    <span className="tracking-wider uppercase group-hover:underline underline-offset-4">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
