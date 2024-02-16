import React from "react";
import { EmailTemplate } from "@/components/email/email-template";
import { Resend } from "resend";

export default async function Contact() {
  async function sendEmail(formData: FormData) {
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

  return (
    <section className="bg-rose-700" id="contactar">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contactarnos
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          {/* à, è, ì, ò, ù, À, È, Ì, Ò, Ù */}
          ¿Còmo le podemos ayudar? Contàctenos hoy, y le mandamos un email.
        </p>
        <form action={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Su Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="nombre@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
              Subjeto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="Diganos como le podemos ayudar"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
              Su Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Ponga su mensaje aquì..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-semibold text-center bg-white text-rose-600 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 focus:ring-primary-800"
          >
            Manda Un Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
