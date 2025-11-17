// app/solutions/rpm/page.tsx
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import Link from "next/link";
import ChecklistCTA from "@/components/ChecklistCTA";
import ReimbursementDisclaimer from "@/components/ReimbursementDisclaimer";
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

export const metadata: Metadata = {
  title: 'Remote Patient Monitoring (RPM)',
  description:
    'Connected devices and nurse-led monitoring to catch risk early, keep patients at goal, and generate predictable monthly revenue. Built for physician practices, small hospitals, and rural facilities.',
  alternates: {
    canonical: '/solutions/rpm',
  },
};

export default function RPMPage() {
  const intro = {
    title: "Remote Patient Monitoring (RPM)",
    subtitle:
      "Connected devices + nurse-led monitoring to catch risk early, keep patients at goal, and generate predictable monthly revenue. Built for physician practices, small hospitals, and rural facilities (RHCs/FQHCs) that need centralized monitoring without adding headcount.",
  };

  // Proof points keep to operational facts
  const stats = [
    { value: "16+ days", label: "device data / month (99454)" },
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
      <section className="bg-gradient-to-b from-primary-50 to-white py-14 md:py-20">
        <Container>
          <h1 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
            {intro.title}
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-700">{intro.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">Talk to a specialist</Button>
            <Button href="/how-it-works" variant="secondary">See the workflow</Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-8 md:py-12">
        <Container>
          <ChecklistCTA variant="banner" utm="solutions" />
        </Container>
      </section>

      {/* Proof metrics */}
      <Stats stats={stats} />

      {/* How RPM works */}
      <section className="bg-white py-16 md:py-24">
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

      {/* Capabilities (from your Replit themes) */}
      <section className="bg-white py-16 md:py-24">
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

      {/* Related programs */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
              Related programs
            </h2>
            <p className="mt-3 text-neutral-700">
              Bundle RPM with CCM, RTM, and TCM to close the loop from prevention to post‑discharge.
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
      <section className="bg-white py-8">
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
    </div>
  );
}
