"use client";

import { useState } from "react";
import { submitLeadForm, LeadFormInput } from "@/lib/leadFormClient";
import { trackEvent } from "@/lib/tracking";

const FORM_ID = "demo-request-v1";

export default function DemoRequestForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handleInteraction = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("form_started", { form_id: FORM_ID });
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const organization = formData.get("organization") as string;

    if (!email || !name || !organization) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    const role = formData.get("role") as string;
    const providerCountRaw = formData.get("provider_count") as string;

    const input: LeadFormInput = {
      email,
      name,
      organization,
      role: role || undefined,
      provider_count: providerCountRaw ? Number(providerCountRaw) : undefined,
      form_id: FORM_ID,
    };

    const res = await submitLeadForm(input);

    if (res.ok) {
      setDone(true);
    } else {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  if (done) {
    return (
      <div className="rounded-md bg-green-50 p-4 border border-green-200">
        <p className="text-green-800">Thanks! We'll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <>
      <h2 className="mb-2 text-lg font-semibold text-gray-900">
        Tell us about your clinic
      </h2>
      <p className="mb-4 text-sm text-gray-600">
        Share a few details and we&apos;ll follow up with a tailored CCM/RPM walkthrough.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md w-full">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onFocus={handleInteraction}
          className="border border-gray-300 rounded-md p-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border border-gray-300 rounded-md p-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="organization" className="text-sm font-medium text-gray-700">
          Organization *
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          required
          className="border border-gray-300 rounded-md p-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="role" className="text-sm font-medium text-gray-700">
          Role
        </label>
        <input
          type="text"
          id="role"
          name="role"
          className="border border-gray-300 rounded-md p-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="provider_count" className="text-sm font-medium text-gray-700">
          Number of Providers
        </label>
        <input
          type="number"
          id="provider_count"
          name="provider_count"
          min="1"
          className="border border-gray-300 rounded-md p-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white rounded-md p-2 font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Request Demo"}
      </button>
    </form>
    </>
  );
}
