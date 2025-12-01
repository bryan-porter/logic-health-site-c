// app/solutions/rpm/page.tsx
import dynamic from "next/dynamic";
import {
  Package,
  PlugZap,
  Bell,
  ShieldCheck,
  BarChart,
  FileText,
  Clock,
  HeartPulse,
  Stethoscope,
  Smartphone,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ReimbursementDisclaimer from "@/components/ReimbursementDisclaimer";
import { CTA } from "@/components/sections/CTA";
import { Stats } from "@/components/sections/Stats";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const ChecklistCTA = dynamic(() => import("@/components/ChecklistCTA"), {
  loading: () => <div className="animate-pulse h-32 bg-gray-100 rounded-md" />,
});

import type { Metadata } from "next";




export const metadata: Metadata = {
  title: 'Remote Patient Monitoring (RPM)',
  description:
    'Connected devices and nurse-led monitoring to catch risk early, keep patients at goal, and generate predictable monthly revenue. Built for physician practices, small hospitals, and rural facilities.',
  alternates: {
    canonical: '/solutions/rpm',
  },
};

function ServiceJsonLd() {
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Remote Patient Monitoring (RPM)',
    url: 'https://logichm.com/solutions/rpm',
    provider: {
      '@type': 'Organization',
      name: 'Logic Health Management',
      url: 'https://logichm.com',
    },
    areaServed: 'United States',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export default function RPMPage() {
  // Proof points keep to operational facts
  const stats = [
    { value: "20–40 min", label: "interactive mgmt time / month" },
    { value: "30 days", label: "to go live" },
    { value: "Audit trail", label: "alerts, actions, time logs" },
  ];

  // How RPM works (tiles)
  const steps = [
    {
      icon: Package,
      title: "Enroll & ship",
      body:
        "Eligible patients are identified in your EHR. Devices ship pre‑configured; consent captured and tracked.",
    },
    {
      icon: PlugZap,
      title: "Pair in minutes",
      body:
        "Cellular/Bluetooth devices auto‑connect. No app complexity for seniors; pairing support as needed.",
    },
    {
      icon: Bell,
      title: "Monitor & triage alerts",
      body:
        "Thresholds, trend logic, and escalation rules route signals to RN/MA teams and your clinicians.",
    },
    {
      icon: FileText,
      title: "Document & bill",
      body:
        "Time, contacts, and interventions are logged. Suggested RPM codes support compliant charge capture.",
    },
  ];

  // RPM codes (illustrative—confirm payer policy)
  const codes = [
    {
      code: "99453",
      label: "Setup & education (once)",
      details: "Initial patient onboarding and device training.",
    },
    {
      code: "99454",
      label: "Device supply + transmission",
      details:
        "Monthly supply of device and data collection; typically requires 16+ days of readings in 30 days.",
    },
    {
      code: "99457",
      label: "First 20 min interactive mgmt",
      details:
        "Clinical staff/physician/APP interactive communication and care management per calendar month.",
    },
    {
      code: "99458",
      label: "Each additional 20 min",
      details: "Add‑on to 99457 in the same month.",
    },
    {
      code: "99091",
      label: "Physician/QHP data review (30 min)",
      details:
        "Collection and interpretation by billing clinician; coverage varies—use when appropriate.",
    },
  ];

  // Platform capabilities (echoes your Replit themes)
  const capabilities = [
    {
      icon: PlugZap,
      title: "Device integration",
      body:
        "BP cuffs, scales, pulse oximeters, glucometers, and more—with turnkey logistics and replacements.",
    },
    {
      icon: Bell,
      title: "Alert routing",
      body:
        "Role‑based triage and escalation pathways tuned to your service lines and call schedules.",
    },
    {
      icon: BarChart,
      title: "Compliance dashboards",
      body:
        "At‑a‑glance insight into eligibility, days‑with‑readings, and care‑minutes to prevent leakage.",
    },
    {
      icon: ShieldCheck,
      title: "Security & audits",
      body:
        "HIPAA + SOC 2 discipline, with complete logs of readings, contacts, and interventions.",
    },
    {
      icon: HeartPulse,
      title: "Small‑hospital ready",
      body:
        "Centralized monitoring across units/clinics via shared‑services staffing and configurable protocols.",
    },
    {
      icon: Clock,
      title: "Frictionless go‑live",
      body:
        "Pre‑built playbooks and EHR‑first workflows cut the lift so you can launch in ~30 days.",
    },
  ];

  const related = [
    {
      title: "Chronic Care Management (CCM)",
      description: "Monthly care coordination pairs naturally with RPM.",
      href: "/solutions/ccm",
      icon: Stethoscope,
    },
    {
      title: "Remote Therapeutic Monitoring (RTM)",
      description: "Behavioral & therapy adherence signals beyond vitals.",
      href: "/contact?program=rtm",
      icon: Smartphone,
    },
    {
      title: "Transitional Care Management (TCM)",
      description: "Post‑discharge coordination to prevent readmissions.",
      href: "/contact?program=tcm",
      icon: LogOut,
    },
  ];

  return (
    <div className="bg-white">
      {/* Page header */}
      <section className="bg-gradient-to-b from-primary-50 to-white pt-16 md:pt-24 pb-8 md:pb-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
              Remote Patient Monitoring (RPM)
            </h1>
            <p className="text-lg text-neutral-700">
              Connected devices + nurse-led monitoring to catch risk early, keep patients at goal, and generate predictable monthly revenue.
            </p>
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="bg-white pb-6 md:pb-8">
        <Container>
          <div className="mt-10 md:mt-12 flex justify-center animate-float-slow">
            <div className="relative w-full max-w-3xl">
              <Image
                src="/images/rpm.png"
                alt="Remote patient monitoring dashboard showing vital signs and patient data"
                width={1600}
                height={900}
                priority
                className="h-auto w-full rounded-2xl shadow-xl object-cover transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Remote Patient Monitoring that surfaces risk early */}
      <section className="bg-white pt-12 md:pt-16 pb-16 md:pb-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
              Remote Patient Monitoring that surfaces risk early—and documents every minute.
            </h2>
            <p className="mb-8 text-lg text-neutral-700">
              LOGIC runs RPM as a centralized extension of your clinics—enrolling patients, triaging daily data, escalating in your EHR, and keeping RPM time cleanly separated from CCM so it is billable and defensible for MSOs, IPAs, small hospitals, and rural providers.
            </p>
            <ul className="space-y-4 text-base text-neutral-700 md:text-lg">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>99453, 99454, 99457, and 99458 workflows implemented with clear documentation and supervision rules, with payer policy variability explicitly acknowledged.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Centralized clinical staff review vitals, symptoms, and alerts daily—prioritizing what matters and escalating inside your EHR to the supervising provider.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Device strategies tuned to your footprint: in-clinic pickup, mail-to-home, and community pickup options that minimize front-desk and nursing burden.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Built for value-based care: risk-stratified RPM cohorts (e.g., hypertension, diabetes, COPD, heart failure) that tie directly into CCM for longitudinal support and quality metrics.</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Proof metrics */}
      <Stats stats={stats} />

      {/* CTA buttons */}
      <section className="bg-white py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="primary">Talk to a specialist</Button>
            <Button href="/how-it-works" variant="secondary">See the workflow</Button>
          </div>
        </Container>
      </section>

      {/* How RPM works (existing tiles) */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
            How RPM works
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="h-full rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary-50">
                    <Icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  </div>
                  <div className="text-base font-semibold text-neutral-900">{s.title}</div>
                  <p className="mt-2 text-sm text-neutral-600">{s.body}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* NEW: How LOGIC runs RPM day to day */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
              How LOGIC runs RPM day to day
            </h2>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">1</span>
                <div>
                  <h3 className="font-semibold text-neutral-900">Identify and enroll eligible patients</h3>
                  <p className="mt-1 text-neutral-700">From your EHR based on diagnosis, risk factors, and payer criteria.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">2</span>
                <div>
                  <h3 className="font-semibold text-neutral-900">Configure RPM devices and education</h3>
                  <p className="mt-1 text-neutral-700">Either in-clinic, via mail, or community partners—using simple scripts for your staff.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">3</span>
                <div>
                  <h3 className="font-semibold text-neutral-900">Monitor daily data, symptoms, and concerns</h3>
                  <p className="mt-1 text-neutral-700">Through LOGIC&apos;s centralized team, with clear clinical protocols by condition.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">4</span>
                <div>
                  <h3 className="font-semibold text-neutral-900">Escalate only what matters</h3>
                  <p className="mt-1 text-neutral-700">Into your EHR: prioritized alerts, summaries, and actions routed to the supervising provider or care team.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">5</span>
                <div>
                  <h3 className="font-semibold text-neutral-900">Track RPM time separately</h3>
                  <p className="mt-1 text-neutral-700">From CCM and other services, maintain audit-ready documentation, and share performance and revenue reports with your leadership.</p>
                </div>
              </li>
            </ol>
          </div>
        </Container>
      </section>

      {/* RPM codes quick reference */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
            RPM billing quick reference
          </h2>
          <p className="mt-3 max-w-3xl text-neutral-700">
            Common RPM codes. This summary is illustrative—confirm payer policies and local coverage rules.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {codes.map((c) => (
              <div
                key={c.code}
                className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-medium text-primary-600">{c.code}</div>
                <div className="mt-1 text-base font-semibold text-neutral-900">
                  {c.label}
                </div>
                <p className="mt-3 text-sm text-neutral-700">{c.details}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* NEW: Billing and documentation integrity callout */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border-2 border-primary-200 bg-primary-50 p-8">
              <h3 className="mb-4 text-2xl font-bold text-neutral-900">
                Billing and documentation integrity for RPM
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                RPM work is documented with clear timestamps, responsible staff, and program type so that RPM minutes are kept distinct from CCM and other time-based services. We account for differences in payer policies around 99453, 99454, 99457, and 99458, and we can export logs to support internal audits, payer reviews, and compliance inquiries. Policies vary by payer and change over time; we design workflows that can adapt as your billing team confirms local requirements.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities (from your Replit themes) */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
            What you get with LogicHM RPM
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((r, idx) => {
              const Icon = r.icon;
              return (
                <div
                  key={idx}
                  className="h-full rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary-50">
                    <Icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  </div>
                  <div className="text-base font-semibold text-neutral-900">{r.title}</div>
                  <p className="mt-2 text-sm text-neutral-600">{r.body}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-8 md:py-12">
        <Container>
          <ChecklistCTA variant="banner" utm="solutions" />
        </Container>
      </section>

      {/* MSO/IPA Section */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
              For MSOs and IPAs: centralized RPM that scales across every practice
            </h2>
            <p className="mb-8 text-lg text-neutral-700">
              MSOs and IPAs need RPM that works the same way in every practice—one set of protocols, one documentation standard, and one view of risk across the panel. LOGIC centralizes RPM oversight so your teams see prioritized alerts, not raw data, and you get a consistent revenue and quality engine across locations.
            </p>
            <ul className="space-y-4 text-base text-neutral-700 md:text-lg">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Standardized RPM protocols and note types that work across multiple EHR instances and practice workflows.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>A shared clinical monitoring team that reduces local staffing pressure while keeping physicians in control of care decisions.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Roll-up RPM reporting by practice, region, payer, and condition—so executives can see where risk and revenue are concentrated.</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* RHC/FQHC & Rural Section */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
              For RHCs, FQHCs, and rural providers: RPM that works with low bandwidth and thin staffing
            </h2>
            <p className="mb-8 text-lg text-neutral-700">
              Rural clinics don&apos;t have spare staff to stare at dashboards or chase every out-of-range reading. LOGIC designs RPM workflows around your bandwidth and connectivity—simple device workflows, phone-first outreach, and escalation paths that respect limited local resources while still meeting clinical and documentation expectations.
            </p>
            <ul className="space-y-4 text-base text-neutral-700 md:text-lg">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Device and connectivity strategies that account for limited broadband, transportation barriers, and older devices.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Shared RPM monitoring teams that support multiple rural sites without requiring new local hires.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Documentation and time tracking that support G0511-driven care-management strategies when RPM is paired with CCM.</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Small Hospital / Health System Section */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
              For small hospitals and health systems: extend monitoring beyond the bedside
            </h2>
            <p className="mb-8 text-lg text-neutral-700">
              Community and critical access hospitals need a way to stay connected to high-risk patients once they leave the ED or inpatient floor. LOGIC uses RPM to extend monitoring into the home—so your teams see which patients are drifting off plan and can intervene before the next avoidable ED visit or readmission.
            </p>
            <ul className="space-y-4 text-base text-neutral-700 md:text-lg">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>RPM pathways for post-discharge hypertension, heart failure, COPD, and other high-risk conditions.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Escalation workflows that route back to hospitalists, ED follow-up teams, or affiliated clinics inside your existing EHR.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Support for quality and readmission metrics that matter for value-based and penalty programs.</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Related programs - UPDATED intro */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
              Related programs
            </h2>
            <p className="mt-3 text-neutral-700">
              RPM works best when it is part of a broader care-management engine. LOGIC connects RPM with CCM, RTM, TCM, PCM, BHI, and care-gap analytics so high-risk patients move smoothly between programs instead of falling into silos.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((program) => {
              const Icon = program.icon;
              return (
                <Link
                  key={program.title}
                  href={program.href}
                  className="block h-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold text-neutral-900">{program.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-neutral-600">{program.description}</p>
                  <div className="mt-4 text-sm font-medium text-primary-600">
                    Learn more →
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="bg-neutral-50 py-8">
        <Container>
          <ReimbursementDisclaimer />
        </Container>
      </section>

      {/* Final CTA */}
      <CTA
        headline="Launch RPM in ~30 days"
        description="See devices, alert logic, and EHR workflows tailored to your specialty or small‑hospital service lines."
        buttonText="Schedule a 15‑minute strategy call"
        buttonHref="/contact"
        variant="primary"
      />
      <ServiceJsonLd />
    </div>
  );
}
