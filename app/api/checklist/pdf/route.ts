import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  const siteName = 'Logic Health Management';
  const siteUrl = 'https://logichm.com';

  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();

  // Embed fonts
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  // Colors
  const darkGray = rgb(0.067, 0.094, 0.125); // #111827
  const mediumGray = rgb(0.22, 0.25, 0.28); // #374151
  const lightGray = rgb(0.42, 0.45, 0.50); // #6b7280

  // PAGE 1
  let page = pdfDoc.addPage([612, 792]); // Letter size
  const { width, height } = page.getSize();
  let y = height - 50;

  // Title
  page.drawText('CCM/RPM Readiness Checklist for Physician Practices', {
    x: 50,
    y,
    size: 18,
    font: timesBold,
    color: darkGray,
  });
  y -= 30;

  // Intro paragraph
  const introText = 'Efficient, compliant Chronic Care Management (CCM) and Remote Patient Monitoring (RPM) programs can unlock new reimbursement, improve outcomes, and strengthen patient loyalty. Use this quick-scan checklist to confirm you have the right foundations in place before you launch or outsource CCM/RPM services.';
  const introLines = wrapText(introText, 512, 11, timesRoman);
  for (const line of introLines) {
    page.drawText(line, { x: 50, y, size: 11, font: timesRoman, color: mediumGray });
    y -= 14;
  }
  y -= 10;

  // Section: Clinical Workflow
  page.drawText('Clinical Workflow', { x: 50, y, size: 14, font: timesBold, color: darkGray });
  y -= 20;

  y = drawBullet(page, 'Documented Care Plans – Registered clinicians (RN, NP, PA, or PCP) can create and update comprehensive care plans that live in the EHR and are shareable with patients.', 50, y, timesRoman);
  y = drawBullet(page, 'Defined Staff Roles & Licensure – Clinical staff (e.g., MAs, nurses) who will perform monitoring are eligible under CMS "general supervision" rules and scheduled to meet time requirements.', 50, y, timesRoman);
  y = drawBullet(page, 'Single-Provider Billing Safeguards – Process exists to confirm no other provider is billing CCM for the same patient in the same month (common pitfall for multi-specialty panels).', 50, y, timesRoman);
  y -= 15;

  // Section: Technology & Integration
  page.drawText('Technology & Integration', { x: 50, y, size: 14, font: timesBold, color: darkGray });
  y -= 20;

  y = drawBullet(page, 'Bi-Directional EHR Integration – Platform can push/pull problem lists, vitals, medications, and encounter notes directly into the practice EHR to avoid double documentation.', 50, y, timesRoman);
  y = drawBullet(page, 'Minimal-Click Workflow – User interface requires only a few steps for physicians, reducing resistance and increasing adoption.', 50, y, timesRoman);
  y = drawBullet(page, 'Device & App Reliability – Cellular or Bluetooth devices are tested to prevent "dark devices," OS update failures, and downstream tech-support burden.', 50, y, timesRoman);
  y -= 15;

  // Section: Billing & Compliance
  page.drawText('Billing & Compliance', { x: 50, y, size: 14, font: timesBold, color: darkGray });
  y -= 20;

  y = drawBullet(page, 'Current CPT Mapping – Correct use of CCM (99490, 99491, 99437, 99439), RPM (99453, 99454, 99457, 99458), and RHC/FQHC codes like G0511.', 50, y, timesRoman);
  y = drawBullet(page, 'Time & Data Capture Automation – Platform automatically logs minutes and validates vitals to support audit-proof documentation.', 50, y, timesRoman);
  y = drawBullet(page, 'Audit Trail & HIPAA Controls – All patient communications and device data are stored in a HITRUST-certified, HIPAA-compliant system.', 50, y, timesRoman);

  // Footer
  drawFooter(page, siteName, siteUrl, timesRoman, lightGray);

  // PAGE 2
  page = pdfDoc.addPage([612, 792]);
  y = height - 50;

  // Section: Patient Engagement
  page.drawText('Patient Engagement', { x: 50, y, size: 14, font: timesBold, color: darkGray });
  y -= 20;

  y = drawBullet(page, 'Onboarding & Education Plan – Patients receive simple instructions and coaching that improve adherence beyond mere device distribution.', 50, y, timesRoman);
  y = drawBullet(page, 'Multichannel Communication – Care team can reach patients via phone, SMS, and portal messaging to sustain enrollment and collect survey data.', 50, y, timesRoman);
  y -= 15;

  // Section: Helpful Resources
  page.drawText('Helpful Resources', { x: 50, y, size: 14, font: timesBold, color: darkGray });
  y -= 20;

  y = drawBullet(page, 'CMS MLN Connects: Chronic Care & Remote Therapeutic Monitoring Code List (Aug 28, 2025).', 50, y, timesRoman);
  y = drawBullet(page, 'LogicHM Integration Guide: Step-by-step EMR connectivity checklist (internal).', 50, y, timesRoman);
  y = drawBullet(page, 'Addison Care "Higher Standard" RPM/CCM Case Study.', 50, y, timesRoman);
  y -= 15;

  // Section: What to Do Next
  page.drawText('What to Do Next', { x: 50, y, size: 14, font: timesBold, color: darkGray });
  y -= 20;

  y = drawBullet(page, 'Share the checklist with your care team and mark any gaps.', 50, y, timesRoman);
  y = drawBullet(page, 'Prioritize fixes in workflow, tech, billing, or engagement.', 50, y, timesRoman);
  y = drawBullet(page, "Schedule a Readiness Consultation with LogicHM. We'll review your current state, quantify revenue potential, and map a go-live plan—no obligation.", 50, y, timesRoman);
  y -= 20;

  // Disclaimer
  const disclaimerText = 'This checklist is an educational aid and not legal or billing advice. Confirm all coding and coverage with your MAC and payer policies.';
  const disclaimerLines = wrapText(disclaimerText, 512, 10, timesItalic);
  for (const line of disclaimerLines) {
    page.drawText(line, { x: 50, y, size: 10, font: timesItalic, color: mediumGray });
    y -= 13;
  }

  // Footer
  drawFooter(page, siteName, siteUrl, timesRoman, lightGray);

  // Serialize the PDF
  const pdfBytes = await pdfDoc.save();

  return new NextResponse(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="CCM-RPM-Readiness-Checklist.pdf"',
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}

function wrapText(text: string, maxWidth: number, fontSize: number, font: any): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const width = font.widthOfTextAtSize(testLine, fontSize);

    if (width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

function drawBullet(page: any, text: string, x: number, y: number, font: any): number {
  // Draw bullet point
  page.drawCircle({
    x: x + 5,
    y: y + 4,
    size: 1.5,
    color: rgb(0.067, 0.094, 0.125),
  });

  // Wrap and draw text
  const lines = wrapText(text, 492, 11, font);
  for (const line of lines) {
    page.drawText(line, {
      x: x + 20,
      y,
      size: 11,
      font,
      color: rgb(0.067, 0.094, 0.125),
    });
    y -= 14;
  }

  return y - 8;
}

function drawFooter(page: any, siteName: string, siteUrl: string, font: any, color: any) {
  const y = 40;
  page.drawText(`${siteName} · ${siteUrl}`, {
    x: 50,
    y,
    size: 9,
    font,
    color,
  });
  page.drawText(`© ${new Date().getFullYear()} ${siteName}`, {
    x: 450,
    y,
    size: 9,
    font,
    color,
  });
}
