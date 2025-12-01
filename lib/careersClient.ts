/**
 * Client-side helper for submitting careers application form
 */

import { getOrCreateVisitorId } from './tracking';

export async function submitCareersApplication(formData: FormData): Promise<{ ok: boolean; error?: string }> {
  // Append visitor_id to formData
  const visitorId = getOrCreateVisitorId();
  formData.append('visitor_id', visitorId);

  try {
    const res = await fetch('/api/forms/careers', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return {
        ok: false,
        error: errorData?.error || 'Something went wrong. Please try again.',
      };
    }

    const data = await res.json();
    return { ok: data.ok };
  } catch (error) {
    console.error('Error submitting careers application:', error);
    return {
      ok: false,
      error: 'Network error. Please check your connection and try again.',
    };
  }
}
