"use client";
import { useState } from "react";
import { toast } from "sonner";
import sendEmail from "@/actions/sendEmail";

export default function Contact() {
  const [emailSent, setEmailSent] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form Data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      await sendEmail({ name, email, subject, message });
      // setEmailSent(true); //Prevent multiple resends
      toast.success("¡Lo recibimos!", {
        description: "Te Mandamos un mensaje en 2-3 días hábiles",
        duration: 5000,
      });
    } catch (e) {
      console.log(e);
    }
  };
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
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
              Su Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="Nombre"
              required
            />
          </div>
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
            className="py-3 px-5 text-sm font-semibold text-center bg-white text-rose-600 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 focus:ring-primary-800 disabled:bg-gray-400 disabled:text-black disabled:font-normal"
            disabled={emailSent}
          >
            Manda Un Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
