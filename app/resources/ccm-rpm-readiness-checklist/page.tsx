import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "CCM/RPM Readiness Checklist",
  description:
    "A 2-page, audit-ready checklist to assess CCM/RPM readiness for physician practices, small hospitals, and RHCs/FQHCs.",
};

export default function CcmRpmReadinessChecklistPage() {
  return (
    <section className="bg-white py-10 md:py-16 lg:py-20">
      <Container className="max-w-4xl">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
            Checklist
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            CCM/RPM Readiness Checklist
          </h1>
          <p className="mt-4 text-sm md:text-base text-neutral-700">
            Efficient, compliant Chronic Care Management (CCM) and Remote Patient Monitoring (RPM)
            programs unlock new reimbursement, improve outcomes, and strengthen patient loyalty.
            This quick-scan checklist helps physician practices, small hospitals, and RHCs/FQHCs
            confirm they have the right foundations in place before launching or outsourcing CCM/RPM
            services.
          </p>
          <p className="mt-3 text-xs text-neutral-500">
            Tip: Use your browser&apos;s "Print to PDF" to generate a 2-page PDF suitable for
            sharing and internal reviews.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-6 text-neutral-800">
          <section>
            <h2 className="text-base font-semibold text-neutral-900">Clinical Workflow</h2>
            <ul className="mt-3 space-y-2">
              <li>
                [ ] <strong>Documented Care Plans</strong> – Licensed clinicians (RN, NP, PA, or
                PCP) create and update comprehensive care plans stored in the EHR and made
                available to patients.
              </li>
              <li>
                [ ] <strong>Defined Staff Roles &amp; Licensure</strong> – Clinical staff (e.g., MAs,
                nurses) who perform monitoring operate under CMS general supervision rules, with
                schedules that support required time thresholds.
              </li>
              <li>
                [ ] <strong>Single-Provider Billing Safeguards</strong> – Process to confirm no other
                provider is billing CCM for the same patient in the same month (critical for
                specialty groups and small hospitals with provider-based clinics).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900">Technology &amp; Integration</h2>
            <ul className="mt-3 space-y-2">
              <li>
                [ ] <strong>Bi-Directional EHR Integration</strong> – Platform can push and pull
                problem lists, vitals, medications, and encounter notes directly into your EHR to
                avoid double documentation.
              </li>
              <li>
                [ ] <strong>Minimal-Click Workflow</strong> – Interfaces require only a few steps for
                physicians; role-based review queues for nurses reduce friction and training time.
              </li>
              <li>
                [ ] <strong>Device &amp; App Reliability</strong> – Cellular or well-tested Bluetooth
                devices minimize &quot;dark devices&quot; and OS update failures; vendor provides
                patient-facing tech support instead of routing every issue to your front desk.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900">Billing &amp; Compliance</h2>
            <ul className="mt-3 space-y-2">
              <li>
                [ ] <strong>Current CPT/HCPCS Mapping</strong> – Team understands CCM (99490, 99491,
                99437, 99439), RPM (99453, 99454, 99457, 99458), and RHC/FQHC composite options such
                as G0511; stays current on proposed RPM/RTM 2–15-day device-supply codes expected in
                2026.
              </li>
              <li>
                [ ] <strong>Time &amp; Data Capture Automation</strong> – Platform auto-logs staff
                minutes and validates device-day counts to support audit-ready documentation for CCM
                and RPM.
              </li>
              <li>
                [ ] <strong>Audit Trail &amp; HIPAA Controls</strong> – Communications and device
                data are stored in HITRUST-certified, HIPAA-compliant systems with BAAs in place;
                the Security Risk Analysis explicitly includes RPM data flows (applies to small
                hospitals as well).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900">Patient Engagement</h2>
            <ul className="mt-3 space-y-2">
              <li>
                [ ] <strong>Onboarding &amp; Education Plan</strong> – Plain-language instructions,
                teach-back, and retraining are used to improve adherence beyond simple device
                distribution.
              </li>
              <li>
                [ ] <strong>Multichannel Communication</strong> – Care teams can use phone, SMS, and
                portal messaging to sustain enrollment, support patient-reported outcomes, and
                reduce no-shows and drop-offs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900">Helpful Resources</h2>
            <ul className="mt-3 space-y-2">
              <li>
                CMS MLN Connects: Chronic Care &amp; Remote Therapeutic Monitoring Code List (Aug 28,
                2025).
              </li>
              <li>LogicHM Integration Guide: EMR connectivity checklist (internal).</li>
              <li>Addison Care &quot;Higher Standard&quot; RPM/CCM case study.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900">What to Do Next</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>
                Share this checklist with your care team and mark any gaps in workflow, integration,
                billing, or engagement.
              </li>
              <li>
                Prioritize remediation efforts across processes, technology, and staffing before
                expanding enrollment.
              </li>
              <li>
                Schedule a readiness consultation with Logic Health Management to quantify revenue
                potential and map a go-live plan for practices, small hospitals, or RHCs/FQHCs.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900">Notes &amp; Citations</h2>
            <p className="mt-2 text-xs text-neutral-600">
              Bracketed numbers in earlier versions of this checklist (e.g., [7]) map to a full
              source list published on LogicHM&apos;s companion blog/resource page. For detailed
              citations, refer to "CCM/RPM Readiness Checklist" in the LogicHM blog or resources
              library.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
