import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';
const NOTIFY = process.env.NOTIFICATION_EMAIL ?? 'info@thomashomeservices.com';

export async function POST(req: Request) {
  const { name, phone, email, message, source } = await req.json();

  if (!name || !phone || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    await Promise.all([
      // ── Notification to Thomas Home Services ───────────────────────────────
      resend.emails.send({
        from: FROM,
        to: NOTIFY,
        subject: `New Lead: ${name}, Thomas Home Services LP`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;background:#f9f9f9;padding:24px;border-radius:8px">
            <div style="background:#0A377B;padding:20px 24px;border-radius:6px 6px 0 0;margin:-24px -24px 24px">
              <h1 style="color:#fff;font-size:22px;margin:0">New Lead, Thomas Home Services</h1>
              <p style="color:rgba(255,255,255,0.7);font-size:13px;margin:4px 0 0">Submitted via: <strong style="color:white">${source ?? 'unknown'}</strong></p>
            </div>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666;font-size:13px;width:100px">Name</td><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:bold;color:#0A377B">${name}</td></tr>
              <tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666;font-size:13px">Phone</td><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:bold"><a href="tel:${phone}" style="color:#AF0000">${phone}</a></td></tr>
              <tr><td style="padding:8px 0;border-bottom:1px solid #eee;color:#666;font-size:13px">Email</td><td style="padding:8px 0;border-bottom:1px solid #eee"><a href="mailto:${email}" style="color:#AF0000">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666;font-size:13px;vertical-align:top">Message</td><td style="padding:8px 0;color:#0A377B">${message || '-'}</td></tr>
            </table>
            <div style="margin-top:24px;font-size:12px;color:#999;border-top:1px solid #eee;padding-top:16px">
              Thomas Home Services LP · thomashomeservices.com
            </div>
          </div>
        `,
      }),

      // ── Confirmation to submitter ──────────────────────────────────────────
      resend.emails.send({
        from: FROM,
        to: email,
        subject: 'We got your request, Thomas Home Services',
        html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px">
  <tr><td align="center">
  <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(10,55,123,0.10)">

    <!-- Header -->
    <tr>
      <td style="background:#0A377B;padding:32px 24px;text-align:center">
        <p style="color:#ffffff;font-size:28px;font-weight:bold;margin:0;letter-spacing:0.02em;font-family:Arial,sans-serif">Thomas Home Services</p>
        <p style="color:rgba(255,255,255,0.55);font-size:13px;margin:6px 0 0;letter-spacing:0.06em;text-transform:uppercase;font-family:Arial,sans-serif">Plumbing &nbsp;·&nbsp; HVAC &nbsp;·&nbsp; Electrical</p>
      </td>
    </tr>

    <!-- Red accent bar -->
    <tr><td style="background:#AF0000;height:4px;font-size:0;line-height:0">&nbsp;</td></tr>

    <!-- Checkmark success block -->
    <tr>
      <td style="padding:40px 32px 24px;text-align:center">
        <div style="width:72px;height:72px;background:#dcfce7;border-radius:50%;text-align:center;line-height:72px;font-size:38px;color:#16a34a;font-weight:bold;margin:0 auto 20px;font-family:Arial,sans-serif">&#10003;</div>
        <h1 style="color:#0A377B;font-size:28px;margin:0 0 8px;font-weight:bold">Thanks, ${name}!</h1>
        <p style="color:#555;font-size:15px;margin:0;line-height:1.6">We received your request and will be in touch shortly.</p>
      </td>
    </tr>

    <!-- Body copy -->
    <tr>
      <td style="padding:0 32px 32px">

        <!-- What happens next -->
        <div style="background:#f8fafc;border-radius:12px;padding:20px 24px;margin-bottom:24px">
          <p style="color:#0A377B;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 14px">What happens next</p>
          <table cellpadding="0" cellspacing="0" style="width:100%">
            <tr>
              <td style="vertical-align:top;padding-bottom:12px;width:28px">
                <div style="width:22px;height:22px;background:#0A377B;border-radius:50%;display:inline-block;text-align:center;line-height:22px;font-weight:bold;font-size:12px;color:#fff">1</div>
              </td>
              <td style="padding-bottom:12px;padding-left:10px;color:#444;font-size:14px;line-height:1.5">
                A Thomas team member will review your request and reach out by phone or email, usually within a few hours.
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;padding-bottom:12px;width:28px">
                <div style="width:22px;height:22px;background:#0A377B;border-radius:50%;display:inline-block;text-align:center;line-height:22px;font-weight:bold;font-size:12px;color:#fff">2</div>
              </td>
              <td style="padding-bottom:12px;padding-left:10px;color:#444;font-size:14px;line-height:1.5">
                We will confirm your appointment time and answer any questions.
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;width:28px">
                <div style="width:22px;height:22px;background:#0A377B;border-radius:50%;display:inline-block;text-align:center;line-height:22px;font-weight:bold;font-size:12px;color:#fff">3</div>
              </td>
              <td style="padding-left:10px;color:#444;font-size:14px;line-height:1.5">
                Our licensed technician arrives, fully stocked, on time, and ready to help.
              </td>
            </tr>
          </table>
        </div>

        ${message ? `
        <!-- Your message -->
        <div style="border-left:4px solid #0A377B;padding:12px 16px;margin-bottom:24px;background:#eff6ff;border-radius:0 8px 8px 0">
          <p style="color:#666;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 6px">Your message</p>
          <p style="color:#0A377B;font-size:14px;margin:0;line-height:1.6">${message}</p>
        </div>
        ` : ''}

        <!-- Phone CTA -->
        <div style="text-align:center;margin-bottom:24px">
          <p style="color:#666;font-size:13px;margin:0 0 10px">Need help right now? We answer 24/7.</p>
          <a href="tel:4802795511" style="display:inline-block;background:#AF0000;color:#ffffff;font-size:22px;font-weight:bold;padding:14px 36px;border-radius:8px;text-decoration:none;letter-spacing:0.02em">
            480-279-5511
          </a>
        </div>

        <!-- Badges row -->
        <div style="border-top:1px solid #eee;padding-top:20px;text-align:center">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding:4px 8px;color:#555;font-size:12px">&#10003; Same Day Service</td>
              <td align="center" style="padding:4px 8px;color:#555;font-size:12px">&#10003; Licensed &amp; Insured</td>
              <td align="center" style="padding:4px 8px;color:#555;font-size:12px">&#10003; Since 1946</td>
            </tr>
          </table>
        </div>

      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background:#0A377B;padding:20px 32px;text-align:center">
        <p style="color:#ffffff;font-size:14px;font-weight:bold;margin:0 0 4px">Thomas Home Services</p>
        <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:0">Greater Phoenix Area &nbsp;·&nbsp; thomashomeservices.com &nbsp;·&nbsp; 480-279-5511</p>
        <p style="color:rgba(255,255,255,0.3);font-size:11px;margin:12px 0 0">You received this because you submitted a form on our website.</p>
      </td>
    </tr>

  </table>
  </td></tr>
</table>
</body>
</html>
        `,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
