import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validators";

const CONTACT_EMAIL = "summergracellc@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 },
      );
    }

    const { honeypot, name, email, company, message } = result.data;

    // Spam detection: honeypot field should be empty
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    console.log("RESEND_API_KEY present:", !!resendApiKey);

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const { error: sendError } = await resend.emails.send({
        from: "Good Film AI <onboarding@resend.dev>",
        to: CONTACT_EMAIL,
        replyTo: email,
        subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          company ? `Company: ${company}` : null,
          "",
          "Message:",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      });

      if (sendError) {
        console.error("Resend error:", sendError);
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 },
        );
      }
    } else {
      console.error(
        "RESEND_API_KEY not configured — contact form submission lost",
      );
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 503 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
