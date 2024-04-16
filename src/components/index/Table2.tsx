import React from "react";
import { table2 } from "./data";

export default function Table({ lang }: { lang?: string }) {
  return (
    <div className="overflow-scroll no-scrollbar sm:overflow-x-auto p-10 max-x-full">
      <h2 className="text-3xl font-bold sm:text-4xl text-center pb-6 text-rose-600">
        {lang === "en" ? "Screen and Volume Guide" : "Guìa De Pantalla y Volumen"}
      </h2>

      <table className="mx-auto border border-gray-200 bg-white text-sm">
        <thead className="text-left lg:text-lg">
          <tr className="divide-gray-200 divide-x-2 divide-y-2">
            <th className="whitespace-nowrap p-2 font-semibold text-gray-900 text-center">{lang === "en" ? "Print Type" : "Tipo de Impresiòn"}</th>
            <th className="whitespace-nowrap p-2 font-semibold text-gray-900 text-center">{lang === "en" ? "Anilox Lines" : "Lìneas Anilox"}</th>
            <th className="whitespace-nowrap p-2 font-semibold text-gray-900 text-center">{lang === "en" ? "Anilox Volume" : "Volumen Anilox"}</th>
          </tr>
        </thead>

        <tbody className="lg:text-lg">
          {table2.map((row, index) => (
            <tr key={index} className="odd:bg-gray-100 divide-x-2 divide-y-1 border border-gray-200 lg:text-lg">
              <td className="whitespace-nowrap py-2 font-semibold text-black px-2">{lang === "en" ? row.type : row.tipo}</td>
              {row.values.map((value, idx) => (
                <td key={idx} className="whitespace-nowrap py-2 text-gray-700 text-center">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
