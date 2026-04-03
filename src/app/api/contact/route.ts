import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Create a Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mr.ssujafali@gmail.com', // Explicitly deliver all forms to this email
      subject: `New Lead: ${subject || 'Contact Form'} from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f1a2f; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); padding: 30px; text-align: center;">
                <h2 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">New Lead Attached! 🚀</h2>
            </div>
            <div style="padding: 40px 30px; background-color: #17243e;">
                <p style="color: #94a3b8; font-size: 14px; margin-top: 0;">You have received a new contact form submission from your website.</p>
                
                <table style="width: 100%; border-collapse: collapse; margin-top: 25px;">
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #cbd5e1; font-weight: bold; width: 100px;">Name</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #ffffff;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #cbd5e1; font-weight: bold;">Email</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #38bdf8;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #cbd5e1; font-weight: bold;">Phone</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #ffffff;">${phone || '<span style="color: #64748b;">Not provided</span>'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #cbd5e1; font-weight: bold;">Subject</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #ffffff;">${subject || '<span style="color: #64748b;">Not provided</span>'}</td>
                    </tr>
                </table>

                <div style="margin-top: 30px; background-color: #0f1a2f; padding: 20px; border-radius: 8px; border-left: 4px solid #38bdf8;">
                    <h4 style="color: #cbd5e1; margin-top: 0; margin-bottom: 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message</h4>
                    <p style="color: #ffffff; line-height: 1.6; margin: 0; font-size: 15px; white-space: pre-wrap;">${message}</p>
                </div>
            </div>
            <div style="background-color: #0c1524; padding: 20px; text-align: center;">
                <p style="color: #64748b; font-size: 12px; margin: 0;">AM Software Solution &bull; Automated Notification</p>
            </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
