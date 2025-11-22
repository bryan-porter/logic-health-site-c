import Link from "next/link";

import { FAQJsonLd } from "@/components/seo/FAQJsonLd";
import { Container } from "@/components/ui/Container";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Quick Answers · Logic Health Management',
  description: 'Common questions about CCM, RPM, care-management enrollment, CPOM and supervision, RHC/FQHC G0511, RPM vs CCM minutes, EHR integration, and billing basics.',
  alternates: {
    canonical: '/quick-answers',
  },
};

const faqs = [
  {
    q: "What is Chronic Care Management (CCM)?",
    a: "Chronic Care Management (CCM) is a CMS-recognized way to pay for structured, non-visit-based management of patients with multiple chronic conditions. A nurse-led team makes proactive, monthly contacts, coordinates across settings, maintains a longitudinal care plan, and documents time spent in your EHR so a supervising provider can bill the appropriate CCM codes.",
  },
  {
    q: "Who qualifies for CCM?",
    a: "Typically, adults with two or more chronic conditions expected to last at least 12 months (or until death) and that place the patient at significant risk of death, acute exacerbation, or functional decline. CMS and payer guidance can change, so we rely on your eligibility rules and compliance team, and we make sure consent and care plans are documented in the chart before CCM work begins.",
  },
  {
    q: "How does Remote Patient Monitoring (RPM) work with LOGIC?",
    a: "We enroll eligible patients on blood pressure cuffs, glucometers, scales, or other devices; LOGIC's team reviews incoming data daily, triages alerts, contacts patients when thresholds are crossed, and escalates issues to your clinicians inside the EHR. Each interaction is documented and time-tracked so your team can bill the appropriate RPM codes where coverage exists.",
  },
  {
    q: "What devices do you support for RPM?",
    a: "We work with cellular and Bluetooth devices commonly used for hypertension, diabetes, heart failure, and COPD programs. In many rural and older populations we prefer cellular devices to avoid Wi-Fi and smartphone barriers, but we can support Bluetooth workflows where appropriate. Device logistics and replacement processes are built into the operating model so clinics are not shipping boxes on their own.",
  },
  {
    q: "Do you handle EHR integration?",
    a: "Yes. A core part of LOGIC's model is that we operate inside your EHR rather than in a separate portal. We work with your IT and compliance teams to configure user roles, templates, care-plan formats, time-tracking fields, and queues so that all care-management work, communication, and supervision lives in the medical record you already use.",
  },
  {
    q: "Who performs the monitoring and outreach?",
    a: "LOGIC operates as a clinical extension team under your general supervision: your providers oversee care; our nurses and navigators execute the day-to-day workflows. They handle outreach, symptom checks, vitals review, education, and coordination, always documenting in your EHR and escalating to your clinicians when clinical judgment or orders are needed.",
  },
  {
    q: "What supervision level is required?",
    a: "Most CCM and RPM work is done under general supervision, but the exact requirements vary by program, state, and payer. We design workflows so that physicians and APPs retain control of diagnoses, treatment plans, and key decisions, and we route summaries and escalations to them in the EHR. Your medical leadership and compliance teams define the supervision model; we implement it in daily operations.",
  },
  {
    q: "How is time tracked for billing?",
    a: "Every call, message, and review is logged in your EHR using structured fields that capture who did the work, what program it belongs to, and how many minutes were spent. We maintain per-patient, per-program monthly time tallies and provide reports so your coders can see a clear audit trail behind CCM, RPM, and related claims.",
  },
  {
    q: "Do patients need to install apps?",
    a: "Often, no. For many populations—especially older adults and rural patients—we lean on cellular devices that transmit data without smartphones or Wi-Fi. Where apps or portals make sense, we keep them optional and provide clear onboarding support. The goal is to design RPM cohorts around how your patients actually live, not around idealized technology adoption.",
  },
  {
    q: "How do we enroll patients?",
    a: "We start from EHR-driven eligibility lists based on diagnoses, utilization, and payer mix, then perform outreach to explain the program, answer questions, and obtain consent in the format your compliance team requires. Enrollment, consent, and baseline care-plan information are documented in your EHR before ongoing monitoring or monthly CCM work begins.",
  },
  {
    q: "How quickly can we launch?",
    a: "Most organizations can move from design to a focused pilot cohort in a matter of weeks, with broader scale-up over the following one to two quarters depending on EHR complexity, number of sites, and internal approvals. We prioritize a small, high-yield cohort first so you can see operational fit and early ROI before expanding panels and programs.",
  },
  {
    q: "Is there a minimum panel size?",
    a: "We work with smaller independent groups, MSOs, and rural organizations, but economics improve as enrollment grows. Part of our scoping process is to model likely enrollment by site and payer mix so you can see where a program is clearly net-positive, where it is marginal, and where we may recommend waiting or starting with a narrower cohort.",
  },
  {
    q: "How do you handle Corporate Practice of Medicine (CPOM) concerns?",
    a: "LOGIC provides care-management services and operational support; we do not own or operate professional entities or make medical decisions. Your employed or contracted clinicians retain control over diagnoses, treatment plans, and orders, and our team works under their supervision using protocols you approve. Commercial terms are structured to reflect fair-market value for services actually provided, not to purchase or influence clinical judgment. Your own regulatory counsel remains the final authority on CPOM structure in your state—nothing here is legal advice.",
  },
  {
    q: "What about the 'one-provider-per-month' rules for CCM and RPM?",
    a: "Many care-management codes are limited so that generally only one billing practitioner can bill a given program (such as CCM or RPM) for a patient in a calendar month. We set up attribution and workflows so that the responsible practitioner is clear in the EHR and our work is documented under that supervising provider. If there are conflicts with other vendors or internal teams, we surface them so your revenue cycle and compliance teams can decide how to proceed. Specific rules vary by code and payer, so your internal experts remain the source of truth.",
  },
  {
    q: "How does this work for RHCs and FQHCs using G0511?",
    a: "For RHCs and FQHCs, certain care-management services are often billed under HCPCS G0511 rather than individual CCM or BHI codes. In those environments we still track minutes, contacts, and care-plan work at the patient level in your EHR, then configure summaries and reports so your billing team can roll appropriate work into G0511 claims according to MAC and payer guidance. We are careful not to change your cost-reporting, sliding-fee, or HRSA program policies; your internal billing and compliance teams make final decisions about when and how to bill G0511.",
  },
  {
    q: "How do you keep RPM and CCM minutes separate?",
    a: "For patients enrolled in both RPM and CCM, we document each interaction with structured fields that indicate which program it belongs to—device data review and outreach under RPM, broader care-plan and coordination work under CCM. Monthly time tallies are maintained separately for each program so minutes are not double-counted, and your coders have a clear breakdown if payers or auditors ask how time was allocated.",
  },
  {
    q: "What EHR access and permissions does LOGIC need?",
    a: "We work as if we were an extension of your own care-management team: users are provisioned in your EHR with least-privilege roles approved by your IT, privacy, and compliance leaders. Typically that includes access to care-management queues, problem lists, labs, medications, and messaging—but not broad configuration or unrestricted billing authority. All activity is attributable to named LOGIC users in the audit log so supervising providers and compliance can see exactly what was done and by whom.",
  },
  {
    q: "Where can I learn more about CCM, RPM, and related programs?",
    a: "Our CCM and RPM solution pages go deeper into cohort design, workflows, compliance considerations, and ROI modeling, and our blog covers topics like CPOM, G0511 in RHC/FQHC settings, documentation patterns, and value-based care readiness. You can also request a working session with a program architect to discuss how these programs would look inside your specific EHR and contracts.",
  },
];

export default function QuickAnswersPage() {
  return (
    <>
      <FAQJsonLd faqs={faqs} />
      <section className="border-t border-neutral-200 bg-neutral-50 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Quick Answers
            </h1>
            <p className="mt-2 text-sm text-neutral-700">
              Short answers to common questions about CCM, RPM, care-management enrollment, supervision and CPOM, RHC/FQHC billing,
              time separation, EHR access, and how LOGIC runs programs inside your environment.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-medium text-primary-700 underline underline-offset-4">
              <Link href="/solutions/ccm">Learn about CCM</Link>
              <Link href="/solutions/rpm">Learn about RPM</Link>
            </div>

            <div className="mt-8 space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="group rounded-lg border border-neutral-200 bg-white p-4">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-neutral-900">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-sm text-neutral-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
