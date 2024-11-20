"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { assets } from "@/data";

const tableItems = [
  {
    serialNo: "001",
    user: "XYZ",
    location: "Alpha",
    desk: "001",
    brand: "XYZ",
    model: "XYZ",
    config: "XYZ",
    historyLog: "XYZ",
  },
  {
    serialNo: "002",
    user: "XYZ",
    location: "Alpha",
    desk: "002",
    brand: "XYZ",
    model: "XYZ",
    config: "XYZ",
    historyLog: "XYZ",
  },
  {
    serialNo: "003",
    user: "XYZ",
    location: "Alpha",
    desk: "003",
    brand: "XYZ",
    model: "XYZ",
    config: "XYZ",
    historyLog: "XYZ",
  },
  {
    serialNo: "004",
    user: "XYZ",
    location: "Alpha",
    desk: "004",
    brand: "XYZ",
    model: "XYZ",
    config: "XYZ",
    historyLog: "XYZ",
  },
];

const Table = ({ category }: { category: string }) => {
  const router = useRouter();

  // useEffect(() => {}, [third]);

  const handleRowClick = (serialNo: string) => {
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
            <th scope="col" className="px-6 py-3 text-center">
              User
            </th>
            <th scope="col" className="px-6 py- text-center">
              Location
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Desk
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
              className="px-6 py-3 whitespace-nowrap text-center underline hover:text-white"
            >
              History Log
            </th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
              QR Code
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
              .filter((asset) => asset.category === category)
              .map((item, index) => (
                // <Link href={`/cpu/${item.serialNo}`}>
                <tr
                  // onClick={() => handleRowClick(item.serialNo)}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
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
                    {item.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {item.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {item.desk}
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
                    onClick={() => handleRowClick(item.serialNo)}
                  >
                    Histoty log
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    QR Code
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

export default Table;
