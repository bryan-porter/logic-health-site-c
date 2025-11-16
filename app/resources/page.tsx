import { ResourceGrid, type ResourceItem } from "@/components/sections/ResourceCard";
import { CcmRevenueCalculator, RpmRoiCalculator } from "@/components/sections/Calculators";
import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/blog/PostCard";
import ChecklistCTA from "@/components/ChecklistCTA";

export const metadata = {
  title: "Resources | Logic Health Management",
  description:
    "Guides, calculators, and templates for CCM, RPM, and team-based care—equity-embedded and audit-ready.",
};

export default function ResourcesPage() {
  // Pull latest blog posts (if any) from MDX content
  const posts = getAllPosts()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  const guides: ResourceItem[] = [
    {
      key: "ccm-codes",
      kind: "Guide",
      title: "CCM Billing Codes: 99490, 99439, 99491",
      blurb: "Physician guide to compliant time tracking, attestations, and supervision.",
      href: "/blog/understanding-ccm-codes",
      points: ["Time thresholds", "Add-on codes", "Documentation tips"],
    },
    {
      key: "rpm-implementation",
      kind: "Checklist",
      title: "RPM Implementation Checklist",
      blurb: "From device logistics to alert routing—everything to launch cleanly.",
      href: "/blog/rpm-roi-in-small-hospitals",
      points: ["Device fleet", "Consent & enrollment", "Escalation logic"],
    },
    {
      key: "cms-updates",
      kind: "Brief",
      title: "CMS Billing Updates (2024+)",
      blurb: "What changed and how to adapt workflows without rework.",
      href: "/blog/cms-billing-updates-2024",
      points: ["Policy changes", "Coding impacts", "Audit implications"],
    },
    {
      key: "equity-framework",
      kind: "Template",
      title: "Equity Framework: SDoH overlays",
      blurb: "Embed SDoH, PROMs, and stratification in CCM/RPM pathways.",
      href: "/contact",
      points: ["Z-codes mapping", "PROMs starter set", "Referral loops"],
    },
    {
      key: "audit-timekeeping",
      kind: "Brief",
      title: "Audit-Ready Timekeeping",
      blurb: "What payers look for and how to pass cleanly.",
      href: "/contact",
      points: ["Attribution", "Attestations", "Evidence artifacts"],
    },
  ];

  return (
    <div className="bg-white">
      <header className="mx-auto max-w-7xl px-6 pb-6 pt-12 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">Resources</p>
        <h1 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">
          Guides, calculators, and evidence you can use today
        </h1>
        <p className="mt-3 max-w-3xl text-neutral-600">
          Built from real implementations across clinics and small hospitals—logic‑driven, equity‑embedded,
          and audit‑ready.
        </p>
      </header>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ChecklistCTA variant="banner" />
      </div>

      <ResourceGrid
        heading="Guides & Templates"
        subheading="Tight, actionable references for CCM, RPM, and team‑based care"
        items={guides}
      />

      <section className="bg-neutral-50 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Calculators & Tools</h2>
            <p className="mt-2 text-neutral-600">
              Quick estimators for planning volume, staffing, and financial impact.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <CcmRevenueCalculator />
            <RpmRoiCalculator />
          </div>
        </div>
      </section>

      {posts.length ? (
        <section className="bg-white py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Latest from the blog</h2>
              <p className="mt-2 text-neutral-600">Fresh takes on coding, policy, and operations.</p>
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
          <h2 className="text-lg font-semibold text-neutral-900">Want a tailored pack?</h2>
          <p className="mt-2 text-sm text-neutral-700">
            We'll assemble a specialty‑specific starter bundle (guides, templates, and calculators) for your clinic or
            small hospital.
          </p>
          <div className="mt-4">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700"
            >
              Request a custom bundle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
