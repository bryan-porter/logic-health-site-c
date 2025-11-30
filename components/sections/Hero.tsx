"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ParallaxHeroImage } from "@/components/ui/ParallaxHeroImage";
import { StickyHeroWrapper } from "@/components/ui/StickyHeroWrapper";
import TrackedCtaButton from "@/components/TrackedCtaButton";
import { cn } from "@/lib/utils";

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
  heroImageSrc?: string;
  heroImageAlt?: string;
  enableParallax?: boolean;
  enableStickyImage?: boolean;
  stickyTargetId?: string;
}

export function Hero({
  headline,
  subheadline,
  bullets,
  primaryCTA,
  secondaryCTA,
  heroImageSrc,
  heroImageAlt,
  enableParallax = false,
  enableStickyImage = false,
  stickyTargetId = 'stats-section',
}: HeroProps) {
  const hasImage = Boolean(heroImageSrc);

  return (
    <section className={`bg-gradient-to-b from-primary-50 to-white pt-16 md:pt-24 lg:pt-32 ${hasImage ? 'pb-8 md:pb-12 lg:pb-16' : 'pb-16 md:pb-24 lg:pb-32'}`}>
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
            <TrackedCtaButton
              href={primaryCTA.href}
              className={cn(
                "inline-flex items-center justify-center rounded-md font-medium transition-colors",
                "px-8 py-4 text-lg",
                "bg-primary-600 text-white hover:bg-primary-700"
              )}
              eventProps={{
                location: "hero",
                cta_id: "hero-primary-cta",
              }}
            >
              {primaryCTA.text}
            </TrackedCtaButton>
            <TrackedCtaButton
              href={secondaryCTA.href}
              className={cn(
                "inline-flex items-center justify-center rounded-md font-medium transition-colors",
                "px-8 py-4 text-lg",
                "bg-white border-2 border-neutral-300 text-neutral-900 hover:border-primary-600"
              )}
              eventProps={{
                location: "hero",
                cta_id: "hero-secondary-cta",
              }}
            >
              {secondaryCTA.text}
            </TrackedCtaButton>
          </div>
          {hasImage && (
            <>
              {enableStickyImage ? (
                <StickyHeroWrapper
                  targetSectionId={stickyTargetId}
                  className="mt-16 flex justify-center animate-float-slow"
                >
                  {enableParallax ? (
                    <ParallaxHeroImage
                      src={heroImageSrc!}
                      alt={
                        heroImageAlt ??
                        "Physician and practice administrator reviewing remote patient monitoring and chronic care metrics"
                      }
                      width={1600}
                      height={900}
                      priority
                      className="h-auto w-full rounded-2xl shadow-xl object-cover transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl"
                    />
                  ) : (
                    <div className="relative w-full max-w-3xl">
                      <Image
                        src={heroImageSrc!}
                        alt={
                          heroImageAlt ??
                          "Physician and practice administrator reviewing remote patient monitoring and chronic care metrics"
                        }
                        width={1600}
                        height={900}
                        priority
                        className="h-auto w-full rounded-2xl shadow-xl object-cover transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl"
                      />
                    </div>
                  )}
                </StickyHeroWrapper>
              ) : (
                <div className="mt-16 flex justify-center animate-float-slow">
                  {enableParallax ? (
                    <ParallaxHeroImage
                      src={heroImageSrc!}
                      alt={
                        heroImageAlt ??
                        "Physician and practice administrator reviewing remote patient monitoring and chronic care metrics"
                      }
                      width={1600}
                      height={900}
                      priority
                      className="h-auto w-full rounded-2xl shadow-xl object-cover transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl"
                    />
                  ) : (
                    <div className="relative w-full max-w-3xl">
                      <Image
                        src={heroImageSrc!}
                        alt={
                          heroImageAlt ??
                          "Physician and practice administrator reviewing remote patient monitoring and chronic care metrics"
                        }
                        width={1600}
                        height={900}
                        priority
                        className="h-auto w-full rounded-2xl shadow-xl object-cover transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl"
                      />
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
