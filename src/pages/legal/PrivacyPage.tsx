import React from "react";
import SEOHead from "@/components/seo/SEOHead";

export default function PrivacyPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title="Privacy Policy | NEXARYA"
        description="NEXARYA's data privacy policy, confidentiality standards, and intellectual property protection framework."
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="mb-12">
          <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
            LEGAL // DATA PRIVACY
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] mt-2 mb-3">
            Privacy Policy
          </h1>
          <div className="font-tech text-xs text-[#8E9CA8]">
            Last Updated: August 2026 • Version 2.0
          </div>
        </div>

        <div className="p-8 sm:p-12 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.06)] space-y-8 font-sans text-sm text-[#5C6975] font-light leading-relaxed">
          <section>
            <h2 className="font-editorial text-2xl text-[#0E1720] mb-3">1. Information Collection</h2>
            <p>
              NEXARYA collects information provided directly by clients and prospective partners during project scoping, including name, corporate email address, telephone numbers, and technical specifications submitted via our project inquiry system.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-[#0E1720] mb-3">2. Intellectual Property & Confidentiality</h2>
            <p>
              All proprietary codebases, database models, business logic specifications, and technical discussions shared with NEXARYA under mutual Non-Disclosure Agreements (NDA) are strictly confidential and never shared with unauthorized third parties or utilized for model training.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-[#0E1720] mb-3">3. Data Retention & Security</h2>
            <p>
              We enforce industry-standard cryptographic storage, parameterized database querying, and role-based access restrictions. Data is retained only as long as necessary to fulfill project deliverables and legal obligations.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-[#0E1720] mb-3">4. Contact Information</h2>
            <p>
              For privacy and data inquiries, please contact our legal compliance desk at <a href="mailto:hello@nexarya.in" className="text-[#0E1720] font-semibold underline underline-offset-4 hover:text-[#B58B1E]">hello@nexarya.in</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
