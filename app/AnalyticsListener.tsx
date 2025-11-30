"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/tracking";

/**
 * Inner component that handles the actual tracking logic
 * Separated to allow Suspense boundary around useSearchParams
 */
function TrackingLogic() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    // Extract UTM parameters from the URL
    const utms = {
      utm_source: searchParams?.get("utm_source") ?? undefined,
      utm_medium: searchParams?.get("utm_medium") ?? undefined,
      utm_campaign: searchParams?.get("utm_campaign") ?? undefined,
      utm_content: searchParams?.get("utm_content") ?? undefined,
      utm_term: searchParams?.get("utm_term") ?? undefined,
    };

    // Track the page view with UTM parameters
    trackPageView(utms);
  }, [pathname, searchParams]);

  return null;
}

/**
 * AnalyticsListener component
 *
 * Automatically tracks page views when the user navigates between pages.
 * Wrapped in Suspense to prevent de-optimizing the entire app to client-side rendering.
 */
export function AnalyticsListener() {
  return (
    <Suspense fallback={null}>
      <TrackingLogic />
    </Suspense>
  );
}
