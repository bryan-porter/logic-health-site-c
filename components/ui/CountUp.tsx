"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  start?: number;
  end: number;
  duration?: number;      // ms, default ~1.2s
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({
  start = 0,
  end,
  duration = 1200,
  prefix = "",
  suffix = "",
  className = "",
}: CountUpProps) {
  const [value, setValue] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduceMotion = mediaQuery.matches;

    // If reduced motion, just jump to end and bail
    if (reduceMotion) {
      setValue(end);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = performance.now();
            const diff = end - start;

            const animate = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
              const current = start + diff * eased;
              setValue(current);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [start, end, duration, hasAnimated]);

  // Always show an integer: no decimals, ever
  const display = Math.round(value).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
