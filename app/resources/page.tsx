import Image from "next/image";
import dynamic from "next/dynamic";

import { PostCard } from "@/components/blog/PostCard";
import ChecklistCTA from "@/components/ChecklistCTA";
import { ResourceGrid, type ResourceItem } from "@/components/sections/ResourceCard";
import { getAllPosts } from "@/lib/blog";

const CcmRevenueCalculator = dynamic(
  () => import("@/components/sections/Calculators").then((mod) => ({ default: mod.CcmRevenueCalculator }))
);

const RpmRoiCalculator = dynamic(
  () => import("@/components/sections/Calculators").then((mod) => ({ default: mod.RpmRoiCalculator }))
);

export const metadata = {
  title: "Resources | Logic Health Management",
  description:
    "Executive-grade guides, calculators, and playbooks that turn CCM/RPM and care-management into predictable, audit-ready revenue across your MSO, group, or small hospital.",
};

export default async function ResourcesPage() {
  // Pull latest blog posts (if any) from MDX content
  const posts = (await getAllPosts())
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  const guides: ResourceItem[] = [
    {
      key: "ccm-codes",
      kind: "Guide",
      title: "CCM Billing Codes: 99490, 99439, 99491",
      blurb: "CFO/RCM cheat sheet: time thresholds, add-on stacking rules, and documentation patterns that survive payer audits.",
      href: "/blog/ccm-codes-2025-small-hospitals-practices",
      points: ["Time thresholds per code", "Add-on stacking rules", "Sample note language"],
    },
    {
      key: "rpm-implementation",
      kind: "Checklist",
      title: "RPM Implementation Checklist",
      blurb: "Rural-ready device logistics, alert routing, and staffing constraints—everything to launch cleanly without overwhelming your team.",
      href: "/blog/remote-patient-monitoring-best-practices",
      points: ["Device logistics & connectivity", "Consent & enrollment scripts", "Escalation thresholds & routing"],
    },
    {
      key: "cms-updates",
      kind: "Brief",
      title: "CMS Care-Management Code Updates",
      blurb: "How not to lose care-management revenue to coding changes and audits—track policy shifts and adapt workflows without rework.",
      href: "/blog/medicare-billing-codes-ccm-rpm",
      points: ["Policy changes & timelines", "Coding impacts by program", "Audit implications & defenses"],
    },
    {
      key: "equity-framework",
      kind: "Template",
      title: "Care-Gap Closure Framework",
      blurb: "Embed SDoH screening, care-gap detection, and referral loops in your CCM/RPM pathways to feed VBC and ACO metrics.",
      href: "/resources/care-gap-closure-framework",
      points: ["Z-codes & SDOH mapping", "Care-gap identification logic", "Community referral loops"],
    },
    {
      key: "audit-timekeeping",
      kind: "Brief",
      title: "Audit-Ready Timekeeping & Documentation",
      blurb: "What payers and MAC auditors look for in CCM/RPM claims—and how to pass cleanly with structured time logs and supervision trails.",
      href: "/blog/from-denials-to-dollars-ccm-rpm-yield",
      points: ["Attribution & supervision", "Time-tracking standards", "Evidence artifacts for audits"],
    },
  ];

  const tools: ResourceItem[] = [
    {
      key: "mso-roi-calculator",
      kind: "Calculator",
      title: "MSO ROI Calculator",
      blurb:
        "Rough-cut ROI model for MSO and multi-site leaders using panel size, payer mix, enrollment curves, and denials reduction to estimate care-management upside.",
      href: "/contact?topic=mso-roi-calculator",
      points: ["Panel size & risk mix", "Payer mix sliders", "Enrollment & engagement curves", "Denials reduction impact"],
    },
    {
      key: "g0511-quick-sheet",
      kind: "Tool",
      title: "G0511 Quick Sheet for RHCs & FQHCs",
      blurb:
        "One-page reference for rural finance and ops leaders on documentation, supervision, and time rules as G0511 sunsets into care-coordination codes.",
      href: "/blog/g0511-practical-guide-rhc-fqhc",
      points: ["Eligibility & scope", "Supervision expectations", "Time & documentation rules"],
    },
    {
      key: "care-gap-playbooks",
      kind: "Template",
      title: "Care-Gap Playbooks: HTN, Diabetes, COPD",
      blurb:
        "Condition-specific outreach and documentation patterns that close care gaps and feed your VBC and ACO metrics without overwhelming clinic staff.",
      href: "/contact?topic=care-gap-playbooks",
      points: ["Hypertension outreach flows", "Diabetes A1c control cadence", "COPD frequent-flyer ED reduction"],
    },
  ];

  return (
    <div className="bg-white">
      <header className="mx-auto max-w-7xl px-6 pb-6 pt-12 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">Resources</p>
        <h1 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
          Resources that turn chronic-care complexity into predictable revenue
        </h1>
        <p className="mt-3 max-w-3xl text-neutral-600">
          Evidence-based guides, calculators, and playbooks built from real MSO, group, and rural hospital implementations—
          designed to drop straight into your EHR, workflows, and board decks, and to survive an audit.
        </p>
      </header>

      {/* Hero Image */}
      <section className="bg-white pb-6 md:pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-10 md:mt-12 flex justify-center animate-float-slow">
            <div className="relative w-full max-w-3xl">
              <Image
                src="/images/resources.png"
                alt="Healthcare resources and documentation guides"
                width={1600}
                height={900}
                priority
                className="h-auto w-full rounded-2xl shadow-xl object-cover transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ChecklistCTA variant="banner" />
      </div>

      <ResourceGrid
        heading="Guides & Templates"
        subheading="Tight, actionable references for standardizing care-management across sites, billing accuracy, and value-based care readiness"
        items={guides}
      />

      <section className="bg-neutral-50 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Calculators for planning volume, revenue, and staffing</h2>
            <p className="mt-2 text-neutral-600">
              High-level estimators for CCM and RPM that let COOs and CFOs pressure-test ramp curves, panel sizes, and
              contribution margin before committing internal staff.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <CcmRevenueCalculator />
            <RpmRoiCalculator />
          </div>
        </div>
      </section>

      <ResourceGrid
        heading="Tools & Quick Sheets"
        subheading="Ready-to-use assets for MSO, group, and rural leaders who need decision support and audit-ready references."
        items={tools}
      />

      {posts.length ? (
        <section className="bg-white py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Latest from the blog</h2>
              <p className="mt-2 text-neutral-600">Fresh takes on coding changes, MSO integration, rural operations, and care-management ROI.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="text-lg font-semibold text-neutral-900">Want a tailored executive pack?</h2>
          <p className="mt-2 text-sm text-neutral-700">
            We&apos;ll assemble a specialty- or site-specific starter bundle (guides, calculators, quick sheets, and care-gap
            playbooks) tuned to your MSO, physician group, small hospital, or rural network—complete with CFO-ready ROI views.
          </p>
          <div className="mt-4">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700"
            >
              Request a custom resources bundle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
