export interface SubItem {
  number?: string;
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface NavDropdownConfig {
  title?: string;
  subtitle?: string;
  primaryItems: SubItem[];
  footerLink?: {
    label: string;
    href: string;
  };
}

export interface PrimaryNavItem {
  id: "work" | "solutions" | "process" | "about" | "insights";
  label: string;
  number: string;
  href: string;
  dropdown: NavDropdownConfig;
}

export const PRIMARY_NAVIGATION: PrimaryNavItem[] = [
  {
    id: "work",
    label: "WORK",
    number: "01",
    href: "/work",
    dropdown: {
      title: "PROVEN PRODUCTION WORK",
      subtitle: "Verified software systems deployed to active environments",
      primaryItems: [
        {
          label: "ALL WORK",
          href: "/work",
          description: "Complete index of verified production case files",
        },
        {
          label: "STEMFUSION",
          href: "/work/stemfusion",
          description: "Educational platform & taxonomy distribution engine",
        },
        {
          label: "RAILWAY CONCESSION MANAGEMENT SYSTEM",
          href: "/work/railway-concession-management",
          description: "Institutional verification portal & multi-tier approval workflow",
        },
      ],
      footerLink: {
        label: "View All Case Studies →",
        href: "/work",
      },
    },
  },
  {
    id: "solutions",
    label: "SOLUTIONS",
    number: "02",
    href: "/solutions",
    dropdown: {
      title: "SOLUTIONS DIRECTORY",
      subtitle: "Architected around operational reality and organizational workflows",
      primaryItems: [
        {
          label: "CUSTOM SOFTWARE",
          href: "/solutions/custom-software",
          description: "Software engineered around your specific operational workflows",
        },
        {
          label: "AI & AUTOMATION",
          href: "/solutions/ai-automation",
          description: "Pragmatic machine intelligence and automated pipelines",
        },
        {
          label: "WEB & DIGITAL PRODUCTS",
          href: "/solutions#launch-digital-product",
          description: "Modern web platforms and product engineering",
        },
        {
          label: "CLOUD & INFRASTRUCTURE",
          href: "/solutions#unify-disconnected-systems",
          description: "Resilient cloud infrastructure and systems unification",
        },
        {
          label: "QUALITY & TESTING",
          href: "/solutions#modernize-existing-application",
          description: "End-to-end QA, modernization, and performance hardening",
        },
      ],
      footerLink: {
        label: "View All Solutions Overview →",
        href: "/solutions",
      },
    },
  },
  {
    id: "process",
    label: "PROCESS",
    number: "03",
    href: "/process",
    dropdown: {
      title: "ENGINEERING METHODOLOGY",
      subtitle: "Our deterministic 4-stage engineering lifecycle",
      primaryItems: [
        {
          number: "01",
          label: "UNDERSTAND",
          href: "/process#understand",
          description: "Map operational reality, roles, and business rules before code",
        },
        {
          number: "02",
          label: "STRUCTURE",
          href: "/process#structure",
          description: "Translate business processes into explicit domain models and schemas",
        },
        {
          number: "03",
          label: "ENGINEER",
          href: "/process#engineer",
          description: "Construct strictly typed frontend, backend, and data architectures",
        },
        {
          number: "04",
          label: "DELIVER",
          href: "/process#deliver",
          description: "Deploy hardened software to secured cloud runtimes with telemetry",
        },
      ],
      footerLink: {
        label: "Explore Methodology →",
        href: "/process",
      },
    },
  },
  {
    id: "about",
    label: "ABOUT",
    number: "04",
    href: "/about",
    dropdown: {
      title: "ABOUT NEXARYA",
      subtitle: "Independent software engineering studio based in Mumbai, India",
      primaryItems: [
        {
          label: "ABOUT NEXARYA",
          href: "/about#overview",
          description: "Engineering philosophy and studio overview",
        },
        {
          label: "PEOPLE",
          href: "/about#people",
          description: "Active practitioner leadership and four co-founders",
        },
        {
          label: "ENGINEERING PRINCIPLES",
          href: "/about#principles",
          description: "Core tenets guiding every system we engineer",
        },
        {
          label: "CLIENT FEEDBACK",
          href: "/about#feedback",
          description: "Verified reviews and client collaboration feedback",
        },
      ],
      footerLink: {
        label: "Read Studio Overview →",
        href: "/about",
      },
    },
  },
  {
    id: "insights",
    label: "INSIGHTS",
    number: "05",
    href: "/insights",
    dropdown: {
      title: "TECHNICAL JOURNAL",
      subtitle: "Perspectives on system design, performance, and automation",
      primaryItems: [
        {
          label: "ALL INSIGHTS",
          href: "/insights",
          description: "Full directory of architectural essays and engineering notes",
        },
        {
          label: "ENGINEERING",
          href: "/insights?category=engineering",
          description: "Domain modeling, modular monoliths, and scalability",
        },
        {
          label: "BUSINESS SYSTEMS",
          href: "/insights?category=business-systems",
          description: "Internal tooling and operational workflow systems",
        },
        {
          label: "AI & AUTOMATION",
          href: "/insights?category=ai-automation",
          description: "Pragmatic enterprise AI and deterministic pipelines",
        },
        {
          label: "WEB & PRODUCT",
          href: "/insights?category=web-product",
          description: "High-performance frontend systems and user experience",
        },
      ],
      footerLink: {
        label: "Read All Articles →",
        href: "/insights",
      },
    },
  },
];

export const ENGINEERING_SIGNALS = [
  { label: "Web Applications", sub: "React 19 & Next.js" },
  { label: "Internal Systems", sub: "Operations & Portals" },
  { label: "API & Data Rails", sub: "Node.js & SQLite/Postgres" },
  { label: "Client Partnership", sub: "100% IP & Code Ownership" },
];
