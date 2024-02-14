import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="mx-auto max-w-screen-2xl max-w-sc px-4 py-6 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="relative text-center sm:text-left h-24 w-32 bg-blue-500 mx-auto sm:mx-0">
            <Image src="/logo.png" alt="logo" sizes="100%, 100%" fill />
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <a
              className="hidden sm:block rounded-lg bg-rose-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-rose-700 focus:outline-none focus:ring"
              href="#contactar"
            >
              Contactarnos
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
