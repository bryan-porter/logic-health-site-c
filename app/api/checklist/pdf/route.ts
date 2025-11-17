import PDFDocument from 'pdfkit';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

function addFooter(doc: PDFKit.PDFDocument, siteName: string, siteUrl: string) {
  const y = doc.page.height - 40;
  doc.fontSize(9).fillColor('#6b7280');
  doc.text(`${siteName} · ${siteUrl}`, 50, y, { align: 'left' });
  doc.text(`© ${new Date().getFullYear()} ${siteName}`, 50, y, { align: 'right' });
  doc.fillColor('black');
}

function bullet(doc: PDFKit.PDFDocument, text: string, indent = 0) {
  const x = 70 + indent;
  doc.circle(x - 6, doc.y + 6, 1.5).fill('#111827').fillColor('black');
  doc.text(text, x, doc.y, { width: 470 - indent });
  doc.moveDown(0.5);
}

export async function GET() {
  const siteName = 'Logic Health Management';
  const siteUrl = 'https://logichm.com';

  const doc = new PDFDocument({ size: 'LETTER', margin: 50 });
  const chunks: Uint8Array[] = [];

  return new Promise<Response>((resolve) => {
    doc.on('data', (c) => chunks.push(c));
    doc.on('end', () => {
      const pdf = Buffer.concat(chunks);
      const res = new NextResponse(pdf, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="CCM-RPM-Readiness-Checklist.pdf"',
          'Cache-Control': 'no-store, max-age=0',
        },
      });
      resolve(res);
    });

    // PAGE 1
    doc.font('Times-Bold').fontSize(18)
      .text('CCM/RPM Readiness Checklist for Physician Practices', { align: 'left' });
    doc.moveDown(0.5);
    doc.font('Times-Roman').fontSize(11).fillColor('#374151')
      .text('Efficient, compliant Chronic Care Management (CCM) and Remote Patient Monitoring (RPM) programs can unlock new reimbursement, improve outcomes, and strengthen patient loyalty. Use this quick-scan checklist to confirm you have the right foundations in place before you launch or outsource CCM/RPM services.');
    doc.moveDown(1);

    // Clinical Workflow
    doc.fillColor('#111827').font('Times-Bold').fontSize(14).text('Clinical Workflow');
    doc.moveDown(0.5);
    doc.font('Times-Roman').fontSize(11);
    bullet(doc, 'Documented Care Plans – Registered clinicians (RN, NP, PA, or PCP) can create and update comprehensive care plans that live in the EHR and are shareable with patients.');
    bullet(doc, 'Defined Staff Roles & Licensure – Clinical staff (e.g., MAs, nurses) who will perform monitoring are eligible under CMS "general supervision" rules and scheduled to meet time requirements.');
    bullet(doc, 'Single-Provider Billing Safeguards – Process exists to confirm no other provider is billing CCM for the same patient in the same month (common pitfall for multi‑specialty panels).');

    doc.moveDown(0.8);
    // Technology & Integration
    doc.fillColor('#111827').font('Times-Bold').fontSize(14).text('Technology & Integration');
    doc.moveDown(0.5);
    doc.font('Times-Roman').fontSize(11);
    bullet(doc, 'Bi-Directional EHR Integration – Platform can push/pull problem lists, vitals, medications, and encounter notes directly into the practice EHR to avoid double documentation.');
    bullet(doc, 'Minimal-Click Workflow – User interface requires only a few steps for physicians, reducing resistance and increasing adoption.');
    bullet(doc, 'Device & App Reliability – Cellular or Bluetooth devices are tested to prevent "dark devices," OS update failures, and downstream tech-support burden.');

    doc.moveDown(0.8);
    // Billing & Compliance
    doc.fillColor('#111827').font('Times-Bold').fontSize(14).text('Billing & Compliance');
    doc.moveDown(0.5);
    doc.font('Times-Roman').fontSize(11);
    bullet(doc, 'Current CPT Mapping – Correct use of CCM (99490, 99491, 99437, 99439), RPM (99453, 99454, 99457, 99458), and RHC/FQHC codes like G0511.');
    bullet(doc, 'Time & Data Capture Automation – Platform automatically logs minutes and validates vitals to support audit‑proof documentation.');
    bullet(doc, 'Audit Trail & HIPAA Controls – All patient communications and device data are stored in a HITRUST‑certified, HIPAA‑compliant system.');

    addFooter(doc, siteName, siteUrl);

    // PAGE 2
    doc.addPage();

    // Patient Engagement
    doc.fillColor('#111827').font('Times-Bold').fontSize(14).text('Patient Engagement');
    doc.moveDown(0.5);
    doc.font('Times-Roman').fontSize(11);
    bullet(doc, 'Onboarding & Education Plan – Patients receive simple instructions and coaching that improve adherence beyond mere device distribution.');
    bullet(doc, 'Multichannel Communication – Care team can reach patients via phone, SMS, and portal messaging to sustain enrollment and collect survey data.');
    doc.moveDown(0.8);

    // Helpful Resources
    doc.fillColor('#111827').font('Times-Bold').fontSize(14).text('Helpful Resources');
    doc.moveDown(0.5);
    doc.font('Times-Roman').fontSize(11);
    bullet(doc, 'CMS MLN Connects: Chronic Care & Remote Therapeutic Monitoring Code List (Aug 28, 2025).');
    bullet(doc, 'LogicHM Integration Guide: Step‑by‑step EMR connectivity checklist (internal).');
    bullet(doc, 'Addison Care "Higher Standard" RPM/CCM Case Study.');

    doc.moveDown(0.8);
    // What to Do Next
    doc.fillColor('#111827').font('Times-Bold').fontSize(14).text('What to Do Next');
    doc.moveDown(0.5);
    doc.font('Times-Roman').fontSize(11);
    bullet(doc, 'Share the checklist with your care team and mark any gaps.');
    bullet(doc, 'Prioritize fixes in workflow, tech, billing, or engagement.');
    bullet(doc, 'Schedule a Readiness Consultation with LogicHM. We'll review your current state, quantify revenue potential, and map a go‑live plan—no obligation.');

    doc.moveDown(1);
    doc.font('Times-Italic').fontSize(10).fillColor('#4b5563')
      .text('This checklist is an educational aid and not legal or billing advice. Confirm all coding and coverage with your MAC and payer policies.');

    addFooter(doc, siteName, siteUrl);

    doc.end();
  });
}
