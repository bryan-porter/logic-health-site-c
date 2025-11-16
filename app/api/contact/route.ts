import { NextResponse } from "next/server";

export async function POST(req: Request) {
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

  const required = ["name", "email", "organization", "topic", "message"];
  const missing = required.filter((k) => !form[k] || String(form[k]).trim() === "");
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  // Basic server‑side logging (replace with email/Slack/CRM integration later)
  console.log("[Contact] New submission", {
    name: form.name,
    email: form.email,
    organization: form.organization,
    role: form.role,
    topic: form.topic,
    phone: form.phone,
    panelSize: form.panelSize,
    message: form.message,
    ts: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
