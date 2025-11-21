import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface HeroProps {
  headline: string | React.ReactNode;
  subheadline: string;
  bullets?: string[];
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

export function Hero({ headline, subheadline, bullets, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 mx-auto max-w-3xl text-lg text-neutral-700 md:text-xl">
            {subheadline}
          </p>
          {bullets && bullets.length > 0 && (
            <ul className="mt-8 mx-auto max-w-4xl space-y-3 text-left text-base text-neutral-700 md:text-lg">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
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
