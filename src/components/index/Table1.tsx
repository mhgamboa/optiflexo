import React from "react";
import { table1 } from "./data";

export default function Table() {
  return (
    <div className="overflow-scroll no-scrollbar sm:overflow-x-auto p-10 max-x-full">
      <h2 className="text-3xl font-bold sm:text-4xl text-center pb-6 text-rose-600">
        Grabados Anilox
      </h2>

      <table className="mx-auto divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="text-left lg:text-lg">
          <tr className="">
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
            <th
              className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 text-center"
              colSpan={2}
            >
              OPTI 30/60
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 text-center"
              colSpan={2}
            >
              OPTI Q
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 text-center"
              colSpan={2}
            >
              OPTI T
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 text-center"
              colSpan={2}
            >
              OPTI X
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 lg:text-lg">
          <tr className="odd:bg-gray-100 ">
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Lìneas</th>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Min.</th>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Max.</th>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Min.</th>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Max.</th>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Min.</th>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Max.</th>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Min.</th>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Max.</th>
          </tr>

          {table1.map((row, index) => (
            <tr key={index} className="odd:bg-gray-100 ">
              <td className="whitespace-nowrap px-4 py-2 font-semibold text-black">
                {row.lineNumber}
              </td>
              {row.values.map((value, idx) => (
                <td key={idx} className="whitespace-nowrap px-4 py-2 text-gray-700">
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
