import React, { useState, useEffect, useRef } from "react";

export default function SystemVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Very subtle, restrained tilt (max ~2.5 deg)
    const rotateX = -(y / (rect.height / 2)) * 2.5;
    const rotateY = (x / (rect.width / 2)) * 2.5;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(4px)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
  };

  return (
    <div
      ref={containerRef}
      data-testid="system-visualization"
      aria-label="3-stage engineering paradigm"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: reducedMotion ? "none" : transform,
        transition: "transform 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className="w-full max-w-[560px] mx-auto lg:ml-auto bg-[#151F30] border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.35)] overflow-hidden select-none"
    >
      {/* Docket Header */}
      <div className="px-5 py-3.5 bg-[#0F1725] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
          <span className="font-mono text-[10px] sm:text-[11px] text-[#FAF8F5] uppercase tracking-[0.16em] font-semibold">
            FIGURE 0.1 // SYSTEM SYNTHESIS
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#9EAAB8] uppercase tracking-wider">
          ENGINEERING PARADIGM
        </span>
      </div>

      {/* Three-Stage Visualization Body */}
      <div className="p-6 sm:p-7 space-y-4 bg-[#151F30]">
        
        {/* STAGE 01: WORKFLOW */}
        <div className="p-4 sm:p-4.5 bg-[#0F1725] border border-white/10 hover:border-white/20 transition-colors rounded-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] text-[#C59A3D] tracking-[0.18em] uppercase font-semibold">
              STAGE 01 // WORKFLOW
            </span>
            <span className="font-mono text-[9px] text-[#9EAAB8] uppercase tracking-wider">
              INPUT REALITY
            </span>
          </div>
          <h3 className="font-editorial text-lg sm:text-xl text-[#FFFFFF] font-normal leading-snug mb-2.5">
            Complex operational reality.
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {["WORKFLOW", "OPERATIONS", "HANDOFFS", "RULES", "VALIDATION"].map((label) => (
              <span
                key={label}
                className="font-mono text-[9px] px-2 py-0.5 bg-white/5 text-[#9EAAB8] border border-white/10 uppercase tracking-wider"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Downward Transition Connector 1 */}
        <div className="flex items-center justify-center -my-1">
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#C59A3D]">
            <span className="h-3 w-px bg-white/20" />
            <span className="text-xs">↓</span>
            <span className="h-3 w-px bg-white/20" />
          </div>
        </div>

        {/* STAGE 02: STRUCTURE */}
        <div className="p-4 sm:p-4.5 bg-[#0F1725] border border-white/10 hover:border-white/20 transition-colors rounded-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] text-[#C59A3D] tracking-[0.18em] uppercase font-semibold">
              STAGE 02 // STRUCTURE
            </span>
            <span className="font-mono text-[9px] text-[#9EAAB8] uppercase tracking-wider">
              DOMAIN MODEL
            </span>
          </div>
          <h3 className="font-editorial text-lg sm:text-xl text-[#FFFFFF] font-normal leading-snug mb-2.5">
            Rules, relationships and system boundaries.
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {["BOUNDARIES", "RELATIONSHIPS", "STATES", "RULES"].map((label) => (
              <span
                key={label}
                className="font-mono text-[9px] px-2 py-0.5 bg-white/5 text-[#9EAAB8] border border-white/10 uppercase tracking-wider"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Downward Transition Connector 2 */}
        <div className="flex items-center justify-center -my-1">
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#C59A3D]">
            <span className="h-3 w-px bg-white/20" />
            <span className="text-xs">↓</span>
            <span className="h-3 w-px bg-white/20" />
          </div>
        </div>

        {/* STAGE 03: SOFTWARE */}
        <div className="p-4 sm:p-5 bg-[#1A273A] text-[#FAF8F5] border border-[#C59A3D]/40 rounded-xs shadow-md">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] text-[#E0BD68] tracking-[0.18em] uppercase font-semibold">
              STAGE 03 // SOFTWARE
            </span>
            <span className="font-mono text-[9px] text-[#E0BD68] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
              DEPLOYED
            </span>
          </div>
          <h3 className="font-editorial text-xl sm:text-2xl text-[#FFFFFF] font-normal leading-tight mb-1.5">
            Working Software
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#9EAAB8] font-light leading-relaxed">
            A system engineered around the workflow.
          </p>
        </div>

      </div>

      {/* Artifact Annotation Footer */}
      <div className="px-5 py-3 bg-[#0F1725] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#9EAAB8]">
        <span>NEXARYA ENGINEERING MODEL</span>
        <span>MUMBAI // INDIA</span>
      </div>
    </div>
  );
}
