-- NEXARYA Database Schema (SQLite / WAL Mode)

CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('SUPER_ADMIN', 'ADMIN', 'EDITOR', 'FINANCE')),
    is_active INTEGER NOT NULL DEFAULT 1,
    last_login_at TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS inquiries (
    id TEXT PRIMARY KEY,
    reference_id TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    company TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    project_type TEXT NOT NULL,
    budget TEXT NOT NULL,
    timeline TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'NEW' CHECK(status IN ('NEW', 'IN_REVIEW', 'CONTACTED', 'ARCHIVED')),
    internal_notes TEXT,
    ip_address TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS case_studies (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    client_type TEXT NOT NULL,
    overview TEXT NOT NULL,
    challenge TEXT NOT NULL,
    solution TEXT NOT NULL,
    architecture TEXT NOT NULL,
    features TEXT NOT NULL, -- JSON array
    technologies TEXT NOT NULL, -- JSON array
    image TEXT NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0,
    published INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS services (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    number TEXT NOT NULL,
    title TEXT NOT NULL,
    short_desc TEXT NOT NULL,
    full_desc TEXT NOT NULL,
    capabilities TEXT NOT NULL, -- JSON array
    workflow TEXT NOT NULL, -- JSON array
    tech_stack TEXT NOT NULL, -- JSON array
    faq TEXT NOT NULL, -- JSON array
    sort_order INTEGER NOT NULL DEFAULT 0,
    published INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS pricing_plans (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    price TEXT NOT NULL,
    currency TEXT NOT NULL DEFAULT 'USD',
    billing_type TEXT NOT NULL,
    features TEXT NOT NULL, -- JSON array
    featured INTEGER NOT NULL DEFAULT 0,
    published INTEGER NOT NULL DEFAULT 1,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS articles (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    cover_image TEXT,
    author TEXT NOT NULL,
    category TEXT NOT NULL,
    tags TEXT NOT NULL, -- JSON array
    status TEXT NOT NULL DEFAULT 'PUBLISHED' CHECK(status IN ('DRAFT', 'PUBLISHED')),
    published_at TEXT,
    seo_title TEXT,
    seo_description TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS testimonials (
    id TEXT PRIMARY KEY,
    reference_id TEXT UNIQUE,
    client_name TEXT NOT NULL,
    designation TEXT NOT NULL,
    company TEXT NOT NULL,
    project TEXT,
    rating INTEGER NOT NULL DEFAULT 5,
    quote TEXT NOT NULL,
    recommendation TEXT,
    photo TEXT,
    company_logo TEXT,
    consent_website INTEGER NOT NULL DEFAULT 1,
    consent_social INTEGER NOT NULL DEFAULT 0,
    status TEXT NOT NULL DEFAULT 'PENDING' CHECK(status IN ('PENDING', 'APPROVED', 'REJECTED')),
    published INTEGER NOT NULL DEFAULT 0, -- Default unpublished to ensure authentic verification
    featured INTEGER NOT NULL DEFAULT 0,
    sort_order INTEGER NOT NULL DEFAULT 0,
    published_at TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS payments (
    id TEXT PRIMARY KEY,
    transaction_id TEXT UNIQUE NOT NULL,
    reference_id TEXT NOT NULL,
    amount REAL NOT NULL,
    currency TEXT NOT NULL DEFAULT 'USD',
    status TEXT NOT NULL CHECK(status IN ('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED')),
    client_email TEXT NOT NULL,
    client_name TEXT NOT NULL,
    project_ref TEXT,
    provider TEXT NOT NULL DEFAULT 'STRIPE',
    provider_session_id TEXT,
    raw_metadata TEXT, -- JSON
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS audit_logs (
    id TEXT PRIMARY KEY,
    actor_id TEXT,
    actor_email TEXT,
    action TEXT NOT NULL,
    resource TEXT NOT NULL,
    resource_id TEXT,
    metadata TEXT, -- JSON
    ip_address TEXT,
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS notifications (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT NOT NULL CHECK(type IN ('INQUIRY', 'PAYMENT', 'SECURITY', 'SYSTEM', 'FEEDBACK')),
    is_read INTEGER NOT NULL DEFAULT 0,
    link TEXT,
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    description TEXT,
    updated_at TEXT NOT NULL
);

-- Indexes for optimal lookup and query performance
CREATE INDEX IF NOT EXISTS idx_inquiries_ref ON inquiries(reference_id);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_testimonials_ref ON testimonials(reference_id);
CREATE INDEX IF NOT EXISTS idx_testimonials_status ON testimonials(status);
CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_audit_created ON audit_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_payments_tx ON payments(transaction_id);
