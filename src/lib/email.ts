import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM   = "Barkat Travel <onboarding@resend.dev>";
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1500;

interface SendOptions {
  to:         string;
  subject:    string;
  html:       string;
  template?:  string;
  bookingId?: string;
  metadata?:  Record<string, any>;
}

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

function sleep(ms: number) {
  return new Promise<void>((res) => setTimeout(res, ms));
}

/**
 * sendEmail — sends via Resend with up to MAX_RETRIES retries.
 * Logs every attempt (success or failure) to email_logs table.
 */
export async function sendEmail(opts: SendOptions): Promise<{ success: boolean; resendId?: string; error?: string }> {
  const supabase = getSupabase();

  // Create initial log record
  const { data: logRow } = await supabase
    .from("email_logs")
    .insert({
      recipient:  opts.to,
      subject:    opts.subject,
      template:   opts.template || "custom",
      status:     "pending",
      attempts:   0,
      booking_id: opts.bookingId || null,
      metadata:   opts.metadata  || null,
    })
    .select("id")
    .single();

  const logId = logRow?.id;

  let lastError = "";
  let resendId: string | undefined;

  for (let attempt = 1; attempt <= MAX_RETRIES + 1; attempt++) {
    try {
      const result = await resend.emails.send({
        from:    FROM,
        to:      opts.to,
        subject: opts.subject,
        html:    opts.html,
      });

      if (result.error) {
        throw new Error(result.error.message || "Resend API error");
      }

      resendId = result.data?.id;

      // Mark SUCCESS in log
      if (logId) {
        await supabase
          .from("email_logs")
          .update({
            status:    "sent",
            attempts:  attempt,
            sent_at:   new Date().toISOString(),
            resend_id: resendId,
            error:     null,
          })
          .eq("id", logId);
      }

      return { success: true, resendId };

    } catch (err: any) {
      lastError = err?.message || String(err);
      console.error(`Email attempt ${attempt} failed: ${lastError}`);

      if (attempt <= MAX_RETRIES) {
        // Update log with current attempt count before retrying
        if (logId) {
          await supabase
            .from("email_logs")
            .update({ attempts: attempt, error: lastError })
            .eq("id", logId);
        }
        await sleep(RETRY_DELAY_MS * attempt); // exponential-ish back-off
      }
    }
  }

  // All retries exhausted — mark FAILED
  if (logId) {
    await supabase
      .from("email_logs")
      .update({
        status:   "failed",
        attempts: MAX_RETRIES + 1,
        error:    lastError,
      })
      .eq("id", logId);
  }

  console.error(`Email to ${opts.to} failed after ${MAX_RETRIES + 1} attempts.`);
  return { success: false, error: lastError };
}
