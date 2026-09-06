import React from "react";
import { Link } from "react-router-dom";
import {
  CodeIcon,
  AiBurstIcon,
  CubeIcon,
  GlobeIcon,
  GridIcon,
  CloudIcon,
  ShieldIcon,
  LinkIcon,
  ArrowRight,
} from "@/components/ui/Icons";
import type { Capability } from "@/lib/constants/capabilities";

interface CapabilitiesCardProps {
  capability: Capability;
}

export default function CapabilitiesCard({ capability }: CapabilitiesCardProps) {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "code":
        return <CodeIcon size={18} className="text-[#D4A72C] group-hover:text-[#F0C75E] transition-colors duration-300" />;
      case "ai":
        return <AiBurstIcon size={18} className="text-[#D4A72C] group-hover:text-[#F0C75E] transition-colors duration-300" />;
      case "cube":
        return <CubeIcon size={18} className="text-[#D4A72C] group-hover:text-[#F0C75E] transition-colors duration-300" />;
      case "globe":
        return <GlobeIcon size={18} className="text-[#D4A72C] group-hover:text-[#F0C75E] transition-colors duration-300" />;
      case "grid":
        return <GridIcon size={18} className="text-[#D4A72C] group-hover:text-[#F0C75E] transition-colors duration-300" />;
      case "cloud":
        return <CloudIcon size={18} className="text-[#D4A72C] group-hover:text-[#F0C75E] transition-colors duration-300" />;
      case "shield":
        return <ShieldIcon size={18} className="text-[#D4A72C] group-hover:text-[#F0C75E] transition-colors duration-300" />;
      case "link":
        return <LinkIcon size={18} className="text-[#D4A72C] group-hover:text-[#F0C75E] transition-colors duration-300" />;
      default:
        return null;
    }
  };

  return (
    <Link
      to={`/solutions/${capability.slug}`}
      className="group relative flex flex-col justify-between p-6 sm:p-7 bg-[#070D12]/95 hover:bg-[#0A1117] transition-all duration-300 select-none w-full block border-transparent hover:border-[#D4A72C]/30 focus:outline-none"
    >
      {/* Top Header: Number and Icon */}
      <div>
        <div className="flex items-center justify-between mb-5 sm:mb-6 w-full">
          <span className="font-tech text-xs tracking-[0.2em] text-[#D4A72C] font-medium group-hover:translate-x-0.5 transition-transform duration-200">
            {capability.number}
          </span>
          <div className="p-1.5 rounded bg-white/[0.04] border border-white/10 group-hover:border-[#D4A72C]/40 group-hover:bg-[#D4A72C]/10 transition-colors duration-300 flex items-center justify-center shrink-0">
            {renderIcon(capability.icon)}
          </div>
        </div>

        {/* Capability Title */}
        <h3 className="font-editorial text-xl sm:text-2xl text-[#F2EFE7] group-hover:text-[#F0C75E] transition-colors duration-300 leading-snug mb-2 sm:mb-3">
          {capability.title}
        </h3>
      </div>

      {/* Description & Footer Arrow */}
      <div>
        <p className="font-sans text-xs sm:text-[13px] text-[#A7A9A8] group-hover:text-[#d0d3d2] leading-relaxed font-light mt-2 mb-4">
          {capability.description}
        </p>

        <div className="flex items-center gap-1.5 font-tech text-[10px] text-[#6F7475] group-hover:text-[#D4A72C] transition-colors duration-200 uppercase tracking-wider pt-2 border-t border-white/5">
          <span>Explore Spec</span>
          <ArrowRight size={12} className="text-[#D4A72C] transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
