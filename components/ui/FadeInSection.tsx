'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInSection({
  children,
  className = '',
  delay = 0,
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reduce = mediaQuery.matches;
    setPrefersReducedMotion(reduce);

    // If reduced motion, skip animation
    if (reduce) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger when 20-30% of component is in view
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setIsVisible(true);
            // Unobserve after animating once
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: [0.2, 0.3],
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(25px)',
        transition: prefersReducedMotion
          ? 'none'
          : `opacity 300ms ease-out ${delay}ms, transform 300ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
