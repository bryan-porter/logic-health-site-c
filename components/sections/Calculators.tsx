"use client";

import { useMemo, useState } from "react";

function Field({
  label,
  value,
  onChange,
  min = 0,
  step = 1,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min?: number;
  step?: number;
  suffix?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-neutral-900">{label}</span>
      <div className="mt-1.5 flex items-center gap-2">
        <input
          type="number"
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none transition focus:border-primary-500"
          min={min}
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        {suffix ? <span className="text-sm text-neutral-600">{suffix}</span> : null}
      </div>
    </label>
  );
}

/** CCM Monthly Revenue Estimator (very simple high‑level) */
export function CcmRevenueCalculator() {
  const [eligiblePatients, setEligiblePatients] = useState(500);
  const [enrollRate, setEnrollRate] = useState(0.35); // 35%
  const [reimbPerPatient, setReimbPerPatient] = useState(62); // blended $ (e.g., 99490 + add-ons)
  const [months, setMonths] = useState(12);

  const enrolled = useMemo(() => Math.round(eligiblePatients * enrollRate), [eligiblePatients, enrollRate]);
  const monthlyRevenue = useMemo(() => enrolled * reimbPerPatient, [enrolled, reimbPerPatient]);
  const annualRevenue = useMemo(() => monthlyRevenue * months, [monthlyRevenue, months]);

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-neutral-900">CCM Revenue Estimator</h3>
      <p className="mt-1 text-sm text-neutral-600">Quick, directional estimate for planning.</p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Eligible patients" value={eligiblePatients} onChange={setEligiblePatients} step={10} />
        <Field label="Enroll rate" value={enrollRate} onChange={setEnrollRate} step={0.05} suffix="×" />
        <Field label="Blended reimbursement / patient / mo" value={reimbPerPatient} onChange={setReimbPerPatient} step={1} suffix="$" />
        <Field label="Months" value={months} onChange={setMonths} step={1} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-md bg-neutral-50 p-3">
          <div className="text-xs text-neutral-600">Enrolled patients</div>
          <div className="text-lg font-semibold text-neutral-900">{enrolled.toLocaleString()}</div>
        </div>
        <div className="rounded-md bg-neutral-50 p-3">
          <div className="text-xs text-neutral-600">Monthly revenue</div>
          <div className="text-lg font-semibold text-neutral-900">${monthlyRevenue.toLocaleString()}</div>
        </div>
        <div className="rounded-md bg-neutral-50 p-3">
          <div className="text-xs text-neutral-600">Annual revenue</div>
          <div className="text-lg font-semibold text-neutral-900">${annualRevenue.toLocaleString()}</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-neutral-600">
        Note: Illustrative only; excludes payer mix, geography, denials, and supervision rules.
      </p>
    </div>
  );
}

/** RPM ROI Estimator (simple revenue – device + staffing) */
export function RpmRoiCalculator() {
  const [patients, setPatients] = useState(200);
  const [reimbPerPatient, setReimbPerPatient] = useState(121); // 99457/99458 blend example
  const [deviceCost, setDeviceCost] = useState(15); // per patient / month
  const [staffCostPerPatient, setStaffCostPerPatient] = useState(22); // RN/MA minutes blended cost
  const [months, setMonths] = useState(12);

  const revenueMo = useMemo(() => patients * reimbPerPatient, [patients, reimbPerPatient]);
  const costsMo = useMemo(() => patients * (deviceCost + staffCostPerPatient), [patients, deviceCost, staffCostPerPatient]);
  const marginMo = useMemo(() => revenueMo - costsMo, [revenueMo, costsMo]);
  const marginYr = useMemo(() => marginMo * months, [marginMo, months]);
  const roi = useMemo(() => (costsMo > 0 ? (marginMo / costsMo) * 100 : 0), [marginMo, costsMo]);

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-neutral-900">RPM ROI Estimator</h3>
      <p className="mt-1 text-sm text-neutral-600">Directional ROI using simple inputs.</p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="RPM patients" value={patients} onChange={setPatients} step={10} />
        <Field label="Reimbursement / patient / mo" value={reimbPerPatient} onChange={setReimbPerPatient} step={1} suffix="$" />
        <Field label="Device cost / patient / mo" value={deviceCost} onChange={setDeviceCost} step={1} suffix="$" />
        <Field label="Staff cost / patient / mo" value={staffCostPerPatient} onChange={setStaffCostPerPatient} step={1} suffix="$" />
        <Field label="Months" value={months} onChange={setMonths} step={1} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-4">
        <div className="rounded-md bg-neutral-50 p-3">
          <div className="text-xs text-neutral-600">Monthly revenue</div>
          <div className="text-lg font-semibold text-neutral-900">${revenueMo.toLocaleString()}</div>
        </div>
        <div className="rounded-md bg-neutral-50 p-3">
          <div className="text-xs text-neutral-600">Monthly costs</div>
          <div className="text-lg font-semibold text-neutral-900">${costsMo.toLocaleString()}</div>
        </div>
        <div className="rounded-md bg-neutral-50 p-3">
          <div className="text-xs text-neutral-600">Monthly margin</div>
          <div className="text-lg font-semibold text-neutral-900">${marginMo.toLocaleString()}</div>
        </div>
        <div className="rounded-md bg-neutral-50 p-3">
          <div className="text-xs text-neutral-600">ROI</div>
          <div className="text-lg font-semibold text-neutral-900">{roi.toFixed(1)}%</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-neutral-600">
        Note: Illustrative only; adjust for payer mix, geography, and operational overhead.
      </p>
    </div>
  );
}
