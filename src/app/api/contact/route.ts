import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL ?? 'info@thomashomeservices.com';

const FROM = process.env.FROM_EMAIL ?? 'Thomas Home Services <onboarding@resend.dev>';

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json();

  if (!name || !phone || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    await Promise.all([
      // Notification to business
      resend.emails.send({
        from: FROM,
        to: [BUSINESS_EMAIL],
        subject: `New Service Request from ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;">
            <div style="background:#0A377B;border-radius:12px 12px 0 0;padding:24px 32px;">
              <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700;">New Service Request</h1>
              <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;font-size:14px;">Thomas Home Services — thomashomeservices.com</p>
            </div>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:28px 32px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;width:130px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#1e293b;font-size:14px;">${name}</td></tr>
                <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#1e293b;font-size:14px;"><a href="tel:${phone.replace(/\D/g, '')}" style="color:#C0392B;text-decoration:none;">${phone}</a></td></tr>
                <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#1e293b;font-size:14px;"><a href="mailto:${email}" style="color:#C0392B;text-decoration:none;">${email}</a></td></tr>
                ${message ? `<tr><td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;">Message</td><td style="padding:10px 0;color:#1e293b;font-size:14px;">${message}</td></tr>` : ''}
              </table>
            </div>
          </div>
        `,
      }),

      // Confirmation to submitter
      resend.emails.send({
        from: FROM,
        to: [email],
        subject: 'Thank you! We received your request — Thomas Home Services',
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
          <body style="margin:0;padding:0;background:#f1f5f9;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
              <tr><td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

                  <!-- Tick hero -->
                  <tr>
                    <td align="center" style="padding-bottom:24px;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="80" height="80" align="center" valign="middle"
                              style="background:#dcfce7;border-radius:40px;text-align:center;vertical-align:middle;">
                            <span style="font-size:42px;line-height:80px;color:#16a34a;font-weight:900;">&#10003;</span>
                          </td>
                        </tr>
                      </table>
                      <h1 style="font-family:sans-serif;color:#0A377B;font-size:26px;font-weight:700;margin:16px 0 6px;">Thank you, ${name}!</h1>
                      <p style="font-family:sans-serif;color:#64748b;font-size:15px;margin:0;">We&rsquo;ve received your service request.</p>
                    </td>
                  </tr>

                  <!-- Body card -->
                  <tr>
                    <td style="background:#ffffff;border-radius:12px;padding:28px 32px;border:1px solid #e2e8f0;">
                      <p style="font-family:sans-serif;color:#1e293b;font-size:15px;line-height:1.7;margin:0 0 20px;">
                        A Thomas Home Services team member will be in touch with you <strong>shortly</strong>. For immediate assistance, call us directly:
                      </p>
                      <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                        <tr>
                          <td style="background:#AF0000;border-radius:8px;">
                            <a href="tel:4802795511" style="font-family:sans-serif;display:inline-block;color:#ffffff;font-weight:700;font-size:17px;padding:13px 28px;text-decoration:none;">
                              &#128222; 480-279-5511
                            </a>
                          </td>
                        </tr>
                      </table>

                      <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="border-left:3px solid #0A377B;padding-left:14px;">
                            <p style="font-family:sans-serif;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;margin:0 0 10px;">What happens next</p>
                            <p style="font-family:sans-serif;color:#475569;font-size:14px;line-height:1.8;margin:0;">
                              &#10003;&nbsp; We review your request right away<br>
                              &#10003;&nbsp; A technician calls to confirm details<br>
                              &#10003;&nbsp; We schedule your same-day or next-day visit
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#0A377B;border-radius:12px;padding:18px 24px;text-align:center;margin-top:16px;">
                      <p style="font-family:sans-serif;color:rgba(255,255,255,0.6);font-size:12px;margin:0 0 4px;">Licensed &amp; Insured Since 1946 &middot; AZ ROC #280439-296332</p>
                      <p style="font-family:sans-serif;color:#ffffff;font-size:13px;font-weight:600;margin:0;">Thomas Home Services &middot; Greater Phoenix Area</p>
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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
