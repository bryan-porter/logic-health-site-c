import { NextRequest, NextResponse } from "next/server";
import { recomputeEngagementScores } from "@/lib/jobs/recomputeEngagementScores";

export async function GET(request: NextRequest) {
  try {
    // Auth check: Validate cron secret
    const authHeader = request.headers.get("Authorization");
    const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;

    if (!authHeader || authHeader !== expectedAuth) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Run the engagement scoring job
    const result = await recomputeEngagementScores();

    return NextResponse.json({
      success: true,
      processed: result.processed,
    });
  } catch (error) {
    console.error("Error in cron job:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
