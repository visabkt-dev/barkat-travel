import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";

// ─── Zod Validation ───────────────────────────────────────────────────────
const LoginSchema = z.object({
  username: z.string().min(1).max(50).trim(),
  password: z.string().min(1).max(100),
});

// ─── Simple signed token generator ───────────────────────────────────────
// Signs a payload with ADMIN_SECRET so it can't be forged
function signToken(payload: object): string {
  const secret = process.env.ADMIN_SECRET || "barkat_admin_secret_2026_change_me";
  const data   = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig    = crypto.createHmac("sha256", secret).update(data).digest("base64url");
  return `${data}.${sig}`;
}

export function verifyToken(token: string): { valid: boolean; payload?: any } {
  try {
    const secret = process.env.ADMIN_SECRET || "barkat_admin_secret_2026_change_me";
    const [data, sig] = token.split(".");
    const expected    = crypto.createHmac("sha256", secret).update(data).digest("base64url");
    if (sig !== expected) return { valid: false };
    const payload = JSON.parse(Buffer.from(data, "base64url").toString());
    // Check expiry
    if (payload.exp && Date.now() > payload.exp) return { valid: false };
    return { valid: true, payload };
  } catch {
    return { valid: false };
  }
}

// ─── Rate limit for login (max 10 attempts per IP per 15 min) ────────────
const loginAttempts = new Map<string, { count: number; firstReq: number }>();
function isLoginRateLimited(ip: string): boolean {
  const now = Date.now();
  const WINDOW = 15 * 60_000; // 15 minutes
  const MAX    = 10;
  const record = loginAttempts.get(ip);
  if (!record || now - record.firstReq > WINDOW) {
    loginAttempts.set(ip, { count: 1, firstReq: now });
    return false;
  }
  if (record.count >= MAX) return true;
  record.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isLoginRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many login attempts. Try again in 15 minutes." },
      { status: 429 }
    );
  }

  try {
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
    }

    const parsed = LoginSchema.safeParse(rawBody);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: "Invalid credentials format" }, { status: 400 });
    }

    const { username, password } = parsed.data;
    const adminUser = process.env.ADMIN_USERNAME || "admin";
    const adminPass = process.env.ADMIN_PASSWORD || "barkat2026";

    if (username === adminUser && password === adminPass) {
      // Create a signed token with 24h expiry
      const token = signToken({
        user: username,
        role: "admin",
        exp:  Date.now() + 24 * 60 * 60 * 1000, // 24 hours
        iat:  Date.now(),
      });

      const response = NextResponse.json({ success: true });
      response.cookies.set("admin_session", token, {
        httpOnly: true,
        secure:   process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge:   60 * 60 * 24, // 24 hours
        path:     "/",
      });
      return response;
    }

    return NextResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
