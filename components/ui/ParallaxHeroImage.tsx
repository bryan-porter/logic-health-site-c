'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ParallaxHeroImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export function ParallaxHeroImage({
  src,
  alt,
  width,
  height,
  priority,
  className,
}: ParallaxHeroImageProps) {
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Handle scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate parallax offset
  // Parallax moves slower than scroll (factor of 0.3)
  // Clamp to max ±40px to keep it subtle
  const parallaxOffset = prefersReducedMotion
    ? 0
    : Math.max(-40, Math.min(40, scrollY * 0.3));

  return (
    <div
      className="relative w-full max-w-3xl"
      style={{
        transform: `translateY(${parallaxOffset}px)`,
        transition: prefersReducedMotion ? 'none' : 'transform 0.1s ease-out',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
      />
    </div>
  );
}
