import { Container } from "@/components/ui/Container";
import {
  Users,
  Package,
  HeartPulse,
  PhoneCall,
  FileCheck2,
  BarChart3,
} from "lucide-react";

type Step = {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const STEPS: Step[] = [
  {
    title: "Identify & Enroll",
    description:
      "Eligibility logic (diagnoses, utilization, SDoH) flags candidates. Outreach scripts enroll with consent and set expectations.",
    Icon: Users,
  },
  {
    title: "Device & Onboarding",
    description:
      "Kits ship pre‑configured. Zero‑touch pairing, literacy‑aware instructions, and bilingual support reduce friction.",
    Icon: Package,
  },
  {
    title: "Monitor & Engage",
    description:
      "Vitals and check‑ins flow to dashboards. Care navigators reinforce plans, triage alerts, and close care gaps.",
    Icon: HeartPulse,
  },
  {
    title: "Escalate & Coordinate",
    description:
      "Clinically significant signals route to the right clinician. Warm handoffs and EHR‑inbox notes keep teams in sync.",
    Icon: PhoneCall,
  },
  {
    title: "Document & Bill",
    description:
      "Time tracking and supervision logic capture every eligible CPT/HCPCS code. Audit trails are built as you work.",
    Icon: FileCheck2,
  },
  {
    title: "Close Loop & Improve",
    description:
      "Outcomes, equity overlays, and ROI trends inform panel management and continuous model tuning.",
    Icon: BarChart3,
  },
];

export function HowItWorksTiles() {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Our operating model, step by step
          </h2>
          <p className="mt-4 text-neutral-600">
            Logic‑driven design, equity embedded, and audit‑ready—so your team can focus on care.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(({ title, description, Icon }, idx) => (
            <li
              key={title}
              className="relative h-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white">
                  <Icon aria-hidden className="h-6 w-6 text-primary-600" strokeWidth={1.75} />
                </div>
                <div className="text-sm font-medium text-neutral-500">Step {idx + 1}</div>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
