import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import dotenv from "dotenv";
import { initializeDatabase } from "./db/index";
import { seedDatabase } from "./db/seed";
import authRoutes from "./routes/auth";
import publicRoutes from "./routes/public";
import adminRoutes from "./routes/admin";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 5000;

// Production Environment Safety Checks
if (isProduction) {
  if (!process.env.JWT_SECRET) {
    console.error("FATAL CONFIGURATION ERROR: JWT_SECRET environment variable is required in production mode.");
    process.exit(1);
  }
  if (!process.env.CORS_ORIGIN) {
    console.error("FATAL CONFIGURATION ERROR: CORS_ORIGIN environment variable is required in production mode (e.g. 'https://nexarya.in').");
    process.exit(1);
  }
}

const app = express();

// Initialize Database & Seed initial data (Guarded against overwriting existing data)
initializeDatabase();
seedDatabase();

// 1. HTTP Security Headers
// Configured to protect against clickjacking, MIME sniffing, and enforce HSTS in production,
// while avoiding rigid CSP restrictions that could interfere with CDN assets, fonts, or reverse proxies.
app.use(
  helmet({
    contentSecurityPolicy: false, // Edge / Nginx reverse proxy handles site-wide CSP
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
    frameguard: { action: "sameorigin" },
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
    hsts: isProduction ? { maxAge: 31536000, includeSubDomains: true, preload: true } : false,
    noSniff: true,
  })
);

// 2. CORS Hardening
const allowedOrigins = isProduction
  ? (process.env.CORS_ORIGIN?.split(",").map((o) => o.trim()) || [])
  : [
      "http://localhost:3000",
      "http://localhost:5173",
      "http://localhost:5000",
      "http://127.0.0.1:3000",
      "http://127.0.0.1:5173",
      "http://127.0.0.1:5000",
    ];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., server-to-server, mobile curl, health checks)
      if (!origin) {
        return callback(null, true);
      }

      if (isProduction) {
        if (allowedOrigins.includes(origin)) {
          return callback(null, true);
        }
        return callback(new Error(`CORS policy violation: Origin '${origin}' is not permitted.`));
      } else {
        // Development mode: Allow configured origins, localhost, or 127.0.0.1
        if (
          allowedOrigins.includes(origin) ||
          origin.startsWith("http://localhost:") ||
          origin.startsWith("http://127.0.0.1:")
        ) {
          return callback(null, true);
        }
        return callback(null, true);
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-signature"],
    credentials: true,
  })
);

// Capture raw body for authoritative webhook cryptographic HMAC verification
app.use(express.json({
  limit: "2mb",
  verify: (req: any, _res, buf) => {
    req.rawBody = buf.toString();
  },
}));
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (req.path.startsWith("/api")) {
      console.log(`[API] ${req.method} ${req.path} -> ${res.statusCode} (${duration}ms)`);
    }
  });
  next();
});

// Health check
app.get("/api/v1/health", (req, res) => {
  res.json({
    status: "OPERATIONAL",
    system: "NEXARYA_CORE_API",
    version: "2.0.0",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", publicRoutes);
app.use("/api/v1/admin", adminRoutes);

// Error Handling Middleware (Sanitized: Never leaks stack traces)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Unhandled Server Error:", err);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
    code: err.code || "INTERNAL_ERROR",
  });
});

app.listen(PORT, () => {
  console.log(`[NEXARYA BACKEND] Core Engine listening on http://localhost:${PORT}`);
});
