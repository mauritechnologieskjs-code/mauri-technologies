import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL_TO || "mauritechnologies.kjs@gmail.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, services, timeline, message, formType } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    const isConsultation = formType === "consultation";
    const subject = isConsultation
      ? `[Consultation Request] ${name} - Mauri Technologies`
      : `[Website Inquiry] ${name} - Mauri Technologies`;

    const selectedServiceText = services && Array.isArray(services)
      ? services.join(", ")
      : service || "General Inquiry";

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF7F2; margin: 0; padding: 24px; color: #1A1612; }
            .container { max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E8DFD3; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
            .header { background: #2A1E14; padding: 24px 32px; border-bottom: 3px solid #C2671A; }
            .header h1 { color: #FFFFFF; font-size: 20px; margin: 0; font-weight: 800; letter-spacing: -0.5px; }
            .header p { color: #F0E8DC; font-size: 13px; margin: 6px 0 0 0; }
            .body { padding: 32px; }
            .badge { display: inline-block; padding: 4px 12px; border-radius: 50px; background: rgba(194,103,26,0.12); color: #C2671A; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; }
            .field-row { margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid #F3ECE2; }
            .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #7A6B5D; margin-bottom: 4px; }
            .field-value { font-size: 15px; font-weight: 600; color: #1A1612; }
            .message-box { background: #FAF7F2; border: 1px solid #E8DFD3; border-radius: 12px; padding: 16px; font-size: 14px; line-height: 1.6; color: #2A1E14; white-space: pre-wrap; margin-top: 8px; }
            .footer { padding: 20px 32px; background: #FAF7F2; border-top: 1px solid #E8DFD3; font-size: 12px; color: #7A6B5D; text-align: center; }
            .footer a { color: #C2671A; text-decoration: none; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Mauri Technologies</h1>
              <p>${isConsultation ? "New Consultation Request Received" : "New Website Inquiry Received"}</p>
            </div>
            <div class="body">
              <span class="badge">${isConsultation ? "Schedule a Consultation" : "Contact Section Inquiry"}</span>
              
              <div class="field-row">
                <div class="field-label">Full / Business Name</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #C2671A;">${email}</a></div>
              </div>

              <div class="field-row">
                <div class="field-label">Phone / WhatsApp Number</div>
                <div class="field-value">${phone || "Not provided"}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Service(s) of Interest</div>
                <div class="field-value">${selectedServiceText}</div>
              </div>

              ${timeline ? `
              <div class="field-row">
                <div class="field-label">Target Timeline</div>
                <div class="field-value">${timeline}</div>
              </div>` : ""}

              <div>
                <div class="field-label">Message / Project Details</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              Received from <strong>Mauri Technologies Website</strong> (Kathmandu, Nepal)<br />
              Direct reply will go to: <a href="mailto:${email}">${email}</a>
            </div>
          </div>
        </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: "Mauri Technologies <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: subject,
      html: emailHtml,
    });

    if (data.error) {
      console.error("Resend error:", data.error);
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error: any) {
    console.error("Server error sending email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
