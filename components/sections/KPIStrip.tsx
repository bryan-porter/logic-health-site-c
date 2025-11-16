// components/sections/KPIStrip.tsx
import { Container } from "@/components/ui/Container";

type KPI = { value: string; label: string; hint?: string };

const KPIS: KPI[] = [
  { value: "30–45 days", label: "Go‑live window", hint: "Launch playbooks & device ops" },
  { value: "EHR‑native", label: "FHIR + bi‑directional", hint: "Epic, eCW, Veradigm & more" },
  { value: "Audit‑ready", label: "Minutes & supervision", hint: "Mapped to CPT/HCPCS/ICD‑10/Z‑codes" },
  { value: "Team‑based", label: "Escalation & routing", hint: "Built for clinics & small hospitals" },
];

export default function KPIStrip() {
  return (
    <section className="bg-white">
      <Container className="py-10 md:py-12">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {KPIS.map((kpi, idx) => (
            <div key={idx} className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <div className="text-xl font-semibold text-neutral-900">{kpi.value}</div>
              <div className="text-sm text-neutral-700">{kpi.label}</div>
              {kpi.hint && <div className="mt-1 text-xs text-neutral-500">{kpi.hint}</div>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
