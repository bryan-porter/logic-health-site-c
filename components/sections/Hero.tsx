import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

export function Hero({ headline, subheadline, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg text-neutral-700 md:text-xl lg:text-2xl">
            {subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href={primaryCTA.href} variant="primary" className="px-8 py-4 text-lg">
              {primaryCTA.text}
            </Button>
            <Button href={secondaryCTA.href} variant="secondary" className="px-8 py-4 text-lg">
              {secondaryCTA.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
