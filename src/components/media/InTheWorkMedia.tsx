import React, { useRef, useEffect, useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { Play, Pause } from "@/components/ui/Icons";

export default function InTheWorkMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isReducedMotion && video.src) {
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
      className="py-18 sm:py-22 lg:py-26 bg-[#08101B] text-[#F7F5EF] border-b border-[#243247] select-none overflow-hidden"
      aria-labelledby="in-the-work-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-[#243247] mb-10 sm:mb-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  04 // IN THE WORK
                </span>
              </div>
              <h2
                id="in-the-work-heading"
                className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] text-[#F7F5EF] leading-[1.05] tracking-[-0.03em] font-normal"
              >
                A glimpse inside <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#E8E3D8]">how we build.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#B9C0C9] max-w-md font-light leading-relaxed">
              Authentic engineering footage from active workstation and system runtime environments.
            </p>
          </div>
        </RevealOnScroll>

        {/* Video Presentation: Clean Hero Media */}
        <div ref={containerRef} className="relative">
          <div className="relative w-full rounded-none overflow-hidden border border-[#243247] shadow-[0_16px_50px_rgba(0,0,0,0.5)] bg-[#08101B] aspect-[16/9] max-w-5xl mx-auto">
            
            {/* Visible Poster Frame */}
            <img
              src="/media/workstation-engineering-poster.jpg"
              alt="Active engineering workstation showing code architecture and system topology"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />

            {/* Optional HTML5 Video element */}
            <video
              ref={videoRef}
              src="/media/workstation-engineering.mp4"
              poster="/media/workstation-engineering-poster.jpg"
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover hidden"
              aria-label="Genuine NEXARYA engineering workstation footage"
            />

            {/* Minimal Play / Pause Floating Trigger */}
            <button
              type="button"
              onClick={togglePlay}
              className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-[#08101B]/85 hover:bg-[#0F1725] backdrop-blur-md border border-white/20 text-[#F7F5EF] text-[10px] sm:text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              aria-label={isPlaying ? "Pause video stream" : "Play video stream"}
            >
              {isPlaying ? <Pause size={12} className="text-[#C59A3D]" /> : <Play size={12} className="text-[#C59A3D]" />}
              <span>{isPlaying ? "PAUSE" : "PLAY WORKSTATION"}</span>
            </button>
          </div>

          {/* Clean Editorial Caption Strip */}
          <div className="max-w-5xl mx-auto pt-3 flex items-center justify-between text-xs font-mono text-[#7F8A99]">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#C59A3D]">
              DESIGN &middot; ARCHITECTURE &middot; ENGINEERING
            </span>
            <span className="text-[10px] uppercase text-[#7F8A99] hidden sm:inline">
              LIVE WORKSTATION STREAM
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
