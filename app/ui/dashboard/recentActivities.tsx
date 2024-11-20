import { assets } from "@/data";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

type LogEntry = {
  serialNo?: string;
  date?: string;
  status?: string;
  issue?: string;
  user?: string;
  location?: string;
  type?: string;
  desk?: string;
  from?: string;
  to?: string;
};

const RecentActivities = () => {
  //   let recent10Logs: LogEntry[] = [];
  const [recent10Logs, setRecent10Logs] = useState<LogEntry[]>([]);
  useEffect(() => {
    const transformedUserHistory = assets
      .flatMap((asset) =>
        asset.historyLog.userHistory.map((entry) => [
          {
            serialNo: asset.serialNo,
            user: entry.user,
            location: entry.location,
            desk: entry.desk,
            type: "from",
            date: entry.from,
          },
          {
            serialNo: asset.serialNo,
            user: entry.user,
            location: entry.location,
            desk: entry.desk,
            type: "to",
            date: entry.to,
          },
        ])
      )
      .flat();
    console.log(transformedUserHistory);
    // const transformedMaintenanceLog = assets.flatMap((asset) =>
    //   //     ({
    //   //     ...asset.historyLog.maintenanceLog,
    //   //     serialNo: asset.serialNo,
    //   //   }))
    //   //   .flat();

    //   [...asset.historyLog.maintenanceLog]
    // )

    const transformedMaintenanceLog = assets.flatMap((asset) =>
      asset.historyLog.maintenanceLog.map((entry) => ({
        ...entry, // Spread existing properties of each log entry
        serialNo: asset.serialNo, // Add serialNo to each entry
      }))
    );
    // console.log(allLogs);
    console.log(transformedMaintenanceLog);
    const allLogs: LogEntry[] = [
      ...transformedUserHistory,
      ...transformedMaintenanceLog,
    ];
    const sorted10Logs = allLogs
      .filter((entry) => entry.date)
      .sort((a, b) => {
        if (a.date && b.date) {
          const dateA = new Date(a.date.split("-").reverse().join("-")); // Convert 'dd-mm-yyyy' to 'yyyy-mm-dd'
          const dateB = new Date(b.date.split("-").reverse().join("-"));
          return dateB.getTime() - dateA.getTime(); // Descending order
        } else return 0;
        // const dateA = new Date(a.date.split("-").reverse().join("-")); // Convert 'dd-mm-yyyy' to 'yyyy-mm-dd'
        // const dateB = new Date(b.date.split("-").reverse().join("-"));
        // return dateB - dateA; // Descending order
      })
      .slice(0, 10);
    setRecent10Logs(sorted10Logs);
    console.log(sorted10Logs);
  }, []);

  return (
    <div className="mt-12 rounded-md dark:bg-gray-800 dark:border-gray-700 bg-white border border-gray-200">
      {recent10Logs.length > 0 ? ( // Check if there are logs to display
        recent10Logs.map((log, index) => {
          if (log.type) {
            return (
              <div className="flex border-b px-6 py-3  dark:border-gray-600">
                <div className="w-[20%]">{log.date}</div>
                <div className="w-[20%]">{log.serialNo}</div>
                {log.type === "to" ? (
                  <div>Deassigned from {log.user}</div>
                ) : (
                  <div>Assigned to {log.user}</div>
                )}
              </div>
            );
          } else {
            return (
              <div className="flex border-b px-6 py-3  dark:border-gray-600">
                <div className="w-[20%]">{log.date}</div>
                <div className="w-[20%]">{log.serialNo}</div>
                <div
                  className={clsx(
                    "max-w-[90px] w-[20%] text-center bg-green-700 bg-opacity-60 rounded-full border-green-900",
                    {
                      "bg-red-700 border-red-900": log.status === "in-repair",
                    }
                  )}
                >
                  {log.status}
                </div>
                <div className="ml-6">{log.issue}</div>
              </div>
            );
          }
        })
      ) : (
        <p>No recent activities found.</p>
      )}
    </div>
  );
};

export default RecentActivities;
