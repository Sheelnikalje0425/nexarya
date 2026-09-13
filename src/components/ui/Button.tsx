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
    "group inline-flex items-center justify-center font-mono transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C59A3D]/40";

  const sizeStyles = {
    sm: "text-[11px] px-3.5 py-1.5 gap-2 tracking-[0.08em]",
    md: "text-xs px-5 py-2.5 gap-2.5 tracking-[0.09em]",
    lg: "text-xs sm:text-sm px-6 py-3.5 gap-3 tracking-[0.1em]",
  };

  const variantStyles = {
    primary:
      "bg-[#C59A3D] hover:bg-[#E0BD68] text-[#08101B] font-semibold border border-[#C59A3D] shadow-sm",
    secondary:
      "bg-transparent hover:bg-[#0F1725] text-[#F7F5EF] border border-[#243247] hover:border-[#34445B] shadow-2xs",
    gold:
      "bg-[#C59A3D] hover:bg-[#E0BD68] text-[#08101B] font-semibold border border-[#C59A3D] shadow-sm",
    outline:
      "bg-[#FFFFFF] hover:bg-[#F1EDE3] text-[#17202B] border border-[#DED7C9] hover:border-[#17202B] shadow-xs",
    ghost:
      "bg-transparent hover:bg-black/5 text-[#68717B] hover:text-[#17202B] border border-transparent",
    dark:
      "bg-[#0F1725] hover:bg-[#141F30] text-[#F7F5EF] border border-[#243247] hover:border-[#C59A3D]/50",
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
          size={13}
          className={cn(
            "transition-transform duration-200 group-hover:translate-x-1 shrink-0",
            variant === "primary" || variant === "gold" ? "text-[#08101B]" : "text-[#C59A3D]"
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
