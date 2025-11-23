import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

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

  // Environment variable guards
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error('[Contact API] Missing required environment variables: GMAIL_USER or GMAIL_APP_PASSWORD');
    return NextResponse.json(
      { ok: false, error: 'Email service is not configured. Please contact support.' },
      { status: 500 }
    );
  }

  // After validation, we know gmailUser is defined
  const contactToEmail = process.env.CONTACT_TO_EMAIL || gmailUser;

  try {
    const emailBody = `
New contact form submission:

Name: ${form.name}
Email: ${form.email}
Organization: ${form.organization || "N/A"}
Topic: ${form.topic || "N/A"}

Message:
${form.message || "N/A"}

---
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}
    `.trim();

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Send email
    await transporter.sendMail({
      from: gmailUser,
      to: contactToEmail,
      subject: `Contact Form: ${form.topic || "New inquiry"}`,
      text: emailBody,
      replyTo: String(form.email),
    });

    console.log('[Contact API] Message sent successfully:', {
      name: form.name,
      email: form.email,
      topic: form.topic,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[Contact API] Email delivery error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { ok: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
