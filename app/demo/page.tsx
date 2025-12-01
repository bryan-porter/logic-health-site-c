import dynamic from "next/dynamic";

const DemoRequestForm = dynamic(() => import("@/components/DemoRequestForm"), {
  loading: () => <div className="animate-pulse h-64 bg-gray-100 rounded-xl" />,
});

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Request a LogicHM CCM/RPM Demo
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover how LogicHM helps small clinics and hospitals implement
            CCM/RPM programs that generate recurring revenue without adding
            extra staff or complexity to your workflows.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900">
            What you&apos;ll learn:
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>
              Increase CCM/RPM revenue without adding headcount
            </li>
            <li>
              Understand billing workflows and compliance requirements
            </li>
            <li>
              See how LogicHM fits into your existing workflows
            </li>
          </ul>
        </div>

        <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <DemoRequestForm />
        </section>
      </div>
    </main>
  );
}
