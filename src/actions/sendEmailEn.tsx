"use server";
import { templateHector } from "@/components/email/en/templateHector";
import { templateClient } from "@/components/email/en/templateClient";
import { Resend } from "resend";

type Input = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default async function sendEmail({ name, email, subject, message }: Input) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data: emailHector } = await resend.emails.send({
    from: "Optiflexo <info@optiflexo.com>",
    to: "hector@optiflexo.com",
    subject: `${name} sent a message on your website`,
    react: templateHector({ name, email, message }),
  });

  const { data: emailInfo } = await resend.emails.send({
    from: "Optiflexo <info@optiflexo.com>",
    to: "info@optiflexo.com",
    subject: `${name} sent a message on your website`,
    react: templateHector({ name, email, message }),
  });

  const { data: emailClient } = await resend.emails.send({
    from: "Optiflexo <info@optiflexo.com>",
    to: email,
    subject: subject,
    react: templateClient({ name, email, message }),
  });

  console.log(emailHector, emailInfo, emailClient);
}
