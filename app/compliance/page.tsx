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
    'CPOM‑sensitive, HIPAA‑safe care‑management with SOC 2‑aligned security, encryption, and audit‑ready documentation—built so MSOs, IPAs, small hospitals, and rural RHCs/FQHCs can scale CCM and RPM without adding new regulatory headaches.',
  alternates: {
    canonical: '/compliance',
  },
};

export default function CompliancePage() {
  // --- Assurances: high-level trust statements ---
  const assurances = [
    {
      Icon: Shield,
      title: "CPOM‑sensitive, physician‑led model",
      description:
        "We operate as your vendor under your existing management and professional‑services agreements. Physicians retain clinical decision‑making; our teams execute defined tasks under your supervision policies so we do not practice medicine.",
    },
    {
      Icon: FileCheck,
      title: "HIPAA‑safe with BAAs that match your structure",
      description:
        "Administrative, technical, and physical safeguards aligned with HIPAA Privacy & Security Rules, plus BAAs that extend through our subprocessors so your legal and compliance teams can see exactly who handles PHI.",
    },
    {
      Icon: ScrollText,
      title: "Support for fraud & abuse risk programs",
      description:
        "Standardized documentation and time tracking help support your compliance program for the False Claims Act, Anti‑Kickback Statute, and Stark Law by reducing double‑billing, time double‑counting, and inconsistent notes. Final coding and legal decisions remain with your organization.",
    },
    {
      Icon: Lock,
      title: "SOC 2‑aligned security program",
      description:
        "Security, availability, and confidentiality controls mapped to SOC 2, with an evidence pack your security, IT, and audit teams can review.",
    },
    {
      Icon: Eye,
      title: "Audit trails you can hand to payers",
      bullets: [
        "Patient‑level time logs and call summaries by program",
        "Consent, one‑provider‑per‑month, and supervision status",
        "Exportable evidence pack for internal and external audits",
      ],
    },
    {
      Icon: Server,
      title: "Data minimization & retention",
      bullets: [
        "Minimal‑necessary PHI for each workflow",
        "Configurable retention windows and log export",
        "Secure deletion and de‑provisioning when programs end",
      ],
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
        "SSO via SAML/OIDC, MFA enforcement, and least‑privilege role‑based permissions aligned with your identity and access policies.",
    },
    {
      Icon: KeyRound,
      label: "Encryption (in transit & at rest)",
      status: "Aligned",
      description:
        "TLS 1.2+ or higher for data in transit, AES‑256 at rest, and managed keys with rotation.",
    },
    {
      Icon: Eye,
      label: "Monitoring & audit logging",
      status: "Aligned",
      description:
        "Centralized logging, monitoring, and alerting for authentication, access, and configuration events, with options to forward logs to your SIEM.",
    },
    {
      Icon: Users,
      label: "Vendor & subprocessor risk",
      status: "Aligned",
      description:
        "Documented subprocessor list, BAA/DPA chain, and annual security reviews so you can show your board exactly how PHI flows.",
    },
    {
      Icon: ScrollText,
      label: "Program documentation & time tracking",
      status: "Aligned",
      description:
        "Standardized notes and separate time tracking by program (CCM, RPM, etc.) with one‑provider‑per‑month checks to help reduce billing risk and support audit readiness.",
    },
    {
      Icon: Server,
      label: "Data retention & deletion",
      status: "Aligned",
      description:
        "Configurable retention windows aligned with your legal and RHC/FQHC cost‑reporting needs, plus secure deletion and de‑provisioning when data ages out.",
    },
    {
      Icon: FileCheck,
      label: "Change management",
      status: "Aligned",
      description:
        "Peer review, CI/CD checks, and approval workflows for production changes.",
    },
  ];

  // --- Operational governance checklist (customer-facing readiness) ---
  const checklist = [
    { text: "BAA executed (customer ↔ LogicHM), with subprocessors documented" },
    {
      text:
        "Management services / CPOM structure reviewed with counsel and LOGIC's role documented in statements of work",
    },
    {
      text:
        "Clinical vs operational roles and responsibilities (RACI) approved by medical leadership",
    },
    { text: "SSO/MFA enforced for all staff accessing PHI" },
    { text: "Staff HIPAA and security training completed and tracked" },
    {
      text:
        "Program coding policies validated with billing/compliance (e.g., CCM, RPM, G0511, and related services)",
    },
    {
      text:
        "Retention window and log‑export approach agreed with security and compliance",
    },
    { text: "Incident response and escalation contacts documented" },
    { text: "Quarterly access and vendor reviews scheduled" },
    {
      text:
        "EHR integration scopes follow the minimal‑necessary principle",
    },
  ];

  return (
    <Container className="py-16 md:py-24">
      <SectionHeader
        eyebrow="Compliance & Security"
        title="Audit‑ready, CPOM‑sensitive controls for remote care programs"
        subtitle="Designed for MSOs, IPAs, small hospitals, and rural RHCs/FQHCs that need outsourced care‑management to be HIPAA‑safe, physician‑led, and defensible with payers and regulators."
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
        Status labels (e.g., "Certified", "Aligned", "In‑Progress") are illustrative and should be updated to match your
        current attestations and control maturity. Nothing on this page is legal advice; customers remain responsible for
        their own regulatory, coding, and billing decisions in consultation with their legal, compliance, and billing teams.
      </p>
    </Container>
  );
}
