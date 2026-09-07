import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Capability {
  num: string;
  title: string;
  tag: string;
  slug: string;
  summary: string;
  problemSolved: string;
  concepts: string[];
  schematicNodes: { label: string; sub: string }[];
  verifiedReference?: { title: string; href: string };
}

const CAPABILITIES: Capability[] = [
  {
    num: "01",
    title: "CUSTOM SOFTWARE",
    tag: "PURPOSE-BUILT SYSTEMS",
    slug: "custom-software",
    summary: "Purpose-built web applications and business systems designed directly around specific operational workflows.",
    problemSolved: "Workflows that don't fit neatly into off-the-shelf software or SaaS templates.",
    concepts: ["Domain-Driven Modeling", "Custom Application Logic", "Relational Data Models", "Tailored Workflows"],
    schematicNodes: [
      { label: "WORKFLOW", sub: "Operational Context" },
      { label: "DOMAIN MODEL", sub: "Core Entity Schema" },
      { label: "APPLICATION", sub: "Purpose-Built Logic" },
      { label: "RUNTIME", sub: "Production System" },
    ],
    verifiedReference: { title: "Railway Concession Management System", href: "/work/railway-concession-management-system" },
  },
  {
    num: "02",
    title: "AI & AUTOMATION",
    tag: "APPLIED AUTOMATION",
    slug: "ai-automation",
    summary: "AI-assisted workflows and practical automation integrated where they provide measurable operational efficiency.",
    problemSolved: "Manual document extraction bottlenecks, repetitive data entry, and procedural validation.",
    concepts: ["Document Parsing", "Structured Extraction", "Assisted Workflows", "Human-in-the-Loop Review"],
    schematicNodes: [
      { label: "INTAKE", sub: "Unstructured Data" },
      { label: "EXTRACTION", sub: "Pattern Parsing" },
      { label: "VALIDATION", sub: "Rule Verification" },
      { label: "STRUCTURED OUTPUT", sub: "Validated Database Record" },
    ],
  },
  {
    num: "03",
    title: "WEB APPLICATIONS",
    tag: "FULL-STACK PLATFORMS",
    slug: "web-applications",
    summary: "Full-stack web applications with responsive interfaces, robust backend services, and structured data stores.",
    problemSolved: "Complex stakeholder portals, interactive digital platforms, and customer-facing software.",
    concepts: ["React Component Architecture", "TypeScript Type Safety", "REST API Design", "Relational Persistence"],
    schematicNodes: [
      { label: "CLIENT UI", sub: "Responsive Web Frontend" },
      { label: "API GATEWAY", sub: "Typed Request Router" },
      { label: "CONTROLLER", sub: "Business Rules Engine" },
      { label: "DATA STORE", sub: "Relational Database" },
    ],
    verifiedReference: { title: "STEMFUSION Education Platform", href: "/work/stemfusion" },
  },
  {
    num: "04",
    title: "BUSINESS SYSTEMS",
    tag: "OPERATIONAL WORKFLOWS",
    slug: "business-systems",
    summary: "Operational software for multi-stakeholder workflows, institutional verification, and administrative management.",
    problemSolved: "Fragmented paper forms, multi-party review queues, and lack of operational audit trails.",
    concepts: ["Multi-Stage Workflows", "Verification Queues", "State Transitions", "Activity Logging"],
    schematicNodes: [
      { label: "SUBMISSION", sub: "Document & Identity Intake" },
      { label: "VERIFICATION", sub: "Review & Eligibility Check" },
      { label: "AUTHORIZATION", sub: "Approval & Sign-Off" },
      { label: "ACTIVITY LOG", sub: "Audit Record" },
    ],
    verifiedReference: { title: "Railway Concession Management System", href: "/work/railway-concession-management-system" },
  },
  {
    num: "05",
    title: "CLOUD & DEVOPS",
    tag: "INFRASTRUCTURE & HOSTING",
    slug: "cloud-devops",
    summary: "Server provisioning, containerized application environments, reverse proxies, and automated deployment pipelines.",
    problemSolved: "Unreliable deployments, slow manual releases, and unmonitored infrastructure.",
    concepts: ["Containerization", "CI/CD Automation", "Reverse Proxy Configuration", "Process Management"],
    schematicNodes: [
      { label: "CODEBASE", sub: "Version Control Push" },
      { label: "BUILD RUNNER", sub: "Typecheck & Bundle" },
      { label: "SERVER HOST", sub: "Nginx & Node.js" },
      { label: "HEALTH CHECK", sub: "Uptime Monitoring" },
    ],
  },
  {
    num: "06",
    title: "QA & TESTING",
    tag: "SYSTEM RELIABILITY",
    slug: "qa-testing",
    summary: "Static typechecking, integration test suites, and cross-viewport responsive verification for resilient software.",
    problemSolved: "Unexpected regressions, broken layouts on mobile viewports, and edge-case application crashes.",
    concepts: ["Static Type Analysis", "Integration Test Suites", "Viewport QA", "Edge-Case Handling"],
    schematicNodes: [
      { label: "TYPECHECK", sub: "Static Analysis" },
      { label: "INTEGRATION", sub: "API & DB Assertions" },
      { label: "VIEWPORT QA", sub: "Mobile / Tablet / Desktop" },
      { label: "VALIDATION", sub: "Zero-Error Release" },
    ],
  },
  {
    num: "07",
    title: "INTEGRATIONS",
    tag: "API & DATA CONNECTIVITY",
    slug: "integrations",
    summary: "Connecting software systems through secure APIs, webhook handlers, and transactional synchronization pipelines.",
    problemSolved: "Siloed departmental tools, manual data reconciliation, and disjointed third-party services.",
    concepts: ["REST Interfaces", "Webhook Ingress", "Payload Validation", "Transactional Integrity"],
    schematicNodes: [
      { label: "INGRESS", sub: "Webhook / API Request" },
      { label: "VERIFICATION", sub: "Signature & Schema" },
      { label: "TRANSFORM", sub: "Payload Mapping" },
      { label: "PERSIST", sub: "Database Commit" },
    ],
  },
  {
    num: "08",
    title: "SAAS",
    tag: "DIGITAL PRODUCTS",
    slug: "saas",
    summary: "Design and engineering of software products tailored to multi-user organizations and specific operational verticals.",
    problemSolved: "Monolithic spreadsheets, lack of customer self-service, and scaling operational workflows.",
    concepts: ["Role-Based Access Control", "Client Dashboards", "Billing Workflows", "Scalable Data Architecture"],
    schematicNodes: [
      { label: "ONBOARDING", sub: "User Account & Role" },
      { label: "WORKSPACE", sub: "Operational Tools" },
      { label: "MANAGEMENT", sub: "Administrative Oversight" },
      { label: "ANALYTICS", sub: "Activity Reporting" },
    ],
    verifiedReference: { title: "STEMFUSION Education Platform", href: "/work/stemfusion" },
  },
];

export default function Capabilities() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = CAPABILITIES[activeIdx];

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="py-24 sm:py-32 lg:py-36 bg-[#FAF8F5] border-b border-[#DCD6CA] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 sm:pb-16 border-b border-[#DCD6CA] mb-16 sm:mb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#8C6D1F] uppercase font-semibold">
                  CAPABILITIES
                </span>
              </div>
              <h2
                id="capabilities-heading"
                className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] text-[#0E1720] leading-[1.04] tracking-[-0.03em] font-normal"
              >
                Systems engineered around <span className="italic font-normal">the work.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] max-w-md font-light leading-relaxed">
              We design and build across eight core software engineering disciplines.
            </p>
          </div>
        </RevealOnScroll>

        {/* Desktop Split-Index (Hidden on Mobile/Tablet < 1024px) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Capability Index List (5 Cols) */}
          <div className="lg:col-span-5 border border-[#DCD6CA] bg-[#FFFFFF] divide-y divide-[#EAE5DB]">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={cap.slug}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full p-4.5 text-left transition-all duration-150 flex items-center justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0E1720] ${
                    isActive
                      ? "bg-[#0E1720] text-[#FAF7F2] font-semibold"
                      : "bg-[#FFFFFF] text-[#0E1720] hover:bg-[#FAF8F5]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isActive ? "text-[#D4A72C]" : "text-[#8C6D1F]"
                      }`}
                    >
                      {cap.num}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                      {cap.title}
                    </span>
                  </div>

                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider ${
                      isActive ? "text-[#D4A72C]" : "text-[#8E9CA8]"
                    }`}
                  >
                    {cap.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual & Conceptual Detail Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#DCD6CA] p-8 lg:p-10 shadow-[0_12px_40px_rgba(14,23,32,0.04)] flex flex-col justify-between min-h-[560px]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EAE5DB]">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-[#8C6D1F]">
                    {active.num}
                  </span>
                  <span className="text-[#DCD6CA]">/</span>
                  <span className="font-mono text-xs text-[#5C6975] uppercase tracking-wider">
                    {active.tag}
                  </span>
                </div>

                <Link
                  to={`/solutions/${active.slug}`}
                  className="font-mono text-xs text-[#0E1720] hover:text-[#8C6D1F] uppercase font-semibold underline underline-offset-4 inline-flex items-center gap-1 transition-colors"
                >
                  <span>FULL SPECIFICATION</span>
                  <ArrowRight size={11} />
                </Link>
              </div>

              {/* Title & Concise Summary */}
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-normal leading-tight mb-3">
                {active.title}
              </h3>
              <p className="font-sans text-base text-[#3A4753] font-light leading-relaxed mb-6">
                {active.summary}
              </p>

              {/* Problem Solved */}
              <div className="p-4 bg-[#FAF8F5] border border-[#EAE5DB] mb-6">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#8C6D1F] font-bold block mb-1">
                  OPERATIONAL FOCUS
                </span>
                <p className="font-sans text-xs text-[#3A4753] font-light leading-relaxed">
                  {active.problemSolved}
                </p>
              </div>

              {/* Architectural Concepts */}
              <div className="mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E9CA8] font-semibold block mb-2.5">
                  ENGINEERING CONCEPTS
                </span>
                <div className="flex flex-wrap gap-2">
                  {active.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="px-3 py-1 bg-[#FAF8F5] border border-[#DCD6CA] font-mono text-[11px] text-[#0E1720] uppercase"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Restrained Technical Schematic */}
              <div className="mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E9CA8] font-semibold block mb-2.5">
                  SYSTEM FLOW SCHEMATIC
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {active.schematicNodes.map((node, i) => (
                    <div
                      key={node.label}
                      className="p-3 bg-[#FAF8F5] border border-[#EAE5DB] flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-mono text-[9px] text-[#8C6D1F] font-bold block mb-0.5">
                          0{i + 1}
                        </span>
                        <div className="font-mono text-[11px] font-semibold uppercase text-[#0E1720] mb-0.5">
                          {node.label}
                        </div>
                      </div>
                      <div className="text-[10px] font-sans text-[#5C6975] font-light truncate">
                        {node.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer Row */}
            <div className="pt-5 border-t border-[#EAE5DB] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              {active.verifiedReference ? (
                <div className="flex items-center gap-2">
                  <span className="text-[#8E9CA8]">VERIFIED IN:</span>
                  <Link
                    to={active.verifiedReference.href}
                    className="text-[#0E1720] hover:text-[#8C6D1F] font-semibold underline underline-offset-2"
                  >
                    {active.verifiedReference.title}
                  </Link>
                </div>
              ) : (
                <span className="text-[#8E9CA8]">CUSTOM ENGINEERING DISCIPLINE</span>
              )}

              <Link
                to="/contact"
                className="font-semibold text-[#0E1720] hover:text-[#8C6D1F] inline-flex items-center gap-1 uppercase"
              >
                <span>DISCUSS A PROJECT</span>
                <ArrowRight size={11} />
              </Link>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet Accordion (Visible on < 1024px) */}
        <div className="lg:hidden space-y-4 mb-16">
          {CAPABILITIES.map((cap, idx) => {
            const isExpanded = activeIdx === idx;
            return (
              <div
                key={cap.slug}
                className="border border-[#DCD6CA] bg-[#FFFFFF] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveIdx(isExpanded ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between bg-[#FFFFFF] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#8C6D1F]">
                      {cap.num}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#0E1720]">
                      {cap.title}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#8C6D1F]">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>

                {isExpanded && (
                  <div className="p-5 pt-0 border-t border-[#EAE5DB] bg-[#FAF8F5] space-y-4">
                    <p className="font-sans text-xs sm:text-sm text-[#3A4753] font-light leading-relaxed pt-3">
                      {cap.summary}
                    </p>

                    <div className="p-3 bg-[#FFFFFF] border border-[#EAE5DB] text-xs font-sans text-[#5C6975]">
                      <strong className="text-[#0E1720] font-mono text-[10px] uppercase block mb-1">
                        Operational Focus:
                      </strong>
                      {cap.problemSolved}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cap.concepts.map((concept) => (
                        <span
                          key={concept}
                          className="px-2.5 py-1 bg-[#FFFFFF] border border-[#DCD6CA] font-mono text-[10px] text-[#0E1720] uppercase"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#EAE5DB] flex items-center justify-between text-xs font-mono">
                      <Link
                        to={`/solutions/${cap.slug}`}
                        className="text-[#0E1720] font-semibold underline underline-offset-2 uppercase text-[11px]"
                      >
                        Explore Details →
                      </Link>
                      <Link
                        to="/contact"
                        className="text-[#8C6D1F] font-semibold uppercase text-[11px]"
                      >
                        Inquire →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Capabilities Link Bar */}
        <div className="p-6 bg-[#FFFFFF] border border-[#DCD6CA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0E1720] mb-0.5">
              ALL 8 CAPABILITIES SPECIFIED
            </div>
            <div className="font-sans text-xs text-[#5C6975] font-light">
              Explore individual capability briefs, workflows, and deliverables.
            </div>
          </div>

          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0E1720] hover:bg-[#1A2530] text-[#FFFFFF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
          >
            <span>VIEW SOLUTIONS CATALOG</span>
            <ArrowRight size={12} className="text-[#D4A72C]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
