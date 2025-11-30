"use client";

import { Container } from "@/components/ui/Container";
import TrackedCtaButton from "@/components/TrackedCtaButton";
import { cn } from "@/lib/utils";

interface CTAProps {
  headline: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  variant?: "primary" | "secondary";
}

export function CTA({
  headline,
  description,
  buttonText,
  buttonHref,
  variant = "primary",
}: CTAProps) {
  const bgClass = variant === "primary"
    ? "bg-primary-600"
    : "bg-neutral-50";

  const textClass = variant === "primary"
    ? "text-white"
    : "text-neutral-900";

  const descClass = variant === "primary"
    ? "text-primary-100"
    : "text-neutral-700";

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-3xl font-bold md:text-4xl ${textClass}`}>
            {headline}
          </h2>
          {description && (
            <p className={`mt-4 text-lg md:text-xl ${descClass}`}>
              {description}
            </p>
          )}
          <div className="mt-8">
            <TrackedCtaButton
              href={buttonHref}
              className={cn(
                "inline-flex items-center justify-center rounded-md font-medium transition-colors",
                "px-8 py-4 text-lg",
                variant === "primary"
                  ? "bg-white border-2 border-neutral-300 text-neutral-900 hover:border-primary-600"
                  : "bg-primary-600 text-white hover:bg-primary-700"
              )}
              eventProps={{
                location: "cta-section",
                cta_id: "cta-main",
              }}
            >
              {buttonText}
            </TrackedCtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
