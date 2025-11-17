import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import {
  Activity,
  Stethoscope,
  ShieldCheck,
  Users,
  Link as LinkIcon,
  Settings,
  BarChart3,
  HeartPulse,
} from "lucide-react";

export const metadata: Metadata = {
  title: 'Why Outsource CCM/RPM',
  description:
    'Discover why physician practices and small hospitals outsource Chronic Care Management and Remote Patient Monitoring to focus on patient care while maintaining compliance and maximizing revenue.',
  alternates: {
    canonical: '/why-outsource',
  },
};

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export default function WhyOutsourcePage() {
  const reasons: { title: string; body: string; icon: IconType }[] = [
    {
      title: "Speed to value",
      body:
        "Launch in ~30 days with proven playbooks for AWV, CCM, RPM, BHI, PCM, RTM, TCM, CHI/PIN, and TEAMs—no new FTEs required.",
      icon: Settings,
    },
    {
      title: "Staffing reality",
      body:
        "RN/APP/MA coverage and care navigators without the hiring cycle. Clear supervision language aligned to license.",
      icon: Users,
    },
    {
      title: "Compliance, first",
      body:
        "HIPAA/SOC 2 foundation, consent capture, role‑based access, and complete audit trails across encounters.",
      icon: ShieldCheck,
    },
    {
      title: "Native EHR fit",
      body:
        "FHIR‑enabled flows, standardized note types, and documentation that actually lives in your chart.",
      icon: LinkIcon,
    },
    {
      title: "Revenue capture",
      body:
        "Time tracking, eligibility signals, and claim‑ready documentation to support clean billing and predictable cash flow.",
      icon: BarChart3,
    },
    {
      title: "Small‑hospital ready",
      body:
        "Central monitoring, inpatient‑to‑outpatient handoffs, service‑line escalations, and credentialing alignment.",
      icon: Stethoscope,
    },
  ];

  type Row = { label: string; build: string; partner: string };
  const comparison: Row[] = [
    {
      label: "Time to go‑live",
      build: "4–9 months: staffing, protocols, templates, training",
      partner: "~30 days with proven workflows and QA",
    },
    {
      label: "FTE cost & coverage",
      build: "RN/MA hiring + backfills; night/weekend gaps",
      partner: "Elastic RN/MA + navigators; coverage you can dial",
    },
    {
      label: "EHR integration",
      build: "Custom build per program; scattered templates",
      partner: "FHIR flows + standardized notes and supervision language",
    },
    {
      label: "Compliance & audit",
      build: "Manual tracking; variable document quality",
      partner: "Audit‑ready artifacts, consent, and role‑based access",
    },
    {
      label: "Billing & cash flow",
      build: "Chasing codes; inconsistent eligibility capture",
      partner: "Time, eligibility, and claim signals surfaced in‑workflow",
    },
    {
      label: "Program breadth",
      build: "Adds months per new program",
      partner: "AWV, CCM, RPM, BHI, PCM, RTM, TCM, CHI/PIN, TEAMs on one model",
    },
    {
      label: "Scale to clinics/hospitals",
      build: "Re‑invent per site; fragile handoffs",
      partner: "Standardized operating model across sites and service lines",
    },
  ];

  const impact = [
    { icon: HeartPulse, label: "Clinical lift", body: "BP/A1c trends and adherence nudges reduce avoidable utilization." },
    { icon: Activity, label: "Operational throughput", body: "Defined routing matrices reduce rework and close care gaps." },
    { icon: BarChart3, label: "Financial predictability", body: "Monthly dashboards tie encounter volume to revenue signals." },
  ];

  return (
    <main>
      <Hero
        headline="Why outsource care management & remote monitoring?"
        subheadline="Skip the hiring cycle and months of build. We design, run, and continuously improve audit‑ready programs across your EHR."
        primaryCTA={{ text: "Talk to a program architect", href: "/contact" }}
        secondaryCTA={{ text: "See the operating model", href: "/how-it-works" }}
      />

      {/* Reasons grid */}
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, body, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-neutral-200 bg-white p-6">
              <Icon aria-hidden className="h-6 w-6" />
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-neutral-600">{body}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Build vs Partner table */}
      <Container className="py-4">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">Build vs. Partner</h2>
        <p className="mt-2 max-w-3xl text-neutral-600">
          Outsourcing isn't just about bandwidth—it's about running a consistent, auditable model that scales from practices to small hospitals.
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-neutral-200">
          <table className="min-w-full divide-y divide-neutral-200 bg-white text-sm">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-neutral-700">Dimension</th>
                <th className="px-4 py-3 text-left font-semibold text-neutral-700">Build In‑House</th>
                <th className="px-4 py-3 text-left font-semibold text-neutral-700">Partner with LogicHM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {comparison.map((row) => (
                <tr key={row.label}>
                  <td className="px-4 py-3 font-medium text-neutral-900">{row.label}</td>
                  <td className="px-4 py-3 text-neutral-700">{row.build}</td>
                  <td className="px-4 py-3 text-neutral-900">{row.partner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

      {/* Small hospital note */}
      <Container className="py-4">
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900">
            <Stethoscope className="h-5 w-5" aria-hidden /> Specifically for small & rural hospitals
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">
            <li>Central monitoring hub with service‑line escalation (cardiology, primary care, endocrinology, etc.).</li>
            <li>Standardized note types, credentialing alignment, and inpatient‑to‑outpatient transitions.</li>
            <li>Operating model that spans clinics and ED discharge follow‑ups without re‑inventing per site.</li>
          </ul>
        </div>
      </Container>

      {/* Impact snapshot */}
      <Container className="py-4">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">What you gain</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {impact.map(({ icon: Icon, label, body }) => (
            <div key={label} className="rounded-lg border border-neutral-200 bg-white p-6">
              <Icon aria-hidden className="h-6 w-6" />
              <div className="mt-3 text-lg font-semibold text-neutral-900">{label}</div>
              <p className="mt-2 text-neutral-600">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/how-it-works">See how it runs</Button>
          <Button href="/pricing" variant="secondary">Estimate revenue</Button>
        </div>
      </Container>

      {/* FAQ (no extra components; native <details>) */}
      <Container className="py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">FAQs</h2>
        <div className="mt-4 space-y-3">
          <details className="rounded-lg border border-neutral-200 bg-white p-5">
            <summary className="cursor-pointer text-base font-medium text-neutral-900">
              Do we lose control if we outsource?
            </summary>
            <p className="mt-2 text-neutral-700">
              No—governance stays with your medical leadership. We execute your protocols, surface exceptions, and document in your EHR.
            </p>
          </details>
          <details className="rounded-lg border border-neutral-200 bg-white p-5">
            <summary className="cursor-pointer text-base font-medium text-neutral-900">
              Can we start small?
            </summary>
            <p className="mt-2 text-neutral-700">
              Yes. Many groups begin with CCM or RPM, then add AWV, BHI, or TCM once the cadence is established.
            </p>
          </details>
          <details className="rounded-lg border border-neutral-200 bg-white p-5">
            <summary className="cursor-pointer text-base font-medium text-neutral-900">
              How do you handle audits?
            </summary>
            <p className="mt-2 text-neutral-700">
              We maintain consent, license alignment, time tracking, and encounter artifacts—making audit response fast and consistent.
            </p>
          </details>
        </div>
      </Container>
    </main>
  );
}
