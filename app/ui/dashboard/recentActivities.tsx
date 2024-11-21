import React, { useEffect, useState } from "react";
import clsx from "clsx";

import { BACKEND_URL } from "@/config";
import moment from "moment";

const RecentActivities = () => {
  const [recentLogs, setRecentLogs] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/asset/recents`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRecentLogs(data.data); // Assign data to the state
    } catch (error: any) {
      console.error(error.message); // Handle errors
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-12 rounded-md dark:bg-gray-800 dark:border-gray-700 bg-white border border-gray-200">
      {recentLogs && recentLogs.length > 0 ? (
        recentLogs.map((log, index) => {
          return (
            log.historyLog.maintenanceLog.length > 0 && (
              <div className="flex border-b px-8 py-3 dark:border-gray-600">
                <div className="w-[100%] mx-8">{log.serialNo}</div>
                {log.historyLog.maintenanceLog[0].date && (
                  <div className="w-[100%]">
                    {moment(
                      new Date(log.historyLog.maintenanceLog[0].date)
                    ).format("DD/MM/YYYY")}
                  </div>
                )}
                <div className="w-[100%] mx-8">
                  {log.brand} {log.model}
                </div>
                <div className="w-[100%] mx-8">{log.category}</div>
                <div
                  className={clsx(
                    "max-w-[120px] w-[100%] text-center bg-green-700 bg-opacity-60 rounded-full border-green-900 h-[100%] py-[2px] my-auto",
                    {
                      "bg-red-700 border-red-900": log.status === "In Repair",
                    }
                  )}
                >
                  {log.status}
                </div>
              </div>
            )
          );
        })
      ) : (
        <p>No recent activities found.</p>
      )}
    </div>
  );
};

export default RecentActivities;
