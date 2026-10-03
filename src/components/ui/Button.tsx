import React from "react";
import { ArrowRight } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "ghost" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  showArrow = true,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center font-sans font-semibold transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] focus-visible:ring-offset-2";

  const sizeStyles = {
    sm: "text-[13px] min-h-[38px] px-3.5 py-1.5 gap-2 tracking-normal",
    md: "text-[15px] min-h-[44px] px-5 py-2.5 gap-2.5 tracking-normal",
    lg: "text-base min-h-[48px] px-6 py-3 gap-3 tracking-normal",
  };

  const variantStyles = {
    primary:
      "bg-[#D4A72C] hover:bg-[#E0BD68] text-[#141B26] font-semibold border border-[#D4A72C] shadow-xs",
    secondary:
      "bg-[#0A1117] hover:bg-[#141F30] text-[#F8F5EE] border border-[#0A1117] shadow-xs",
    gold:
      "bg-[#D4A72C] hover:bg-[#E0BD68] text-[#141B26] font-semibold border border-[#D4A72C] shadow-xs",
    outline:
      "bg-transparent hover:bg-[#141B26]/5 text-[#141B26] border border-[#141B26] shadow-xs",
    ghost:
      "bg-transparent hover:bg-black/5 text-[#4A5363] hover:text-[#141B26] border border-transparent",
    dark:
      "bg-[#0A1117] hover:bg-[#141F30] text-[#F8F5EE] border border-[#243247] hover:border-[#D4A72C]/50 shadow-xs",
  };

  const combinedStyles = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={14}
          className={cn(
            "transition-transform duration-200 group-hover:translate-x-1 shrink-0",
            variant === "primary" || variant === "gold" ? "text-[#141B26]" : ""
          )}
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {content}
    </button>
  );
}
