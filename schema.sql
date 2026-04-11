-- ================================================================
-- NEXARYA DATABASE SCHEMA
-- Run: mysql -u root -p < schema.sql
-- ================================================================

CREATE DATABASE IF NOT EXISTS nexarya_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE nexarya_db;

-- ── TABLE 1: ADMINS ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS admins (
    admin_id     INT AUTO_INCREMENT PRIMARY KEY,
    username     VARCHAR(50) NOT NULL UNIQUE,
    email        VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at   DATETIME DEFAULT NOW()
);

-- ── TABLE 2: USERS ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
    user_id      INT AUTO_INCREMENT PRIMARY KEY,
    name         VARCHAR(100) NOT NULL,
    email        VARCHAR(150) NOT NULL UNIQUE,   -- 1 email = 1 user (UNIQUE enforced)
    password_hash VARCHAR(255) NOT NULL,
    phone        VARCHAR(15) NOT NULL,
    created_at   DATETIME DEFAULT NOW()
);

-- ── TABLE 3: ORDERS ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS orders (
    order_id            INT AUTO_INCREMENT PRIMARY KEY,
    user_id             INT NOT NULL,
    order_domain        VARCHAR(200) NOT NULL,   -- e.g. "E-commerce website"
    details             TEXT NOT NULL,           -- project description
    user_location       VARCHAR(200) NOT NULL,
    plan_selected       ENUM('Basic','Standard','Premium') NOT NULL,
    tracking_status     ENUM('Pending','In Review','In Progress','Testing','Completed','Cancelled') DEFAULT 'Pending',
    order_date          DATETIME DEFAULT NOW(),
    order_complete_date DATETIME NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- ── SEED: Default Admin ───────────────────────────────────────
-- Password: admin@nexarya123  (bcrypt hash below)
-- To generate a new hash, run: python3 -c "import bcrypt; print(bcrypt.hashpw(b'admin@nexarya123', bcrypt.gensalt()).decode())"
INSERT IGNORE INTO admins (username, email, password_hash) VALUES
('nexarya_admin', 'admin@nexarya.com',
 '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/lewuLBV3g8J7pJJAi');
-- NOTE: The above hash is a placeholder. Generate your own with the command above.
