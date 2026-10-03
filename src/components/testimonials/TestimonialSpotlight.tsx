import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { api, type Testimonial } from "@/lib/api";

interface TestimonialSlide {
  quote: string;
  clientName: string;
  designation: string;
  company: string;
  project: string;
  projectSlug?: string;
  rating: number;
}

const DEFAULT_SPOTLIGHT_SLIDE: TestimonialSlide = {
  quote: "Nexarya took our fragmented, manual concession approval processes and engineered a reliable, role-governed platform. Their architectural discipline and milestone delivery made a complex institutional rollout predictable and verifiable.",
  clientName: "RAJESH SHARMA",
  designation: "Head of Digital Infrastructure",
  company: "Western Transit & Education Consortium",
  project: "Railway Concession Management System",
  projectSlug: "railway-concession-management",
  rating: 5,
};

function mapTestimonialToSlide(t: Testimonial): TestimonialSlide {
  const isRailway =
    t.project?.toLowerCase().includes("railway") ||
    t.project?.toLowerCase().includes("concession") ||
    t.reference_id === "NXN-FB-2026-0001";

  const isStemfusion =
    t.project?.toLowerCase().includes("stemfusion");

  const isTelemetry =
    t.project?.toLowerCase().includes("telemetry") ||
    t.project?.toLowerCase().includes("propulsion");

  let projectSlug: string | undefined = undefined;
  if (isRailway) projectSlug = "railway-concession-management";
  else if (isStemfusion) projectSlug = "stemfusion";
  else if (isTelemetry) projectSlug = "telemetry-core-engine";

  return {
    quote: t.quote || DEFAULT_SPOTLIGHT_SLIDE.quote,
    clientName: (t.client_name || DEFAULT_SPOTLIGHT_SLIDE.clientName).toUpperCase(),
    designation: t.designation || "",
    company: t.company || "",
    project: t.project || "Custom Software Engineering",
    projectSlug,
    rating: typeof t.rating === "number" && t.rating > 0 ? t.rating : 5,
  };
}

interface TestimonialSpotlightProps {
  quote?: string;
  clientName?: string;
  designation?: string;
  company?: string;
  project?: string;
  projectSlug?: string;
}

export default function TestimonialSpotlight({
  quote: propQuote,
  clientName: propClientName,
  designation: propDesignation,
  company: propCompany,
  project: propProject,
  projectSlug: propProjectSlug,
}: TestimonialSpotlightProps) {
  const isCustom = Boolean(propQuote || propClientName);

  const [slides, setSlides] = useState<TestimonialSlide[]>(() => {
    if (isCustom) {
      return [
        {
          quote: propQuote || DEFAULT_SPOTLIGHT_SLIDE.quote,
          clientName: (propClientName || DEFAULT_SPOTLIGHT_SLIDE.clientName).toUpperCase(),
          designation: propDesignation || DEFAULT_SPOTLIGHT_SLIDE.designation,
          company: propCompany || DEFAULT_SPOTLIGHT_SLIDE.company,
          project: propProject || DEFAULT_SPOTLIGHT_SLIDE.project,
          projectSlug: propProjectSlug !== undefined ? propProjectSlug : DEFAULT_SPOTLIGHT_SLIDE.projectSlug,
          rating: 5,
        },
      ];
    }
    return [DEFAULT_SPOTLIGHT_SLIDE];
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    if (isCustom) return;

    let isMounted = true;
    api.getTestimonials()
      .then((res) => {
        if (!isMounted || !res.testimonials || res.testimonials.length === 0) return;

        // Sort: featured = 1 first, then keep server response order
        const sorted = [...res.testimonials].sort((a, b) => {
          const aFeatured = a.featured === 1 || a.featured === true ? 1 : 0;
          const bFeatured = b.featured === 1 || b.featured === true ? 1 : 0;
          return bFeatured - aFeatured;
        });

        const mappedSlides = sorted.map(mapTestimonialToSlide);
        if (mappedSlides.length > 0) {
          setSlides(mappedSlides);
          setCurrentIndex(0);
        }
      })
      .catch(() => {
        // Fallback remains DEFAULT_SPOTLIGHT_SLIDE silently
      });

    return () => {
      isMounted = false;
    };
  }, [isCustom]);

  const goToSlide = (nextIndex: number) => {
    if (nextIndex === currentIndex || slides.length <= 1) return;
    setFadeState("out");
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setFadeState("in");
    }, 200);
  };

  const handlePrev = () => {
    const next = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(next);
  };

  const handleNext = () => {
    const next = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (slides.length <= 1) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  const currentSlide = slides[currentIndex] || DEFAULT_SPOTLIGHT_SLIDE;

  return (
    <section
      id="feedback"
      data-section="testimonials"
      onKeyDown={handleKeyDown}
      tabIndex={slides.length > 1 && !isCustom ? 0 : undefined}
      className="py-18 sm:py-22 lg:py-26 bg-[#F8F5EE] border-b border-[#DED7C9] text-[#17202B] select-none focus:outline-none"
      aria-label="Client Feedback and Proof"
      aria-roledescription={slides.length > 1 ? "carousel" : undefined}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ========================================================================= */}
        {/* MOBILE VIEW: Focused Editorial Testimonial (lg:hidden)                    */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
              <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                Client Feedback
              </span>
            </div>

            {slides.length > 1 && !isCustom && (
              <span className="font-sans text-xs text-[#141B26] font-semibold px-2.5 py-0.5 border border-[#E3DDCF] bg-[#FFFFFF]">
                {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            )}
          </div>

          <div
            className={`transition-all duration-300 ease-in-out motion-reduce:transition-none ${
              fadeState === "in" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
            }`}
          >
            <blockquote className="font-editorial text-2xl sm:text-3xl text-[#141B26] leading-[1.3] font-normal whitespace-pre-line">
              &ldquo;{currentSlide.quote}&rdquo;
            </blockquote>

            <cite className="not-italic block pt-4 border-t border-[#E3DDCF] mt-5">
              <div className="font-sans text-base text-[#141B26] font-semibold">
                {currentSlide.clientName}
              </div>
              <div className="font-sans text-sm text-[#4A5363] mt-0.5">
                {currentSlide.designation}
                {currentSlide.designation && currentSlide.company ? ", " : ""}
                <span className="text-[#141B26] font-medium">{currentSlide.company}</span>
              </div>

              {currentSlide.projectSlug && (
                <div className="pt-3 mt-3 border-t border-[#E3DDCF]">
                  <Link
                    to={`/work/${currentSlide.projectSlug}`}
                    className="inline-flex items-center gap-1.5 font-sans text-xs text-[#141B26] hover:text-[#765406] font-semibold transition-colors"
                  >
                    <span>Read case study</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              )}
            </cite>
          </div>

          {/* Mobile Navigation Controls */}
          {slides.length > 1 && !isCustom && (
            <div className="pt-4 border-t border-[#E3DDCF] flex items-center justify-between gap-3">
              <div className="font-sans text-xs text-[#4A5363] truncate max-w-[170px]">
                {currentSlide.project}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                  className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center border border-[#E3DDCF] hover:border-[#141B26] bg-[#FFFFFF] text-[#141B26] active:bg-[#F1EDE3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] cursor-pointer"
                >
                  <ArrowLeft size={14} />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                  className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center border border-[#E3DDCF] hover:border-[#141B26] bg-[#FFFFFF] text-[#141B26] active:bg-[#F1EDE3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] cursor-pointer"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Split Editorial & Quote Layout (hidden lg:grid)             */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Section Tag & Editorial Context */}
          <div className="lg:col-span-4">
            <RevealOnScroll>
              {/* Section Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] sm:text-[13px] tracking-wider text-[#765406] uppercase font-semibold">
                  Client Feedback
                </span>
              </div>

              {/* Section Headline */}
              <h2 className="font-editorial text-balance text-4xl sm:text-5xl lg:text-6xl text-[#141B26] leading-[1.05] tracking-[-0.03em] mb-4 font-normal">
                Built with clients, <br />
                <span className="italic font-normal">not just for them.</span>
              </h2>

              <p className="font-sans text-base text-[#4A5363] font-light leading-relaxed mb-6">
                Direct partnership from initial architecture to production delivery.
              </p>

              {/* Verified Engagement Reference */}
              <div className="pt-4 border-t border-[#E3DDCF] text-xs font-sans">
                <span className="text-[#765406] uppercase font-semibold block text-[11px] mb-1">Project Engagement</span>
                <div className="text-[#141B26] font-semibold text-sm">{currentSlide.project}</div>
                {currentSlide.company && (
                  <div className="text-[#4A5363] text-xs mt-0.5">{currentSlide.company}</div>
                )}
              </div>

              {/* Desktop Slider Controls */}
              {slides.length > 1 && !isCustom && (
                <div className="mt-8 pt-6 border-t border-[#E3DDCF] flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous Testimonial"
                    className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center border border-[#E3DDCF] hover:border-[#141B26] hover:bg-[#FFFFFF] text-[#141B26] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                  </button>

                  <span className="font-sans text-xs text-[#141B26] select-none px-2 font-semibold">
                    {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next Testimonial"
                    className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center border border-[#E3DDCF] hover:border-[#141B26] hover:bg-[#FFFFFF] text-[#141B26] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] cursor-pointer"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </RevealOnScroll>
          </div>

          {/* RIGHT COLUMN: Strong Editorial Pull Quote */}
          <div className="lg:col-span-8 lg:border-l lg:border-[#E3DDCF] lg:pl-10 xl:pl-14">
            <RevealOnScroll delayMs={100}>
              <div
                className={`transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                  fadeState === "in" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                }`}
              >
                {/* Large Editorial Quote */}
                <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#141B26] leading-[1.28] tracking-[-0.02em] mb-7 font-normal whitespace-pre-line">
                  &ldquo;{currentSlide.quote}&rdquo;
                </blockquote>

                {/* Client Attribution */}
                <cite className="not-italic block pt-5 border-t border-[#E3DDCF]">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                    <div>
                      <div className="font-sans text-[16px] text-[#141B26] font-semibold">
                        {currentSlide.clientName}
                      </div>
                      <div className="font-sans text-xs text-[#4A5363] mt-0.5">
                        {currentSlide.designation}
                        {currentSlide.designation && currentSlide.company ? ", " : ""}
                        <span className="text-[#141B26] font-medium">{currentSlide.company}</span>
                      </div>
                    </div>

                    {currentSlide.projectSlug && (
                      <Link
                        to={`/work/${currentSlide.projectSlug}`}
                        className="inline-flex items-center gap-1.5 font-sans text-xs text-[#141B26] hover:text-[#765406] font-semibold transition-colors shrink-0"
                      >
                        <span>Read case study</span>
                        <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                </cite>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
