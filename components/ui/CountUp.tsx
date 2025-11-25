'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  start?: number;
  end: number;
  duration?: number; // in milliseconds
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  start = 0,
  end,
  duration = 1500,
  suffix = '',
  prefix = '',
  className = '',
}: CountUpProps) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reduce = mediaQuery.matches;
    setPrefersReducedMotion(reduce);

    // If reduced motion, skip animation and show final value
    if (reduce) {
      setCount(end);
      setHasAnimated(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Start the count-up animation
            const startTime = Date.now();
            const difference = end - start;

            const animate = () => {
              const currentTime = Date.now();
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Easing function (ease-out)
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentCount = start + difference * easeOut;

              setCount(Math.round(currentCount * 100) / 100); // Round to 2 decimal places

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(end); // Ensure we end at exactly the target value
              }
            };

            requestAnimationFrame(animate);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% visible
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [start, end, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
