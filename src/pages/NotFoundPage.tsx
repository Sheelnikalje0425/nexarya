import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import Button from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE6] flex items-center justify-center px-6 py-24 select-none">
      <SEOHead
        title="404 — System Not Found | NEXARYA"
        description="The requested route does not exist within the NEXARYA platform."
      />

      <div className="max-w-md w-full text-center p-8 sm:p-12 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.06)] relative">
        <div className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase mb-4 font-semibold">
          SYSTEM NOT FOUND // 404
        </div>

        <h1 className="font-editorial text-5xl sm:text-6xl text-[#0E1720] mb-4">
          Route Not Found
        </h1>

        <p className="font-sans text-xs sm:text-sm text-[#5C6975] font-light leading-relaxed mb-8">
          The requested path could not be located on the server. The route may have been decommissioned or moved.
        </p>

        <div className="flex justify-center">
          <Button href="/" variant="primary" size="md">
            Return to Home
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-[#EAE5DB] font-tech text-[10px] text-[#8E9CA8] uppercase tracking-wider">
          STATUS: 404_NOT_FOUND • SYSTEM: NEXARYA_CORE
        </div>
      </div>
    </div>
  );
}
