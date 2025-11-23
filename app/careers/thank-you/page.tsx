import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Thank you | LogicHM Careers",
  description: "We received your application and will review it shortly.",
};

export default function CareersThankYouPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Thanks for your application
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Our team received your information and will review it carefully. If your background is a good match for current or upcoming openings, we&apos;ll reach out within 1–2 weeks.
          </p>
          <p className="mt-4 text-sm text-neutral-600">
            Even if we don&apos;t have an immediate opening, we keep applications on file and may contact you in the future as our team grows.
          </p>
        </div>
      </Container>
    </section>
  );
}
