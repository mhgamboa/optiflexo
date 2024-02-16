"use server";
import { EmailTemplate } from "@/components/email/email-template";
import { Resend } from "resend";

export default async function sendEmail(formData: FormData) {
  "use server";

  const rawFormData = {
    customerId: formData.get("email"),
    amount: formData.get("subject"),
    status: formData.get("message"),
  };
  console.log(rawFormData);
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "delivered@resend.dev",
    subject: "Hello World",
    react: EmailTemplate({ firstName: "John" }),
  });

  console.log(data);
}
