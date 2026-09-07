import React, { useRef, useEffect, useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { Play, Pause } from "@/components/ui/Icons";

export default function InTheWorkMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // IntersectionObserver to pause when substantially outside viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isReducedMotion) {
              video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
            }
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [isReducedMotion]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    setHasInteracted(true);
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="in-the-work"
      data-section="media"
      className="py-18 sm:py-22 lg:py-26 bg-[#0E1720] text-[#F4EFE6] border-b border-white/10 select-none overflow-hidden"
      aria-labelledby="in-the-work-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-9 sm:pb-11 border-b border-white/10 mb-11 sm:mb-14">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#D4A72C] uppercase font-semibold">
                  IN THE WORK
                </span>
              </div>
              <h2
                id="in-the-work-heading"
                className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] text-[#FFFFFF] leading-[1.05] tracking-[-0.03em] font-normal"
              >
                Engineering happens <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#EAE5DB]">behind the interface.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#A7B4C2] max-w-md font-light leading-relaxed">
              A glimpse of the people, tools and iterations behind the systems we build.
            </p>
          </div>
        </RevealOnScroll>

        {/* Video Presentation Frame */}
        <div ref={containerRef} className="relative">
          <div className="border border-white/15 bg-[#141E28] overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.3)]">
            
            {/* Top Docket Bar */}
            <div className="px-6 py-3 bg-[#0B131C] border-b border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#8E9CA8]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[#FFFFFF] font-semibold uppercase tracking-wider text-[11px]">
                  ACTIVE WORKBENCH
                </span>
                <span className="text-white/20">//</span>
                <span className="text-[#A7B4C2] uppercase text-[11px] hidden sm:inline">
                  DEVELOPMENT & RUNTIME ENVIRONMENT
                </span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/15 text-[#D4A72C] hover:text-[#FFFFFF] text-[10px] uppercase font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4A72C]"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause size={10} /> : <Play size={10} />}
                  <span>{isPlaying ? "PAUSE STREAM" : "PLAY STREAM"}</span>
                </button>
                <span className="text-[10px] uppercase text-[#8E9CA8] hidden md:inline">
                  DOCUMENTARY FOOTAGE
                </span>
              </div>
            </div>

            {/* Video Canvas Body */}
            <div className="relative bg-[#070D13] flex items-center justify-center p-4 sm:p-8 lg:p-10 min-h-[360px] sm:min-h-[460px] lg:min-h-[540px]">
              
              {/* Media Frame */}
              <div className="relative w-full max-w-xl mx-auto rounded-none overflow-hidden border border-white/10 shadow-2xl bg-[#000000]">
                <video
                  ref={videoRef}
                  src="/media/workstation-engineering.mp4"
                  poster="/media/workstation-engineering-poster.jpg"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-auto max-h-[620px] object-contain mx-auto block"
                  aria-label="Genuine NEXARYA engineering workstation footage"
                />

                {/* Subtle Click-to-Toggle Overlay */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="absolute inset-0 w-full h-full cursor-pointer bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C]"
                  aria-label={isPlaying ? "Pause playback" : "Resume playback"}
                />
              </div>

            </div>

            {/* Bottom Caption & Verification Strip */}
            <div className="px-6 py-3.5 bg-[#0B131C] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#8E9CA8]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C]" />
                <span className="text-[#FFFFFF] font-semibold">STUDIO FOOTAGE:</span>
                <span>Direct capture from active engineering workstation and runtime development environment.</span>
              </div>
              <span className="text-[#D4A72C] uppercase text-[10px] font-semibold shrink-0">
                GENUINE ENGINEERING ACTIVITY
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
