import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Results | Logic Health Management",
  description:
    "Examples of how LogicHM's CCM, RPM, RTM, TCM, CHI/PIN, and TEAMs programs impact clinical outcomes, operations, and financial performance.",
};

// Inline icons to avoid external deps
function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 21s-6.5-4.2-9-8.2C1 10 2 6.5 5 5a4.5 4.5 0 0 1 5.3 1.3L12 7l1.7-.7A4.5 4.5 0 0 1 19 5c3 1.5 4 5 2 7.8-2.5 4-9 8.2-9 8.2z"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M3 12h3l3-7 4 14 3-7h5"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DollarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 3v18M9 7.5C9 6.1 10.3 5 12 5c1.7 0 3 1.1 3 2.5S13.7 10 12 10h-1c-1.7 0-3 1.1-3 2.5S9.3 15 11 15h1c1.7 0 3 1.1 3 2.5S13.7 20 12 20c-1.7 0-3-1.1-3-2.5"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ResultsPage() {
  const domains = [
    {
      title: "Clinical outcomes",
      Icon: HeartIcon,
      bullets: [
        "Improved BP/A1c control for enrolled chronic cohorts.",
        "Higher adherence to evidence-based preventive care.",
        "Fewer avoidable ED visits and readmissions among engaged populations.",
      ],
    },
    {
      title: "Operational efficiency",
      Icon: ActivityIcon,
      bullets: [
        "Clearly defined workflows and routing reduce rework and dropped tasks.",
        "RN/MA/navigator coverage absorbs monitoring and outreach load.",
        "Standardized templates simplify EHR documentation for clinicians.",
      ],
    },
    {
      title: "Financial performance",
      Icon: DollarIcon,
      bullets: [
        "More consistent use of CCM, RPM, RTM, AWV, and TCM codes when criteria are met.",
        "Fewer denials due to clear documentation, time, and supervision notes.",
        "Better visibility into program margins via monthly production views.",
      ],
    },
  ];

  const matrix = [
    {
      dimension: "Hypertension & diabetes (RPM + CCM)",
      baseline: "Fragmented outreach; sporadic vitals and med reviews.",
      withLogicHM:
        "Structured monthly CCM + device-enabled RPM leads to tighter BP/A1c ranges in enrolled cohorts.",
    },
    {
      dimension: "Post-discharge (TCM + RPM)",
      baseline: "Hit-or-miss follow-up; readmit risk opaque.",
      withLogicHM:
        "Predictable post-discharge outreach and monitoring reduce failure-to-contact and support earlier intervention.",
    },
    {
      dimension: "Preventive services (AWV & wellness)",
      baseline: "Manual recall lists; under-captured Z-codes.",
      withLogicHM:
        "Structured AWV flow and HRA logic increase AWV completion and SDoH documentation.",
    },
    {
      dimension: "Behavioral health (BHI)",
      baseline: "PROMs inconsistently captured; unclear follow-up.",
      withLogicHM:
        "Embedded outcome tools and stepwise workflows drive more consistent BHI touchpoints and documentation.",
    },
  ];

  const cases = [
    {
      label: "Multi-site primary care group (de-identified)",
      summary: "CCM + RPM for cardiometabolic populations",
      details: [
        "Scaled from a small pilot to multiple clinics using a centralized model.",
        "Practices report smoother visits when chronic risk and outreach history are visible in the chart.",
      ],
    },
    {
      label: "Regional hospital + affiliated clinics (de-identified)",
      summary: "Post-discharge and chronic programs in one operating model",
      details: [
        "Central monitoring supports discharges, with clear handoffs to cardiology and primary care.",
        "Leadership benefits from recurring views of enrollment, adherence, and program production.",
      ],
    },
    {
      label: "Safety-net environment (de-identified)",
      summary: "Equity-aware outreach across programs",
      details: [
        "SDoH overlays and language data shape outreach priorities.",
        "Equity lens applied to chronic care, prevention, and transitional workflows from the start.",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Results
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              Outcomes depend on your population, payer mix, and goals—but the pattern is consistent:
              clearer workflows, more reliable programs, and measurable progress on quality and margins.
            </p>
          </div>
        </Container>
      </section>

      {/* Outcome domains */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
              What we aim to improve
            </h2>
            <p className="mt-3 text-sm text-neutral-700">
              LogicHM is designed to move metrics in three domains: clinical, operational, and financial.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {domains.map((d) => (
              <article key={d.title} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <d.Icon className="h-6 w-6 text-primary-600" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-neutral-900">{d.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-xs leading-5 text-neutral-700">
                  {d.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Before / after matrix */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
              How the operating model changes the picture
            </h2>
            <p className="mt-3 text-sm text-neutral-700">
              These are anonymized examples of the kinds of shifts organizations report when they move from ad hoc workflows
              to a dedicated model.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-6xl overflow-x-auto rounded-xl border border-neutral-200 bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-neutral-700">Area</th>
                  <th className="px-4 py-3 font-semibold text-neutral-700">Before</th>
                  <th className="px-4 py-3 font-semibold text-neutral-700">With LogicHM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {matrix.map((row) => (
                  <tr key={row.dimension}>
                    <td className="px-4 py-3 align-top text-neutral-900">{row.dimension}</td>
                    <td className="px-4 py-3 align-top text-neutral-700">{row.baseline}</td>
                    <td className="px-4 py-3 align-top text-neutral-900">{row.withLogicHM}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-3 max-w-3xl text-xs text-neutral-500">
            Note: These examples are directional and anonymized. Actual results vary by starting point, population, uptake, and
            payer policy. We work with you to define the metrics that matter and track them over time.
          </p>
        </Container>
      </section>

      {/* Case snapshots */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">Case snapshots (anonymized)</h2>
            <p className="mt-3 text-sm text-neutral-700">
              These scenarios illustrate how the same operating model can adapt to different environments.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <article
                key={c.label}
                className="flex h-full flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-800"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  <ArrowIcon className="h-4 w-4" aria-hidden /> {c.label}
                </div>
                <h3 className="mt-3 text-base font-semibold text-neutral-900">{c.summary}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-xs leading-5 text-neutral-700">
                  {c.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        headline="Want a results & ROI view for your organization?"
        description="We'll map your panel, programs, and quality goals to a measurable plan and share a board- and compliance-ready summary."
        buttonText="Request a results review"
        buttonHref="/contact?topic=results-review"
        variant="primary"
      />

      <section className="bg-white pb-10">
        <Container>
          <p className="text-xs text-neutral-500">
            LogicHM does not guarantee specific outcomes. We recommend defining clear success metrics at the start of any program
            and reviewing them jointly at regular intervals.
          </p>
        </Container>
      </section>
    </div>
  );
}
