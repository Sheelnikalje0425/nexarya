export interface Capability {
  number: string;
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const CAPABILITIES: Capability[] = [
  {
    number: "01",
    slug: "web-applications",
    title: "Web Applications & SaaS Platforms",
    description: "High-performance React 19 web applications and multi-tenant software platforms engineered for speed, accessibility, and high availability.",
    deliverables: ["React 19 & Next.js SPAs", "Role-Based Authentication (RBAC)", "State Management & Optimistic UI", "Responsive Multi-Device Layouts"],
    icon: "globe",
  },
  {
    number: "02",
    slug: "business-systems",
    title: "Internal Business & Workflow Systems",
    description: "Custom operational software, approval gates, verification portals, and administrative dashboards that replace manual spreadsheets.",
    deliverables: ["Multi-Tier Verification Portals", "Document & Applicant Workflows", "Tamper-Evident Audit Logging", "Operational Telemetry Dashboards"],
    icon: "grid",
  },
  {
    number: "03",
    slug: "integrations",
    title: "APIs, Data Infrastructure & Microservices",
    description: "Strictly typed REST and GraphQL API gateways, ACID relational databases, background workers, and resilient webhook integration pipelines.",
    deliverables: ["Node.js & Express REST APIs", "SQLite WAL & PostgreSQL Relational Schema", "HMAC Cryptographic Verification", "Persistent Queue Workers"],
    icon: "link",
  },
  {
    number: "04",
    slug: "custom-software",
    title: "Educational & Community Platforms",
    description: "Interactive learning hubs, event registration engines, student/educator workspaces, and automated certification issuance platforms.",
    deliverables: ["Event Scheduling & Registration", "Centralized Learning Resource Repositories", "Automated Certificate Issuance with QR", "High-Concurrency Registration Rails"],
    icon: "code",
  },
  {
    number: "05",
    slug: "cloud-devops",
    title: "Cloud Infrastructure & CI/CD",
    description: "Predictable, automated deployment pipelines, Docker containerization, and cloud infrastructure provisioned with Infrastructure as Code.",
    deliverables: ["Automated GitHub Actions CI/CD", "Docker Container Orchestration", "Zero-Downtime Rolling Releases", "Health Monitoring & SSL Rails"],
    icon: "cloud",
  },
  {
    number: "06",
    slug: "qa-testing",
    title: "Automated QA & Security Audits",
    description: "Comprehensive automated test suites covering unit logic, API contracts, end-to-end user journeys, and vulnerability scanning.",
    deliverables: ["Playwright / Vitest Test Suites", "API Regression Testing", "Database Transaction Integrity Tests", "Security & RBAC Boundary Audits"],
    icon: "shield",
  },
];
