import React, { useState, useEffect } from "react";

export default function HeroOrbital() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Subtle desktop mouse parallax only (capped at max ±4px)
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const x = ((e.clientX / window.innerWidth) - 0.5) * 8; // -4px to +4px
      const y = ((e.clientY / window.innerHeight) - 0.5) * 8; // -4px to +4px
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-label="NEXARYA System Architecture Topology Diagram"
      className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] aspect-square mx-auto flex items-center justify-center select-none"
      style={{
        transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        transition: "transform 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* 4 Quiet Calibration Markers (┌ ┐ └ ┘) */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4A72C]/40" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4A72C]/40" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4A72C]/40" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4A72C]/40" />

      {/* Layer 04 (Outer Ring): Production & Cloud Infrastructure */}
      <div className="absolute inset-3 sm:inset-4 rounded-full border border-white/10 flex items-center justify-center animate-orbit-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 bg-[#03070B] border border-white/10 text-[8px] font-tech text-[#A7A9A8] tracking-widest uppercase">
          04 // Production
        </div>
        <div className="absolute -top-1 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-[#D4A72C]" />
      </div>

      {/* Layer 03 (Middle Ring): Engineering & APIs */}
      <div className="absolute inset-14 sm:inset-16 rounded-full border border-white/10 border-dashed flex items-center justify-center animate-orbit-reverse">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-2 py-0.5 bg-[#03070B] border border-white/10 text-[8px] font-tech text-[#D4A72C] tracking-widest uppercase">
          03 // Engineering
        </div>
        <div className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-[#D4A72C]/80" />
      </div>

      {/* Layer 02 (Inner Ring): Product & Interfaces */}
      <div className="absolute inset-24 sm:inset-28 rounded-full border border-[#D4A72C]/20 flex items-center justify-center animate-orbit-medium">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-1.5 py-0.5 bg-[#03070B] text-[8px] font-tech text-[#F2EFE7] tracking-wider uppercase">
          02 // Product
        </div>
      </div>

      {/* Layer 01 (Central Core): Business Problem / Domain */}
      <div className="relative z-10 w-30 sm:w-34 h-30 sm:h-34 rounded-full bg-[#070D12] border border-[#D4A72C]/50 flex flex-col items-center justify-center p-3 text-center shadow-[0_8px_32px_rgba(0,0,0,0.95)]">
        <span className="font-tech text-[8px] tracking-[0.2em] text-[#D4A72C] uppercase font-semibold mb-0.5">
          01 // CORE
        </span>
        <span className="font-editorial text-sm sm:text-base text-[#F2EFE7] leading-tight font-medium">
          Business Problem
        </span>
        <span className="font-tech text-[7.5px] text-[#6F7475] tracking-wider mt-1">
          DOMAIN LOGIC
        </span>
      </div>

      {/* Restrained Bottom Caption */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8.5px] font-tech text-[#6F7475] tracking-widest uppercase">
        SYSTEMS TOPOLOGY SIGNATURE
      </div>
    </div>
  );
}
