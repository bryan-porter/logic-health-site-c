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
    title: "Align on goals, governance, and CPOM boundaries",
    description:
      "We start with your executive and clinical leaders to decide which programs to run (CCM, RPM, and others), define supervision rules, and document CPOM-safe role boundaries so physicians stay in control of clinical decisions.",
    Icon: Users,
  },
  {
    title: "Design one operating model in your EHR",
    description:
      "LOGIC configures templates, note types, time-tracking, and task flows inside your existing EHR—so every practice follows the same playbook without adding a new platform for staff to learn.",
    Icon: Package,
  },
  {
    title: "Identify and enroll eligible patients across sites",
    description:
      "We build eligibility lists from your EHR, standardize consent scripts, and enroll patients through centralized outreach, prioritizing high-risk cohorts that drive revenue and value-based performance.",
    Icon: HeartPulse,
  },
  {
    title: "Run daily outreach, monitoring, and coordination",
    description:
      "Our care team handles outreach, RPM triage, and care-management tasks under your supervision, documenting every touchpoint in your EHR so your staff aren't stuck tracking minutes and phone calls.",
    Icon: PhoneCall,
  },
  {
    title: "Escalate only what matters to providers",
    description:
      "Clinically meaningful issues are summarized and routed back to the supervising provider through your EHR, so physicians spend time on decisions—not chasing data or administrivia.",
    Icon: FileCheck2,
  },
  {
    title: "Report revenue, outcomes, and quality across sites",
    description:
      "We deliver recurring reports on revenue per enrolled patient, ED visits and readmissions, quality measures, and documentation audits, broken out by practice, payer, and program so MSO and rural leaders can see the impact.",
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
