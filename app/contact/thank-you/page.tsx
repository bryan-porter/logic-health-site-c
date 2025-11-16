import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Thank you | LogicHM",
  description: "We received your message and will be in touch shortly.",
};

export default function ContactThankYouPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Thanks — we'll be in touch
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Our team will review your message and reach out with next steps. If it's urgent, reply to the confirmation email.
          </p>
        </div>
      </Container>
    </section>
  );
}
