import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-900 text-white p-6 space-y-10 md:text-lg">
      <p className="text-center max-w-screen-md">
        Estamos comprometidos a entregar productos a nuestros clientes a tiempo y de manera
        confiable. Sólo a través de credibilidad calidad y la mejora continua podremos alcanzar
        juntos nuestros objetivos y garantizar el éxito a largo plazo.
      </p>
      <div className="flex justify-around w-full">
        <div>info@optiflexo.com</div>
        <div>Tel. +1909-579-9971</div>
      </div>
    </footer>
  );
}
