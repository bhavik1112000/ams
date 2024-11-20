"use client";

import { assets } from "@/data";
import { useRouter } from "next/navigation";
import React from "react";

const RepairTable = () => {
  const router = useRouter();
  const handleRowClick = (serialNo: string, category: string) => {
    router.push(`/asset-inventory/${category}/history-log//${serialNo}`);
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:mx-6 md:mt-12">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              No.
            </th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
              Serial No.
            </th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
              Status
            </th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
              Issue
            </th>
            <th scope="col" className="px-6 py- text-center">
              Brand
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Model
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Config
            </th>
            <th
              scope="col"
              className="px-6 py-3 whitespace-nowrap text-center hover:text-white"
            >
              History Log
            </th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
              QR Code
            </th>
            <th
              scope="col"
              className="px-6 py-3 whitespace-nowrap text-center hover:text-white"
            >
              Update Status
            </th>
            {/* <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th> */}
          </tr>
        </thead>
        <tbody>
          {
            // data
            //   .flatMap((user) => user.assets)
            //   .filter((asset) => asset.category === "cpu")
            assets
              .filter((asset) => asset.status === "in repair")
              .map((item, index) => (
                // <Link href={`/cpu/${item.serialNo}`}>
                <tr
                  // onClick={() => handleRowClick(item.serialNo)}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {index}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {item.serialNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {item.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {item.historyLog.maintenanceLog
                      .filter((item) => item.status === "in-repair")
                      .map((item) => item.issue)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {item.brand}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {item.model}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {item.otherConfig ? (
                      Object.entries(item.otherConfig).map(
                        ([key, value], idx) => (
                          <div key={idx}>
                            <strong>{key}:</strong> {value}
                          </div>
                        )
                      )
                    ) : (
                      <span>No Config</span> // Fallback in case otherConfig is undefined
                    )}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-center dark:hover:text-white underline cursor-pointer"
                    onClick={() => handleRowClick(item.serialNo, item.category)}
                  >
                    Histoty log
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    QR Code
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex gap-3 items-center">
                      <button
                        type="button"
                        className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-800 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Fixed
                      </button>
                      <button
                        type="button"
                        className="text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-900 dark:hover:bg-red-800 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Scrap
                      </button>
                    </div>
                  </td>
                </tr>
                // </Link>
              ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default RepairTable;
