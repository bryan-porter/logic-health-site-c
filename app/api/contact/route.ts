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

  if (form.website && String(form.website).trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const required = ["name", "email"];
  const missing = required.filter((k) => !form[k] || String(form[k]).trim() === "");
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  return NextResponse.json({ ok: true });
}
