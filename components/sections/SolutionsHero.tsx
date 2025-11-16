// components/sections/SolutionsHero.tsx
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Hospital } from "lucide-react";

export default function SolutionsHero() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white">
      <Container className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md border border-neutral-200 bg-white">
            <Hospital className="h-6 w-6" aria-hidden="true" />
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Run the Full CMS Playbook—From Clinic to Small Hospitals
          </h1>
          <p className="mt-4 text-neutral-700">
            Operate AWV, Prevention &amp; Wellness, CCM, BHI, PCM, RPM/RTM, TCM, CHI/PIN, and TEAMs on
            one compliant operating model. FHIR‑first integrations, audit‑ready minutes &amp; supervision,
            and team‑based routing that fits small‑hospital staffing patterns.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact">Talk to a Program Architect</Button>
            <Button href="/solutions/ccm" variant="secondary">
              See CCM &amp; RPM
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
