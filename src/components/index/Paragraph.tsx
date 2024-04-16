import React from "react";

export default function Paragraph({ lang }: { lang?: string }) {
  return (
    <div className="w-full font-semibold flex items-center justify-center py-16 md:py-24 lg:py-36">
      <h1 className="text-xl lg:text-2xl xl:text-3xl text-rose-700 w-4/5 max-w-screen-md text-center">
        {lang === "en"
          ? "We are committed to delivering products to our customers on time and reliably. Only through quality credibility and continuous improvement can we achieve our goals together and ensure long-term success."
          : "Estamos comprometidos a entregar productos a nuestros clientes a tiempo y de manera confiable. Sólo a través de credibilidad calidad y la mejora continua podremos alcanzar juntos nuestros objetivos y garantizar el éxito a largo plazo."}
      </h1>
    </div>
  );
}
