import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Compliance & Security | Logic Health Management",
  description:
    "How LogicHM protects PHI and supports audit‑ready operations: HIPAA‑aligned controls, BAAs, access & encryption, logging, and hospital‑grade review packets.",
};

// Inline icons (no external deps)
type IconProps = React.SVGProps<SVGSVGElement>;
const ShieldIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props} aria-hidden>
    <path d="M12 3l8 3v6c0 5-3.6 7.7-8 9-4.4-1.3-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const LockIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props} aria-hidden>
    <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth={1.7} />
    <path d="M8 10V7a4 4 0 118 0v3" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
  </svg>
);
const FileCheckIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props} aria-hidden>
    <path d="M9 3h6l4 4v12a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" strokeWidth={1.7} />
    <path d="M13 3v5h5" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
    <path d="M9 15l2.2 2.2L15 13.5" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const AlertIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props} aria-hidden>
    <path d="M10.3 3.6L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3l-8.6-14.4a2 2 0 00-3.4 0z" stroke="currentColor" strokeWidth={1.7} />
    <path d="M12 9v5M12 17.5v.5" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
  </svg>
);
const ServerIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props} aria-hidden>
    <rect x="3" y="4" width="18" height="6" rx="2" stroke="currentColor" strokeWidth={1.7} />
    <rect x="3" y="14" width="18" height="6" rx="2" stroke="currentColor" strokeWidth={1.7} />
    <circle cx="8" cy="7" r="1" fill="currentColor" />
    <circle cx="8" cy="17" r="1" fill="currentColor" />
  </svg>
);
const GlobeIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props} aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.7} />
    <path d="M3 12h18M12 3c3 3.3 3 14.7 0 18M12 3c-3 3.3-3 14.7 0 18" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
  </svg>
);

export default function CompliancePage() {
  const assurances = [
    {
      icon: <ShieldIcon className="h-6 w-6 text-primary-600" />,
      title: "HIPAA‑aligned safeguards",
      text: "Administrative, technical, and physical controls; BAAs available for covered entities and business associates.",
    },
    {
      icon: <FileCheckIcon className="h-6 w-6 text-primary-600" />,
      title: "SOC 2–aligned practices",
      text: "Policies, logging, change management, and vendor risk workflows aligned to SOC 2 principles.*",
    },
    {
      icon: <ServerIcon className="h-6 w-6 text-primary-600" />,
      title: "EHR & FHIR integration",
      text: "Standards‑based pathways (FHIR/HL7) with role‑scoped access and audit trails to keep charts in sync.",
    },
    {
      icon: <GlobeIcon className="h-6 w-6 text-primary-600" />,
      title: "Data residency & retention",
      text: "US‑hosted by default; retention policies and deletion workflows configurable in the SOW.",
    },
  ];

  const controls = [
    {
      name: "Encryption",
      bullets: ["TLS 1.2+ in transit", "AES‑256 at rest", "Key rotation & restricted access"],
    },
    {
      name: "Access controls",
      bullets: ["SSO/OIDC & MFA", "Least privilege roles", "Scoped environment access"],
    },
    {
      name: "Audit logging",
      bullets: ["Immutable PHI access trails", "Admin & config change logs", "Export on request"],
    },
    {
      name: "Change management",
      bullets: ["Version control & review", "Pre‑prod testing", "Safe deploys with rollback"],
    },
    {
      name: "Vulnerability mgmt",
      bullets: ["Regular scans", "3rd‑party testing (annual)*", "Patch SLAs & remediation tracking"],
    },
    {
      name: "BC/DR",
      bullets: ["Daily backups", "Documented recovery runbooks", "RPO/RTO targets in SOW"],
    },
    {
      name: "Vendor risk",
      bullets: ["DPA/BAA with subprocessors", "Security due diligence", "Subprocessor list maintained"],
    },
    {
      name: "Retention & deletion",
      bullets: ["Configurable retention windows", "Soft/hard delete flows", "Patient data requests handling"],
    },
    {
      name: "Incident response",
      bullets: ["24/7 on‑call with playbooks", "Regulatory notification workflows", "Root‑cause analysis & CAPA"],
    },
  ];

  const programMatrix = [
    { program: "AWV", checkpoint: "Consent, HRA, prevention plan; capture relevant Z‑codes when applicable." },
    { program: "CCM", checkpoint: "≥20 min clinical staff time/month; consent; comprehensive care plan in chart." },
    { program: "RPM", checkpoint: "Device readings; interactive minutes (99457/99458) with documented engagement." },
    { program: "PCM", checkpoint: "Single‑condition plan with documented coordination time thresholds." },
    { program: "TCM", checkpoint: "Interactive contact ≤2 business days post‑discharge; 7/14‑day visit and complexity." },
    { program: "BHI", checkpoint: "PROMs and care team collaboration; time‑based eligibility with documentation." },
    { program: "RTM", checkpoint: "Non‑physiologic data + therapy adherence; remote interactions documented." },
    { program: "CHI & PIN", checkpoint: "SDoH documentation; navigation encounters mapped to appropriate codes." },
  ];

  const hospitalAddOns = [
    "Security questionnaire & evidence packet via your vendor portal",
    "Pen‑test summary / vulnerability scan results*",
    "HIPAA risk analysis summary* and policy excerpts",
    "Named security POC & escalation pathway",
    "Data‑flow diagrams, data mapping, and subprocessor list",
    "Custom DPIA/DTIA support as needed",
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">Compliance & Security</h1>
            <p className="mt-4 text-lg text-neutral-700">
              PHI protection and audit‑ready workflows for clinics and small hospitals—without slowing down care.
            </p>
          </div>
        </Container>
      </section>

      {/* Assurances row */}
      <section className="bg-white py-10 md:py-12">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map((a) => (
              <div key={a.title} className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                <div className="flex items-center gap-2">
                  {a.icon}
                  <h3 className="text-sm font-semibold text-neutral-900">{a.title}</h3>
                </div>
                <p className="mt-2 text-sm text-neutral-700">{a.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Controls grid */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">Controls we operate</h2>
            <p className="mt-3 text-sm text-neutral-700">
              Practical safeguards mapped to HIPAA requirements and SOC 2–aligned practices to keep PHI secure and workflows compliant.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {controls.map((c) => (
              <div key={c.name} className="rounded-xl border border-neutral-200 bg-white p-5">
                <div className="mb-2 flex items-center gap-2">
                  <LockIcon className="h-5 w-5 text-primary-600" />
                  <h3 className="text-sm font-semibold text-neutral-900">{c.name}</h3>
                </div>
                <ul className="space-y-2 text-sm text-neutral-800">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary-600" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Program compliance checkpoints */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">Program compliance checkpoints</h2>
            <p className="mt-3 text-sm text-neutral-700">
              Our routing, supervision, and documentation logic aligns to the key checkpoints payers and auditors expect to see.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
            {programMatrix.map((row) => (
              <div key={row.program} className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <div className="text-sm font-semibold text-neutral-900">{row.program}</div>
                <div className="mt-1 text-sm text-neutral-700">{row.checkpoint}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* For hospitals & health systems */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">For hospitals & health systems</h2>
            <p className="mt-3 text-sm text-neutral-700">
              We support vendor security reviews and operational onboarding so your teams can launch quickly with confidence.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-4xl rounded-xl border border-neutral-200 bg-white p-5">
            <div className="mb-2 flex items-center gap-2">
              <FileCheckIcon className="h-5 w-5 text-primary-600" />
              <h3 className="text-sm font-semibold text-neutral-900">Security review packet</h3>
            </div>
            <ul className="grid grid-cols-1 gap-2 text-sm text-neutral-800 sm:grid-cols-2">
              {hospitalAddOns.map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <AlertIcon className="mt-0.5 h-4 w-4 text-primary-600" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-neutral-500">
              * If applicable. We can coordinate secure evidence transfer (e.g., via your vendor portal).
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTA
        headline="Request our security & compliance packet"
        description="Receive our security overview, BAA template, subprocessor list, and evidence options tailored to your review process."
        buttonText="Request the packet"
        buttonHref="/contact?topic=compliance"
        variant="primary"
      />

      {/* Notes */}
      <section className="bg-white pb-10">
        <Container>
          <p className="text-xs text-neutral-500">
            This page summarizes controls and operating practices to support compliant programs. It is not legal advice and does not
            substitute for your organization's own billing and compliance policies. Certifications and reports are provided where
            applicable and subject to mutual confidentiality.
          </p>
        </Container>
      </section>
    </div>
  );
}
