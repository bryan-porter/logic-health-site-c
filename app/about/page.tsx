import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About | Logic Health Management",
  description:
    "LogicHM designs and operates logic-driven, equity-embedded, audit-ready care management and remote monitoring programs for practices and small hospitals.",
};

// Inline icons to avoid extra deps
function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 21s-6.5-4.2-9-8.2C1 10 2 6.5 5 5a4.5 4.5 0 0 1 5.3 1.3L12 7l1.7-0.7A4.5 4.5 0 0 1 19 5c3 1.5 4 5 2 7.8-2.5 4-9 8.2-9 8.2z"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM9 15l2-5 5-2-2 5-5 2z"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 3 5 6v7c0 4.5 3 6.8 7 8 4-1.2 7-3.5 7-8V6l-7-3z"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.5 11 14l4-4"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 3 4 7l8 4 8-4-8-4zM4 13l8 4 8-4M4 17l8 4 8-4"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM20 8a3 3 0 1 1-6 0"
        stroke="currentColor"
        strokeWidth={1.7}
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
        strokeWidth={1.7}
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
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 3v4h4"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  const whoWeServe = [
    {
      title: "Physician practices",
      text: "Single and multi-site groups needing CCM, RPM, RTM, BHI, PCM and TCM without new FTEs.",
    },
    {
      title: "Small & rural hospitals",
      text: "Critical-access, community, and regional hospitals wanting centralized remote care and TEAMs-style models.",
    },
    {
      title: "Integrated systems & networks",
      text: "Systems that want a consistent playbook across owned and affiliated practices.",
    },
  ];

  const values = [
    {
      title: "Logic-Driven",
      text: "Workflows are engineered, not improvised—every route and role has a reason.",
      Icon: CompassIcon,
    },
    {
      title: "Equity-Embedded",
      text: "SDoH, language, and access considerations are baked into identification, outreach, and escalation.",
      Icon: GlobeIcon,
    },
    {
      title: "Compliance-First",
      text: "We design as if an auditor will read every line of documentation later.",
      Icon: ShieldIcon,
    },
    {
      title: "Team-Based",
      text: "We respect local governance and help teams practice at the top of their license.",
      Icon: UsersIcon,
    },
  ];

  const credibility = [
    "HIPAA program with BAA as standard, tuned for provider groups and hospitals.",
    "Controls aligned to SOC 2 expectations for access, logging, change management, and resilience.",
    "EHR-first design across Epic, eCW, Veradigm/Allscripts, DrChrono, and other major vendors.",
    "Documentation rails that map clearly to CPT, HCPCS, ICD-10, and Z-code frameworks.",
  ];

  // leadership = simple placeholders you can later replace
  const leadership = [
    {
      name: "Clinical lead (placeholder)",
      role: "Clinical Operations & Quality",
      blurb: "Decades of front-line experience in chronic disease, telehealth, and team-based care.",
    },
    {
      name: "Technology lead (placeholder)",
      role: "Data & Integration",
      blurb: "EHR integration, data governance, and analytics experience across multiple platforms.",
    },
    {
      name: "Compliance lead (placeholder)",
      role: "Compliance & Risk",
      blurb: "Healthcare compliance and security background with audit and regulatory experience.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero / Mission */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              <HeartIcon className="h-6 w-6 text-primary-600" aria-hidden />
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              About Logic Health Management
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              We exist to make remote and longitudinal care models safe to scale. LogicHM was built at the intersection
              of clinical operations, equity, and compliance—so practices and small hospitals can modernize without
              compromising standards.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Who we serve */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <article>
              <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">Our mission</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                LogicHM's mission is to turn chronic care, preventive care, and transitions of care into repeatable
                operating systems. We design and run CCM, RPM, RTM, BHI, PCM, AWV, TCM, CHI/PIN, and TEAMs programs that
                are:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-neutral-700">
                <li>Clinically coherent and aligned with your standards of care.</li>
                <li>Equity-aware, so high-risk and under-served patients don't fall through gaps.</li>
                <li>Audit-ready, so documentation stands up over time.</li>
              </ul>
            </article>

            <article className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
              <h2 className="text-base font-semibold text-neutral-900">Who we serve</h2>
              <p className="mt-2 text-sm text-neutral-700">
                We partner with care delivery organizations who are accountable for quality, cost, and experience.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 text-sm text-neutral-800">
                {whoWeServe.map((w) => (
                  <div key={w.title} className="rounded-lg border border-neutral-200 bg-white p-4">
                    <h3 className="text-sm font-semibold text-neutral-900">{w.title}</h3>
                    <p className="mt-1 text-neutral-700">{w.text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
              How we think about care models
            </h2>
            <p className="mt-3 text-sm text-neutral-700">
              Effective operating models come from combining clinical reality, equity, and regulation—not treating them as separate.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-4">
            {values.map((v) => (
              <article key={v.title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                <v.Icon className="h-5 w-5 text-primary-600" aria-hidden />
                <h3 className="mt-3 text-sm font-semibold text-neutral-900">{v.title}</h3>
                <p className="mt-2 text-xs leading-5 text-neutral-700">{v.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Credibility & compliance strip */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
              Built for audit-conscious organizations
            </h2>
            <p className="mt-3 text-sm text-neutral-700">
              We work backwards from what compliance, legal, and InfoSec need—then design the clinical workflows on top.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-5xl rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="flex items-center gap-3">
              <ShieldIcon className="h-5 w-5 text-primary-600" aria-hidden />
              <h3 className="text-sm font-semibold text-neutral-900">What reviewers can expect</h3>
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-xs leading-5 text-neutral-700">
              {credibility.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Leadership placeholders */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">Leadership (placeholder)</h2>
            <p className="mt-3 text-sm text-neutral-700">
              Add your leadership bios here. The placeholders below show layout only and can be replaced with real names, roles, and experience.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {leadership.map((p) => (
              <article
                key={p.role}
                className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-800"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-600">
                  {p.name[0] ?? "L"}
                </div>
                <h3 className="mt-3 text-sm font-semibold text-neutral-900">{p.name}</h3>
                <p className="text-xs uppercase tracking-wide text-neutral-500">{p.role}</p>
                <p className="mt-2 text-xs leading-5 text-neutral-700">{p.blurb}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        headline="Want to understand how LogicHM would fit in your governance?"
        description="We'll walk through our operating model with clinical, compliance, and IT stakeholders together."
        buttonText="Schedule a joint review"
        buttonHref="/contact?topic=about-logic-hm"
        variant="secondary"
      />

      <section className="bg-white pb-10">
        <Container>
          <p className="text-xs text-neutral-500">
            Note: References to HIPAA, SOC 2, and other frameworks describe our control approach. Specific attestations and agreements are shared under NDA and a BAA.
          </p>
        </Container>
      </section>
    </div>
  );
}
