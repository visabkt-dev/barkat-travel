/**
 * Lead Scoring — TypeScript mirror of the Postgres function.
 * Used on the frontend to preview scores before DB insert,
 * and in API routes for instant scoring without a DB round-trip.
 *
 * Rule weights (max 100):
 *   +20  Has WhatsApp number
 *   +10  Has email address
 *   +30  Travel date ≤ 30 days away  (urgent)
 *   +20  Travel date 31–90 days away
 *   +10  Travel date > 90 days away
 *   +20  2+ passengers
 *   +20  Message length > 50 chars
 *   +10  Message length > 20 chars
 */

export interface ScoringInput {
  whatsapp?:        string;
  email?:           string;
  travel_date?:     string;        // "YYYY-MM-DD"
  passengers?:      string;
  additional_info?: string;
  details?:         string;
}

export interface ScoreResult {
  score:    number;                // 0–100
  category: "hot" | "warm" | "cold";
  breakdown: Record<string, number>;
}

export function calculateLeadScore(input: ScoringInput): ScoreResult {
  const breakdown: Record<string, number> = {};
  let score = 0;

  // +20 Has WhatsApp
  if (input.whatsapp && input.whatsapp.replace(/\D/g, "").length >= 7) {
    breakdown["Has WhatsApp"] = 20;
    score += 20;
  }

  // +10 Has Email
  if (input.email && input.email.includes("@")) {
    breakdown["Has Email"] = 10;
    score += 10;
  }

  // Travel date urgency
  if (input.travel_date) {
    const travelMs  = new Date(input.travel_date).getTime();
    const todayMs   = Date.now();
    const daysAway  = Math.round((travelMs - todayMs) / 86_400_000);

    if (daysAway >= 0 && daysAway <= 30) {
      breakdown["Travel date ≤30 days"] = 30;
      score += 30;
    } else if (daysAway > 30 && daysAway <= 90) {
      breakdown["Travel date 31–90 days"] = 20;
      score += 20;
    } else if (daysAway > 90) {
      breakdown["Travel date >90 days"] = 10;
      score += 10;
    }
  }

  // +20 Multiple passengers
  const paxRaw = (input.passengers || "").replace(/\D/g, "");
  if (paxRaw && parseInt(paxRaw) >= 2) {
    breakdown["2+ Passengers"] = 20;
    score += 20;
  }

  // Message detail
  const msgLen = Math.max(
    (input.additional_info || "").trim().length,
    (input.details         || "").trim().length
  );
  if (msgLen > 50) {
    breakdown["Detailed message (>50)"] = 20;
    score += 20;
  } else if (msgLen > 20) {
    breakdown["Message provided (>20)"] = 10;
    score += 10;
  }

  const capped = Math.min(score, 100);

  return {
    score:    capped,
    category: capped >= 70 ? "hot" : capped >= 40 ? "warm" : "cold",
    breakdown,
  };
}

// UI helpers ──────────────────────────────────────────────────────────────────

export const SCORE_COLORS = {
  hot:  { bg: "rgba(239,68,68,0.15)",  text: "#ef4444", label: "🔥 Hot"  },
  warm: { bg: "rgba(245,158,11,0.15)", text: "#f59e0b", label: "☀️ Warm" },
  cold: { bg: "rgba(59,130,246,0.15)", text: "#3b82f6", label: "❄️ Cold" },
} as const;

export type ScoreCategory = keyof typeof SCORE_COLORS;
