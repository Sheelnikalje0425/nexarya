import React from "react";
import { Link } from "react-router-dom";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  theme?: "dark" | "light";
}

export default function BrandLogo({ size = "md", showTagline = true, theme = "dark" }: BrandLogoProps) {
  const emblemSizes = {
    sm: "w-6 h-4.5",
    md: "w-7.5 h-5.5",
    lg: "w-9.5 h-7",
  };

  const isLight = theme === "light";

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
          <span
            className={`font-mono text-sm sm:text-base font-bold tracking-[0.2em] transition-colors duration-200 ${
              isLight
                ? "text-[#17202B] group-hover:text-[#C59A3D]"
                : "text-[#F7F5EF] group-hover:text-[#E0BD68]"
            }`}
          >
            NEXARYA
          </span>
        </div>
        {showTagline && (
          <span
            className={`font-mono text-[8.5px] tracking-[0.24em] -mt-0.5 uppercase ${
              isLight ? "text-[#68717B]" : "text-[#B9C0C9]"
            }`}
          >
            BEYOND BUILD
          </span>
        )}
      </div>
    </Link>
  );
}
