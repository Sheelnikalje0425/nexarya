import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import { ArrowRight } from "@/components/ui/Icons";
import { api } from "@/lib/api";
import { INITIAL_SERVICES } from "@/lib/constants/initialData";

export default function SolutionsListPage() {
  const [services, setServices] = useState<any[]>(INITIAL_SERVICES);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getServices()
      .then((data) => {
        if (data?.services?.length > 0) {
          setServices(data.services);
        }
      })
      .catch((err) => {
        console.error("Failed to load services:", err);
      });
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title="Engineering Solutions & Capabilities | NEXARYA"
        description="Core engineering disciplines: Custom Web Applications, Operations & Business Systems, APIs & Data Rails, and Cloud Infrastructure."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
            <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
              ENGINEERING DISCIPLINES
            </span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#0E1720] leading-[1.06] tracking-[-0.025em] mb-6">
            Engineering capabilities <br />
            <span className="italic font-normal">built for reliability.</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#5C6975] font-light leading-relaxed">
            We partner with organizations to design, architect, and construct high-performance digital products and mission-critical software systems.
          </p>
        </div>

        {/* 8-Item Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => (
            <div
              key={srv.slug}
              className="group relative flex flex-col justify-between p-8 sm:p-10 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.06)] hover:border-[#0E1720] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#EAE5DB]">
                  <span className="font-tech text-xs tracking-[0.2em] text-[#0E1720] font-bold">
                    {srv.number}
                  </span>
                  <span className="font-tech text-[10px] tracking-[0.16em] text-[#5C6975] uppercase px-2.5 py-0.5 border border-[#DCD6CA] bg-[#FAF8F5]">
                    DISCIPLINE
                  </span>
                </div>

                <h2 className="font-editorial text-2xl sm:text-3xl text-[#0E1720] group-hover:text-[#B58B1E] transition-colors duration-300 leading-snug mb-3">
                  {srv.title}
                </h2>

                <p className="font-sans text-xs sm:text-sm text-[#5C6975] leading-relaxed font-light mb-6">
                  {srv.short_desc}
                </p>

                {/* Capabilities tags */}
                <div className="space-y-2 mb-8 p-4 bg-[#FAF8F5] border border-[#EAE5DB]">
                  {srv.capabilities?.slice(0, 3).map((cap: string) => (
                    <div key={cap} className="flex items-start gap-2 text-xs font-sans text-[#5C6975]">
                      <span className="text-[#0E1720] mt-0.5">▪</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#EAE5DB] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {srv.tech_stack?.slice(0, 3).map((tech: string) => (
                    <span key={tech} className="font-tech text-[9.5px] text-[#5C6975] px-2 py-0.5 bg-[#FAF8F5] border border-[#EAE5DB]">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/solutions/${srv.slug}`}
                  className="inline-flex items-center gap-1.5 font-tech text-xs tracking-[0.14em] uppercase text-[#0E1720] hover:text-[#B58B1E] font-semibold transition-colors duration-200"
                >
                  <span>Specification</span>
                  <ArrowRight size={13} className="text-[#0E1720] transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
