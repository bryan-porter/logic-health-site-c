import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AssuranceCard } from "@/components/sections/AssuranceCard";
import { ControlCard, type ControlItem } from "@/components/sections/ControlCard";
import { ProgramChecklist } from "@/components/sections/ProgramChecklist";
import { SectionHeader } from "@/components/sections/SectionHeader";

// Icons from your local icons barrel:
import {
  Shield,
  Lock,
  FileCheck,
  ScrollText,
  KeyRound,
  Eye,
  Server,
  Users,
  AlertTriangle,
  Check,
} from "@/components/icons";

export const metadata: Metadata = {
  title: 'Compliance & Security',
  description:
    'HIPAA-safe by design with SOC 2 Type II alignment, encryption everywhere, and audit-ready documentation. Learn about our security controls and compliance framework.',
  alternates: {
    canonical: '/compliance',
  },
};

export default function CompliancePage() {
  // --- Assurances: high-level trust statements ---
  const assurances = [
    {
      Icon: Shield,
      title: "HIPAA-safe by design",
      description:
        "Administrative, technical, and physical safeguards aligned to the HIPAA Privacy & Security Rules. BAA available for all customers.",
    },
    {
      Icon: FileCheck,
      title: "SOC 2 Type II alignment",
      description:
        "Controls mapped to Security, Availability, and Confidentiality. Evidence pack available upon request.",
    },
    {
      Icon: Lock,
      title: "Encryption everywhere",
      bullets: ["TLS 1.2+ in transit", "AES‑256 at rest", "Managed key rotation"],
    },
    {
      Icon: Users,
      title: "Access governance",
      bullets: ["SSO/MFA support", "Least‑privilege RBAC", "Break‑glass procedures"],
    },
    {
      Icon: Eye,
      title: "Auditability & traceability",
      bullets: ["Immutable audit logs", "Export to SIEM", "Patient‑level event trails"],
    },
    {
      Icon: Server,
      title: "Data retention & minimization",
      bullets: ["Configurable retention windows", "Minimal necessary PHI", "Secure deletion"],
    },
  ];

  // --- Security & privacy controls with statuses ---
  type ControlSeed = ControlItem & {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };

  const controls: ControlSeed[] = [
    {
      Icon: Lock,
      label: "Access control (SSO/MFA/RBAC)",
      status: "Aligned",
      description:
        "SSO via SAML/OIDC, MFA enforcement, and least‑privilege role‑based permissions.",
    },
    {
      Icon: KeyRound,
      label: "Encryption (in transit & at rest)",
      status: "Aligned",
      description: "TLS 1.2+ everywhere; AES‑256 at rest; managed keys with rotation.",
    },
    {
      Icon: Eye,
      label: "Audit logging & monitoring",
      status: "Aligned",
      description: "Immutable logs, anomaly alerts, and export to your SIEM.",
    },
    {
      Icon: Server,
      label: "Backups & disaster recovery",
      status: "Aligned",
      description: "Encrypted backups, tested restores, documented RTO/RPO.",
    },
    {
      Icon: AlertTriangle,
      label: "Incident response",
      status: "Aligned",
      description:
        "Runbooks, on‑call escalation, and breach notification procedures.",
    },
    {
      Icon: Users,
      label: "Vendor & subprocessor risk",
      status: "Aligned",
      description: "BAA/DPA chain, principle of least privilege, annual reviews.",
    },
    {
      Icon: ScrollText,
      label: "Data retention & deletion",
      status: "Aligned",
      description: "Configurable retention windows and secure deletion workflows.",
    },
    {
      Icon: FileCheck,
      label: "Change management",
      status: "Aligned",
      description: "Peer review, CI gates, and approval workflows for production changes.",
    },
  ];

  // --- Operational governance checklist (customer-facing readiness) ---
  const checklist = [
    { text: "BAA executed (customer ↔ LogicHM)" },
    { text: "SSO/MFA enforced for all staff" },
    { text: "Designated Security & Privacy Officers" },
    { text: "Staff HIPAA training completed & tracked" },
    { text: "Retention window set & log export configured" },
    { text: "Incident response contacts documented" },
    { text: "Quarterly access reviews scheduled" },
    { text: "EHR integration scopes follow minimal‑necessary principle" },
  ];

  return (
    <Container className="py-16 md:py-24">
      <SectionHeader
        eyebrow="Compliance & Security"
        title="Audit‑ready, hospital‑grade controls for remote care programs"
        subtitle="Built to meet payer and hospital requirements while keeping clinical workflows simple."
        align="center"
      />

      {/* Assurances */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {assurances.map((a) => (
          <AssuranceCard
            key={a.title}
            Icon={a.Icon}
            title={a.title}
            description={"description" in a ? a.description : undefined}
            bullets={"bullets" in a ? a.bullets : undefined}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="mt-16">
        <h3 className="text-lg font-semibold text-neutral-900">
          Security & privacy controls
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {controls.map(({ Icon, ...item }) => (
            <ControlCard key={item.label} Icon={Icon} item={item} />
          ))}
        </div>
      </div>

      {/* Governance checklist */}
      <div className="mt-16">
        <ProgramChecklist
          title="Program governance checklist"
          items={checklist}
        />
      </div>

      {/* Small note to keep claims accurate */}
      <p className="mt-6 text-xs text-neutral-500">
        Status labels (e.g., "Certified", "Aligned", "In‑Progress") are placeholders and should reflect your
        current attestations and control maturity.
      </p>
    </Container>
  );
}
