import React from "react";
import { Link } from "react-router-dom";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function BrandLogo({ size = "md", showTagline = true }: BrandLogoProps) {
  const emblemSizes = {
    sm: "w-6 h-4.5",
    md: "w-7.5 h-5.5",
    lg: "w-9.5 h-7",
  };

  return (
    <Link to="/" className="group flex items-center gap-3 select-none focus:outline-none">
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src="/brand/nexarya-emblem.png"
          alt="NEXARYA Emblem"
          className={`${emblemSizes[size]} object-contain`}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-tech text-sm sm:text-base font-bold tracking-[0.2em] text-[#0E1720] group-hover:text-[#B58B1E] transition-colors duration-200">
            NEXARYA
          </span>
        </div>
        {showTagline && (
          <span className="font-tech text-[8.5px] tracking-[0.24em] text-[#6B7885] -mt-0.5 uppercase">
            BEYOND BUILD
          </span>
        )}
      </div>
    </Link>
  );
}
