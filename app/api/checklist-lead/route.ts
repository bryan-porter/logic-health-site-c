import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, source, variant } = await request.json();

    // TODO: plug into your real email/CRM/ESP here (HubSpot, Customer.io, etc.)
    // For now we just log to the server and return 204.
    console.log('Checklist lead captured:', {
      email,
      source,
      variant,
      timestamp: new Date().toISOString(),
    });

    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error('Error capturing checklist lead:', err);
    return new NextResponse(null, { status: 500 });
  }
}
