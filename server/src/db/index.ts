import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DATA_DIR = path.resolve(process.cwd(), "server", "data");
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const DB_PATH = path.join(DATA_DIR, "nexarya.db");

// Initialize Database connection
export const db = new Database(DB_PATH);

// Enable WAL mode & Foreign Keys for robust production concurrency
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");
db.pragma("synchronous = NORMAL");

// Execute Schema initialization & migrations
export function initializeDatabase() {
  const schemaPath = path.resolve(process.cwd(), "server", "src", "db", "schema.sql");
  if (fs.existsSync(schemaPath)) {
    // Check if testimonials table exists and needs columns added
    try {
      const tableInfo = db.prepare("PRAGMA table_info(testimonials)").all() as any[];
      const cols = tableInfo.map((c) => c.name);

      if (tableInfo.length > 0 && !cols.includes("reference_id")) {
        // Drop and recreate testimonials with updated schema
        db.exec("DROP TABLE IF EXISTS testimonials");
      }
    } catch {
      // Table does not exist yet
    }

    const schemaSql = fs.readFileSync(schemaPath, "utf-8");
    db.exec(schemaSql);
  }
}
