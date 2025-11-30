import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { verifyPublicApiKey } from '@/lib/apiAuth';

interface EventRequestBody {
  anonymous_id: string;
  user_id?: string;
  event: string;
  timestamp?: string;
  source?: string;
  path?: string;
  url?: string;
  properties?: Record<string, any>;
}

export async function POST(request: NextRequest) {
  if (!verifyPublicApiKey(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Parse request body
    const body: EventRequestBody = await request.json();

    // Validate required fields
    if (!body.anonymous_id) {
      return NextResponse.json(
        { error: 'anonymous_id is required' },
        { status: 400 }
      );
    }

    if (!body.event) {
      return NextResponse.json(
        { error: 'event is required' },
        { status: 400 }
      );
    }

    // Compute occurred_at timestamp
    const occurredAt = body.timestamp
      ? new Date(body.timestamp).toISOString()
      : new Date().toISOString();

    // Default source to 'web' if not provided
    const source = body.source || 'web';

    // Default properties to empty object if not provided
    const properties = body.properties || {};

    // Insert event into database
    const insertQuery = `
      INSERT INTO events (
        anonymous_id,
        user_id,
        event_name,
        occurred_at,
        source,
        path,
        url,
        properties
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id
    `;

    const values = [
      body.anonymous_id,
      body.user_id || null,
      body.event,
      occurredAt,
      source,
      body.path || null,
      body.url || null,
      JSON.stringify(properties),
    ];

    await query(insertQuery, values);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Error inserting event:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
