"use client";
import { useState } from "react";
import { toast } from "sonner";
import sendEmailEs from "@/actions/sendEmailEs";
import sendEmailEn from "@/actions/sendEmailEn";

export default function Contact({ lang }: { lang?: string }) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonDisabled(true);

    // Get form Data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      if (lang !== "en") await sendEmailEs({ name, email, subject, message });
      if (lang === "en") await sendEmailEn({ name, email, subject, message });
      lang === "en"
        ? toast.success("We got it!", {
            description: "We'll respond to you in 2-3 business days",
            duration: 5000,
          })
        : toast.success("¡Lo recibimos!", {
            description: "Te Mandamos un mensaje en 2-3 días hábiles",
            duration: 5000,
          });
    } catch (e) {
      lang === "en"
        ? alert("There was an error, and we couldn't receive your message. Please send us an email directly at hector@optiflexo.com")
        : alert("Hubo un error, y no podimos recibir tu mensaje. Por favor, mandenos un email a hector@optiflexo.com");
    } finally {
      setButtonDisabled(false);
    }
  };
  return (
    <section className="bg-rose-700" id="contactar">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">{lang === "en" ? "Contact Us" : "Contactarnos"}</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          {lang === "en"
            ? "How can we help you? Contact us today, and we'll send you an email."
            : "¿Còmo le podemos ayudar? Contàctenos hoy, y le mandamos un email."}
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
              {lang === "en" ? "Your Name" : "Su Nombre"}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder={lang === "en" ? "Name" : "Nombre"}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              {lang === "en" ? "Your Email" : "Su Email"}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder={lang === "en" ? "name@email.com" : "nombre@email.com"}
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
              {lang === "en" ? "Subject" : "Subjeto"}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder={lang === "en" ? "Tell us how we can help" : "Diganos como le podemos ayudar"}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
              {lang === "en" ? "Your Message" : "Su Mensaje"}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
              placeholder={lang === "en" ? "Put your message here..." : "Ponga su mensaje aquì..."}
              required
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-semibold text-center bg-white text-rose-600 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 focus:ring-primary-800 disabled:bg-gray-400 disabled:text-black disabled:font-normal"
            disabled={buttonDisabled}
          >
            {lang === "en" ? "Send a Message" : "Manda un Mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}
