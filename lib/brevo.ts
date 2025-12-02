/**
 * Brevo (formerly Sendinblue) API Integration
 * Syncs leads to Brevo for email nurturing campaigns
 */

export interface BrevoContact {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  role?: string;
  providerCount?: number | string;
  segmentSlug?: string;
  sizeBucket?: string;
  persona?: string;
  formId?: string;
  leadSource?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
}

/**
 * Sync a contact to Brevo
 * Creates or updates the contact and adds them to the nurture list
 *
 * This function fails soft - logs errors but doesn't throw
 */
export async function syncToBrevo(contact: BrevoContact): Promise<void> {
  // Check environment variables
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_NURTURE_LIST_ID;

  if (!apiKey) {
    console.error('BREVO_API_KEY is not configured - skipping Brevo sync');
    return;
  }

  if (!listId) {
    console.error('BREVO_NURTURE_LIST_ID is not configured - skipping Brevo sync');
    return;
  }

  try {
    // Prepare request body
    const requestBody = {
      email: contact.email,
      updateEnabled: true, // Update contact if already exists
      listIds: [parseInt(listId, 10)],
      attributes: {
        FIRSTNAME: contact.firstName || '',
        LASTNAME: contact.lastName || '',
        COMPANY: contact.company || '',
        JOB_TITLE: contact.role || '',
        PROVIDER_COUNT: contact.providerCount ? String(contact.providerCount) : '',
        LEAD_SOURCE: contact.leadSource || '',

        // Custom LogicHM Fields (with proper mappings)
        LOGIC_SEGMENT: contact.segmentSlug || '',
        LOGIC_SIZE: contact.sizeBucket || '',
        LOGIC_PERSONA: contact.persona || '',
        LAST_FORM_ID: contact.formId || '',

        // UTM Parameters
        UTM_SOURCE: contact.utm_source || '',
        UTM_MEDIUM: contact.utm_medium || '',
        UTM_CAMPAIGN: contact.utm_campaign || '',
        UTM_CONTENT: contact.utm_content || '',
        UTM_TERM: contact.utm_term || '',
      },
    };

    // Call Brevo API
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(`Successfully synced contact to Brevo: ${contact.email}`, data);
    } else {
      // Brevo returns 201 for created, 204 for updated
      // Some responses might not have JSON body
      const statusText = response.statusText;

      if (response.status === 201 || response.status === 204) {
        console.log(`Successfully synced contact to Brevo: ${contact.email} (${response.status})`);
      } else {
        const errorText = await response.text();
        console.error(`Brevo API error (${response.status} ${statusText}):`, errorText);
      }
    }
  } catch (error) {
    // Log error but don't throw - we don't want Brevo issues to break the lead flow
    console.error('Error syncing contact to Brevo:', error);
    console.error('Contact data:', contact);
  }
}
