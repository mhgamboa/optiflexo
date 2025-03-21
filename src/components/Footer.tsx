import React from "react";

export default function Footer({ lang }: { lang?: string }) {
  return (
    <footer className="flex flex-col items-center bg-gray-900 text-white p-6 space-y-10 md:text-lg">
      <div className="flex flex-col items-center space-y-2">
        <p>OPTIFLEXO</p> 2173 salk Ave, Suite 250 #2055 Carlsbad, CA 92008 United States
      </div>
      <div className="flex justify-around w-full">
        <div>info@optiflexo.com</div>
        <div>Tel. +1909-579-9971</div>
      </div>
      <p className="text-xs w-full text-right">
        {lang === "en" ? "Image provided by " : "Imagen proporcionada por "}
        <a
          href="https://commons.wikimedia.org/wiki/File:Flexographic_print_roller_with_anilox.jpg"
          className="underline"
        >
          wikimedia
        </a>
      </p>
    </footer>
  );
}
