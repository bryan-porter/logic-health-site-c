import { Container } from "@/components/ui/Container";
import { ResourceGrid, type ResourceItem } from "@/components/sections/ResourceGrid";
import { CTA } from "@/components/sections/CTA";

export default function ResourcesPage() {
  // Pairs with the sample MDX you already have under /content/blog
  const calculators: ResourceItem[] = [
    {
      label: "Calculator",
      title: "RPM ROI Calculator",
      description:
        "Estimate monthly recurring revenue and payer-mix impact for RPM/APCM vs. CCM-only models.",
      href: "/blog/rpm-roi-calculator",
    },
    {
      label: "Calculator",
      title: "CCM Revenue Model (Request)",
      description:
        "Forecast billable minutes, staffing, and expected reimbursement for CCM. We'll tailor it to your panel.",
      href: "/contact?topic=ccm-revenue-model",
    },
  ];

  const guides: ResourceItem[] = [
    {
      label: "Guide",
      title: "Understanding CCM Billing Codes: 99490, 99439, 99491",
      description:
        "Practical explanations and documentation tips—written for clinicians and billers, not lawyers.",
      href: "/blog/understanding-ccm-codes",
    },
    {
      label: "Guide",
      title: "CMS Billing & Compliance Updates (2024)",
      description:
        "What changed, what stayed the same, and where practices still miss revenue opportunities.",
      href: "/blog/cms-billing-updates-2024",
    },
    {
      label: "Playbook",
      title: "Launch CCM & RPM in 30 Days",
      description:
        "A step-by-step implementation plan—panel stratification, staffing patterns, escalation logic, and close.",
      href: "/contact?topic=launch-ccm-rpm-playbook",
    },
  ];

  const templates: ResourceItem[] = [
    {
      label: "Template",
      title: "CCM Time Tracking Log",
      description:
        "Simple, auditable format for clinical time capture and supervision notes. Spreadsheet or EHR-native.",
      href: "/contact?topic=ccm-time-log-template",
    },
    {
      label: "Checklist",
      title: "Audit-Ready Documentation Checklist",
      description:
        "One-page checklist to keep notes, time, and charge logic defensible for CCM, RPM, TCM, and more.",
      href: "/contact?topic=audit-checklist",
    },
  ];

  const security: ResourceItem[] = [
    {
      label: "Packet",
      title: "Security & Compliance Packet",
      description:
        "HIPAA + SOC 2 details, BAA template, data flow diagrams, and operational controls—ready for InfoSec review.",
      href: "/contact?topic=security-packet",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Resources
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              Practical, audit‑ready tools for clinical, financial, and compliance leaders—built for practices and small hospitals.
            </p>
          </div>
        </Container>
      </section>

      <ResourceGrid
        heading="Featured calculators"
        subheading="Quantify revenue and staffing impact before you launch or expand."
        items={calculators}
        columns={2}
      />

      <ResourceGrid
        heading="Guides & playbooks"
        subheading="Clear, action‑oriented explainers your teams will actually use."
        items={guides}
      />

      <ResourceGrid
        heading="Templates & checklists"
        subheading="Keep documentation defensible and workflows consistent."
        items={templates}
      />

      <ResourceGrid
        heading="Security & compliance"
        subheading="Everything your privacy and InfoSec teams need to review."
        items={security}
        columns={2}
      />

      <CTA
        headline="Want a custom resource pack for your EHR and payer mix?"
        description="We'll bundle the right guides, templates, and calculators for your specialty, and include a small‑hospital deployment checklist if relevant."
        buttonText="Request my pack"
        buttonHref="/contact?topic=custom-resource-pack"
        variant="secondary"
      />
    </>
  );
}
