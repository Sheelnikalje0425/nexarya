import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { initializeDatabase } from "./db/index";
import { seedDatabase } from "./db/seed";
import authRoutes from "./routes/auth";
import publicRoutes from "./routes/public";
import adminRoutes from "./routes/admin";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Database & Seed initial data
initializeDatabase();
seedDatabase();

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-signature"],
}));

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
