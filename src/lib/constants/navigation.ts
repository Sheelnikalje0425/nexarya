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
    label: "Work",
    number: "01",
    href: "/work",
    dropdown: {
      title: "Production Work",
      subtitle: "Software systems deployed to active production environments",
      primaryItems: [
        {
          label: "All Work",
          href: "/work",
          description: "Complete overview of production case studies",
        },
        {
          label: "STEMFUSION",
          href: "/work/stemfusion",
          description: "Educational platform and content distribution engine",
        },
        {
          label: "Railway Concession System",
          href: "/work/railway-concession-management",
          description: "Institutional verification portal and approval workflow",
        },
      ],
      footerLink: {
        label: "View all work →",
        href: "/work",
      },
    },
  },
  {
    id: "solutions",
    label: "Solutions",
    number: "02",
    href: "/solutions",
    dropdown: {
      title: "Solutions",
      subtitle: "Software architected around real operational workflows",
      primaryItems: [
        {
          label: "Custom Software",
          href: "/solutions/custom-software",
          description: "Tailored systems built for specific business operations",
        },
        {
          label: "AI & Automation",
          href: "/solutions/ai-automation",
          description: "Practical automation pipelines and data intelligence",
        },
        {
          label: "Web & Digital Products",
          href: "/solutions#launch-digital-product",
          description: "Modern web platforms and product engineering",
        },
        {
          label: "Cloud & Infrastructure",
          href: "/solutions#unify-disconnected-systems",
          description: "Resilient cloud infrastructure and systems integration",
        },
        {
          label: "Quality & Modernization",
          href: "/solutions#modernize-existing-application",
          description: "End-to-end testing, refactoring, and performance",
        },
      ],
      footerLink: {
        label: "View all solutions →",
        href: "/solutions",
      },
    },
  },
  {
    id: "process",
    label: "Process",
    number: "03",
    href: "/process",
    dropdown: {
      title: "How We Work",
      subtitle: "Our 4-stage engineering process",
      primaryItems: [
        {
          number: "01",
          label: "Understand",
          href: "/process#understand",
          description: "Map operational reality, roles, and business rules first",
        },
        {
          number: "02",
          label: "Structure",
          href: "/process#structure",
          description: "Translate requirements into explicit domain models and schemas",
        },
        {
          number: "03",
          label: "Engineer",
          href: "/process#engineer",
          description: "Build strictly typed frontend, backend, and data architectures",
        },
        {
          number: "04",
          label: "Deliver",
          href: "/process#deliver",
          description: "Deploy hardened software to secured cloud runtimes",
        },
      ],
      footerLink: {
        label: "Explore our process →",
        href: "/process",
      },
    },
  },
  {
    id: "about",
    label: "About",
    number: "04",
    href: "/about",
    dropdown: {
      title: "About Nexarya",
      subtitle: "Software engineering studio based in Mumbai",
      primaryItems: [
        {
          label: "Studio Overview",
          href: "/about#overview",
          description: "Engineering philosophy and background",
        },
        {
          label: "Our Team",
          href: "/about#people",
          description: "Practitioner leadership and co-founders",
        },
        {
          label: "Engineering Principles",
          href: "/about#principles",
          description: "Core tenets guiding every system we build",
        },
        {
          label: "Client Feedback",
          href: "/about#feedback",
          description: "Verified testimonials from project partners",
        },
      ],
      footerLink: {
        label: "Read about us →",
        href: "/about",
      },
    },
  },
  {
    id: "insights",
    label: "Insights",
    number: "05",
    href: "/insights",
    dropdown: {
      title: "Articles & Insights",
      subtitle: "Perspectives on system design, performance, and automation",
      primaryItems: [
        {
          label: "All Insights",
          href: "/insights",
          description: "Full directory of essays and engineering notes",
        },
        {
          label: "Engineering",
          href: "/insights?category=engineering",
          description: "Domain modeling, modular monoliths, and scalability",
        },
        {
          label: "Business Systems",
          href: "/insights?category=business-systems",
          description: "Internal tooling and operational workflow systems",
        },
        {
          label: "AI & Automation",
          href: "/insights?category=ai-automation",
          description: "Pragmatic AI implementation and workflows",
        },
        {
          label: "Web & Product",
          href: "/insights?category=web-product",
          description: "High-performance frontend systems and user experience",
        },
      ],
      footerLink: {
        label: "Read all articles →",
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
