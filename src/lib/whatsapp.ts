/**
 * WhatsApp Sender — supports two modes:
 *
 * 1. META_WHATSAPP_TOKEN + META_WHATSAPP_PHONE_ID set in .env
 *    → sends via Meta WhatsApp Cloud API (production-ready)
 *
 * 2. Fallback: logs the message   (dev / no API key mode)
 *    → returns { success: false, fallback: true }
 */

interface WAResult {
  success: boolean;
  messageId?: string;
  fallback?: boolean;
  error?: string;
}

export async function sendWhatsAppMessage(
  to: string,
  message: string
): Promise<WAResult> {
  const token   = process.env.META_WHATSAPP_TOKEN;
  const phoneId = process.env.META_WHATSAPP_PHONE_ID;

  // ── Meta Cloud API path ──────────────────────────────────────────────────
  if (token && phoneId) {
    // Normalize: strip non-digits then ensure country code
    const normalized = to.replace(/\D/g, "");
    const waTo = normalized.startsWith("0")
      ? "966" + normalized.slice(1)   // Saudi local → international
      : normalized;

    const body = {
      messaging_product: "whatsapp",
      to: waTo,
      type: "text",
      text: { body: message },
    };

    try {
      const res = await fetch(
        `https://graph.facebook.com/v19.0/${phoneId}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const json = await res.json();

      if (!res.ok) {
        console.error("WhatsApp API error:", json);
        return { success: false, error: JSON.stringify(json) };
      }

      return {
        success:   true,
        messageId: json.messages?.[0]?.id,
      };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }

  // ── Fallback: log only ──────────────────────────────────────────────────
  console.log(`[WhatsApp FALLBACK] To: ${to}\n${message}\n`);
  return { success: false, fallback: true };
}
