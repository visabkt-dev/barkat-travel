import crypto from "crypto";

const SECRET = process.env.ADMIN_SECRET || "barkat_admin_secret_2026_change_me";

export function verifyAdminToken(token: string | undefined): boolean {
  if (!token) return false;
  try {
    const [data, sig] = token.split(".");
    if (!data || !sig) return false;
    const expected = crypto.createHmac("sha256", SECRET).update(data).digest("base64url");
    if (sig !== expected) return false;
    const payload = JSON.parse(Buffer.from(data, "base64url").toString());
    if (payload.exp && Date.now() > payload.exp) return false;
    return payload.role === "admin";
  } catch {
    return false;
  }
}
