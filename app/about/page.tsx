// app/about/page.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "About | LogicHM",
  description:
    "Logic Health Management builds scalable, compliant, equity‑driven care management programs for practices and small hospitals.",
};

// Lightweight inline icons (no external packages)
function IconTarget() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconScale() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 20h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 10a3 3 0 1 0 6 0H6ZM12 10a3 3 0 1 0 6 0h-6Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l7 3v6c0 4.97-3.05 9.37-7 10-3.95-.63-7-5.03-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconHeartPulse() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 13c0-3.314 2.686-6 6-6 1.96 0 3.7.94 4.8 2.4C15.9 7.94 17.64 7 19.6 7 22.914 7 26 10.086 26 13" stroke="currentColor" strokeWidth="1.5" transform="translate(-2)"/>
      <path d="M4 13h4l2-4 3 8 2-4h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconHospital() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Container className="py-16 md:py-24">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            About Logic Health Management
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            We design, operate, and continuously improve care‑management programs that are
            <span className="font-semibold"> compliant</span>,
            <span className="font-semibold"> equitable</span>, and
            <span className="font-semibold"> scalable</span>—for physician practices and small hospitals.
          </p>
        </header>

        {/* Mission */}
        <section className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
            <IconTarget />
            Our mission
          </div>
          <p className="mt-4 text-lg leading-8 text-neutral-800">
            Help providers deliver measurable outcomes—while making every workflow audit‑ready and every decision equity‑aware.
          </p>
        </section>

        {/* Pillars */}
        <section className="mt-12 md:mt-16">
          <h2 className="text-xl font-semibold text-neutral-900">Our approach</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <div className="flex items-center gap-3 text-neutral-800">
                <IconScale />
                <h3 className="text-base font-semibold">Logic‑driven design</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                We encode CPT/HCPCS, supervision, and documentation rules in routing matrices and dashboards—so the right task hits the right role at the right time.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <div className="flex items-center gap-3 text-neutral-800">
                <IconHeartPulse />
                <h3 className="text-base font-semibold">Equity embedded</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                PROMs, SDoH, and demographic overlays are native to our workflows, guiding outreach, escalation, and benefit navigation.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <div className="flex items-center gap-3 text-neutral-800">
                <IconShield />
                <h3 className="text-base font-semibold">Audit‑ready & scalable</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                Controls, artifacts, and evidence trails are built‑in—from enrollment through billing—so growth never outruns compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Who we serve */}
        <section className="mt-12 md:mt-16">
          <h2 className="text-xl font-semibold text-neutral-900">Who we serve</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <h3 className="text-base font-semibold text-neutral-900">Independent practices</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">
                Launch CCM/RPM in weeks with light lift for clinicians and clean reimbursement for administrators.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <h3 className="text-base font-semibold text-neutral-900">Provider groups & MSOs</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">
                Standardize playbooks and metrics across sites while preserving specialty‑specific workflows.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <div className="flex items-center gap-2">
                <IconHospital />
                <h3 className="text-base font-semibold text-neutral-900">Small hospitals & CAHs</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-neutral-700">
                TCM, PCM, and TEAMs bundles mapped to census and service lines—covering readmission reduction, throughput, and chronic care continuity.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mt-12 md:mt-16">
          <h2 className="text-xl font-semibold text-neutral-900">What we stand for</h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 text-sm leading-6 text-neutral-700 md:grid-cols-2">
            <li className="rounded-md border border-neutral-200 bg-white p-4">
              <span className="font-medium text-neutral-900">Compliance‑first:</span> controls and artifacts by default.
            </li>
            <li className="rounded-md border border-neutral-200 bg-white p-4">
              <span className="font-medium text-neutral-900">Equity‑driven:</span> SDoH and access considerations baked into outreach.
            </li>
            <li className="rounded-md border border-neutral-200 bg-white p-4">
              <span className="font-medium text-neutral-900">Outcomes‑obsessed:</span> measure, improve, repeat.
            </li>
            <li className="rounded-md border border-neutral-200 bg-white p-4">
              <span className="font-medium text-neutral-900">Partnership over vendors:</span> co‑design with clinical and finance leaders.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-12 md:mt-16">
          <div className="rounded-md bg-primary-600 px-6 py-6 text-white md:px-8">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-semibold">Ready to co‑design your program?</h3>
                <p className="mt-1 text-sm opacity-90">
                  We'll tailor playbooks to your panel, staffing, and reimbursement model.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-primary-700 hover:bg-neutral-100"
              >
                Talk to our team →
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
