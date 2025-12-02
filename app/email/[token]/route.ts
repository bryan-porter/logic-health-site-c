import { NextRequest, NextResponse } from "next/server";
import { verifyTrackingToken } from "@/lib/emailTracking";
import { query } from "@/lib/db";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ token: string }> }
) {
  const { token } = await context.params;

  // Verify the tracking token
  const payload = verifyTrackingToken(token);

  if (!payload) {
    return NextResponse.json(
      { error: "Invalid or expired tracking link" },
      { status: 400 }
    );
  }

  // Resolve contact ID
  // Priority: 1) payload.cid (1:1 mode), 2) URL query param (campaign mode)
  let contactId: string | null = payload.cid || null;

  if (!contactId) {
    const uid = req.nextUrl.searchParams.get("uid");
    if (uid) {
      contactId = uid;
    }
  }

  // Security check: Validate target URL
  if (!payload.target.startsWith("http://") && !payload.target.startsWith("https://")) {
    console.error("Invalid target URL:", payload.target);
    return NextResponse.json(
      { error: "Invalid redirect target" },
      { status: 400 }
    );
  }

  // Log the email click event (non-blocking, async)
  // Don't let logging errors stop the redirect
  (async () => {
    try {
      const eventProperties = {
        campaign: payload.campaign || null,
        target: payload.target,
      };

      await query(
        `INSERT INTO events (
          anonymous_id,
          user_id,
          event_name,
          occurred_at,
          source,
          properties
        ) VALUES ($1, $2, $3, NOW(), $4, $5)`,
        [
          null, // anonymous_id (email clicks are typically identified)
          contactId,
          "email_clicked",
          "email",
          JSON.stringify(eventProperties),
        ]
      );

      console.log("Email click tracked:", {
        contactId,
        campaign: payload.campaign,
        target: payload.target,
      });
    } catch (error) {
      // Log error but don't fail the redirect
      console.error("Error logging email click event:", error);
    }
  })();

  // Redirect to target URL
  return NextResponse.redirect(payload.target, 302);
}
