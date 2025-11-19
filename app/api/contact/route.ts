import { NextResponse } from "next/server";

// In-memory rate limit: 20 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(req: Request) {
  // Rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
             req.headers.get("x-real-ip") ||
             "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let form: Record<string, unknown> = {};

  try {
    const ct = req.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      form = await req.json();
    } else {
      const fd = await req.formData();
      fd.forEach((v, k) => {
        form[k] = typeof v === "string" ? v : v.name;
      });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  // Honeypot check
  if (form.website && String(form.website).trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Validation
  const required = ["name", "email"];
  const missing = required.filter((k) => !form[k] || String(form[k]).trim() === "");
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  // Email delivery
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
  const toEmail = process.env.CONTACT_TO_EMAIL || "hello@logichm.com";

  if (!apiKey) {
    // Fail-open in dev: accept but don't send
    return NextResponse.json(
      { ok: true, note: "Email provider not configured" },
      { status: 202 }
    );
  }

  try {
    const emailBody = `
New contact form submission:

Name: ${form.name}
Email: ${form.email}
Organization: ${form.organization || "N/A"}
Topic: ${form.topic || "N/A"}

Message:
${form.message || "N/A"}
    `.trim();

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        subject: `Contact Form: ${form.topic || "New inquiry"}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Email delivery failed:", response.status);
      return NextResponse.json(
        { ok: false, error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email delivery error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { ok: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
