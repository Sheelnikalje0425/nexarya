import React from "react";
import SEOHead from "@/components/seo/SEOHead";
import Hero from "@/components/hero/Hero";
import SelectedWork from "@/components/work/SelectedWork";
import EngineeringSection from "@/components/engineering/EngineeringSection";
import Capabilities from "@/components/capabilities/Capabilities";
import LeadershipTeam from "@/components/team/LeadershipTeam";
import TestimonialSpotlight from "@/components/testimonials/TestimonialSpotlight";
import StartSomething from "@/components/cta/StartSomething";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="NEXARYA — Software Engineering Studio & Digital Products"
        description="We design and build web applications, internal systems and digital platforms around the way your business actually operates."
      />

      {/* 01. LOCKED: Hero (Approved Editorial Workbench Layout) */}
      <Hero />

      {/* 02. LOCKED: Section 2: Selected Work (Editorial Engineering Case Files) */}
      <SelectedWork />

      {/* 03. LOCKED: Section 3: Engineering (From business complexity to working software) */}
      <EngineeringSection />

      {/* 04. LOCKED: Section 4: Capabilities (Systems designed around the work) */}
      <Capabilities />

      {/* 05. LOCKED: Section 5: People & Co-Founders (Built by people who understand the work) */}
      <LeadershipTeam />

      {/* 06. LOCKED: Section 6: Proof & Client Feedback (Built with clients, not just for them) */}
      <TestimonialSpotlight />

      {/* 07. SECTION 7: Start A Project (Let's build the right system for the work) */}
      <StartSomething />
    </>
  );
}

