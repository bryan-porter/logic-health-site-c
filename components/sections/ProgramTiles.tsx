import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  ClipboardCheck,
  HeartPulse,
  Stethoscope,
  Brain,
  Activity,
  Gauge,
  Undo2,
  Users,
  ShieldCheck,
} from "lucide-react";

type Program = {
  title: string;
  description: string;
  href?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const PROGRAMS: Program[] = [
  {
    title: "Annual Wellness Visit (AWV)",
    description:
      "Personalized prevention plans, HRA logic, and Z‑code capture aligned with CMS.",
    href: "/solutions",
    Icon: ClipboardCheck,
  },
  {
    title: "Chronic Care Management (CCM)",
    description:
      "Streamlined documentation, supervision logic, and time tracking for compliant billing.",
    href: "/solutions/ccm",
    Icon: Stethoscope,
  },
  {
    title: "Behavioral Health Integration (BHI)",
    description:
      "Embedded PROMs, risk stratification, and integrated team workflows.",
    href: "/solutions",
    Icon: Brain,
  },
  {
    title: "Principal Care Management (PCM)",
    description:
      "Focused management for a single high‑risk condition and specialty alignment.",
    href: "/solutions",
    Icon: ShieldCheck,
  },
  {
    title: "Remote Patient Monitoring (RPM)",
    description:
      "Device integration, alert routing, and compliance dashboards at‑a‑glance.",
    href: "/solutions/rpm",
    Icon: HeartPulse,
  },
  {
    title: "Remote Therapeutic Monitoring (RTM)",
    description:
      "Track non‑physiologic data such as adherence, pain, and functional status.",
    href: "/solutions",
    Icon: Gauge,
  },
  {
    title: "Transitional Care Management (TCM)",
    description:
      "Discharge coordination, readmit reduction, and equity‑aware follow‑up.",
    href: "/solutions",
    Icon: Undo2,
  },
  {
    title: "CHI & PIN",
    description:
      "Community Health Integration and Principal Illness Navigation with SDoH overlays.",
    href: "/solutions",
    Icon: Users,
  },
  {
    title: "TEAMs",
    description:
      "Team Evaluation & Augmented Management for scalable inpatient/outpatient care.",
    href: "/solutions",
    Icon: Activity,
  },
];

export function ProgramTiles() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Programs we stand up and operate
          </h2>
          <p className="mt-4 text-neutral-600">
            We integrate clinical logic, regulatory nuance, and team‑based workflows across
            CMS‑recognized models—built to be audit‑ready and scalable.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map(({ title, description, href, Icon }) => {
            const content = (
              <div className="h-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md focus:outline-none">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200">
                    <Icon aria-hidden className="h-6 w-6 text-primary-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>
                {href ? (
                  <span className="mt-4 inline-block text-sm font-medium text-primary-600">
                    Learn more →
                  </span>
                ) : null}
              </div>
            );

            return href ? (
              <Link key={title} href={href} className="block focus:outline-none focus:ring-2 focus:ring-primary-500">
                {content}
              </Link>
            ) : (
              <div key={title}>{content}</div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
