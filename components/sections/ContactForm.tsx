"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data, // send as form-data to keep it simple
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json?.error || "Submission failed");
      }
      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-800">
            Full name<span className="text-primary-700"> *</span>
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 shadow-sm outline-none ring-primary-600 focus:ring-2"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-800">
            Work email<span className="text-primary-700"> *</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 shadow-sm outline-none ring-primary-600 focus:ring-2"
            placeholder="jane@practice.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-neutral-800">
            Organization / Practice<span className="text-primary-700"> *</span>
          </label>
          <input
            id="organization"
            name="organization"
            required
            className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 shadow-sm outline-none ring-primary-600 focus:ring-2"
            placeholder="Acme Primary Care"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-neutral-800">
            Role / Title
          </label>
          <input
            id="role"
            name="role"
            className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 shadow-sm outline-none ring-primary-600 focus:ring-2"
            placeholder="Practice admin, CMIO, Hospital ops, etc."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-neutral-800">
            Topic<span className="text-primary-700"> *</span>
          </label>
          <select
            id="topic"
            name="topic"
            required
            className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 shadow-sm outline-none ring-primary-600 focus:ring-2"
            defaultValue="Strategy Call"
          >
            <option>Strategy Call</option>
            <option>Implementation</option>
            <option>Pricing</option>
            <option>General</option>
          </select>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-800">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 shadow-sm outline-none ring-primary-600 focus:ring-2"
            placeholder="(555) 555-5555"
          />
        </div>
        <div>
          <label htmlFor="panelSize" className="block text-sm font-medium text-neutral-800">
            Panel size (approx)
          </label>
          <select
            id="panelSize"
            name="panelSize"
            className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 shadow-sm outline-none ring-primary-600 focus:ring-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option>{"< 1,000"}</option>
            <option>1,000–5,000</option>
            <option>5,000–20,000</option>
            <option>{"> 20,000"}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-800">
          How can we help?<span className="text-primary-700"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 shadow-sm outline-none ring-primary-600 focus:ring-2"
          placeholder="Tell us about your goals, population, payers, and timeline."
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <p className="text-xs text-neutral-600">
          HIPAA &amp; SOC 2 | BAA available | EHR‑friendly (Epic, eCW, DrChrono, Veradigm)
        </p>
      </div>

      {status === "success" && (
        <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800">
          Thanks—your request is in. We'll reply within one business day.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          Something went wrong. {errorMsg || "Please try again."}
        </div>
      )}
    </form>
  );
}
