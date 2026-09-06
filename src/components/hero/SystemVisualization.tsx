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
      className="w-full max-w-[560px] mx-auto lg:ml-auto bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.06)] overflow-hidden select-none"
    >
      {/* Docket Header */}
      <div className="px-5 py-3.5 bg-[#FAF8F5] border-b border-[#DCD6CA] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C]" />
          <span className="font-mono text-[10px] sm:text-[11px] text-[#0E1720] uppercase tracking-[0.16em] font-semibold">
            FIGURE 0.1 // SYSTEM SYNTHESIS
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#5C6975] uppercase tracking-wider">
          ENGINEERING PARADIGM
        </span>
      </div>

      {/* Three-Stage Visualization Body */}
      <div className="p-6 sm:p-7 space-y-4 bg-[#FFFFFF]">
        
        {/* STAGE 01: WORKFLOW */}
        <div className="p-4 sm:p-4.5 bg-[#FAF8F5] border border-[#EAE5DB] hover:border-[#DCD6CA] transition-colors rounded-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] text-[#8C6D1F] tracking-[0.18em] uppercase font-semibold">
              STAGE 01 // WORKFLOW
            </span>
            <span className="font-mono text-[9px] text-[#8E9CA8] uppercase tracking-wider">
              INPUT REALITY
            </span>
          </div>
          <h3 className="font-editorial text-lg sm:text-xl text-[#0E1720] font-normal leading-snug mb-2.5">
            Complex operational reality.
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {["WORKFLOW", "OPERATIONS", "HANDOFFS", "RULES", "VALIDATION"].map((label) => (
              <span
                key={label}
                className="font-mono text-[9px] px-2 py-0.5 bg-[#FFFFFF] text-[#5C6975] border border-[#EAE5DB] uppercase tracking-wider"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Downward Transition Connector 1 */}
        <div className="flex items-center justify-center -my-1">
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#8C6D1F]">
            <span className="h-3 w-px bg-[#DCD6CA]" />
            <span className="text-xs">↓</span>
            <span className="h-3 w-px bg-[#DCD6CA]" />
          </div>
        </div>

        {/* STAGE 02: STRUCTURE */}
        <div className="p-4 sm:p-4.5 bg-[#FAF8F5] border border-[#EAE5DB] hover:border-[#DCD6CA] transition-colors rounded-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] text-[#8C6D1F] tracking-[0.18em] uppercase font-semibold">
              STAGE 02 // STRUCTURE
            </span>
            <span className="font-mono text-[9px] text-[#8E9CA8] uppercase tracking-wider">
              DOMAIN MODEL
            </span>
          </div>
          <h3 className="font-editorial text-lg sm:text-xl text-[#0E1720] font-normal leading-snug mb-2.5">
            Rules, relationships and system boundaries.
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {["BOUNDARIES", "RELATIONSHIPS", "STATES", "RULES"].map((label) => (
              <span
                key={label}
                className="font-mono text-[9px] px-2 py-0.5 bg-[#FFFFFF] text-[#5C6975] border border-[#EAE5DB] uppercase tracking-wider"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Downward Transition Connector 2 */}
        <div className="flex items-center justify-center -my-1">
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#8C6D1F]">
            <span className="h-3 w-px bg-[#DCD6CA]" />
            <span className="text-xs">↓</span>
            <span className="h-3 w-px bg-[#DCD6CA]" />
          </div>
        </div>

        {/* STAGE 03: SOFTWARE */}
        <div className="p-4 sm:p-5 bg-[#0E1720] text-[#FAF7F2] border border-[#0E1720] rounded-xs shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] text-[#D4A72C] tracking-[0.18em] uppercase font-semibold">
              STAGE 03 // SOFTWARE
            </span>
            <span className="font-mono text-[9px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              DEPLOYED
            </span>
          </div>
          <h3 className="font-editorial text-xl sm:text-2xl text-[#FFFFFF] font-normal leading-tight mb-1.5">
            Working Software
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#A7B4C2] font-light leading-relaxed">
            A system engineered around the workflow.
          </p>
        </div>

      </div>

      {/* Artifact Annotation Footer */}
      <div className="px-5 py-3 bg-[#FAF8F5] border-t border-[#DCD6CA] flex items-center justify-between text-[10px] font-mono text-[#5C6975]">
        <span>NEXARYA ENGINEERING MODEL</span>
        <span>MUMBAI // INDIA</span>
      </div>
    </div>
  );
}
