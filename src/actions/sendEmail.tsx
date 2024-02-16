"use server";
import { EmailTemplate } from "@/components/email/email-template";
import { Resend } from "resend";

type Input = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default async function sendEmail({ name, email, subject, message }: Input) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "delivered@resend.dev",
    subject: subject,
    react: EmailTemplate({ name, email, message }),
  });

  console.log(data);
}
