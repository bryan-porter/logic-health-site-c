import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/sections/CTA";
import type { Metadata } from "next";

// Simple inline icons (no external deps)
function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 3 5 6v7c0 4.5 3 6.8 7 8 4-1.2 7-3.5 7-8V6l-7-3z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12.5 11 14l4-4" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect
        x={4}
        y={10}
        width={16}
        height={10}
        rx={2}
        stroke="currentColor"
        strokeWidth={1.8}
      />
      <path
        d="M8 10V8a4 4 0 0 1 8 0v2"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <path
        d="M12 13.5v3"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

function ListIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M9 7h11M9 12h11M9 17h11M4 7h.01M4 12h.01M4 17h.01"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 3c3.5 3 3.5 15 0 18M12 3C8.5 6 8.5 18 12 21M3 12h18"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M7 4a2 2 0 0 1 2-2h4.6a2 2 0 0 1 1.4.6l3.4 3.4A2 2 0 0 1 19 7.4V20a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13 3v4h4" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Compliance & Security | Logic Health Management",
  description:
    "HIPAA, SOC 2-aligned controls, and audit-ready documentation underpin every LogicHM program. Built for practices and small hospitals under a BAA.",
};

export default function CompliancePage() {
  const pillars = [
    {
      title: "HIPAA program with BAA",
      text: "HIPAA policies, training, and risk assessments underpin every workflow. A Business Associate Agreement (BAA) is standard for all clients.",
      Icon: ShieldIcon,
    },
    {
      title: "SOC 2-aligned controls",
      text: "Logical access, change management, backup/restore, and monitoring practices aligned to SOC 2 expectations.",
      Icon: LockIcon,
    },
    {
      title: "Audit-ready documentation",
      text: "Time logs, supervision notes, care plans, and encounter summaries are structured to support internal and external reviews.",
      Icon: ListIcon,
    },
  ];

  const dataFlows = [
    "Data minimization: we only receive and retain data necessary for operations and reporting.",
    "Encryption in transit and at rest for PHI and sensitive configuration.",
    "Segregated environments for development, staging, and production.",
    "Standardized data-retention policies with options based on your legal and contractual requirements.",
  ];

  const artifacts = [
    "Sample BAA language (or your health system's template).",
    "Network and data-flow diagrams for LogicHM-hosted components.",
    "Role-based access matrix and privilege grants.",
    "Operational runbooks for CCM, RPM, RTM, TCM, CHI/PIN, TEAMs, and more.",
    "Sample audit packet: time reconciliation, encounters, supervision, and charges.",
  ];

  const hospitalFit = [
    "Support for IRB/Compliance review when programs intersect research or pilots.",
    "Alignment with hospital incident-response and escalation procedures.",
    "Credentialing-ready documentation for clinicians participating in LogicHM workflows.",
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Compliance &amp; Security
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              LogicHM is built for HIPAA-regulated, audit-conscious environments. We operate under a BAA, align controls
              to SOC 2 expectations, and produce the artifacts your compliance and InfoSec teams need.
            </p>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
              Foundation pillars
            </h2>
            <p className="mt-3 text-neutral-700">
              Every CCM, RPM, RTM, BHI, PCM, TCM, CHI/PIN, and TEAMs workflow runs on a compliance-first foundation.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
              >
                <p.Icon className="h-6 w-6 text-primary-600" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-neutral-900">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{p.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Data protection & governance */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <LockIcon className="h-5 w-5 text-primary-600" aria-hidden />
                <h2 className="text-base font-semibold text-neutral-900">
                  Data protection &amp; environment separation
                </h2>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-700">
                {dataFlows.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <GlobeIcon className="h-5 w-5 text-primary-600" aria-hidden />
                <h2 className="text-base font-semibold text-neutral-900">
                  Access, identity, and workforce training
                </h2>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-700">
                <li>Role-based access controls for care teams, support, and engineering.</li>
                <li>Least-privilege provisioning with periodic entitlement reviews.</li>
                <li>Mandatory workforce training on HIPAA and security best practices.</li>
                <li>Onboarding/offboarding checklists for all LogicHM personnel.</li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      {/* Artifacts & InfoSec packet */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
              What your compliance &amp; InfoSec partners receive
            </h2>
            <p className="mt-3 text-neutral-700">
              We provide a structured packet with the information your reviewers expect—no scavenger hunt required.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-5xl rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="flex items-center gap-3">
              <FileIcon className="h-5 w-5 text-primary-600" aria-hidden />
              <h3 className="text-base font-semibold text-neutral-900">Security &amp; compliance packet</h3>
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-700">
              {artifacts.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Small hospital fit */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
              Specifically for small &amp; rural hospitals
            </h2>
            <p className="mt-3 text-neutral-700">
              LogicHM's operating model is designed to slot into your existing governance, not bypass it.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-5xl rounded-xl border border-neutral-200 bg-white p-6">
            <ul className="list-disc space-y-2 pl-6 text-sm text-neutral-700">
              {hospitalFit.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTA
        headline="Need a security &amp; compliance packet for review?"
        description="We'll share BAAs, data flows, and program documentation tailored to your environment so compliance and InfoSec can move quickly."
        buttonText="Request security packet"
        buttonHref="/contact?topic=security-packet"
        variant="secondary"
      />

      <section className="bg-white pb-10">
        <Container>
          <p className="text-xs text-neutral-500">
            Note: References to HIPAA and SOC 2 indicate the structure of our program and controls; specific attestations, reports, and legal terms are available under NDA and BAA.
          </p>
        </Container>
      </section>
    </div>
  );
}
