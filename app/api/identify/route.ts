import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { verifyPublicApiKey } from '@/lib/apiAuth';

interface IdentifyRequestBody {
  anonymous_id: string;
  crm_contact_id: string;
  email?: string;
}

export async function POST(request: NextRequest) {
  if (!verifyPublicApiKey(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Parse request body
    const body: IdentifyRequestBody = await request.json();

    // Validate required fields
    if (!body.anonymous_id) {
      return NextResponse.json(
        { error: 'anonymous_id is required' },
        { status: 400 }
      );
    }

    if (!body.crm_contact_id) {
      return NextResponse.json(
        { error: 'crm_contact_id is required' },
        { status: 400 }
      );
    }

    // Check if a visitor identity already exists for this anonymous_id
    const selectQuery = `
      SELECT id, identified_at
      FROM visitor_identities
      WHERE anonymous_id = $1
      LIMIT 1
    `;

    const selectResult = await query<{ id: number; identified_at: string | null }>(
      selectQuery,
      [body.anonymous_id]
    );

    if (selectResult.rows.length > 0) {
      // Update existing record
      const existingRow = selectResult.rows[0];

      const updateQuery = `
        UPDATE visitor_identities
        SET
          crm_contact_id = $1,
          email = COALESCE($2, email),
          identified_at = COALESCE(identified_at, NOW())
        WHERE anonymous_id = $3
      `;

      await query(updateQuery, [
        body.crm_contact_id,
        body.email || null,
        body.anonymous_id,
      ]);
    } else {
      // Insert new record
      const insertQuery = `
        INSERT INTO visitor_identities (
          anonymous_id,
          crm_contact_id,
          email,
          first_seen_at,
          identified_at
        )
        VALUES ($1, $2, $3, NOW(), NOW())
      `;

      await query(insertQuery, [
        body.anonymous_id,
        body.crm_contact_id,
        body.email || null,
      ]);
    }

    // ========================================
    // Log Identity Event (Database)
    // ========================================

    try {
      const eventProperties = {
        email: body.email,
        crm_contact_id: body.crm_contact_id,
        anonymous_id: body.anonymous_id,
      };

      const eventQuery = `
        INSERT INTO events (
          anonymous_id,
          user_id,
          event_name,
          occurred_at,
          source,
          properties
        )
        VALUES ($1, $2, $3, NOW(), $4, $5)
      `;

      await query(eventQuery, [
        body.anonymous_id,
        body.crm_contact_id,
        'contact_identified',
        'identify_api',
        JSON.stringify(eventProperties),
      ]);
      console.log('Logged contact_identified event');
    } catch (eventError) {
      console.error('Error logging contact_identified event:', eventError);
      console.error('Event Error message:', eventError instanceof Error ? eventError.message : String(eventError));
      console.error('Event Error stack:', eventError instanceof Error ? eventError.stack : 'No stack trace');
      // Continue - don't fail request if event logging fails
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Error identifying visitor:', error);
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Server error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
