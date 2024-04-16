import React from "react";
import Image from "next/image";

export default function Hero({ lang }: { lang?: string }) {
  return (
    <section className="relative bg-[url(/roller.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:py-0 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left mx-auto sm:mx-0 space-y-6">
          <div className="relative text-center sm:text-left h-24 w-36 mx-auto sm:mx-0">
            <Image src="/logo.png" alt="logo" sizes="100%, 100%" fill />
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {lang === "en" ? "The" : "La Opción"}
            <strong className="font-extrabold text-rose-700"> {lang === "en" ? "Optimal" : "Optima"} </strong>
            {lang === "en" ? "option for Anilox" : "para Anilox"}
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed mx-auto sm:mx-0">
            {lang === "en"
              ? "High Performance Anilox Rollers and Sleeves for Narrow and Medium Band."
              : "Rodillos y Mangas Anilox de Alto Rendimiento para Banda Estrecha y Media."}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center mx-auto sm:mx-0">
            <a
              href="#contactar"
              className="mx-auto sm:mx-0 block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              {lang === "en" ? "Contact Us" : "Contactarnos"}
            </a>

            <a
              href="#aprender"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              {lang === "en" ? "Learn More" : "Aprender Màs"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
