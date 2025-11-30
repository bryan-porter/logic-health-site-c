/**
 * Client-side tracking utilities
 *
 * This module provides browser-only functions for tracking visitor behavior
 * and sending events to the backend API.
 */

const VISITOR_COOKIE_NAME = "ccm_vid";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_API_KEY;

/**
 * Get a cookie value by name
 */
export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split("=");
    if (key === name && value) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

/**
 * Set a cookie with the given name, value, and expiration
 */
export function setCookie(name: string, value: string, days = 365): void {
  if (typeof document === "undefined") return;

  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;

  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/; SameSite=Lax; Secure`;
}

/**
 * Get or create a unique visitor ID
 * Returns existing visitor ID from cookie, or generates a new UUID and stores it
 */
export function getOrCreateVisitorId(): string {
  const existing = getCookie(VISITOR_COOKIE_NAME);
  if (existing) {
    return existing;
  }

  // Generate new UUID using Web Crypto API
  const visitorId = crypto.randomUUID();
  setCookie(VISITOR_COOKIE_NAME, visitorId);
  return visitorId;
}

/**
 * Send an event to the tracking API
 * Internal helper function - swallows errors to avoid breaking UX
 */
async function sendEvent(body: any): Promise<void> {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (PUBLIC_KEY) {
      headers["x-public-api-key"] = PUBLIC_KEY;
    }

    await fetch("/api/events", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.warn("track error", error);
  }
}

/**
 * Track a page view
 * Call this when a user navigates to a new page
 */
export function trackPageView(extra?: Record<string, any>): void {
  if (typeof window === "undefined") return;

  const payload = {
    anonymous_id: getOrCreateVisitorId(),
    event: "page_view",
    timestamp: new Date().toISOString(),
    source: "web",
    path: window.location.pathname,
    url: window.location.href,
    properties: {
      referrer: document.referrer || null,
      ...extra,
    },
  };

  void sendEvent(payload);
}

/**
 * Track a custom event
 * Use this for user interactions, form submissions, etc.
 */
export function trackEvent(eventName: string, properties?: Record<string, any>): void {
  if (typeof window === "undefined") return;

  const payload = {
    anonymous_id: getOrCreateVisitorId(),
    event: eventName,
    timestamp: new Date().toISOString(),
    source: "web",
    path: window.location.pathname,
    url: window.location.href,
    properties: properties ?? {},
  };

  void sendEvent(payload);
}

/**
 * Identify a user by linking their anonymous ID to a CRM contact ID
 * Use this when a user submits a form or signs in
 */
export async function identifyUser(crmContactId: string, email?: string): Promise<void> {
  if (typeof window === "undefined") return;

  try {
    const anonymousId = getOrCreateVisitorId();

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (PUBLIC_KEY) {
      headers["x-public-api-key"] = PUBLIC_KEY;
    }

    await fetch("/api/identify", {
      method: "POST",
      headers,
      body: JSON.stringify({
        anonymous_id: anonymousId,
        crm_contact_id: crmContactId,
        email,
      }),
    });
  } catch (error) {
    console.warn("identify error", error);
  }
}
