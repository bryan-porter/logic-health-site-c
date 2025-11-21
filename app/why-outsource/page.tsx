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
    'Why independent groups, MSOs, small hospitals, and rural RHCs/FQHCs outsource CCM and RPM to LogicHM: a centralized care-management team operating inside your EHR that adds recurring revenue, supports value-based contracts, and reduces operational and compliance burden without adding headcount.',
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
        "Go live in about 30 days with battle-tested playbooks for CCM, RPM, AWV, and related programs instead of spending 6–9 months recruiting staff, designing protocols, and wiring up your EHR.",
      icon: Settings,
    },
    {
      title: "Staffing reality",
      body:
        "Tap into U.S.-based RNs, MAs, and care navigators without the hiring cycle, backfills, or burnout risk—while physicians keep clinical control through clear supervision language tied to license.",
      icon: Users,
    },
    {
      title: "Compliance, first",
      body:
        "Programs are designed around CCM, RPM, and G0511 rules with CPOM-sensitive role design, HIPAA- and SOC 2-aligned controls, and audit-ready documentation across sites.",
      icon: ShieldCheck,
    },
    {
      title: "Native EHR fit",
      body:
        "LogicHM works inside your existing EHR: standardized note types, tasks, and time-tracking that actually live in the chart instead of yet another portal clinicians have to remember.",
      icon: LinkIcon,
    },
    {
      title: "Revenue capture",
      body:
        "Systematically surface eligible patients, track time by program, and hand your billing team clean, claim-ready information to generate recurring, defensible revenue per enrolled patient.",
      icon: BarChart3,
    },
    {
      title: "Small-hospital & rural ready",
      body:
        "Central monitoring and outreach for small hospitals and rural clinics, closing the loop on ED discharges and high-risk patients without standing up a new internal care-management department.",
      icon: Stethoscope,
    },
  ];

  type Row = { label: string; build: string; partner: string };
  const comparison: Row[] = [
    {
      label: "Time to go-live",
      build: "4–9 months: hiring, protocols, templates, change management",
      partner: "~30 days using a pre-built CCM/RPM operating model and QA cadence.",
    },
    {
      label: "FTE cost & coverage",
      build: "RN/MA recruiting, onboarding, and backfills; gaps on nights/weekends",
      partner: "Centralized RN/MA and navigator team whose capacity you can dial up or down.",
    },
    {
      label: "EHR integration",
      build: "One-off templates and workflows per program and site",
      partner: "Repeatable FHIR-enabled flows and standardized notes that work across your network.",
    },
    {
      label: "Compliance & audit",
      build: "Scattered documentation and spreadsheets; high effort to answer payers",
      partner: "Centralized logs, consent, supervision status, and time tracking you can hand to compliance and auditors.",
    },
    {
      label: "Billing & cash flow",
      build: "Inconsistent eligibility capture, manual time tracking, and revenue leakage",
      partner: "Eligibility and minutes surfaced in-workflow with claim-ready outputs for your billing team.",
    },
    {
      label: "Program breadth",
      build: "Each new program (CCM, RPM, BHI, etc.) feels like a separate project",
      partner: "CCM, RPM, BHI, PCM, RTM, TCM, and more on a single care-management playbook.",
    },
    {
      label: "Scale to clinics/hospitals",
      build: "Re-invented per site, variable quality, and fragile handoffs",
      partner: "Standardized care-management across independent practices, MSO networks, and small hospitals.",
    },
  ];

  const impact = [
    {
      icon: HeartPulse,
      label: "Better outcomes and experience",
      body:
        "Structured outreach, monitoring, and follow-up improve control of chronic conditions and reduce avoidable ED visits and readmissions.",
    },
    {
      icon: Activity,
      label: "Operational relief for your teams",
      body:
        "Centralized care-management, clear routing, and standardized templates reduce rework, inbox noise, and burnout for onsite staff.",
    },
    {
      icon: BarChart3,
      label: "Durable, measurable financial lift",
      body:
        "Recurring CCM/RPM revenue with dashboards that tie enrollment, engagement, and time logs to net revenue signals by site and payer.",
    },
  ];

  return (
    <main>
      <Hero
        headline="Why outsource care management & remote monitoring?"
        subheadline="Independent groups, MSOs, small hospitals, and rural RHCs/FQHCs are already stretched. LogicHM gives you a centralized care-management team that runs CCM, RPM, and related programs inside your EHR—growing recurring revenue, supporting value-based contracts, and easing the load on clinicians without adding headcount."
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
          Building CCM and RPM in-house means recruiting a team, wiring up your EHR, and owning every process change when policies shift. Partnering with LogicHM gives you a consistent, auditable operating model that follows CPOM rules, lives in your EHR, and scales from a single practice to an MSO network or small hospital.
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
              No—governance stays with your medical leadership. LogicHM operates under your supervision policies and management agreements: physicians retain clinical decision-making and sign-off, while our team executes defined tasks, documents in your EHR, and surfaces exceptions back to your providers.
            </p>
          </details>
          <details className="rounded-lg border border-neutral-200 bg-white p-5">
            <summary className="cursor-pointer text-base font-medium text-neutral-900">
              Can we start small?
            </summary>
            <p className="mt-2 text-neutral-700">
              Yes. Many organizations start with a single program—often CCM or RPM—or a subset of sites, then expand to AWV, BHI, TCM, and additional clinics once the cadence is established and the ROI is clear.
            </p>
          </details>
          <details className="rounded-lg border border-neutral-200 bg-white p-5">
            <summary className="cursor-pointer text-base font-medium text-neutral-900">
              How do you handle audits?
            </summary>
            <p className="mt-2 text-neutral-700">
              We maintain consent records, license alignment, supervision status, and detailed time and encounter artifacts by program. That gives your compliance and billing teams a single evidence pack they can use for internal reviews, payer audits, or counsel—without having to reconstruct what happened from scattered notes and spreadsheets.
            </p>
          </details>
        </div>
      </Container>
    </main>
  );
}
