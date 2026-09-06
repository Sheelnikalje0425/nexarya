# NEXARYA

**Software Engineering Studio & Digital Products**

NEXARYA designs and engineers custom software systems, business platforms, and digital products tailored to organizational workflows. This repository contains the complete frontend web application, backend core API, SQLite database schemas, and administrative interfaces.

---

## 1. Overview

NEXARYA operates as an engineering studio building reliable, strictly typed web applications and internal tools. The platform features an editorial digital interface, authentic case study documentation, dynamic service catalogs, an interactive 5-stage project scoping engine, and an isolated administrative console for inquiry review, content management, and role-governed operations.

---

## 2. Technology Stack

The platform is constructed using modern, production-grade technologies:

### Frontend
- **React** (v19) — Declarative component architecture
- **TypeScript** (v5.7) — End-to-end static type safety
- **Vite** (v6.4) — High-performance frontend build tooling and bundler
- **Tailwind CSS** (v4.0) — Utility-first styling with custom design tokens
- **React Router** (v7.18) — Client-side declarative routing

### Backend & API
- **Node.js** (v20+) — Asynchronous runtime environment
- **Express** (v5.2) — HTTP server framework for RESTful endpoints
- **TypeScript** / **tsx** — Typed backend execution

### Database & Storage
- **SQLite** (v3 via `better-sqlite3`) — Embedded, high-performance relational database engine
- **WAL Mode** (Write-Ahead Logging) — Concurrent multi-reader architecture
- **Prepared Statements** — 100% parameterized queries for deterministic SQL security

### Security & Authentication
- **JSON Web Tokens (JWT)** (`jsonwebtoken`) — Cryptographically signed session tokens
- **bcryptjs** — Salted password hashing (10 rounds)
- **Role-Based Access Control (RBAC)** — Granular permissions for administrative operations

### Payments & Webhooks
- **Stripe Integration** — Payment intent sessions and checkout rails
- **Cryptographic HMAC Signature Verification** — Timing-safe webhook payload validation

---

## 3. Architecture

The codebase separates the presentation tier from the core transactional API:

```
┌─────────────────────────────────────────────────────────────┐
│                    NEXARYA WEB PLATFORM                     │
├──────────────────────────────┬──────────────────────────────┤
│      Frontend Layer          │       Backend API Core       │
│      (React 19 + Vite 6)     │      (Express 5 + SQLite)    │
│                              │                              │
│ • Public Editorial Pages     │ • Public Endpoints (/api/v1) │
│ • Interactive Scoping Engine │ • Auth Endpoints (/auth)     │
│ • Case Studies & Evidence    │ • Admin Management Endpoints │
│ • Admin Control Center       │ • Webhook HMAC Verification  │
└──────────────┬───────────────┴──────────────┬───────────────┘
               │                              │
               ▼                              ▼
    Static CDN / Nginx / Vite         SQLite (WAL Mode)
    Distribution (Port 3000)          nexarya.db (Port 5000)
=======
# NEXARYA — Full Stack Website

## Tech Stack
- **Backend:** Python Flask
- **Database:** MySQL
- **Frontend:** HTML, CSS, JavaScript (no framework, pure dark neon design)

---

## Project Structure
```
nexarya/
├── app.py                  # Main Flask application
├── schema.sql              # MySQL database schema + seed
├── requirements.txt
├── static/
│   ├── css/main.css        # Global styles
│   ├── js/main.js          # Canvas, cursor, animations
│   └── img/                # Co-founder photos go here
│       ├── mahesh.jpg
│       ├── sheel.jpg
│       ├── bhupesh.jpg
│       └── pravin.jpg
└── templates/
    ├── base.html           # Shared navbar/footer/canvas
    ├── index.html          # Homepage
    ├── about.html          # About + co-founders
    ├── services.html       # Services (5 sections)
    ├── portfolio.html      # 6 projects
    ├── pricing.html        # 3 plans + FAQ
    ├── blog.html           # 6 articles
    ├── contact.html        # Contact form
    ├── login.html          # User login
    ├── register.html       # User registration
    ├── dashboard.html      # User order dashboard
    ├── place_order.html    # Order placement form
    ├── order_detail.html   # Order tracking page
    └── admin/
        ├── login.html      # Admin login
        ├── base_admin.html # Admin sidebar layout
        ├── dashboard.html  # Admin KPIs + recent orders
        ├── orders.html     # All orders + status update
        └── users.html      # All registered users
>>>>>>> origin/main
```

---

<<<<<<< HEAD
## 4. Project Structure

```
nexarya_web/
├── public/                    # Static brand assets, evidence captures, robots, sitemap
│   ├── brand/                 # NEXARYA logos and emblems
│   ├── hero/                  # Architectural system artifacts
│   ├── projects/              # Verified case study device renders and evidence
│   │   └── stemfusion/        # STEMFUSION live screenshots and documentation
│   ├── favicon.svg            # Platform favicon
│   ├── robots.txt             # Search crawler exclusion rules
│   └── sitemap.xml            # Canonical search index
├── scripts/                   # Development evidence-generation helper scripts
├── server/                    # Backend API Core
│   ├── data/                  # SQLite runtime datastore (gitignored)
│   └── src/
│       ├── db/                # Database connection, schema.sql, and seed.ts
│       ├── middleware/        # JWT auth verification and RBAC guards
│       ├── routes/            # Auth, public, and admin endpoint routers
│       ├── services/          # Payments, email dispatch, and audit logging
│       └── server.ts          # Express application entrypoint
├── src/                       # Frontend Application
│   ├── admin/                 # Admin console layouts, pages, and components
│   ├── components/            # Reusable UI components (Hero, Work, Engineering, CTA)
│   ├── data/                  # Static constants, navigation links, and initial state
│   ├── pages/                 # Public route views (Home, Work, Solutions, Contact)
│   ├── types/                 # TypeScript interfaces and domain models
│   ├── App.tsx                # Master routing definition
│   ├── index.css              # Global styles and Tailwind imports
│   └── main.tsx               # React application entrypoint
├── .env.example               # Production environment variable contract
├── .gitignore                 # Excluded directories, databases, logs, and secrets
├── index.html                 # HTML entrypoint with metadata and typography links
├── package.json               # Dependencies and executable scripts
├── tsconfig.json              # TypeScript root configuration
└── vite.config.ts             # Vite bundler, path aliases, and proxy configuration
```

---

## 5. Prerequisites

- **Node.js:** `>= 20.0.0` (LTS recommended)
- **npm:** `>= 10.0.0`
- **Operating System:** Linux, macOS, or Windows

---

## 6. Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd nexarya_web
npm install
```

---

## 7. Environment Variables

Create your local `.env` file from the provided `.env.example` template:

```bash
cp .env.example .env
```

> **CRITICAL SECURITY NOTE:**
> Never commit `.env`, `.env.local`, or any file containing live secrets to version control. The `.gitignore` file is strictly configured to prevent environment credential leakage.

### Environment Variable Contract (`.env.example`)

| Variable | Description | Required in Production |
| :--- | :--- | :---: |
| `NODE_ENV` | Runtime environment (`development` or `production`) | **Yes** |
| `PORT` | Backend API HTTP port (default: `5000`) | **Yes** |
| `JWT_SECRET` | Secret key for signing session tokens (min 32 characters) | **Yes** |
| `ADMIN_DEFAULT_PASSWORD` | Initial password required when initializing admin users | **Yes (Production)** |
| `STRIPE_SECRET_KEY` | Stripe secret API key for transaction sessions | Optional / Billing |
| `PAYMENT_WEBHOOK_SECRET` | Stripe webhook signing secret (`whsec_...`) | Optional / Webhooks |
| `ADMIN_NOTIFICATION_EMAIL`| Destination inbox for project inquiries | Optional |
| `SMTP_HOST`, `SMTP_PORT`  | SMTP mailer host and port for notifications | Optional |
| `SMTP_USER`, `SMTP_PASS`  | SMTP credentials for transaction emails | Optional |
| `SMTP_FROM`               | Outgoing email sender header | Optional |

---

## 8. Development

To run the application in local development mode with live code reloading:

1. **Start the Backend API Server (Port 5000):**
   ```bash
   npm run server
   ```

2. **Start the Frontend Development Server (Port 3000):**
   ```bash
   npm run dev
   ```

The frontend Vite server automatically proxies `/api` requests to `http://localhost:5000`.

---

## 9. Production Build

To validate TypeScript types and build the optimized production client bundle:

```bash
npm run build
```

This executes `tsc && vite build`, outputting minified static assets to `dist/`.

To run typechecking independently without bundling:

```bash
npm run lint
```

---

## 10. Backend Runtime

In a production environment, launch the backend API engine using:

```bash
npm run server
```

The Express engine initializes the SQLite database, validates schemas, attaches middleware, and listens on the configured `PORT` (default `5000`).

To preview the built production frontend locally:

```bash
npm run preview
# or
npm run start
```

---

## 11. Health Check

The backend exposes an automated uptime health check:

- **Endpoint:** `GET /api/v1/health`
- **Response:**
  ```json
  {
    "status": "OPERATIONAL",
    "system": "NEXARYA_CORE_API",
    "version": "2.0.0",
    "timestamp": "2026-09-07T00:00:00.000Z"
  }
  ```

---

## 12. Database Architecture & Seed Safety

The application utilizes an embedded **SQLite** relational database located at `server/data/nexarya.db`.

### Concurrency & Durability Settings
- `journal_mode = WAL`: Write-Ahead Logging allows high-concurrency reads alongside transactional writes.
- `foreign_keys = ON`: Enforces relational constraints between users, case studies, inquiries, and audit logs.
- `synchronous = NORMAL`: Ensures data durability while minimizing disk I/O bottlenecks.

### Schema Initialization
When the backend starts, `initializeDatabase()` in `server/src/db/index.ts` automatically executes `server/src/db/schema.sql` using idempotent `CREATE TABLE IF NOT EXISTS` statements.

### Seed Script (`npm run seed`)
The seed script (`server/src/db/seed.ts`) populates initial application records:
- 4 Role-governed administrative accounts
- 8 Core engineering services/disciplines
- 2 Verified case studies (Railway Concession Management System & STEMFUSION)
- 3 Transparent commercial pricing models
- 2 Engineering insight essays
- 1 Authentic client testimonial record

> **IMPORTANT SEED SAFETY RULE:**
> Do NOT execute `npm run seed` blindly against an established production database containing live inquiry data or modified administrative credentials. The seed script uses `INSERT OR REPLACE` and is intended solely for initial bootstrapping.

---

## 13. Authentication & Role-Based Access Control (RBAC)

The administrative subsystem is protected by JWT authentication and granular RBAC middleware:

- **`SUPER_ADMIN`**: Full platform authority, user provisioning, system settings, and audit log inspection.
- **`ADMIN`**: Inquiry intake management, case study publishing, service catalog updates, and client review moderation.
- **`EDITOR`**: Technical insights writing and public content editing.
- **`FINANCE`**: Payment tracking, transaction auditing, and commercial records.

---

## 14. Payments Architecture

- **Provider:** Stripe Checkout API integration.
- **Webhook Integrity:** All incoming payment webhooks are verified using `crypto.timingSafeEqual` against the raw request buffer and `PAYMENT_WEBHOOK_SECRET`.
- **Audit Logs:** Every transaction lifecycle transition is committed to the database `payments` table and `audit_logs` record.

---

## 15. Public Routes & Navigation

| Route | Description |
| :--- | :--- |
| `/` | Homepage (Hero 5A, Selected Work, Engineering Workbench, Capabilities, Founders, Feedback, Inquiry) |
| `/solutions` | Solutions Catalog (Overview of 8 engineering disciplines) |
| `/solutions/:slug` | Solution Detail View (Granular capability checklists, workflows, and FAQs) |
| `/work` | Case Studies Index |
| `/work/railway-concession-management-system` | Railway Concession Management System Case Study |
| `/work/stemfusion` | STEMFUSION Educational Platform Case Study |
| `/process` | 4-Stage Engineering Process & Technical Methodology |
| `/about` | Studio Overview, Operating Principles, and Founding Team |
| `/insights` | Engineering Insights & Architectural Essays |
| `/pricing` | Commercial Engagement Models (Fixed-Scope, Dedicated Pod, Advisory) |
| `/contact` | 5-Stage Interactive Project Scoping & Inquiry Form |
| `/feedback` | Client Feedback & Experience Submission Form |
| `/privacy` | Data Privacy & Intellectual Property Ownership Policy |
| `/terms` | Commercial Terms of Service |
| `/admin/login` | Administrative Operations Login Gate |

---

## 16. Verified Project Evidence

The repository documents and showcases verified, completed software engineering work:

1. **Railway Concession Management System**
   - *Domain:* Enterprise Public Infrastructure / Workflow Automation
   - *Stack:* Python, Flask, MySQL, JavaScript, Docker, AWS
   - *Summary:* Centralized multi-role platform digitizing student concession verification and operational approvals.
   - *Asset Proof:* `public/projects/railway-device.png`

2. **STEMFUSION Educational Platform**
   - *Domain:* Educational Platform & Resource Distribution Hub
   - *Stack:* Python, Flask, MySQL, JavaScript, Tailwind CSS
   - *Live Production Site:* [https://stemfusion.in](https://stemfusion.in)
   - *Asset Proof:* `public/projects/stemfusion-device.png` and `public/projects/stemfusion/evidence/`

---

## 17. Security Specifications

- **Parameterized Queries:** All SQL operations use prepared statement bindings via `better-sqlite3`.
- **Anti-Bot Defense:** Public inquiry and feedback forms include transparent honeypot fields (`hp_field`) to mitigate automated spam without user friction.
- **Sanitized Error Responses:** The global server error handler never exposes raw stack traces or internal filesystem paths to HTTP clients.
- **Safe Outbound Links:** All external links include `rel="noopener noreferrer" target="_blank"`.

---

## 18. Deployment Notes

### Container & Server Setup
- The application can be hosted on AWS (EC2, ECS, or App Runner), DigitalOcean, or standard Linux VPS environments.
- **Persistent Storage:** Ensure the `server/data/` directory is mounted to a persistent volume (e.g., AWS EBS) so the SQLite database is preserved across container restarts.
- **Web Server / Reverse Proxy:** Nginx or AWS CloudFront should be placed in front of Express (`PORT 5000`) and the static frontend (`dist/` or `PORT 3000`) with SSL/TLS Full (Strict) certificates.
