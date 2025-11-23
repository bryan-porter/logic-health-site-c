import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  // Environment variable guards
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error('[Careers API] Missing required environment variables: GMAIL_USER or GMAIL_APP_PASSWORD');
    return NextResponse.json(
      { ok: false, message: 'Email service is not configured. Please contact support.' },
      { status: 500 }
    );
  }

  // After validation, we know gmailUser is defined
  const careersToEmail = process.env.CAREERS_TO_EMAIL || gmailUser;

  try {
    // Parse multipart/form-data
    const formData = await request.formData();

    // Extract text fields
    const fullName = formData.get('fullName') as string || '';
    const email = formData.get('email') as string || '';
    const phone = formData.get('phone') as string || '';
    const location = formData.get('location') as string || '';
    const role = formData.get('role') as string || '';
    const licensure = formData.get('licensure') as string || '';
    const experience = formData.get('experience') as string || '';
    const preferences = formData.get('preferences') as string || '';
    const ehrExperience = formData.get('ehrExperience') as string || '';
    const other = formData.get('other') as string || '';

    // Extract resume file
    const resumeFile = formData.get('resume') as File | null;

    // Build email body
    const emailBody = `
New Career Application Received
================================

CONTACT INFORMATION
-------------------
Name:     ${fullName}
Email:    ${email}
Phone:    ${phone || 'Not provided'}
Location: ${location || 'Not provided'}

ROLE & LICENSURE
----------------
Role:      ${role || 'Not specified'}
Licensure: ${licensure || 'Not provided'}

EXPERIENCE
----------
${experience || 'Not provided'}

SCHEDULE & PREFERENCES
---------------------
${preferences || 'Not provided'}

EHR & TOOLS EXPERIENCE
---------------------
${ehrExperience || 'Not provided'}

ADDITIONAL INFORMATION
---------------------
${other || 'Not provided'}

---
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}
`.trim();

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Prepare email options
    const mailOptions: {
      from: string;
      to: string;
      subject: string;
      text: string;
      attachments?: Array<{
        filename: string;
        content: Buffer;
      }>;
    } = {
      from: gmailUser,
      to: careersToEmail,
      subject: `New Career Application: ${fullName} - ${role || 'Unspecified Role'}`,
      text: emailBody,
    };

    // Attach resume if provided
    if (resumeFile && resumeFile.size > 0) {
      const resumeArrayBuffer = await resumeFile.arrayBuffer();
      const resumeBuffer = Buffer.from(resumeArrayBuffer);

      mailOptions.attachments = [
        {
          filename: resumeFile.name,
          content: resumeBuffer,
        },
      ];
    }

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('[Careers API] Application submitted successfully:', {
      name: fullName,
      email,
      role,
      hasResume: !!resumeFile,
    });

    return NextResponse.json(
      {
        ok: true,
        message: 'Thank you for your application! We will review your information and be in touch soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Careers API] Error processing application:', error);
    return NextResponse.json(
      {
        ok: false,
        message: 'An error occurred while submitting your application. Please try again or contact us directly.',
      },
      { status: 500 }
    );
  }
}
