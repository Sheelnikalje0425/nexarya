import React from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}

export default function RevealOnScroll({
  children,
  className = "",
}: RevealOnScrollProps) {
  return (
    <div className={`transition-all duration-300 ease-out ${className}`}>
      {children}
    </div>
  );
}
