'use client';

import { useEffect, useState, ReactNode } from 'react';

interface StickyHeroWrapperProps {
  children: ReactNode;
  targetSectionId: string;
  className?: string;
}

export function StickyHeroWrapper({
  children,
  targetSectionId,
  className = '',
}: StickyHeroWrapperProps) {
  const [isSticky, setIsSticky] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reduce = mediaQuery.matches;
    setPrefersReducedMotion(reduce);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    const targetElement = document.getElementById(targetSectionId);
    if (!targetElement || reduce) {
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // sticky while stats section NOT intersecting the top band
          setIsSticky(!entry.isIntersecting);
        });
      },
      {
        rootMargin: '-150px 0px 0px 0px',
        threshold: 0,
      }
    );

    observer.observe(targetElement);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [targetSectionId]);

  const shouldBeSticky = isSticky && !prefersReducedMotion;

  return (
    <div
      className={`
        ${className}
        ${shouldBeSticky ? 'lg:sticky lg:top-0 lg:z-10' : ''}
      `.trim()}
    >
      {children}
    </div>
  );
}
