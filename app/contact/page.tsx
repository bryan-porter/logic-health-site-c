import dynamic from "next/dynamic";

import { Container } from "@/components/ui/Container";

const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded-xl" />,
});

export const metadata = {
  title: "Contact | LogicHM",
  description:
    "Talk to Logic Health Management about CCM, RPM, and team-based care programs for practices and small hospitals.",
};

type ContactPageProps = {
  searchParams?: Promise<{ topic?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const topicKey = (params?.topic ?? "").toLowerCase();

  // Derive hero copy based on topic
  let heroHeadline = "Let's operationalize patient‑impact at your organization";
  let heroSubcopy = "Share a bit about your environment—practice or small hospital—and our team will propose an audit‑ready, outcomes‑aligned path to launch.";

  if (topicKey === "mso-roi") {
    heroHeadline = "See what CCM/RPM ROI looks like for your MSO or IPA";
    heroSubcopy = "Share a bit about your MSO or IPA—panel size, payer mix, sites—and we'll build a conservative, month-by-month pro forma showing illustrative revenue, staffing avoided, and quality impact.";
  } else if (topicKey === "rhc-g0511") {
    heroHeadline = "Build your RHC/FQHC G0511 game plan";
    heroSubcopy = "Tell us about your RHC/FQHC sites, visit volume, and panel demographics, and we'll design a compliant, audit-ready care-management workflow around G0511 and your existing EHR.";
  } else if (topicKey === "pricing") {
    heroHeadline = "Get transparent pricing for your organization";
    heroSubcopy = "Share your panel size, payer mix, and care-management goals, and we'll provide a conservative pricing model with no hidden costs or aggressive assumptions.";
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="contact-title" className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            {heroHeadline}
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            {heroSubcopy}
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto mt-10 max-w-3xl">
          <ContactForm defaultTopic={topicKey} />
        </div>

        {/* Assurances */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5">
              <h3 className="text-sm font-semibold text-neutral-900">Compliance‑first</h3>
              <p className="mt-2 text-sm text-neutral-700">
                HIPAA & SOC 2 controls with BAA. Evidence pack available for security reviews; HITRUST‑aligned options for hospitals.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5">
              <h3 className="text-sm font-semibold text-neutral-900">EHR‑ready</h3>
              <p className="mt-2 text-sm text-neutral-700">
                HL7/FHIR interfaces and role‑based dashboards. We scope to Epic, eCW, Veradigm, and more.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5">
              <h3 className="text-sm font-semibold text-neutral-900">Fast time‑to‑value</h3>
              <p className="mt-2 text-sm text-neutral-700">
                Typical practice go‑live in ~30 days; hospital SOWs scoped to discharge workflows and governance.
              </p>
            </div>
          </div>
        </div>

        {/* Scheduling anchor */}
        <div id="schedule" className="mx-auto mt-12 max-w-xl text-center">
          {/* Replace href with your real scheduling link */}
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 font-medium text-white hover:bg-primary-700"
          >
            Schedule a 15‑minute call
          </a>
          <p className="mt-3 text-sm text-neutral-600">
            Prefer email? Use the form above—we respond within 1 business day.
          </p>
        </div>
      </Container>
    </section>
  );
}
