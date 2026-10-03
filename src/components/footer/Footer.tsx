import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/navigation/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-[#08101B] text-[#B9C0C9] border-t border-[#1A2638] py-12 select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#1A2638]">
          <div className="space-y-2">
            <BrandLogo size="md" theme="dark" />
            <p className="font-sans text-xs text-[#7F8A99]">
              Software Engineering Studio &middot; Mumbai, India
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 font-sans text-xs sm:text-sm text-[#B9C0C9]">
            <Link to="/work" className="hover:text-[#F8F5EE] transition-colors">
              Work
            </Link>
            <Link to="/solutions" className="hover:text-[#F8F5EE] transition-colors">
              Solutions
            </Link>
            <Link to="/process" className="hover:text-[#F8F5EE] transition-colors">
              Process
            </Link>
            <Link to="/about" className="hover:text-[#F8F5EE] transition-colors">
              About
            </Link>
            <Link to="/insights" className="hover:text-[#F8F5EE] transition-colors">
              Insights
            </Link>
            <Link to="/contact" className="text-[#D2AA4E] hover:text-[#E0BD68] font-medium transition-colors">
              Start a Project &rarr;
            </Link>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#7F8A99]">
          <div>
            &copy; {new Date().getFullYear()} Nexarya. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#B9C0C9] transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-[#B9C0C9] transition-colors">
              Terms
            </Link>
            <a href="mailto:hello@nexarya.in" className="hover:text-[#B9C0C9] transition-colors">
              hello@nexarya.in
            </a>
            <Link to="/admin/login" className="hover:text-[#D2AA4E] transition-colors">
              Client Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
