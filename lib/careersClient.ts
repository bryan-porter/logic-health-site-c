/**
 * Client-side helper for submitting careers application form
 */

export async function submitCareersApplication(formData: FormData): Promise<{ ok: boolean; error?: string }> {
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
