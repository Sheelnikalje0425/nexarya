import React from "react";
import { ENGINEERING_SIGNALS } from "@/lib/constants/navigation";

export default function EngineeringSignal() {
  return (
    <section className="relative w-full border-y border-[#DCD6CA] bg-[#FAF8F5] select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-3.5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
          
          {/* Signal Indicator */}
          <div className="flex items-center gap-2.5 shrink-0 pr-6 border-b md:border-b-0 md:border-r border-[#DCD6CA] pb-2 md:pb-0 w-full md:w-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-tech text-[10.5px] tracking-[0.2em] text-[#0E1720] font-semibold uppercase">
              STUDIO CAPABILITIES
            </span>
          </div>

          {/* Signal Items Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full flex-1">
            {ENGINEERING_SIGNALS.map((signal) => (
              <div key={signal.label} className="flex flex-col group">
                <span className="font-sans text-xs font-semibold text-[#0E1720] group-hover:text-[#B58B1E] transition-colors duration-200">
                  {signal.label}
                </span>
                <span className="font-tech text-[9.5px] tracking-[0.12em] text-[#5C6975] mt-0.5">
                  {signal.sub}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
