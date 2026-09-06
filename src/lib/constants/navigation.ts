export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string; description?: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    hasDropdown: true,
    dropdownItems: [
      { label: "Web Applications & SaaS", href: "/solutions/web-applications", description: "High-performance software platforms" },
      { label: "Internal Business Systems", href: "/solutions/business-systems", description: "Operations & verification portals" },
      { label: "APIs & Data Infrastructure", href: "/solutions/integrations", description: "Strictly typed REST/GraphQL rails" },
      { label: "Cloud & CI/CD", href: "/solutions/cloud-devops", description: "Reliable, resilient infrastructure" },
      { label: "QA & Security Audits", href: "/solutions/qa-testing", description: "Automated regression test suites" },
    ],
  },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Pricing", href: "/pricing" },
];

export const ENGINEERING_SIGNALS = [
  { label: "Web Applications", sub: "React 19 & Next.js" },
  { label: "Internal Systems", sub: "Operations & Portals" },
  { label: "API & Data Rails", sub: "Node.js & SQLite/Postgres" },
  { label: "Client Partnership", sub: "100% IP & Code Ownership" },
];
