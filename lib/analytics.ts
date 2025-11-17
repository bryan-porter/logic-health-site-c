declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    plausible?: (event: string, opts?: any) => void;
  }
}

export function trackEvent(name: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params);
    } else if (typeof window.plausible === 'function') {
      window.plausible(name, { props: params });
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...params });
    }
  } catch {
    // no-op
  }
}
