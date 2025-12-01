export type EngagementBand = "high" | "medium" | "low" | "dormant";

export interface DbEvent {
  event_name: string;
  occurred_at: Date | string;
  properties: any;
}

export interface EngagementScoreResult {
  score: number;
  band: EngagementBand;
}

export function computeEngagementScore(events: DbEvent[]): EngagementScoreResult {
  if (events.length === 0) {
    return { score: 0, band: "dormant" };
  }

  let totalScore = 0;
  let hasHighIntentBonus = false;

  // Count page views (cap at 20 points)
  const pageViews = events.filter((e) => e.event_name === "page_view").length;
  totalScore += Math.min(pageViews, 20);

  // Email clicks: +15 each
  const emailClicks = events.filter((e) => e.event_name === "email_clicked").length;
  totalScore += emailClicks * 15;

  // Form submits: +40 each
  const formSubmits = events.filter((e) => e.event_name === "form_submitted").length;
  totalScore += formSubmits * 40;

  // High intent bonus: +20 once if any form_id starts with "demo"
  for (const event of events) {
    // Cast to any to allow dynamic property access
    const props = (event.properties as any) || {};
    const formId = typeof props.form_id === "string" ? props.form_id : null;

    if (formId && formId.startsWith("demo")) {
      hasHighIntentBonus = true;
      break;
    }
  }

  if (hasHighIntentBonus) {
    totalScore += 20;
  }

  // Clamp between 0 and 100
  totalScore = Math.max(0, Math.min(100, totalScore));

  // Determine band
  let band: EngagementBand;
  if (totalScore >= 70) {
    band = "high";
  } else if (totalScore >= 30) {
    band = "medium";
  } else if (totalScore >= 10) {
    band = "low";
  } else {
    band = "dormant";
  }

  return { score: totalScore, band };
}
