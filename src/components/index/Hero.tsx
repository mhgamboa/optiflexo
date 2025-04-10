import React from "react";
import Image from "next/image";
import roller from "@/assets/roller.png";

export default function Hero({ lang = "es" }) {
  const translations = {
    en: {
      titleStart: "The",
      titleHighlight: "Optimal",
      titleEnd: "option for Anilox",
      description: "High Performance Anilox Rollers and Sleeves for Narrow and Medium Bands.",
      contactButton: "Contact Us",
      learnButton: "Learn More",
    },
    es: {
      titleStart: "La Opción",
      titleHighlight: "Optima",
      titleEnd: "para Anilox",
      description: "Rodillos y Mangas Anilox de Alto Rendimiento para Banda Estrecha y Media.",
      contactButton: "Contactarnos",
      learnButton: "Aprender Más",
    },
  };

  // Fallback to English if language not available
  type LanguageKey = keyof typeof translations;
  const text = translations[lang as LanguageKey] || translations.en;

  return (
    <section className="relative min-h-[80vh] lg:min-h-[70vh]">
      {/* Background image for mobile/tablet */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden mt-10"
        style={{ backgroundImage: `url(${roller.src})` }}
      />

      {/* Background image for desktop - using object-contain to show full image */}
      <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2">
        <div className="relative h-full w-full">
          <Image
            src={roller}
            alt="Anilox Roller"
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </div>

      {/* Subtle overlay for better text visibility */}
      <div className="absolute inset-0 bg-white/60 lg:bg-gradient-to-r lg:from-white/90 lg:to-transparent lg:w-3/5" />

      {/* Content container */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 lg:flex lg:h-[70vh] lg:items-center lg:px-8">
        {/* Content area */}
        <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0 space-y-8 lg:pr-12 lg:w-1/2">
          {/* Logo */}
          <div className="relative h-24 w-36 mx-auto lg:mx-0 mb-8">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              sizes="(max-width: 768px) 100vw, 144px"
              className="object-contain"
              priority
            />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {text.titleStart}{" "}
            <span className="font-extrabold text-rose-700">{text.titleHighlight} </span>
            {text.titleEnd}
          </h1>

          {/* Description */}
          <p className="max-w-lg text-lg sm:text-xl/relaxed mx-auto lg:mx-0">{text.description}</p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 text-center mx-auto lg:mx-0 justify-center lg:justify-start">
            <a
              href="#contactar"
              className="block w-full rounded bg-rose-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring sm:w-auto transition-colors"
            >
              {text.contactButton}
            </a>

            <a
              href="#aprender"
              className="block w-full rounded bg-white px-8 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring sm:w-auto transition-colors border border-rose-200"
            >
              {text.learnButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
