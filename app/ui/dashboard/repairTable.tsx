"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { BACKEND_URL } from "@/config";

// Define the types for asset data structure
interface MaintenanceLog {
  status: string;
  issue: string;
  date: string;
  _id: string;
}

interface HistoryLog {
  maintenanceLog: MaintenanceLog[];
  userHistory: any[]; // Add specific type if you have a structure for userHistory
}

interface Asset {
  _id: string;
  serialNo: string;
  category: string;
  status: string;
  brand: string;
  model: string;
  configuration: Record<string, string>; // Configuration is an object with key-value pairs
  historyLog: HistoryLog;
  __v: number;
}

const RepairTable: React.FC = () => {
  const router = useRouter();

  const handleRowClick = (serialNo: string, category: string): void => {
    router.push(`/asset-inventory/${category}/history-log/${serialNo}`);
  };

  const [assets, setAssets] = useState<Asset[] | null>(null); // Specify the state type

  const fetchData = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/asset`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setAssets(data.data); // Assign data to the state
    } catch (error: any) {
      console.error(error.message); // Handle errors
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fixItem = async (itemId: string) => {
    try {
      await fetch(`${BACKEND_URL}/asset/fix/${itemId}`, {
        method: "PUT",
      });
    } catch (error: any) {
      console.error(error.message); // Handle errors
    }

    fetchData();
  };

  const scrapItem = async (itemId: string) => {
    try {
      await fetch(`${BACKEND_URL}/asset/scrap/${itemId}`, {
        method: "PUT",
      });
    } catch (error: any) {
      console.error(error.message); // Handle errors
    }

    fetchData();
  };

  return (
    <div>
      <h1 className="mt-8 text-3xl font-bold ml-8 mt-8 md:mt-12">
        Repair & Management
      </h1>
      <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg md:mx-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                No.
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-center"
              >
                Serial No.
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-center"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-center"
              >
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
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-center"
              >
                QR Code
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-center hover:text-white"
              >
                Update Status
              </th>
            </tr>
          </thead>
          <tbody>
            {assets &&
              assets
                .filter((asset) => asset.status === "In Repair")
                .map((item, index) => (
                  <tr
                    key={item._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {index + 1} {/* Use 1-based index */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {item.serialNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {item.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {item.historyLog.maintenanceLog
                        .filter((log) => log.status === "In Repair")
                        .map((log) => log.issue)
                        .join(", ")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {item.brand}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {item.model}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {item.configuration ? (
                        Object.entries(item.configuration).map(
                          ([key, value], idx) => (
                            <div key={idx}>
                              <strong>{key}:</strong> {value}
                            </div>
                          )
                        )
                      ) : (
                        <span>No Config</span> // Fallback in case configuration is undefined
                      )}
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-center dark:hover:text-white underline cursor-pointer"
                      onClick={() =>
                        handleRowClick(item.serialNo, item.category)
                      }
                    >
                      History log
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      QR Code
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex gap-3 items-center">
                        <button
                          type="button"
                          onClick={() => fixItem(item._id)}
                          className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-800 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Fixed
                        </button>
                        <button
                          type="button"
                          onClick={() => scrapItem(item._id)}
                          className="text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-900 dark:hover:bg-red-800 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Scrap
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepairTable;
