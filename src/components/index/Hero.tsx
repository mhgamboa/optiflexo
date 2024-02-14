import React from "react";

export default function Hero() {
  return (
    <section className="sm:h-80dvh relative bg-[url(/steel.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left rtl:sm:text-right mx-auto sm:mx-0">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Encuentra tus
            <strong className="block font-extrabold text-rose-700"> Rodillos </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed mx-auto sm:mx-0">
            La Opción Optima para Rodillos y Mangas Anilox de Banda Estrecha y Media.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center mx-auto sm:mx-0">
            <a
              href="#contactar"
              className="mx-auto sm:mx-0 block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Contactarnos
            </a>

            <a
              href="#aprender"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Aprender Màs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
