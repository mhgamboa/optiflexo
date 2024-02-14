import React from "react";

export default function Table() {
  // Data for the 2nd and 3rd rows
  const rowData = [
    {
      lineNumber: "55",
      values: ["15.0", "50.0", "15.0", "50.0", "18.0", "50.0", "18.0", "50.0"],
    },
    {
      lineNumber: "80",
      values: ["10.0", "33.0", "10.0", "33.0", "15.0", "33.0", "15.0", "33.0"],
    },
    {
      lineNumber: "100",
      values: ["9.0", "25.0", "9.0", "25.0", "14.0", "25.0", "14.0", "25.0"],
    },
    {
      lineNumber: "120",
      values: ["8.0", "22.0", "8.0", "22.0", "12.2", "22.0", "12.2", "22.0"],
    },
    {
      lineNumber: "160",
      values: ["6.0", "16.0", "6.0", "16.0", "9.0", "16.0", "9.0", "16.0"],
    },
    {
      lineNumber: "180",
      values: ["5.4", "16.0", "5.4", "16.0", "6.2", "16.0", "6.2", "16.0"],
    },
    {
      lineNumber: "200",
      values: ["5.2", "14.0", "5.2", "14.0", "5.2", "14.0", "5.2", "14.0"],
    },
    {
      lineNumber: "260",
      values: ["3.8", "12.0", "3.8", "12.0", "4.7", "12.0", "4.7", "12.0"],
    },
    {
      lineNumber: "300",
      values: ["3.5", "10.0", "3.5", "10.0", "3.5", "6.5", "3.5", "6.5"],
    },
    {
      lineNumber: "360",
      values: ["2.8", "7.5", "2.8", "7.5", "3.7", "7.5", "3.5", "6.5"],
    },
    {
      lineNumber: "400",
      values: ["2.0", "6.5", "2.8", "6.5", "3.5", "6.5", "3.5", "6.5"],
    },
    {
      lineNumber: "440",
      values: ["2.0", "6.0", "2.7", "6.0", "3.2", "6.0", "", ""],
    },
  ];

  return (
    <div className="overflow-scroll sm:overflow-x-auto p-10 max-x-full">
      <h2 className="text-3xl font-bold sm:text-4xl text-center pb-6">Grabados Anilox</h2>

      <table className="mx-auto divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="text-left">
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

        <tbody className="divide-y divide-gray-200">
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

          {rowData.map((row, index) => (
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
