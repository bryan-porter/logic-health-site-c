/**
 * Lead Form Client
 *
 * Frontend helper for submitting lead forms to the backend API.
 * Automatically includes visitor tracking and UTM parameters.
 */

import { getOrCreateVisitorId } from './tracking';

const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_API_KEY;

export interface LeadFormInput {
  name?: string;
  email: string;
  role?: string;
  organization?: string;
  provider_count?: string | number;
  form_id?: string;
}

export interface LeadFormResponse {
  ok: boolean;
  error?: string;
}

/**
 * Submit a lead form to the backend API
 *
 * This function:
 * 1. Captures the visitor ID from tracking cookies
 * 2. Extracts UTM parameters from the current URL
 * 3. Submits the form data to /api/forms/lead
 * 4. Returns success/failure status
 *
 * @param input - The lead form data
 * @returns Promise resolving to { ok: boolean, error?: string }
 */
export async function submitLeadForm(
  input: LeadFormInput
): Promise<LeadFormResponse> {
  // Guard: ensure we're in browser environment
  if (typeof window === 'undefined') {
    throw new Error('submitLeadForm can only be called in the browser');
  }

  try {
    // Get visitor ID from tracking cookie
    const visitor_id = getOrCreateVisitorId();

    // Extract UTM parameters from URL
    const searchParams = new URLSearchParams(window.location.search);
    const utm_source = searchParams.get('utm_source');
    const utm_medium = searchParams.get('utm_medium');
    const utm_campaign = searchParams.get('utm_campaign');
    const utm_content = searchParams.get('utm_content');
    const utm_term = searchParams.get('utm_term');

    // Derive segment from current path
    const path = window.location.pathname;
    let segment_slug = "generic";

    if (path === "/demo") {
      segment_slug = "demo";
    } else if (path.startsWith("/landing/")) {
      // robust split to handle potential trailing slashes
      const parts = path.split("/").filter(Boolean);
      // parts[0] is 'landing', parts[1] is the slug
      if (parts[1]) segment_slug = parts[1];
    }

    // Construct full payload
    const payload = {
      ...input,
      visitor_id,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      segment_slug,
    };

    // Submit to backend API
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (PUBLIC_KEY) {
      headers['x-public-api-key'] = PUBLIC_KEY;
    }

    const response = await fetch('/api/forms/lead', {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Lead form submission failed:', response.status, errorData);
      return {
        ok: false,
        error: errorData.error || 'Submission failed',
      };
    }

    const data = await response.json();
    return {
      ok: data.ok === true,
    };
  } catch (error) {
    console.error('Error submitting lead form:', error);
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
