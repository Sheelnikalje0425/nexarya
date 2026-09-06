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
    "group inline-flex items-center justify-center font-tech transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#0E1720]/40";

  const sizeStyles = {
    sm: "text-[11px] px-3.5 py-1.5 gap-2 tracking-[0.08em]",
    md: "text-xs px-5 py-2.5 gap-2.5 tracking-[0.09em]",
    lg: "text-xs sm:text-sm px-6 py-3.5 gap-3 tracking-[0.1em]",
  };

  const variantStyles = {
    primary:
      "bg-[#0E1720] hover:bg-[#1A2530] text-[#FFFFFF] font-medium border border-[#0E1720] shadow-sm",
    secondary:
      "bg-[#FFFFFF] hover:bg-[#F4EFE6] text-[#0E1720] hover:text-[#0E1720] border border-[#DCD6CA] hover:border-[#0E1720] shadow-2xs",
    gold:
      "bg-[#D4A72C] hover:bg-[#C09420] text-[#0E1720] font-semibold border border-[#D4A72C] shadow-sm",
    outline:
      "bg-transparent text-[#0E1720] hover:text-[#0E1720] border border-[#DCD6CA] hover:border-[#0E1720] hover:bg-[#FFFFFF]/60",
    ghost:
      "bg-transparent hover:bg-[#0E1720]/5 text-[#3A4753] hover:text-[#0E1720] border border-transparent",
    dark:
      "bg-[#16222E] hover:bg-[#1E2E3E] text-[#F2EFE7] border border-white/10 hover:border-white/25",
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
            variant === "primary" ? "text-[#D4A72C]" : variant === "gold" ? "text-[#0E1720]" : "text-[#5C6975]"
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
