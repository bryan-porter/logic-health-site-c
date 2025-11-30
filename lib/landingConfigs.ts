export type SegmentKey = "primary-care" | "small-hospital" | "fqhcs" | "generic";

export interface LandingConfig {
  key: SegmentKey;
  title: string;
  subtitle: string;
  bullets: string[];
  audienceLabel: string;
  highlight: string;
}

export const landingConfigs: Record<SegmentKey, LandingConfig> = {
  "primary-care": {
    key: "primary-care",
    audienceLabel: "For primary care clinics",
    title: "Grow CCM/RPM revenue without burning out your team",
    subtitle: "LogicHM helps small primary care groups turn eligible chronic patients into reimbursed remote care—without adding headcount.",
    bullets: [
      "Identify eligible patients automatically",
      "Workflows that plug into your EMR",
      "Clear reporting for leadership",
    ],
    highlight: "Ideal for 3–25 provider groups.",
  },
  "small-hospital": {
    key: "small-hospital",
    audienceLabel: "For community & critical access hospitals",
    title: "Bring CCM/RPM in-house with a predictable, billable program",
    subtitle: "Stand up a compliant chronic care service line that clinical and finance teams trust.",
    bullets: [
      "Service-line level reporting",
      "Clinical workflows matching existing teams",
      "Audit-ready documentation",
    ],
    highlight: "Best for hospitals with 20–150 beds.",
  },
  fqhcs: {
    key: "fqhcs",
    audienceLabel: "For FQHCs & safety-net providers",
    title: "Operationalize CCM/RPM for high-need populations",
    subtitle: "Support complex, high-risk patients remotely while preserving capacity for in-person care.",
    bullets: [
      "Support for FQHC billing models",
      "Outreach workflows for high-risk panels",
      "Grant reporting support",
    ],
    highlight: "Designed for multi-site FQHCs.",
  },
  generic: {
    key: "generic",
    audienceLabel: "For clinics and small hospitals",
    title: "See how LogicHM runs CCM/RPM for your organization",
    subtitle: "We'll walk through your patient population and revenue goals to show how CCM/RPM fits.",
    bullets: [
      "Understand revenue potential",
      "See workflows for your team structure",
      "Get a realistic implementation timeline",
    ],
    highlight: "Works for independent clinics and hospitals.",
  },
};

export function getLandingConfig(slug: string): LandingConfig {
  if (slug in landingConfigs) {
    return landingConfigs[slug as SegmentKey];
  }
  return landingConfigs.generic;
}
