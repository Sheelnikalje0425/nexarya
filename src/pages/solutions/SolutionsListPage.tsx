import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface RelatedProject {
  name: string;
  href: string;
}

interface Solution {
  num: string;
  id: string;
  title: string;
  headline: string;
  summary: string;
  problem: string;
  systemResponse: string;
  engineering: string;
  relatedWork?: RelatedProject;
}

const SOLUTIONS: Solution[] = [
  {
    num: "01",
    id: "replace-manual-workflows",
    title: "Replace Manual Workflows",
    headline: "Centralized operational platforms that eliminate paper and manual queues.",
    summary: "Eliminate spreadsheets, paper handoffs, and manual queues.",
    problem:
      "Operations rely on disconnected spreadsheets, paper handoffs, and email chains without systematic validation or audit trails.",
    systemResponse:
      "Make each stage of an operational workflow explicit and verifiable with a centralized platform, automated routing, and immutable audit logging.",
    engineering:
      "Domain-driven modeling, relational schema design, role-based authorization gates, and responsive operator consoles.",
    relatedWork: {
      name: "Railway Concession Management System",
      href: "/work/railway-concession-management",
    },
  },
  {
    num: "02",
    id: "build-customer-portal",
    title: "Build a Customer Portal",
    headline: "Secure, intuitive interfaces for client self-service and data exchange.",
    summary: "Give customers a secure place to manage their interactions.",
    problem:
      "Clients and stakeholders rely on repetitive email inquiries and manual touchpoints to track status or access records.",
    systemResponse:
      "Provide a unified, secure self-service portal with real-time status tracking, document exchange, and authenticated communications.",
    engineering:
      "Typed full-stack architecture, token authentication, encrypted asset pipelines, and responsive client consoles.",
    relatedWork: {
      name: "STEMFUSION Platform",
      href: "/work/stemfusion",
    },
  },
  {
    num: "03",
    id: "automate-knowledge-work",
    title: "Automate Knowledge Work",
    headline: "Deterministic pipelines and applied AI to eliminate clerical overhead.",
    summary: "Use automation to reduce repetitive document and data tasks.",
    problem:
      "Skilled teams lose hours to manual document extraction, classification, policy cross-referencing, and data re-entry.",
    systemResponse:
      "Eliminate repetitive clerical steps by combining deterministic validation rules with targeted AI extraction to turn unstructured inputs into clean relational records.",
    engineering:
      "Document intelligence pipelines, schema validation gates, retry queues, and human-in-the-loop review consoles.",
  },
  {
    num: "04",
    id: "unify-disconnected-systems",
    title: "Unify Disconnected Systems",
    headline: "Coherent data rails and API gateways that bridge organizational silos.",
    summary: "Connect fragmented data and processes into a coherent platform.",
    problem:
      "Critical data is fragmented across legacy databases, SaaS tools, and local spreadsheets, causing sync delays and duplicate entry.",
    systemResponse:
      "Connect fragmented data into a single coherent system with automated data reconciliation and real-time integration pipelines.",
    engineering:
      "API gateway architecture, idempotent event queues, bi-directional database synchronization, and health telemetry.",
    relatedWork: {
      name: "Railway Concession Management System",
      href: "/work/railway-concession-management",
    },
  },
  {
    num: "05",
    id: "modernize-existing-application",
    title: "Modernize an Existing Application",
    headline: "Architectural upgrades that restore velocity, speed, and reliability.",
    summary: "Improve architecture, performance, security, and maintainability.",
    problem:
      "Aging codebases suffer from technical debt, slow performance, and brittle architectures that can no longer scale with business needs.",
    systemResponse:
      "Restore development velocity, system speed, and security through zero-downtime architectural modernization.",
    engineering:
      "TypeScript / React modernization, database query optimization, security hardening, and automated CI/CD pipelines.",
  },
  {
    num: "06",
    id: "launch-digital-product",
    title: "Launch a Digital Product",
    headline: "From domain architecture to hardened production release.",
    summary: "Move from concept to production with structured engineering.",
    problem:
      "Translating a new product concept into scalable, production-ready software often falters from architectural ambiguity and execution drag.",
    systemResponse:
      "Move from concept to hardened production release with structured domain modeling, intuitive interfaces, and reliable cloud infrastructure.",
    engineering:
      "Full-stack application architecture, scalable PostgreSQL schemas, payment gateway integration, and production telemetry.",
    relatedWork: {
      name: "STEMFUSION",
      href: "/work/stemfusion",
    },
  },
];

const CAPABILITY_PILLS = [
  { num: "01", name: "CUSTOM SOFTWARE", href: "/solutions/custom-software" },
  { num: "02", name: "AI & AUTOMATION", href: "/solutions/ai-automation" },
  { num: "03", name: "WEB APPLICATIONS", href: "/solutions/web-applications" },
  { num: "04", name: "BUSINESS SYSTEMS", href: "/solutions/business-systems" },
  { num: "05", name: "CLOUD & DEVOPS", href: "/solutions/cloud-devops" },
  { num: "06", name: "QA & TESTING", href: "/solutions/qa-testing" },
  { num: "07", name: "INTEGRATIONS", href: "/solutions/integrations" },
  { num: "08", name: "SAAS PRODUCTS", href: "/solutions/saas" },
];

const METHODOLOGY_STAGES = [
  {
    num: "01",
    name: "UNDERSTAND",
    desc: "Map operational reality, roles, and business rules before writing code.",
  },
  {
    num: "02",
    name: "STRUCTURE",
    desc: "Translate business processes into explicit domain models and schemas.",
  },
  {
    num: "03",
    name: "ENGINEER",
    desc: "Construct strictly-typed frontend, backend, and data architectures.",
  },
  {
    num: "04",
    name: "DELIVER",
    desc: "Deploy hardened software to secured cloud runtimes with telemetry.",
  },
];

export default function SolutionsListPage() {
  const [activeSolutionIdx, setActiveSolutionIdx] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const cleanHash = location.hash.replace("#", "");
      const foundIdx = SOLUTIONS.findIndex((s) => s.id === cleanHash);
      if (foundIdx !== -1) {
        setActiveSolutionIdx(foundIdx);
        const el = document.getElementById(cleanHash) || document.getElementById("solutions-index");
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
          return;
        }
      }
    }
    window.scrollTo(0, 0);
  }, [location.hash]);

  const activeSolution = SOLUTIONS[activeSolutionIdx];

  return (
    <div className="bg-[#F1EDE3] text-[#17202B] min-h-screen select-none">
      <SEOHead
        title="Solutions — Custom Software & Business Systems | NEXARYA"
        description="Explore software solutions for manual workflows, customer portals, automation, disconnected systems, application modernization and digital products."
      />

      {/* ============================================================ */}
      {/* 01. HERO SECTION (Deep Navy #08101B / #0F1725)               */}
      {/* ============================================================ */}
      <section
        id="solutions-hero"
        aria-label="Solutions Overview"
        className="pt-32 sm:pt-36 lg:pt-42 pb-16 sm:pb-20 bg-[#08101B] text-[#F7F5EF] border-b border-[#243247] relative overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <RevealOnScroll>
            {/* Section Tag */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.24em] text-[#C59A3D] uppercase font-semibold">
                01 // BUSINESS-FIRST SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <div className="max-w-4xl mb-6 sm:mb-8">
              <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] leading-[1.04] tracking-[-0.03em] text-[#F7F5EF] font-normal mb-6">
                Software shaped around <br />
                <span className="italic font-normal text-[#E8E3D8]">the work.</span>
              </h1>

              <p className="font-sans text-base sm:text-lg lg:text-[1.2rem] text-[#B9C0C9] max-w-2xl font-light leading-relaxed">
                From manual workflows to disconnected systems, we design and engineer software around the way your business actually operates.
              </p>
            </div>

            {/* Action Triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 mb-10 sm:mb-12">
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-[#C59A3D] hover:bg-[#E0BD68] text-[#0F1725] font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200 text-center min-h-[48px] flex items-center justify-center gap-2"
              >
                <span>START A PROJECT</span>
                <ArrowRight size={13} />
              </Link>
              <Link
                to="/work"
                className="px-6 py-3.5 bg-transparent hover:bg-[#141F30] text-[#F7F5EF] border border-[#243247] font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200 text-center min-h-[48px] flex items-center justify-center"
              >
                <span>VIEW OUR WORK</span>
              </Link>
            </div>

            {/* Restrained Transformation Docket */}
            <div className="pt-5 border-t border-[#243247]/80 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#7F8A99]">
              <div className="flex items-center gap-2">
                <span className="text-[#C59A3D] font-semibold">TRANSFORMATION FLOW:</span>
                <span className="text-[#B9C0C9]">
                  BUSINESS PROBLEM &rarr; WORKFLOW &rarr; SYSTEM MODEL &rarr; SOFTWARE
                </span>
              </div>
              <span className="text-[#C59A3D] text-[10px] uppercase tracking-widest hidden sm:inline">
                06 CORE SOLUTION DOMAINS
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02. VISUAL STORY ANCHOR (Warm Ivory #E8E3D8)                 */}
      {/* ============================================================ */}
      <section
        aria-label="Conceptual Architecture Visual"
        className="py-12 sm:py-16 bg-[#E8E3D8] border-b border-[#DED7C9] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_8px_30px_rgba(15,23,37,0.03)] overflow-hidden">
              {/* Full-Width Large Editorial Photographic Frame */}
              <div className="relative bg-[#08101B] overflow-hidden aspect-[16/10] sm:aspect-[21/9] lg:aspect-[24/10]">
                <picture>
                  <source srcSet="/engineering/engineering-studio-workspace.webp" type="image/webp" />
                  <img
                    src="/engineering/engineering-studio-workspace.jpg"
                    alt="Physical workflow sketches, domain state diagrams, and architectural specifications on an engineering workbench"
                    loading="eager"
                    decoding="async"
                    width="1024"
                    height="576"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                  />
                </picture>
              </div>

              {/* Restrained Architectural Docket Strip */}
              <div className="px-6 py-4 bg-[#F8F5EE] border-t border-[#DED7C9] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#394352]">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                  <span className="text-[#17202B] font-semibold text-[11px] uppercase tracking-wider">
                    CONCEPTUAL ARCHITECTURE
                  </span>
                  <span className="text-[#DED7C9]">//</span>
                  <span className="text-[#394352] text-[11px]">
                    Mapping business logic, state boundaries, and workflow handoffs into formal software models.
                  </span>
                </div>
                <span className="text-[#C59A3D] text-[10px] uppercase tracking-wider font-semibold shrink-0">
                  EDITORIAL EVIDENCE
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03. SOLUTION INDEX & ACTIVE EXPERIENCE (Warm Ivory #F1EDE3) */}
      {/* ============================================================ */}
      <section
        id="solutions-index"
        aria-labelledby="solutions-index-heading"
        className="py-18 sm:py-22 lg:py-26 bg-[#F1EDE3] border-b border-[#DED7C9] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-9 sm:pb-11 border-b border-[#DED7C9] mb-11 sm:mb-14">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                  <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                    02 // SOLUTION DOMAINS
                  </span>
                </div>
                <h2
                  id="solutions-index-heading"
                  className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] text-[#17202B] leading-[1.05] tracking-[-0.03em] font-normal"
                >
                  Engineered around <br className="hidden sm:inline" />
                  <span className="italic font-normal">the operational bottlenecks.</span>
                </h2>
              </div>
              <p className="font-sans text-base sm:text-lg text-[#394352] max-w-md font-light leading-relaxed">
                Select a problem area to understand how we translate business friction into structured, high-performance software.
              </p>
            </div>
          </RevealOnScroll>

          {/* ========================================================================= */}
          {/* DESKTOP SPLIT VIEW: Left 01-06 Navigation List, Right Detailed Card       */}
          {/* ========================================================================= */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left 01-06 Solution Navigation List (5 cols) */}
            <div className="lg:col-span-5 bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_6px_24px_rgba(15,23,37,0.03)] overflow-hidden">
              <div className="px-6 py-3.5 bg-[#E8E3D8]/70 border-b border-[#DED7C9] flex items-center justify-between font-mono text-xs text-[#394352]">
                <span className="font-semibold text-[#17202B]">SOLUTIONS DIRECTORY</span>
                <span>06 AREAS</span>
              </div>

              <div className="divide-y divide-[#DED7C9]">
                {SOLUTIONS.map((sol, idx) => {
                  const isActive = activeSolutionIdx === idx;
                  return (
                    <button
                      key={sol.id}
                      type="button"
                      onClick={() => setActiveSolutionIdx(idx)}
                      className={`w-full text-left px-6 py-4.5 transition-all duration-150 flex items-start justify-between gap-3 group cursor-pointer focus-visible:outline-none focus-visible:bg-[#E8E3D8] ${
                        isActive
                          ? "bg-[#0F1725] text-[#F7F5EF]"
                          : "bg-[#FFFFFF] text-[#17202B] hover:bg-[#F8F5EE]"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-mono text-xs font-bold ${
                              isActive ? "text-[#C59A3D]" : "text-[#C59A3D]"
                            }`}
                          >
                            {sol.num}
                          </span>
                          <span
                            className={`font-mono text-xs font-bold uppercase tracking-wider ${
                              isActive ? "text-[#F7F5EF]" : "text-[#17202B]"
                            }`}
                          >
                            {sol.title}
                          </span>
                        </div>
                        <p
                          className={`font-sans text-xs font-light leading-relaxed pl-7 ${
                            isActive ? "text-[#B9C0C9]" : "text-[#394352]"
                          }`}
                        >
                          {sol.summary}
                        </p>
                      </div>

                      <ArrowRight
                        size={13}
                        className={`shrink-0 mt-1 transition-transform duration-200 ${
                          isActive
                            ? "text-[#C59A3D] translate-x-1"
                            : "text-[#68717B] group-hover:text-[#17202B] group-hover:translate-x-1"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Active Solution Detail Card (7 cols) */}
            <div className="lg:col-span-7 bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_6px_24px_rgba(15,23,37,0.03)] overflow-hidden">
              
              {/* Card Top Bar */}
              <div className="px-6 py-3.5 bg-[#E8E3D8]/70 border-b border-[#DED7C9] flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-[#394352]">
                  <span className="font-bold text-[#17202B]">{activeSolution.num}</span>
                  <span>//</span>
                  <span className="uppercase text-[#C59A3D] font-semibold tracking-wider">
                    {activeSolution.title}
                  </span>
                </div>
                <span className="text-[10px] text-[#68717B] uppercase tracking-widest hidden sm:inline">
                  SOLUTION SPECIFICATION
                </span>
              </div>

              {/* Card Content Body */}
              <div className="p-7 lg:p-10 space-y-7">
                
                {/* Title & Core Headline */}
                <div>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#17202B] font-normal leading-tight mb-2">
                    {activeSolution.title}
                  </h3>
                  <p className="font-editorial text-xl sm:text-2xl text-[#17202B] italic font-normal leading-relaxed">
                    &ldquo;{activeSolution.headline}&rdquo;
                  </p>
                </div>

                {/* Narrative Layer 1: Problem */}
                <div className="pt-4 border-t border-[#DED7C9]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C59A3D] block mb-2 font-semibold">
                    01 // THE OPERATIONAL PROBLEM
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed">
                    {activeSolution.problem}
                  </p>
                </div>

                {/* Narrative Layer 2: System Response */}
                <div className="pt-4 border-t border-[#DED7C9]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C59A3D] block mb-2 font-semibold">
                    02 // THE SYSTEM RESPONSE
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed">
                    {activeSolution.systemResponse}
                  </p>
                </div>

                {/* Narrative Layer 3: Engineering Approach */}
                <div className="pt-4 border-t border-[#DED7C9]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C59A3D] block mb-2 font-semibold">
                    03 // ENGINEERING APPROACH
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed">
                    {activeSolution.engineering}
                  </p>
                </div>

                {/* Compact Verified Related Work Proof */}
                {activeSolution.relatedWork && (
                  <div className="pt-5 border-t border-[#DED7C9] flex items-center justify-between gap-4">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#C59A3D] font-bold block mb-0.5">
                        VERIFIED PROJECT
                      </span>
                      <span className="font-sans text-sm font-semibold text-[#17202B]">
                        {activeSolution.relatedWork.name}
                      </span>
                    </div>
                    <Link
                      to={activeSolution.relatedWork.href}
                      className="font-mono text-xs text-[#17202B] hover:text-[#C59A3D] font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors shrink-0"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight size={11} className="text-[#C59A3D]" />
                    </Link>
                  </div>
                )}

                {/* Footer Actions */}
                <div className="pt-5 border-t border-[#DED7C9] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-[#68717B] uppercase tracking-wider">
                    TAILORED SCOPING SPECIFICATION
                  </span>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1725] hover:bg-[#1A273A] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors min-h-[44px]"
                  >
                    <span>START A PROJECT</span>
                    <ArrowRight size={12} className="text-[#C59A3D]" />
                  </Link>
                </div>

              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* MOBILE VIEW: Compact Index Tabs + Single Active Solution Card             */}
          {/* ========================================================================= */}
          <div className="lg:hidden space-y-4">
            {/* Compact Solution Switcher Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 p-1.5 bg-[#E8E3D8]/70 border border-[#DED7C9]">
              {SOLUTIONS.map((sol, idx) => {
                const isActive = activeSolutionIdx === idx;
                return (
                  <button
                    key={sol.id}
                    type="button"
                    onClick={() => setActiveSolutionIdx(idx)}
                    className={`p-2.5 text-left transition-all duration-150 border cursor-pointer min-h-[48px] ${
                      isActive
                        ? "bg-[#0F1725] text-[#F7F5EF] border-[#0F1725] shadow-xs"
                        : "bg-[#FFFFFF] text-[#17202B] border-[#DED7C9] hover:bg-[#F8F5EE]"
                    }`}
                  >
                    <span className="font-mono text-[10px] font-bold text-[#C59A3D] block">
                      {sol.num}
                    </span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider truncate block">
                      {sol.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Single Active Solution Display Card */}
            <div className="bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_4px_16px_rgba(15,23,37,0.03)] overflow-hidden">
              <div className="px-4 py-2.5 bg-[#E8E3D8]/70 border-b border-[#DED7C9] flex items-center justify-between font-mono text-xs text-[#394352]">
                <span className="font-semibold text-[#17202B] text-[11px]">
                  SOLUTION {activeSolution.num}
                </span>
                <span className="text-[10px] text-[#C59A3D] font-bold uppercase">
                  ACTIVE SPECIFICATION
                </span>
              </div>

              <div className="p-5 space-y-4">
                <h3 className="font-editorial text-2xl text-[#17202B] font-normal leading-tight">
                  {activeSolution.title}
                </h3>
                <p className="font-editorial text-base text-[#17202B] italic font-normal leading-snug">
                  &ldquo;{activeSolution.headline}&rdquo;
                </p>

                <div className="pt-3 border-t border-[#DED7C9]">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C59A3D] block mb-1 font-semibold">
                    01 // PROBLEM
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                    {activeSolution.problem}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DED7C9]">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C59A3D] block mb-1 font-semibold">
                    02 // SYSTEM RESPONSE
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                    {activeSolution.systemResponse}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DED7C9]">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C59A3D] block mb-1 font-semibold">
                    03 // ENGINEERING APPROACH
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                    {activeSolution.engineering}
                  </p>
                </div>

                {activeSolution.relatedWork && (
                  <div className="pt-3 border-t border-[#DED7C9] flex items-center justify-between gap-3">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#C59A3D] font-bold block mb-0.5">
                        VERIFIED PROJECT
                      </span>
                      <span className="font-sans text-xs font-semibold text-[#17202B]">
                        {activeSolution.relatedWork.name}
                      </span>
                    </div>
                    <Link
                      to={activeSolution.relatedWork.href}
                      className="font-mono text-[11px] text-[#17202B] hover:text-[#C59A3D] font-bold uppercase tracking-wider inline-flex items-center gap-1 transition-colors shrink-0"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight size={10} className="text-[#C59A3D]" />
                    </Link>
                  </div>
                )}

                <div className="pt-3 border-t border-[#DED7C9]">
                  <Link
                    to="/contact"
                    className="w-full py-3 bg-[#0F1725] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold text-center flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <span>START A PROJECT</span>
                    <ArrowRight size={12} className="text-[#C59A3D]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 04. METHODOLOGY BRIDGE (Warm Ivory #E8E3D8)                  */}
      {/* ============================================================ */}
      <section
        id="methodology-bridge"
        aria-labelledby="methodology-bridge-heading"
        className="py-16 sm:py-20 bg-[#E8E3D8] border-b border-[#DED7C9] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#DED7C9] mb-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                  <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                    03 // ENGINEERING METHODOLOGY
                  </span>
                </div>
                <h2
                  id="methodology-bridge-heading"
                  className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#17202B] leading-[1.08] tracking-[-0.03em] font-normal"
                >
                  From operational reality to{" "}
                  <span className="italic font-normal">working software.</span>
                </h2>
              </div>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1725] hover:bg-[#1A273A] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors shrink-0 min-h-[44px]"
              >
                <span>VIEW OUR PROCESS</span>
                <ArrowRight size={12} className="text-[#C59A3D]" />
              </Link>
            </div>

            {/* 4 Stage Sequential Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {METHODOLOGY_STAGES.map((st) => (
                <div
                  key={st.num}
                  className="p-5 bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_4px_16px_rgba(15,23,37,0.03)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E8E3D8]">
                      <span className="font-editorial text-2xl text-[#17202B]">
                        {st.num}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#C59A3D] font-semibold">
                        STAGE
                      </span>
                    </div>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#17202B] mb-1.5">
                      {st.name}
                    </h3>
                    <p className="font-sans text-xs text-[#394352] font-light leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 05. CAPABILITIES CONNECTION (Warm Ivory #F8F5EE)             */}
      {/* ============================================================ */}
      <section
        id="capabilities-connection"
        aria-labelledby="capabilities-connection-heading"
        className="py-16 sm:py-20 bg-[#F8F5EE] border-b border-[#DED7C9] select-none"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#DED7C9] mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                  <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                    04 // TECHNICAL CAPABILITIES
                  </span>
                </div>
                <h2
                  id="capabilities-connection-heading"
                  className="font-editorial text-3xl sm:text-4xl text-[#17202B] leading-[1.08] tracking-[-0.03em] font-normal"
                >
                  The engineering disciplines we deploy.
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#394352] max-w-md font-light leading-relaxed">
                Every solution is executed with typed code, clean domain boundaries, and hardened infrastructure.
              </p>
            </div>

            {/* Compact 8-Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {CAPABILITY_PILLS.map((cap) => (
                <Link
                  key={cap.name}
                  to={cap.href}
                  className="p-3.5 bg-[#FFFFFF] border border-[#DED7C9] hover:border-[#C59A3D] hover:bg-[#F1EDE3] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="font-mono text-[11px] font-bold text-[#C59A3D]">
                      {cap.num}
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-[#17202B] uppercase tracking-wider truncate">
                      {cap.name}
                    </span>
                  </div>
                  <ArrowRight
                    size={11}
                    className="text-[#68717B] group-hover:text-[#17202B] group-hover:translate-x-0.5 transition-all shrink-0"
                  />
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 06. FINAL CONVERSION CTA (Deep Navy #08101B / #0F1725)       */}
      {/* ============================================================ */}
      <section
        id="solutions-cta"
        aria-label="Start a Project CTA"
        className="py-18 sm:py-22 lg:py-26 bg-[#08101B] text-[#F7F5EF] relative select-none overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Headline Column */}
            <div className="lg:col-span-7">
              <RevealOnScroll>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                  <span className="font-mono text-xs tracking-[0.22em] text-[#C59A3D] uppercase font-semibold">
                    05 // START A PROJECT
                  </span>
                </div>

                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F7F5EF] leading-[1.05] tracking-[-0.025em] mb-4.5 font-normal">
                  Have a problem that off-the-shelf software <br className="hidden sm:inline" />
                  <span className="italic font-normal text-[#E8E3D8]">doesn't solve?</span>
                </h2>

                <p className="font-sans text-base sm:text-lg text-[#B9C0C9] font-light leading-relaxed max-w-xl">
                  Tell us how the work happens today. We'll help determine what the right system should look like.
                </p>
              </RevealOnScroll>
            </div>

            {/* Right Conversion Card */}
            <div className="lg:col-span-5">
              <RevealOnScroll delayMs={80}>
                <div className="p-7 sm:p-9 bg-[#141F30] border border-[#243247] shadow-[0_12px_40px_rgba(0,0,0,0.35)] space-y-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C59A3D] font-semibold block">
                    DIRECT LEADERSHIP ACCESS
                  </span>

                  <h3 className="font-editorial text-2xl text-[#F7F5EF] font-normal leading-snug">
                    Schedule a technical scoping session.
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#B9C0C9] font-light leading-relaxed">
                    We evaluate your workflow requirements directly to formulate an actionable scoping architecture.
                  </p>

                  <Link
                    to="/contact"
                    className="flex items-center justify-between w-full px-6 py-3.5 bg-[#C59A3D] text-[#0F1725] hover:bg-[#E0BD68] transition-colors duration-200 font-mono text-xs uppercase tracking-wider font-semibold min-h-[48px] group"
                  >
                    <span>START A PROJECT</span>
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <div className="pt-3 border-t border-[#243247] flex items-center justify-between text-xs font-mono text-[#B9C0C9]">
                    <span>DIRECT INQUIRIES:</span>
                    <a
                      href="mailto:hello@nexarya.in"
                      className="text-[#E0BD68] font-semibold hover:text-[#FFFFFF] transition-colors"
                    >
                      hello@nexarya.in
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

