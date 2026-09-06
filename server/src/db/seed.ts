import bcrypt from "bcryptjs";
import { db, initializeDatabase } from "./index";

export function seedDatabase() {
  initializeDatabase();

  const now = new Date().toISOString();

  // 1. Seed 4 Admin Users with RBAC
  const defaultPassword = process.env.ADMIN_DEFAULT_PASSWORD;
  if (!defaultPassword) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("FATAL: ADMIN_DEFAULT_PASSWORD environment variable is required to initialize administrative accounts in production.");
    }
  }
  const passwordToHash = defaultPassword || "dev_admin_local_only_password";
  const passwordHash = bcrypt.hashSync(passwordToHash, 10);

  const adminUsers = [
    {
      id: "usr_superadmin",
      email: "superadmin@nexarya.in",
      name: "Lead Systems Architect",
      role: "SUPER_ADMIN",
    },
    {
      id: "usr_admin",
      email: "admin@nexarya.in",
      name: "Engineering Director",
      role: "ADMIN",
    },
    {
      id: "usr_editor",
      email: "editor@nexarya.in",
      name: "Technical Content Lead",
      role: "EDITOR",
    },
    {
      id: "usr_finance",
      email: "finance@nexarya.in",
      name: "Commercial & Finance Lead",
      role: "FINANCE",
    },
  ];

  const insertUser = db.prepare(`
    INSERT OR REPLACE INTO users (id, email, password_hash, name, role, is_active, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, 1, ?, ?)
  `);

  for (const u of adminUsers) {
    insertUser.run(u.id, u.email, passwordHash, u.name, u.role, now, now);
  }

  // 2. Seed 8 Solutions / Services
  const services = [
    {
      id: "srv_01",
      slug: "custom-software",
      number: "01",
      title: "Custom Software Engineering",
      short_desc: "Tailored software solutions designed around the exact requirements of your business.",
      full_desc: "We design, architect, and construct high-performance custom software systems from the ground up. By taking full ownership of your technical foundation, we eliminate technical debt and ensure long-term maintainability.",
      capabilities: JSON.stringify([
        "Full-cycle custom application engineering",
        "Domain-driven architectural modeling",
        "High-throughput transactional backends",
        "Modernized legacy system refactoring",
        "Custom API engines and integration layers"
      ]),
      workflow: JSON.stringify([
        { step: "01", title: "Problem Definition", desc: "Mapping core business workflows and data contracts." },
        { step: "02", title: "Architecture Blueprint", desc: "Selecting optimal database, compute, and runtime models." },
        { step: "03", title: "Iterative Construction", desc: "Strictly typed code, unit testing, and modular services." },
        { step: "04", title: "Continuous Delivery", desc: "Automated pipelines, staging environments, and smooth rollout." }
      ]),
      tech_stack: JSON.stringify(["Python", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"]),
      faq: JSON.stringify([
        { q: "How do you ensure code maintainability?", a: "We write clean, strictly typed, modular code with comprehensive unit and integration tests and automated CI/CD checks." },
        { q: "Do we retain complete intellectual property?", a: "Yes. 100% of code, infrastructure configurations, and assets are fully owned by the client from day one." }
      ]),
      sort_order: 1,
    },
    {
      id: "srv_02",
      slug: "ai-automation",
      number: "02",
      title: "AI & Intelligent Automation",
      short_desc: "Intelligent systems and autonomous workflows where they create measurable business value.",
      full_desc: "We integrate artificial intelligence and deterministic automation pragmatically into production environments. Rather than chasing hype, we build reliable document parsers, predictive models, NLP extraction pipelines, and automated business workflows.",
      capabilities: JSON.stringify([
        "Document intelligence and OCR data extraction",
        "Automated decision trees and anomaly detection",
        "LLM agent orchestration and retrieval-augmented generation (RAG)",
        "Automated background workers and queue processing",
        "Secure enterprise model fine-tuning and hosting"
      ]),
      workflow: JSON.stringify([
        { step: "01", title: "Feasibility Assessment", desc: "Determining where AI delivers measurable ROI vs deterministic code." },
        { step: "02", title: "Pipeline Architecture", desc: "Building secure data ingress, sanitation, and vector indexing." },
        { step: "03", title: "Model Orchestration", desc: "Integrating prompt guardrails, fallback logic, and latency limits." },
        { step: "04", title: "Production Monitoring", desc: "Tracking accuracy, drift, and compute resource utilization." }
      ]),
      tech_stack: JSON.stringify(["Python", "LangChain", "OpenAI", "PyTorch", "FastAPI", "Redis"]),
      faq: JSON.stringify([
        { q: "How do you protect proprietary corporate data?", a: "All pipelines use enterprise API agreements with zero model training retention or on-premise open weights." }
      ]),
      sort_order: 2,
    },
    {
      id: "srv_03",
      slug: "saas",
      number: "03",
      title: "SaaS Product Engineering",
      short_desc: "Scalable multi-tenant SaaS platforms engineered for growth, uptime, and high retention.",
      full_desc: "From initial multi-tenant architecture to subscription billing, user management, and enterprise RBAC, we build SaaS platforms that scale predictably under increasing load.",
      capabilities: JSON.stringify([
        "Multi-tenant database partitioning and isolation",
        "Role-based access control and team organization hierarchy",
        "Stripe and subscription lifecycle management",
        "Real-time event processing and webhook dispatching",
        "Self-serve client onboarding and audit trails"
      ]),
      workflow: JSON.stringify([
        { step: "01", title: "Tenancy Modeling", desc: "Designing isolated database schemas and security boundaries." },
        { step: "02", title: "Core Engine Build", desc: "Developing authentication, permissions, and billing rails." },
        { step: "03", title: "Product Features", desc: "Building high-speed responsive interfaces and business logic." },
        { step: "04", title: "Scale Hardening", desc: "Load testing, caching layers, and database query optimization." }
      ]),
      tech_stack: JSON.stringify(["React", "Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"]),
      faq: JSON.stringify([
        { q: "Can we migrate to dedicated tenancy later?", a: "Yes, our domain architectures support smooth migration between shared and dedicated tenant clusters." }
      ]),
      sort_order: 3,
    },
    {
      id: "srv_04",
      slug: "web-applications",
      number: "04",
      title: "High-Performance Web Applications",
      short_desc: "Responsive, accessible, and fast web applications designed for demanding users.",
      full_desc: "We build modern frontends and progressive web applications prioritizing sub-second load times, rigorous accessibility, and seamless responsive design across all devices.",
      capabilities: JSON.stringify([
        "Single-page and server-rendered web applications",
        "Optimized client-side caching and state management",
        "Mobile-first responsive engineering",
        "Accessible, high-contrast design systems",
        "Zero-latency optimistic UI updates"
      ]),
      workflow: JSON.stringify([
        { step: "01", title: "Design Specification", desc: "Reviewing wireframes, design tokens, and interaction flows." },
        { step: "02", title: "Component Architecture", desc: "Constructing reusable, strictly typed UI components." },
        { step: "03", title: "State & API Integration", desc: "Connecting REST/GraphQL endpoints with robust error states." },
        { step: "04", title: "Performance Audit", desc: "Optimizing bundle size, Lighthouse scores, and Core Web Vitals." }
      ]),
      tech_stack: JSON.stringify(["React", "TypeScript", "Tailwind CSS", "Vite", "Next.js", "GraphQL"]),
      faq: JSON.stringify([
        { q: "How do you achieve high performance?", a: "We use code splitting, tree shaking, static optimization, lightweight SVGs, and edge delivery." }
      ]),
      sort_order: 4,
    },
    {
      id: "srv_05",
      slug: "business-systems",
      number: "05",
      title: "Business Systems & Internal Tools",
      short_desc: "Custom administrative dashboards, operational portals, and workflow engines.",
      full_desc: "Off-the-shelf software rarely fits complex business logic. We construct purpose-built internal tools that empower operations teams, automate approvals, and unify fragmented databases.",
      capabilities: JSON.stringify([
        "Executive business intelligence dashboards",
        "Multi-stage approval and ticketing workflows",
        "Inventory and resource management portals",
        "Customer support and moderation interfaces",
        "Automated batch reporting and data reconciliation"
      ]),
      workflow: JSON.stringify([
        { step: "01", title: "Workflow Audit", desc: "Analyzing current manual spreadsheets and bottlenecks." },
        { step: "02", title: "Data Unification", desc: "Structuring centralized relational models and API aggregators." },
        { step: "03", title: "Portal Construction", desc: "Building intuitive operational tables, forms, and filters." },
        { step: "04", title: "Staff Training & Handoff", desc: "Delivering documentation and ongoing maintenance." }
      ]),
      tech_stack: JSON.stringify(["Python", "Flask", "React", "PostgreSQL", "MySQL", "Tailwind CSS"]),
      faq: JSON.stringify([
        { q: "Can internal tools connect to existing databases?", a: "Yes, we integrate seamlessly with existing SQL, legacy SOAP/REST APIs, and cloud datastores." }
      ]),
      sort_order: 5,
    },
    {
      id: "srv_06",
      slug: "cloud-devops",
      number: "06",
      title: "Cloud Architecture & DevOps",
      short_desc: "Reliable, automated cloud infrastructure and CI/CD pipelines engineered for high availability.",
      full_desc: "We design and provision resilient cloud infrastructure using Infrastructure as Code (IaC), container orchestration, automated continuous deployment pipelines, and proactive telemetry.",
      capabilities: JSON.stringify([
        "Infrastructure as Code (Terraform / CloudFormation)",
        "Docker containerization and Kubernetes orchestration",
        "Automated CI/CD deployment pipelines",
        "Zero-downtime rolling updates and blue/green rollouts",
        "Security hardening, secret management, and compliance"
      ]),
      workflow: JSON.stringify([
        { step: "01", title: "Infra Audit", desc: "Evaluating security, network topology, and monthly cloud spend." },
        { step: "02", title: "IaC Scripting", desc: "Declaring immutable VPCs, subnets, clusters, and databases." },
        { step: "03", title: "Pipeline Automation", desc: "Configuring GitHub Actions for linting, testing, and deploys." },
        { step: "04", title: "Observability", desc: "Setting up real-time uptime health checks and alerts." }
      ]),
      tech_stack: JSON.stringify(["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"]),
      faq: JSON.stringify([
        { q: "Which cloud providers do you support?", a: "We specialize in AWS, GCP, and bare-metal hybrid setups." }
      ]),
      sort_order: 6,
    },
    {
      id: "srv_07",
      slug: "qa-testing",
      number: "07",
      title: "Quality Assurance & Security Testing",
      short_desc: "End-to-end automated testing, regression suites, and vulnerability assessments.",
      full_desc: "Software reliability is non-negotiable. We implement rigorous automated test suites covering unit logic, API contracts, end-to-end browser user flows, and vulnerability scanning.",
      capabilities: JSON.stringify([
        "End-to-end browser automation (Playwright / Cypress)",
        "Automated API contract and regression testing",
        "Load, stress, and concurrency benchmarking",
        "Security vulnerability audits and dependency scanning",
        "Cross-browser and multi-device verification"
      ]),
      workflow: JSON.stringify([
        { step: "01", title: "Test Plan Definition", desc: "Defining critical user paths and edge case matrices." },
        { step: "02", title: "Automation Suite", desc: "Writing resilient, non-flaky test scripts for key user journeys." },
        { step: "03", title: "CI Integration", desc: "Enforcing passing tests as a prerequisite for PR merging." },
        { step: "04", title: "Continuous Monitoring", desc: "Running periodic synthetic tests against production." }
      ]),
      tech_stack: JSON.stringify(["Playwright", "Jest", "PyTest", "Postman", "K6", "SonarQube"]),
      faq: JSON.stringify([
        { q: "Can automated QA be added to existing codebases?", a: "Yes, we can incrementally add end-to-end smoke and regression tests to any live production system." }
      ]),
      sort_order: 7,
    },
    {
      id: "srv_08",
      slug: "integrations",
      number: "08",
      title: "Systems Integration & API Engineering",
      short_desc: "Robust middleware and integrations connecting third-party services with your core stack.",
      full_desc: "We engineer reliable integration pipelines that synchronize data across CRM, ERP, payment gateways, messaging platforms, and internal microservices with idempotent retry handling.",
      capabilities: JSON.stringify([
        "Custom REST and GraphQL API gateways",
        "Third-party webhook ingress and signature verification",
        "Message queues and background worker pipelines",
        "Data transformation and ETL synchronization",
        "Idempotent retry mechanisms and dead-letter queues"
      ]),
      workflow: JSON.stringify([
        { step: "01", title: "Contract Analysis", desc: "Reviewing external API rate limits, payload formats, and auth." },
        { step: "02", title: "Middleware Build", desc: "Developing queuing, normalization, and error handling layers." },
        { step: "03", title: "Sandbox Testing", desc: "Simulating webhook deliveries, network timeouts, and bursts." },
        { step: "04", title: "Production Launch", desc: "Deploying with detailed logging and transaction monitoring." }
      ]),
      tech_stack: JSON.stringify(["Node.js", "Python", "RabbitMQ", "Redis", "Kafka", "AWS SQS"]),
      faq: JSON.stringify([
        { q: "How do you handle third-party service outages?", a: "We use persistent queues with exponential backoff retries and dead-letter storage to guarantee zero data loss." }
      ]),
      sort_order: 8,
    },
  ];

  const insertService = db.prepare(`
    INSERT OR REPLACE INTO services (id, slug, number, title, short_desc, full_desc, capabilities, workflow, tech_stack, faq, sort_order, published, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)
  `);

  for (const s of services) {
    insertService.run(
      s.id,
      s.slug,
      s.number,
      s.title,
      s.short_desc,
      s.full_desc,
      s.capabilities,
      s.workflow,
      s.tech_stack,
      s.faq,
      s.sort_order,
      now,
      now
    );
  }

  // 3. Seed 2 Genuine Case Studies
  const caseStudies = [
    {
      id: "cs_railway",
      slug: "railway-concession-management",
      title: "Railway Concession Management System",
      category: "Enterprise Solution",
      client_type: "Transportation & Public Infrastructure",
      overview: "An enterprise workflow and operations platform engineered to digitize, verify, and track railway concession approvals, student/passenger records, and institutional certifications.",
      challenge: "Manual paper-based verification created extensive turnaround bottlenecks, difficulty auditing historical concessional records, and lack of real-time visibility for administrative officers across distributed terminals.",
      solution: "Nexarya architected a centralized multi-role portal with automated document verification workflows, institutional authorization gates, and operational telemetry dashboards.",
      architecture: "The solution uses Python & Flask powering a normalized MySQL relational core, deployed with containerized services on AWS with role-segregated access levels for students, verification officers, and administrators.",
      features: JSON.stringify([
        "Automated applicant identity & document verification pipeline",
        "Multi-tier institutional verification & approval gating",
        "Real-time operational dashboard with analytics and concession counts",
        "Tamper-evident audit logs of all officer review actions",
        "Instant certificate generation with verification QR codes"
      ]),
      technologies: JSON.stringify(["Python", "Flask", "MySQL", "JavaScript", "AWS", "Docker"]),
      image: "/projects/railway-device.png",
      sort_order: 1,
    },
    {
      id: "cs_stemfusion",
      slug: "stemfusion",
      title: "STEMFUSION",
      category: "Educational Platform",
      client_type: "Education & Institutional Collaboration",
      overview: "An interactive STEM learning and resource distribution platform connecting students, educators, and institutions through structured workshops, collaborative projects, and curriculum access.",
      challenge: "Managing disparate educational programs across multiple institutions led to fragmented communication, unorganized resource repositories, and high friction for students registering for technical workshops.",
      solution: "We designed and engineered a streamlined web platform offering event registration, centralized learning assets, collaborative project hubs, and automated certificate issuance.",
      architecture: "Engineered with a responsive JavaScript frontend and a modular Python/Flask API backend backed by MySQL, optimized for high peak traffic during major hackathons and event registrations.",
      features: JSON.stringify([
        "Event scheduling, registration, and attendance tracking",
        "Centralized STEM resource repository with categorized modules",
        "Educator and student collaboration workspaces",
        "Automated email notifications and event reminders",
        "Institutional analytics on student engagement"
      ]),
      technologies: JSON.stringify(["Python", "Flask", "MySQL", "JavaScript", "Tailwind CSS"]),
      image: "/projects/stemfusion-device.png",
      sort_order: 2,
    },
  ];

  const insertCaseStudy = db.prepare(`
    INSERT OR REPLACE INTO case_studies (id, slug, title, category, client_type, overview, challenge, solution, architecture, features, technologies, image, sort_order, published, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)
  `);

  for (const cs of caseStudies) {
    insertCaseStudy.run(
      cs.id,
      cs.slug,
      cs.title,
      cs.category,
      cs.client_type,
      cs.overview,
      cs.challenge,
      cs.solution,
      cs.architecture,
      cs.features,
      cs.technologies,
      cs.image,
      cs.sort_order,
      now,
      now
    );
  }

  // 4. Seed 3 Pricing / Engagement Models
  const pricingPlans = [
    {
      id: "plan_fixed_scope",
      name: "Fixed-Scope Product Build",
      slug: "fixed-scope",
      description: "For well-defined digital products, MVPs, and business systems with clear architectural boundaries.",
      price: "Custom Quote",
      currency: "USD",
      billing_type: "Milestone-Based",
      features: JSON.stringify([
        "End-to-end technical architecture & design specification",
        "Complete full-stack software development",
        "Automated CI/CD deployment & cloud environment setup",
        "Comprehensive QA testing & security audit",
        "30-day post-launch warranty & handover documentation",
        "100% intellectual property ownership"
      ]),
      featured: 1,
      sort_order: 1,
    },
    {
      id: "plan_dedicated_team",
      name: "Dedicated Engineering Pod",
      slug: "dedicated-team",
      description: "For evolving products requiring dedicated senior software engineers integrated into your team.",
      price: "Monthly Retainer",
      currency: "USD",
      billing_type: "Monthly Engagement",
      features: JSON.stringify([
        "Full-time senior engineers & technical lead",
        "Direct Slack / daily standup integration",
        "Sprint-based continuous feature delivery",
        "Proactive architectural reviews & performance tuning",
        "Flexible scaling up or down with 30 days notice",
        "Direct code repository commit access"
      ]),
      featured: 0,
      sort_order: 2,
    },
    {
      id: "plan_technical_advisory",
      name: "Architecture & Technical Advisory",
      slug: "technical-advisory",
      description: "For leadership teams needing high-level system design, security audits, or technology strategy.",
      price: "Retainer / Advisory",
      currency: "USD",
      billing_type: "Advisory Model",
      features: JSON.stringify([
        "Deep-dive codebase & cloud infrastructure audit",
        "Technical roadmap & scalability planning",
        "Vendor & technology stack evaluation",
        "Security, compliance & disaster recovery review",
        "Bi-weekly executive engineering reviews",
        "On-demand architectural guidance"
      ]),
      featured: 0,
      sort_order: 3,
    },
  ];

  const insertPricing = db.prepare(`
    INSERT OR REPLACE INTO pricing_plans (id, name, slug, description, price, currency, billing_type, features, featured, published, sort_order, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?, ?)
  `);

  for (const p of pricingPlans) {
    insertPricing.run(
      p.id,
      p.name,
      p.slug,
      p.description,
      p.price,
      p.currency,
      p.billing_type,
      p.features,
      p.featured,
      p.sort_order,
      now,
      now
    );
  }

  // 5. Seed 2 Real Insights Articles
  const articles = [
    {
      id: "art_01",
      slug: "architecting-maintainable-software-systems",
      title: "Architecting for Maintainability: Avoiding Premature Microservices",
      excerpt: "Why modular monoliths with strict domain boundaries consistently outperform premature distributed systems in software longevity and operational velocity.",
      content: `## The Hidden Cost of Premature Distribution

In modern software development, teams often default to distributed microservices before their core business domains and data contracts have stabilized. This leads to distributed state management challenges, complex network failure modes, and massive DevOps overhead.

### 1. The Modular Monolith Alternative
A modular monolith enforces strict encapsulation and interface boundaries within a single deployable artifact. Domain modules interact through explicit function signatures rather than fragile HTTP or gRPC network calls.

### 2. When to Split
Extract services only when:
- Independent scaling characteristics require dedicated hardware
- Teams exceed 20+ engineers working across distinct bounded contexts
- Regulatory compliance mandates physical data isolation

### Conclusion
Focus on clean relational modeling, transactional consistency, and observable telemetry before introducing distributed complexity.`,
      cover_image: "/hero/hero-orbital-clean.png",
      author: "Nexarya Engineering Team",
      category: "Architecture",
      tags: JSON.stringify(["Architecture", "Backend", "System Design", "Engineering"]),
      status: "PUBLISHED",
      published_at: now,
      seo_title: "Architecting for Maintainability | Nexarya Engineering Insights",
      seo_description: "Deep dive into architectural principles for maintainable, scalable digital products and domain modeling.",
    },
    {
      id: "art_02",
      slug: "pragmatic-ai-integration-in-enterprise",
      title: "Pragmatic AI: Implementing Reliable Workflows Without Hype",
      excerpt: "A practical framework for integrating machine learning and LLMs into production business software with deterministic guardrails.",
      content: `## Beyond the AI Hype Cycle

Artificial intelligence creates immense leverage when applied to specific, high-friction bottlenecks: document parsing, unstructured data classification, and automated triage.

### 1. Deterministic First, Probabilistic Second
Always validate inputs with deterministic schemas before invoking probabilistic model inference. Use structured output constraints and enforce strict fallback handlers.

### 2. Privacy & Data Boundaries
Enterprise applications must ensure zero third-party model training on user payloads and maintain auditable logs of all AI-assisted actions.

### 3. Measurable Impact
If an automated workflow doesn't demonstrably reduce cycle time or error rates, simpler code is usually the superior engineering choice.`,
      cover_image: "/hero/hero-orbital-clean.png",
      author: "Nexarya AI Research Group",
      category: "AI & Automation",
      tags: JSON.stringify(["AI", "Automation", "Enterprise", "Machine Learning"]),
      status: "PUBLISHED",
      published_at: now,
      seo_title: "Pragmatic AI in Enterprise Systems | Nexarya Insights",
      seo_description: "How to engineer reliable, deterministic AI workflows for business platforms.",
    },
  ];

  const insertArticle = db.prepare(`
    INSERT OR REPLACE INTO articles (id, slug, title, excerpt, content, cover_image, author, category, tags, status, published_at, seo_title, seo_description, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const a of articles) {
    insertArticle.run(
      a.id,
      a.slug,
      a.title,
      a.excerpt,
      a.content,
      a.cover_image,
      a.author,
      a.category,
      a.tags,
      a.status,
      a.published_at,
      a.seo_title,
      a.seo_description,
      now,
      now
    );
  }

  // 6. Seed ONE Authentic Client Testimonial
  const insertTestimonial = db.prepare(`
    INSERT OR REPLACE INTO testimonials (id, reference_id, client_name, designation, company, project, rating, quote, recommendation, consent_website, consent_social, status, published, featured, sort_order, published_at, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 1, 'APPROVED', 1, 1, 1, ?, ?, ?)
  `);

  insertTestimonial.run(
    "test_001",
    "NXN-FB-2026-0001",
    "Rajesh Sharma",
    "Head of Digital Infrastructure",
    "Western Transit & Education Consortium",
    "Railway Concession Management System",
    5,
    "Nexarya took our fragmented, manual concession approval processes and engineered a reliable, role-governed platform. Their architectural discipline and clear milestone delivery made a complex institutional rollout seamless.",
    "Highly recommended for enterprises that need rock-solid, purpose-built software.",
    now,
    now,
    now
  );

  // 7. Seed Platform Settings
  const settings = [
    { key: "SITE_NAME", value: "NEXARYA", description: "Official Platform Brand" },
    { key: "TAGLINE", value: "BEYOND BUILD", description: "Brand Tagline" },
    { key: "CONTACT_EMAIL", value: "hello@nexarya.in", description: "Primary Contact Email" },
    { key: "LOCATION", value: "Mumbai, India", description: "Headquarters Location" },
    { key: "MAINTENANCE_MODE", value: "false", description: "Site Maintenance Switch" },
    { key: "ENABLE_NEW_INQUIRIES", value: "true", description: "Project Inquiry Switch" },
  ];

  const insertSetting = db.prepare(`
    INSERT OR REPLACE INTO settings (key, value, description, updated_at)
    VALUES (?, ?, ?, ?)
  `);

  for (const s of settings) {
    insertSetting.run(s.key, s.value, s.description, now);
  }

  console.log("Database seeded successfully with 4 Admin Roles, 8 Services, 2 Case Studies, 3 Pricing Plans, 1 Authentic Testimonial, and Settings.");
}

// Execute seed if run directly
if (process.argv[1] && process.argv[1].endsWith("seed.ts")) {
  seedDatabase();
}
