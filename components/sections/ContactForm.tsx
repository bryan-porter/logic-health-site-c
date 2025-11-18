"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Program =
  | "AWV"
  | "CCM"
  | "RPM"
  | "BHI"
  | "PCM"
  | "RTM"
  | "TCM"
  | "CHI & PIN"
  | "TEAMs";

const ALL_PROGRAMS: Program[] = [
  "AWV",
  "CCM",
  "RPM",
  "BHI",
  "PCM",
  "RTM",
  "TCM",
  "CHI & PIN",
  "TEAMs",
];

export default function ContactForm() {
  const [programs, setPrograms] = React.useState<Program[]>([]);
  const [downloading, setDownloading] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  function toggleProgram(p: Program) {
    setPrograms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("programs", programs.join(", "));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        const message = payload?.error || "Something went wrong. Please try again.";
        setError(message);
        return;
      }

      const payload = await res.json();
      if (payload?.ok) {
        setSuccess(true);
        (document.getElementById("contact-title") as HTMLElement | null)?.focus();
        window.location.href = "/contact/thank-you";
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleDownloadSummary(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setDownloading(true);
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (!form) return;

    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      organization: data.get("organization"),
      role: data.get("role"),
      orgType: data.get("orgType"),
      ehr: data.get("ehr"),
      programs,
      message: data.get("message"),
      consent: data.get("consent") === "on",
      generatedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.download = "logic-hm-inquiry.json";
    a.href = url;
    a.click();
    URL.revokeObjectURL(url);
    setDownloading(false);
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
      aria-labelledby="contact-title"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <div>
          <label htmlFor="name" className="text-sm font-medium text-neutral-900">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Dr. Jane Smith"
            className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-neutral-900">
            Work email *
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            autoComplete="email"
            placeholder="jane.smith@hospital.org"
            className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label htmlFor="organization" className="text-sm font-medium text-neutral-900">
            Organization *
          </label>
          <input
            id="organization"
            name="organization"
            required
            type="text"
            placeholder="River Valley Community Hospital"
            className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label htmlFor="role" className="text-sm font-medium text-neutral-900">
            Role
          </label>
          <select
            id="role"
            name="role"
            className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none focus:ring-2 focus:ring-primary-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select role
            </option>
            <option>Physician</option>
            <option>Administrator</option>
            <option>CIO / IT</option>
            <option>Care Manager</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="orgType" className="text-sm font-medium text-neutral-900">
            Organization type
          </label>
          <select
            id="orgType"
            name="orgType"
            className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none focus:ring-2 focus:ring-primary-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select type
            </option>
            <option>Outpatient practice</option>
            <option>FQHC / RHC</option>
            <option>Small hospital</option>
            <option>Health system</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="ehr" className="text-sm font-medium text-neutral-900">
            EHR (optional)
          </label>
          <input
            id="ehr"
            name="ehr"
            type="text"
            placeholder="Epic, eCW, Veradigm…"
            className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-neutral-900">Programs of interest</p>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {ALL_PROGRAMS.map((p) => (
            <label key={p} className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={programs.includes(p)}
                onChange={() => toggleProgram(p)}
                className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-neutral-800">{p}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-neutral-900">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Share specialty lines, target cohorts, or timelines…"
          className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <label className="inline-flex items-start gap-2">
        <input
          type="checkbox"
          name="consent"
          className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
        />
        <span className="text-sm text-neutral-700">
          I agree to be contacted about LogicHM services. We don't sell personal information.
        </span>
      </label>

      <div className="flex flex-col items-start gap-3 sm:flex-row">
        <Button variant="primary" className="gap-2" type="submit" disabled={submitting}>
          {submitting ? "Submitting…" : "Submit"}
        </Button>
        <button
          type="button"
          onClick={handleDownloadSummary}
          className={cn(
            "inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          )}
          disabled={downloading}
        >
          {downloading ? "Preparing…" : "Download inquiry (JSON)"}
        </button>
        <a
          href="#schedule"
          className="text-sm font-medium text-primary-700 underline underline-offset-4"
        >
          Prefer to schedule a 15‑minute call?
        </a>
      </div>

      <p className="text-xs text-neutral-500">
        We will review your inquiry and respond soon. If you experience issues, use "Download inquiry" and email it to us.
      </p>
      <p role="status" aria-live="polite" className="sr-only">{error ? `Error: ${error}` : success ? "Submitted" : ""}</p>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
