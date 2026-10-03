import React from "react";
import SEOHead from "@/components/seo/SEOHead";
import Hero from "@/components/hero/Hero";
import SelectedWork from "@/components/work/SelectedWork";
import Capabilities from "@/components/capabilities/Capabilities";
import EngineeringSection from "@/components/engineering/EngineeringSection";
import TestimonialSpotlight from "@/components/testimonials/TestimonialSpotlight";
import HomeInsights from "@/components/insights/HomeInsights";
import StartSomething from "@/components/cta/StartSomething";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Nexarya — Software Engineering Studio & Digital Products"
        description="We design and build custom web applications, internal systems, and digital platforms around the way your business actually operates."
      />

      {/* 01. Hero */}
      <Hero />

      {/* 02. Selected Work (Real Work) */}
      <SelectedWork />

      {/* 03. What We Build (Capabilities) */}
      <Capabilities />

      {/* 04. How We Work (Engineering Process) */}
      <EngineeringSection />

      {/* 05. Client Proof (Dynamic Testimonial Spotlight) */}
      <TestimonialSpotlight />

      {/* 06. Insights Preview */}
      <HomeInsights />

      {/* 07. Final CTA */}
      <StartSomething />
    </>
  );
}
