import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Talk to a human. We'll review your panel, payer mix, and goals — and tell you if CCM/RPM will actually pencil out."
      />

      {/* Talk to a Human */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
              Talk to a Human
            </h2>
            <p className="mb-8 text-lg text-neutral-700">
              Have 15 minutes? We'll review your panel, payer mix, and goals — and tell you if CCM/RPM will actually pencil out.
            </p>

            {/* What to Bring */}
            <div className="mb-12 rounded-lg bg-neutral-50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                What to bring (optional):
              </h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-primary-600">•</span>
                  <span>Patient panel size and top conditions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600">•</span>
                  <span>Payer mix rough percentages</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600">•</span>
                  <span>Current denials or audit concerns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600">•</span>
                  <span>EHR name/version</span>
                </li>
              </ul>
            </div>

            {/* Reach Us */}
            <div className="mb-12">
              <h3 className="mb-6 text-xl font-semibold text-neutral-900">
                Reach us:
              </h3>
              <div className="space-y-4 text-lg text-neutral-700">
                <div className="flex gap-3">
                  <span className="font-semibold text-primary-600">Strategy Call:</span>
                  <span>Schedule via this contact form</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary-600">Email:</span>
                  <span>hello@logichm.example</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary-600">Hours:</span>
                  <span>9am–6pm local time, Monday–Friday</span>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-12 text-center">
              <p className="text-lg text-neutral-600">
                Contact form integration coming soon
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                For now, please reach out via email: hello@logichm.example
              </p>
            </div>

            <div className="mt-8 rounded-lg border-l-4 border-primary-600 bg-primary-50 p-6">
              <p className="text-sm text-neutral-700">
                Please don't share PHI via email. We'll provide a secure channel during onboarding.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
