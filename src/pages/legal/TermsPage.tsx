import React from "react";
import SEOHead from "@/components/seo/SEOHead";

export default function TermsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title="Terms of Service | NEXARYA"
        description="NEXARYA's terms of service, engagement structure, intellectual property ownership, and client agreements."
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="mb-12">
          <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
            LEGAL // TERMS OF SERVICE
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] mt-2 mb-3">
            Terms of Service
          </h1>
          <div className="font-tech text-xs text-[#8E9CA8]">
            Last Updated: August 2026 • Version 2.0
          </div>
        </div>

        <div className="p-8 sm:p-12 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.06)] space-y-8 font-sans text-sm text-[#5C6975] font-light leading-relaxed">
          <section>
            <h2 className="font-editorial text-2xl text-[#0E1720] mb-3">1. Engagement Structure</h2>
            <p>
              NEXARYA provides software engineering, cloud architecture, and technical advisory services. Individual projects are executed under formal Statements of Work (SOW) specifying milestone deliverables, acceptance criteria, and timelines.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-[#0E1720] mb-3">2. Ownership of Deliverables</h2>
            <p>
              Upon receipt of agreed milestone payments, all intellectual property, source code, database structures, and digital assets created specifically for the client are assigned 100% to the client.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-[#0E1720] mb-3">3. Standard Warranty</h2>
            <p>
              Fixed-scope software builds include a standard 30-day post-launch warranty covering bug remediation and operational defects directly attributable to the delivered code.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-[#0E1720] mb-3">4. Governing Law</h2>
            <p>
              These terms and associated project agreements are governed by the laws of India, with jurisdiction in Mumbai.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
