import ContactForm from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Contact | LogicHM",
  description:
    "Talk to Logic Health Management about CCM, RPM, and team-based care programs for practices and small hospitals.",
};

export default function ContactPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="contact-title" className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Let&apos;s operationalize patient‑impact at your organization
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Share a bit about your environment—practice or small hospital—and our team will propose an audit‑ready,
            outcomes‑aligned path to launch.
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto mt-10 max-w-3xl">
          <ContactForm />
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
