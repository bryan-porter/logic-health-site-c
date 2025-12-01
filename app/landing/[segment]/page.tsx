import dynamic from "next/dynamic";

import { getLandingConfig } from "@/lib/landingConfigs";

const DemoRequestForm = dynamic(() => import("@/components/DemoRequestForm"), {
  loading: () => <div className="animate-pulse h-64 bg-gray-100 rounded-xl" />,
});

export default async function LandingPage(props: { params: Promise<{ segment: string }> }) {
  const params = await props.params;
  const config = getLandingConfig(params.segment);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">
            {config.audienceLabel}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {config.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {config.subtitle}
          </p>
          <div className="mt-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
            {config.highlight}
          </div>
        </div>

        {/* Two Column Layout: Bullets (Left) + Form (Right) */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              In this walkthrough, we&apos;ll cover:
            </h2>
            <ul className="space-y-4">
              {config.bullets.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Request a Demo
            </h3>
            <DemoRequestForm />
          </div>
        </div>
      </div>
    </main>
  );
}
