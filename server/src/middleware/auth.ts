import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("FATAL: JWT_SECRET environment variable is missing in production environment.");
    }
    return "dev_local_development_jwt_secret_key_2026";
  }
  return secret;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "FINANCE";
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

export function generateToken(user: AuthUser): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    getJwtSecret(),
    { expiresIn: "12h" }
  );
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Authentication required", code: "UNAUTHORIZED" });
    return;
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, getJwtSecret()) as AuthUser;
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid or expired session token", code: "TOKEN_EXPIRED" });
    return;
  }
}

export function requireRole(allowedRoles: ("SUPER_ADMIN" | "ADMIN" | "EDITOR" | "FINANCE")[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      res.status(401).json({ error: "Authentication required", code: "UNAUTHORIZED" });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({
        error: `Forbidden: Role '${req.user.role}' lacks sufficient privileges for this operation`,
        code: "FORBIDDEN",
      });
      return;
    }

    next();
  };
}
