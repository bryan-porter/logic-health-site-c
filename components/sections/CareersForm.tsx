'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { submitCareersApplication } from '@/lib/careersClient';
import { trackEvent } from '@/lib/tracking';

export default function CareersForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handleInteraction = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent('form_started', { form_id: 'careers-application-v1' });
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    trackEvent('form_submitted', { form_id: 'careers-application-v1' });

    const result = await submitCareersApplication(formData);

    if (result.ok) {
      trackEvent('application_submitted', { form_id: 'careers-application-v1' });
      window.location.href = '/careers/thank-you';
    } else {
      setError(result.error || 'Something went wrong. Please try again.');
    }

    setSubmitting(false);
  }

  return (
    <form className="mt-6 grid gap-6" onSubmit={handleSubmit}>
      {/* Contact info */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-neutral-900">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            onFocus={handleInteraction}
            className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-900">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-900">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-neutral-900">
            Location (city, state)
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="e.g., Austin, TX"
            className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
          />
        </div>
      </div>

      {/* Role & licensure */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-neutral-900">
            What role best describes you?
          </label>
          <select
            id="role"
            name="role"
            className="mt-1 block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="rn">RN</option>
            <option value="lpn-lvn">LPN / LVN</option>
            <option value="ma">MA / health coach</option>
            <option value="bh">Behavioral health clinician</option>
            <option value="other">Other care‑management / clinical role</option>
          </select>
        </div>
        <div>
          <label htmlFor="licensure" className="block text-sm font-medium text-neutral-900">
            Licensure & states
          </label>
          <input
            id="licensure"
            name="licensure"
            type="text"
            placeholder="e.g., RN – TX, NM; compact license"
            className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
          />
        </div>
      </div>

      {/* Experience & preferences */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-neutral-900">
            Briefly describe your clinical / care‑management experience
          </label>
          <textarea
            id="experience"
            name="experience"
            rows={4}
            className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
            placeholder="Settings you've worked in, populations, programs (e.g., CCM, RPM, BHI)…"
          />
        </div>
        <div>
          <label htmlFor="preferences" className="block text-sm font-medium text-neutral-900">
            What kind of schedule and work are you looking for?
          </label>
          <textarea
            id="preferences"
            name="preferences"
            rows={4}
            className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
            placeholder="Full‑time or part‑time? Time zones? Preferred programs (CCM, RPM, TCM, BHI)…"
          />
        </div>
      </div>

      {/* EHR & tools */}
      <div>
        <label htmlFor="ehrExperience" className="block text-sm font-medium text-neutral-900">
          EHR and tools you&apos;ve used
        </label>
        <textarea
          id="ehrExperience"
          name="ehrExperience"
          rows={3}
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
          placeholder="e.g., Epic, eCW, Athena, Cerner; telehealth platforms; care‑management tools…"
        />
      </div>

      {/* Resume upload */}
      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-neutral-900">
          Upload your resume
        </label>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="mt-1 block w-full cursor-pointer rounded-md border border-dashed border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
        />
        <p className="mt-1 text-xs text-neutral-500">PDF or Word; up to 10 MB.</p>
      </div>

      {/* Anything else */}
      <div>
        <label htmlFor="other" className="block text-sm font-medium text-neutral-900">
          Anything else you&apos;d like us to know?
        </label>
        <textarea
          id="other"
          name="other"
          rows={3}
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
          placeholder="Optional – certifications, language skills, preferred start date, etc."
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col gap-3 border-t border-neutral-200 pt-4 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
        <Button type="submit" className="w-full md:w-auto" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit your information'}
        </Button>
        <p className="text-xs text-neutral-500">
          By submitting this form, you consent to LogicHM reviewing your information for current and future
          roles. We&apos;ll never sell your data.
        </p>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
