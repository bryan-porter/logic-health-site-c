import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FAQJsonLd } from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: 'Quick Answers · Logic Health Management',
  description: 'Common questions about CCM, RPM, enrollment, EHR integration, supervision, documentation, and billing basics.',
  alternates: {
    canonical: '/quick-answers',
  },
};

const faqs = [
  { q: "What is Chronic Care Management (CCM)?", a: "A monthly service for patients with two or more chronic conditions that coordinates care, documents time, and supports preventive outreach." },
  { q: "Who qualifies for CCM?", a: "Patients with 2+ chronic conditions expected to last 12 months and that pose significant risk, with documented consent and care plan." },
  { q: "How does Remote Patient Monitoring (RPM) work?", a: "Eligible patients receive connected devices; vitals stream daily, alerts are triaged by nurses, and interactions are documented for billing." },
  { q: "Do you handle EHR integration?", a: "Yes. We work inside your EHR for enrollment lists, documentation, and billing workflows to minimize duplicate systems." },
  { q: "How quickly can we launch?", a: "Most sites launch in ~30 days after enrollment criteria, devices, and escalation pathways are approved." },
  { q: "Who performs the monitoring and outreach?", a: "U.S.-based RNs/MAs manage outreach, triage alerts, and escalate to your clinicians per agreed protocols." },
  { q: "What devices do you support for RPM?", a: "Cellular and Bluetooth blood pressure cuffs, scales, glucometers, pulse oximeters, and other common kits with logistics included." },
  { q: "What supervision level is required?", a: "CCM and RPM typically operate under general supervision; we align with your medical director and compliance requirements." },
  { q: "How is time tracked for billing?", a: "Time, contacts, and interventions are logged in your EHR; summaries support codes like 99490/99439 (CCM) and 99457/99458 (RPM)." },
  { q: "Do patients need to install apps?", a: "No. Cellular devices arrive pre-configured; Bluetooth options include guided pairing support when needed." },
  { q: "How do we enroll patients?", a: "We use EHR-driven eligibility lists, confirm consent, and capture baseline data before monitoring or monthly outreach starts." },
  { q: "Is there a minimum panel size?", a: "We work with small hospitals and physician practices; shared-services staffing supports smaller panels efficiently." },
  { q: "Where can I learn more about CCM and RPM?", a: "See our solution pages for details on workflows, codes, and outcomes." },
];

export default function QuickAnswersPage() {
  return (
    <>
      <FAQJsonLd faqs={faqs} />
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Quick Answers
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-700">
            Short answers to common questions about CCM, RPM, enrollment, EHR integration, device logistics, supervision, documentation, and billing basics.
          </p>
          <div className="mt-4 flex gap-4 text-sm font-medium text-primary-700 underline underline-offset-4">
            <Link href="/solutions/ccm">Learn about CCM</Link>
            <Link href="/solutions/rpm">Learn about RPM</Link>
          </div>

          <div className="mt-10 divide-y divide-neutral-200 rounded-lg border border-neutral-200">
            {faqs.map((item, idx) => (
              <div key={item.q} className="p-5 md:p-6">
                <h2 className="text-lg font-semibold text-neutral-900">
                  {idx + 1}. {item.q}
                </h2>
                <p className="mt-2 text-neutral-700">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
