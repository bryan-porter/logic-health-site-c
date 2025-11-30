import { query } from "@/lib/db";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ email: string }>;
}

export default async function ContactInspectorPage(props: PageProps) {
  const { email } = await props.params;
  const decodedEmail = decodeURIComponent(email);

  // Fetch identity
  const identityResult = await query(
    `SELECT anonymous_id, crm_contact_id, email, first_seen_at, identified_at
     FROM visitor_identities
     WHERE email = $1
     ORDER BY identified_at DESC NULLS LAST
     LIMIT 1`,
    [decodedEmail]
  );

  const identity = identityResult.rows[0] || null;

  // Fetch events
  let events: any[] = [];

  if (identity) {
    const userId = identity.crm_contact_id || null;
    const anonymousId = identity.anonymous_id || null;

    const eventsResult = await query(
      `SELECT event_name, occurred_at, source, path, url, properties
       FROM events
       WHERE user_id = $1 OR anonymous_id = $2
       ORDER BY occurred_at DESC
       LIMIT 50`,
      [userId, anonymousId]
    );

    events = eventsResult.rows;
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact Inspector</h1>
          <p className="mt-2 text-lg text-gray-600">{decodedEmail}</p>
        </div>

        {/* Identity Card */}
        <section className="bg-white p-6 rounded-lg shadow border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Identity Mapping</h2>

          {!identity ? (
            <div className="rounded-md bg-yellow-50 p-4 border border-yellow-200">
              <p className="text-yellow-800 text-sm font-medium">
                ⚠️ No identity linked to this email.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">CRM Contact ID</dt>
                <dd className="mt-1 text-sm text-gray-900 font-mono">
                  {identity.crm_contact_id || <span className="text-gray-400">null</span>}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">Anonymous ID</dt>
                <dd className="mt-1 text-sm text-gray-900 font-mono break-all">
                  {identity.anonymous_id || <span className="text-gray-400">null</span>}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">First Seen At</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {identity.first_seen_at
                    ? new Date(identity.first_seen_at).toLocaleString()
                    : <span className="text-gray-400">null</span>}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">Identified At</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {identity.identified_at
                    ? new Date(identity.identified_at).toLocaleString()
                    : <span className="text-gray-400">null</span>}
                </dd>
              </div>
            </div>
          )}
        </section>

        {/* Events List */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Activity
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({events.length} events)
            </span>
          </h2>

          {events.length === 0 ? (
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center text-gray-500">
              No events found for this contact.
            </div>
          ) : (
            <div className="space-y-4">
              {events.map((event, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded border border-gray-200 shadow-sm"
                >
                  {/* Row 1: Event Name + Time */}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-bold text-gray-900">
                      {event.event_name}
                    </h3>
                    <time className="text-sm text-gray-500 ml-4">
                      {new Date(event.occurred_at).toLocaleString()}
                    </time>
                  </div>

                  {/* Row 2: Source + Path */}
                  <div className="flex items-center gap-3 mb-2">
                    {event.source && (
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        {event.source}
                      </span>
                    )}
                    {event.path && (
                      <code className="text-xs text-gray-600 font-mono">
                        {event.path}
                      </code>
                    )}
                    {event.url && !event.path && (
                      <code className="text-xs text-gray-600 font-mono">
                        {event.url}
                      </code>
                    )}
                  </div>

                  {/* Row 3: Properties JSON */}
                  {event.properties && Object.keys(event.properties).length > 0 && (
                    <pre className="text-xs bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
                      {JSON.stringify(event.properties, null, 2)}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
