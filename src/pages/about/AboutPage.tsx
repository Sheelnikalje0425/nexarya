import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import BrandLogo from "@/components/navigation/BrandLogo";
import LeadershipTeam from "@/components/team/LeadershipTeam";
import { ArrowRight, StarIcon } from "@/components/ui/Icons";
import { api, type Testimonial } from "@/lib/api";

const PRINCIPLES = [
  {
    number: "01",
    title: "Purpose-Built Solutions",
    desc: "We do not believe in one-size-fits-all templates or premature abstractions. Every database schema, API route, and user interaction is architected specifically around the business requirements of the engagement.",
  },
  {
    number: "02",
    title: "Architectural Integrity",
    desc: "Code elegance without structural resilience is debt. We enforce strict typing, comprehensive testing, secure authentication boundaries, and defensive API design across every layer.",
  },
  {
    number: "03",
    title: "Total IP & Code Ownership",
    desc: "When we finish engineering a platform, our clients receive full intellectual property assignment, clean version-controlled repositories, and clear documentation. You own your technology stack completely.",
  },
  {
    number: "04",
    title: "Engineered to Evolve",
    desc: "Software is an ongoing asset, not a static deliverable. We build modular, extensible architectures with automated deployment pipelines that allow seamless iteration post-launch.",
  },
];

const DEFAULT_VERIFIED_FEEDBACK = [
  {
    quote: "Nexarya took our fragmented, manual concession approval processes and engineered a reliable, role-governed platform. Their architectural discipline and milestone delivery made a complex institutional rollout predictable and verifiable.",
    author: "Rajesh Sharma",
    role: "Head of Digital Infrastructure, Western Transit & Education Consortium",
    project: "Railway Concession Management System",
    rating: 5,
  },
];

export default function AboutPage() {
  const location = useLocation();
  const [feedbackList, setFeedbackList] = useState(DEFAULT_VERIFIED_FEEDBACK);

  useEffect(() => {
    let isMounted = true;
    api.getTestimonials()
      .then((res) => {
        if (!isMounted || !res.testimonials || res.testimonials.length === 0) return;
        const mapped = res.testimonials.map((t: Testimonial) => {
          const roleParts = [t.designation, t.company].filter(Boolean);
          return {
            quote: t.quote,
            author: t.client_name,
            role: roleParts.length > 0 ? roleParts.join(", ") : "Verified Partner",
            project: t.project || "Custom Software Engineering",
            rating: typeof t.rating === "number" && t.rating > 0 ? t.rating : 5,
          };
        });
        setFeedbackList(mapped);
      })
      .catch(() => {
        // Retain fallback defaults
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const cleanHash = location.hash.replace("#", "");
      const el = document.getElementById(cleanHash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.hash]);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8F5EE] min-h-screen select-none">
      <SEOHead
        title="About NEXARYA | Software Engineering Studio & Digital Products"
        description="Learn about NEXARYA's engineering philosophy, mission, core principles, leadership, and verified client feedback headquartered in Mumbai, India."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header / Studio Overview */}
        <section id="overview" className="scroll-mt-32">
          <RevealOnScroll>
            <div className="max-w-3xl mb-16 sm:mb-20">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#17202B]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#394352] uppercase font-semibold">
                  STUDIO OVERVIEW
                </span>
              </div>
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#17202B] leading-[1.06] tracking-[-0.025em] mb-6">
                We engineer digital products <br />
                <span className="italic font-normal">beyond the build.</span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#394352] font-light leading-relaxed">
                NEXARYA was established on a single premise: from complex ideas to production-ready software, we design, build, and evolve digital products that move businesses forward.
              </p>
            </div>
          </RevealOnScroll>

          {/* Brand Core Card */}
          <RevealOnScroll>
            <div className="p-8 sm:p-14 bg-[#FFFFFF] border border-[#DED7C9] mb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_12px_40px_rgba(14,23,32,0.06)]">
              <div className="max-w-xl">
                <BrandLogo size="lg" />
                <p className="font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed mt-6">
                  Headquartered in Mumbai, India, NEXARYA partners with forward-thinking enterprises, founders, and public institutions to architect scalable software platforms, custom internal tools, and intelligent systems.
                </p>
              </div>

              <div className="p-6 bg-[#F1EDE3] border border-[#DED7C9] font-mono text-xs space-y-3 shrink-0 w-full md:w-auto">
                <div className="text-[#68717B] uppercase tracking-[0.2em] text-[10px] font-semibold">ORGANIZATION OVERVIEW</div>
                <div className="flex justify-between gap-6 text-[#17202B]">
                  <span className="text-[#394352]">HQ:</span>
                  <span className="font-bold">Mumbai, India</span>
                </div>
                <div className="flex justify-between gap-6 text-[#17202B]">
                  <span className="text-[#394352]">Primary Inquiries:</span>
                  <span className="font-bold">hello@nexarya.in</span>
                </div>
                <div className="flex justify-between gap-6 text-[#17202B]">
                  <span className="text-[#394352]">Operations:</span>
                  <span className="text-emerald-700 font-semibold">● Active Production</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* 4 Pillars Grid (Principles) */}
        <section id="principles" className="mb-20 scroll-mt-32">
          <RevealOnScroll>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#17202B]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#394352] uppercase font-semibold">
                  CORE PRINCIPLES
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#17202B] mt-2">
                Engineering tenets that guide every build.
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRINCIPLES.map((item, idx) => (
              <RevealOnScroll key={item.number} delayMs={idx * 80}>
                <div className="p-8 bg-[#FFFFFF] border border-[#DED7C9] h-full hover:border-[#17202B] transition-colors duration-200">
                  <div className="font-mono text-xs text-[#17202B] font-bold mb-3">{item.number}</div>
                  <h3 className="font-editorial text-2xl text-[#17202B] mb-3">{item.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#394352] leading-relaxed font-light">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Leadership Team / People Behind The System */}
        <div id="people" className="scroll-mt-32">
          <LeadershipTeam />
        </div>

        {/* Client Feedback & Verification Section */}
        <section id="feedback" className="py-16 sm:py-20 border-b border-[#DED7C9] scroll-mt-32">
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#DED7C9] mb-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#17202B]" />
                  <span className="font-mono text-xs tracking-[0.2em] text-[#394352] uppercase font-semibold">
                    CLIENT FEEDBACK
                  </span>
                </div>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-[1.06] tracking-[-0.025em]">
                  Verified feedback from <span className="italic font-normal">active partnerships.</span>
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#394352] max-w-md font-light leading-relaxed">
                Direct testimonials from organizational leaders and engineering collaborators.
              </p>
            </div>

            <div className="max-w-3xl mb-10 space-y-6">
              {feedbackList.map((fb, idx) => (
                <div
                  key={idx}
                  className="p-8 sm:p-12 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_6px_24px_rgba(14,23,32,0.03)] flex flex-col justify-between space-y-6"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-4 text-[#C59A3D]">
                      {[...Array(fb.rating)].map((_, i) => (
                        <StarIcon key={i} size={14} fill="#C59A3D" />
                      ))}
                    </div>
                    <p className="font-editorial text-xl sm:text-2xl text-[#17202B] leading-relaxed italic whitespace-pre-line">
                      &ldquo;{fb.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DED7C9] flex items-center justify-between text-xs">
                    <div>
                      <div className="font-mono text-[11px] font-bold text-[#17202B] uppercase tracking-wider">
                        {fb.author}
                      </div>
                      <div className="font-sans text-[11px] text-[#394352]">
                        {fb.role} • {fb.project}
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2.5 py-1 border border-emerald-200 uppercase font-semibold">
                      VERIFIED
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        {/* Bottom CTA */}
        <RevealOnScroll>
          <div className="p-10 sm:p-16 bg-[#FFFFFF] border border-[#DED7C9] text-center max-w-3xl mx-auto mt-20 shadow-[0_12px_40px_rgba(14,23,32,0.06)]">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#17202B] mb-4">
              Partner with NEXARYA.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#394352] mb-8 font-light max-w-xl mx-auto">
              From technical discovery to continuous production delivery, let&apos;s build something meaningful together.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
