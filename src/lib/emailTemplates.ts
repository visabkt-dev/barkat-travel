// ─── Barkat Travel — Branded Email Templates ──────────────────────────────

const BRAND = {
  gold:    "#D4AF37",
  dark:    "#0A1628",
  mid:     "#1e293b",
  text:    "#334155",
  muted:   "#94a3b8",
  white:   "#ffffff",
  green:   "#16a34a",
  wa:      "#25D366",
};

const WHATSAPP_NUMBER = "966500000000"; // ← update with real number

// ─── Shell: wraps all emails with consistent header/footer ────────────────
function shell(body: string, previewText = ""): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <meta name="x-apple-disable-message-reformatting"/>
  <title>Barkat Travel</title>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Helvetica Neue',Arial,sans-serif;">
  ${previewText ? `<div style="display:none;max-height:0;overflow:hidden;">${previewText}</div>` : ""}
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f1f5f9;">
    <tr><td align="center" style="padding:32px 16px;">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- HEADER -->
        <tr>
          <td style="background:${BRAND.dark};padding:28px 36px;text-align:center;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center">
                  <div style="display:inline-block;">
                    <span style="font-size:26px;font-weight:900;color:${BRAND.white};letter-spacing:-0.5px;">
                      Barkat <span style="color:${BRAND.gold};">Travel</span>
                    </span>
                    <div style="color:${BRAND.muted};font-size:11px;letter-spacing:3px;text-transform:uppercase;margin-top:4px;">
                      Umrah · Visa · Transport · Hotels
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- BODY -->
        ${body}

        <!-- FOOTER -->
        <tr>
          <td style="background:${BRAND.mid};padding:24px 36px;text-align:center;">
            <p style="margin:0 0 8px;font-size:12px;color:${BRAND.muted};">
              Barkat Travel Services · Saudi Arabia
            </p>
            <p style="margin:0;font-size:11px;color:#64748b;">
              You received this email because you submitted an inquiry on our website.
              <br/>© ${new Date().getFullYear()} Barkat Travel. All rights reserved.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Shared sections ──────────────────────────────────────────────────────
function divider(): string {
  return `<tr><td style="padding:0 36px;"><hr style="border:none;border-top:1px solid #e2e8f0;margin:0;"/></td></tr>`;
}

function waButton(label = "Message Us on WhatsApp"): string {
  return `
    <tr><td style="padding:28px 36px;text-align:center;">
      <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank"
         style="display:inline-block;background:${BRAND.wa};color:#ffffff;font-weight:800;
                font-size:14px;padding:14px 32px;border-radius:50px;text-decoration:none;
                letter-spacing:0.3px;">
        💬 ${label}
      </a>
    </td></tr>`;
}

function section(content: string): string {
  return `<tr><td style="padding:32px 36px;">${content}</td></tr>`;
}

function infoRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 0;width:140px;font-size:13px;color:${BRAND.muted};font-weight:600;vertical-align:top;">${label}</td>
      <td style="padding:8px 0;font-size:13px;color:${BRAND.text};font-weight:700;">${value}</td>
    </tr>`;
}

function badge(text: string, color = BRAND.gold): string {
  return `<span style="display:inline-block;background:${color}18;color:${color};
          font-size:11px;font-weight:800;padding:4px 12px;border-radius:50px;
          text-transform:uppercase;letter-spacing:0.5px;">${text}</span>`;
}

// ─── 1. BOOKING CONFIRMATION (to customer) ───────────────────────────────
export function bookingConfirmationEmail(data: {
  name: string;
  service_type: string;
  whatsapp: string;
  travel_date?: string;
  pickup?: string;
  dropoff?: string;
  passengers?: string;
  city?: string;
  check_in?: string;
  check_out?: string;
}): { subject: string; html: string } {
  const rows = [
    infoRow("Service", data.service_type),
    data.travel_date ? infoRow("Travel Date", data.travel_date) : "",
    data.pickup      ? infoRow("Pickup",       data.pickup)      : "",
    data.dropoff     ? infoRow("Drop-off",     data.dropoff)     : "",
    data.passengers  ? infoRow("Passengers",   data.passengers)  : "",
    data.city        ? infoRow("City",         data.city)        : "",
    data.check_in    ? infoRow("Check-in",     data.check_in)    : "",
    data.check_out   ? infoRow("Check-out",    data.check_out)   : "",
  ].filter(Boolean).join("");

  const body = `
    ${section(`
      <p style="margin:0 0 6px;font-size:20px;font-weight:900;color:${BRAND.dark};">
        Assalamu Alaikum, ${data.name}! 🌙
      </p>
      <p style="margin:0;font-size:14px;color:${BRAND.muted};">
        We have received your inquiry. Here's a summary:
      </p>
    `)}
    ${divider()}
    ${section(`
      <div style="margin-bottom:16px;">${badge("Inquiry Received", BRAND.gold)}</div>
      <table width="100%" cellpadding="0" cellspacing="0" border="0">${rows}</table>
    `)}
    ${divider()}
    ${section(`
      <div style="background:#fafafa;border-left:4px solid ${BRAND.gold};padding:16px 20px;border-radius:0 8px 8px 0;">
        <p style="margin:0 0 8px;font-size:13px;font-weight:800;color:${BRAND.dark};">What happens next?</p>
        <ol style="margin:0;padding-left:18px;font-size:13px;color:${BRAND.text};line-height:1.9;">
          <li>Our team reviews your requirements.</li>
          <li>We verify availability for your dates.</li>
          <li>A custom quote is sent to your WhatsApp within a few hours.</li>
          <li>You confirm — we handle the rest!</li>
        </ol>
      </div>
    `)}
    ${waButton("Get Instant Quote on WhatsApp")}
  `;

  return {
    subject: `✅ Inquiry Received — ${data.service_type} | Barkat Travel`,
    html:    shell(body, "We received your inquiry and will be in touch shortly!"),
  };
}

// ─── 2. ADMIN ALERT (new lead arrives) ───────────────────────────────────
export function adminAlertEmail(data: {
  name: string;
  whatsapp: string;
  email?: string;
  service_type: string;
  details?: string;
  source_page?: string;
  [key: string]: any;
}): { subject: string; html: string } {
  const rows = Object.entries(data)
    .filter(([k, v]) => v && !["details"].includes(k))
    .map(([k, v]) => infoRow(k.replace(/_/g, " "), String(v)))
    .join("");

  const body = `
    ${section(`
      <div style="margin-bottom:12px;">${badge("🚨 New Lead", "#ef4444")}</div>
      <p style="margin:0;font-size:22px;font-weight:900;color:${BRAND.dark};">${data.name}</p>
      <p style="margin:4px 0 0;font-size:13px;color:${BRAND.muted};">${data.service_type} · ${new Date().toLocaleString("en-US", { timeZone: "Asia/Riyadh" })} AST</p>
    `)}
    ${divider()}
    ${section(`<table width="100%" cellpadding="0" cellspacing="0" border="0">${rows}</table>`)}
    ${data.details ? `
      ${divider()}
      ${section(`
        <p style="margin:0 0 8px;font-size:12px;font-weight:800;color:${BRAND.muted};text-transform:uppercase;letter-spacing:1px;">Customer Message</p>
        <div style="background:#f8fafc;padding:16px;border-radius:8px;font-size:13px;color:${BRAND.text};line-height:1.7;white-space:pre-wrap;">${data.details}</div>
      `)}
    ` : ""}
    <tr><td style="padding:8px 36px 28px;text-align:center;">
      <a href="https://wa.me/${data.whatsapp.replace(/\D/g,'')}"
         style="display:inline-block;background:${BRAND.wa};color:#fff;font-weight:800;
                font-size:13px;padding:12px 28px;border-radius:50px;text-decoration:none;margin-right:8px;">
        💬 Reply on WhatsApp
      </a>
    </td></tr>
  `;

  return {
    subject: `🚨 New Lead: ${data.service_type} from ${data.name}`,
    html:    shell(body, `New booking inquiry from ${data.name}`),
  };
}

// ─── 3. STATUS UPDATE (confirmed / completed) ─────────────────────────────
export function statusUpdateEmail(data: {
  name: string;
  service_type: string;
  status: "confirmed" | "completed";
  admin_notes?: string;
}): { subject: string; html: string } {
  const isCompleted = data.status === "completed";
  const statusColor = isCompleted ? BRAND.green : BRAND.gold;
  const headline    = isCompleted
    ? `Your booking is complete! 🎉`
    : `Your booking is confirmed! ✅`;
  const subline     = isCompleted
    ? `We hope you had a wonderful journey. JazakAllah Khair for choosing Barkat Travel.`
    : `Great news! Your ${data.service_type} booking has been confirmed by our team.`;

  const body = `
    ${section(`
      <div style="margin-bottom:16px;">${badge(data.status.toUpperCase(), statusColor)}</div>
      <p style="margin:0 0 8px;font-size:22px;font-weight:900;color:${BRAND.dark};">${headline}</p>
      <p style="margin:0;font-size:14px;color:${BRAND.muted};">${subline}</p>
    `)}
    ${data.admin_notes ? `
      ${divider()}
      ${section(`
        <p style="margin:0 0 8px;font-size:12px;font-weight:800;color:${BRAND.muted};text-transform:uppercase;letter-spacing:1px;">Note from our team</p>
        <div style="background:#fafafa;border-left:4px solid ${statusColor};padding:14px 18px;border-radius:0 8px 8px 0;
                    font-size:13px;color:${BRAND.text};line-height:1.7;">${data.admin_notes}</div>
      `)}
    ` : ""}
    ${isCompleted ? `
      ${divider()}
      ${section(`
        <div style="background:#fafafa;padding:20px;border-radius:10px;text-align:center;">
          <p style="margin:0 0 12px;font-size:14px;font-weight:800;color:${BRAND.dark};">Enjoyed our service?</p>
          <p style="margin:0 0 16px;font-size:13px;color:${BRAND.muted};">Your review helps other pilgrims find trusted Umrah services.</p>
          <a href="${process.env.GOOGLE_REVIEW_LINK || "https://g.page/r/YOUR_PLACE_ID/review"}"
             style="display:inline-block;background:${BRAND.gold};color:${BRAND.dark};font-weight:800;
                    font-size:13px;padding:12px 28px;border-radius:50px;text-decoration:none;">
            ⭐ Leave a Google Review
          </a>
        </div>
      `)}
    ` : ""}
    ${waButton("Contact Us on WhatsApp")}
  `;

  return {
    subject: isCompleted
      ? `🎉 Trip Completed — Thank you, ${data.name}!`
      : `✅ Booking Confirmed — ${data.service_type} | Barkat Travel`,
    html: shell(body),
  };
}

// ─── 4. FOLLOW-UP EMAIL (3 days after inquiry, no response) ──────────────
export function followUpEmail(data: {
  name: string;
  service_type: string;
}): { subject: string; html: string } {
  const body = `
    ${section(`
      <p style="margin:0 0 8px;font-size:20px;font-weight:900;color:${BRAND.dark};">
        Still planning your trip, ${data.name}?
      </p>
      <p style="margin:0;font-size:14px;color:${BRAND.muted};">
        We noticed you enquired about <strong>${data.service_type}</strong> a few days ago.
        We'd love to help you finalize your plans!
      </p>
    `)}
    ${divider()}
    ${section(`
      <p style="font-size:13px;color:${BRAND.text};line-height:1.8;margin:0;">
        Our team is ready to offer you:<br/>
        ✅ Best available rates<br/>
        ✅ Instant WhatsApp confirmation<br/>
        ✅ Trusted, experienced Umrah service<br/>
        ✅ Flexible payment options
      </p>
    `)}
    ${divider()}
    ${waButton("Chat With Us Now")}
  `;

  return {
    subject: `Still planning? We're here to help — Barkat Travel`,
    html:    shell(body, "We'd love to help you finalize your Umrah plans."),
  };
}
