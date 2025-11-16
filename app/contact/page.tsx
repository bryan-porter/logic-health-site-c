import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Logic Health Management",
  description:
    "Schedule a strategy call or request pricing. We support practices and small hospitals with audit‑ready CCM, RPM, RTM, BHI, PCM, TCM, CHI & PIN, and TEAMs programs.",
};

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            Talk to our team
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Get a 15‑minute strategy consult with clinical ops and revenue cycle leads. We'll tailor
            recommendations to your population, payer mix, and timeline.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <ContactForm />
        </div>

        <div className="mx-auto mt-8 max-w-3xl text-center text-sm text-neutral-600">
          Prefer email? <a className="font-medium text-primary-700" href="mailto:hello@logichm.com">hello@logichm.com</a>
        </div>
      </Container>
    </section>
  );
}
