import rateLimit from "express-rate-limit";

// Rate limiter for public project inquiry submissions (POST /api/v1/inquiries)
export const inquiryRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many project inquiries from this IP address. Please try again after 15 minutes.",
    code: "RATE_LIMITED",
  },
  statusCode: 429,
});

// Rate limiter for public feedback submissions (POST /api/v1/feedback & POST /api/v1/feedback/invite/:token)
export const feedbackRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many feedback submissions from this IP address. Please try again after 15 minutes.",
    code: "RATE_LIMITED",
  },
  statusCode: 429,
});

// Rate limiter for administrative authentication (POST /api/v1/auth/login)
export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many login attempts from this IP address. Please try again after 15 minutes.",
    code: "RATE_LIMITED",
  },
  statusCode: 429,
});
