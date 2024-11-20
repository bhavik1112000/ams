"use client";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { assets } from "@/data";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface AssetProfile {
  id: string;
  user: string;
  location: string;
  desk: string;
  serialNo: string;
  category: string;
  status: string;
  brand: string;
  model: string;
  IPAddress?: string;
  MACId?: string;
  historyLog: {
    maintenanceLog: { status?: string; issue?: string; date?: string }[];
    userHistory: {
      user?: string;
      location?: string;
      desk?: string;
      from?: string;
      to?: string;
    }[];
  };
  otherConfig?: {
    processor?: string;
    ram?: string;
    storage?: string;
    resolution?: string;
  };
}

const ModalContentHistoryLog = ({
  serialNo,
  category,
}: {
  serialNo: string | string[];
  category: string | string[];
}) => {
  const { closeModal } = useGlobalContext();
  const [asset, setAsset] = useState<AssetProfile>({
    id: "",
    user: "",
    location: "",
    desk: "",
    serialNo: "",
    category: "",
    status: "",
    brand: "",
    model: "",
    otherConfig: {
      processor: "",
      ram: "",
      storage: "",
      resolution: "",
    },
    IPAddress: "",
    MACId: "",
    historyLog: {
      maintenanceLog: [{ status: "", issue: "", date: "" }],
      userHistory: [{ user: "", location: "", desk: "", from: "", to: "" }],
    },
  });

  useEffect(() => {
    const foundAsset = assets.find(
      (asset) => asset.category === category && asset.serialNo === serialNo
    );

    if (foundAsset) {
      setAsset(foundAsset);
    }
    // else {
    //   // Fallback value when no asset is found
    //   setAsset({
    //     id: "",
    //     user: "",
    //     location: "",
    //     desk: "",
    //     serialNo: "",
    //     category: "",
    //     status: "",
    //     brand: "",
    //     model: "",
    //     otherConfig: {},
    //     IPAddress: "",
    //     MACId: "",
    //     historyLog: {
    //       maintenanceLog: [{ status: "", issue: "" }],
    //       userHistory: [{ user: "", location: "", desk: "", from: "", to: "" }],
    //     },
    //   });
    // }
  }, [category, serialNo]);

  console.log(asset);

  return (
    <div className="relative pb-1 bg-white rounded-md shadow dark:bg-gray-700">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          History Log
        </h3>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={closeModal}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div className="m-5 space-y-4 dark:bg-gray-800 rounded-md">
        <div className="p-4 md:p-5 border-b dark:border-gray-600">
          <h5 className="font-medium">Maintenance Log</h5>
        </div>

        <div className="p-4 md:p-5">
          {asset.historyLog.maintenanceLog.length > 0 ? (
            <div>
              {asset.historyLog.maintenanceLog.map((logItem) => (
                <div className="flex gap-3 w-full mb-3">
                  <div
                    className={clsx(
                      "w-[20%] text-center bg-green-700 bg-opacity-60 rounded-full border-green-900",
                      {
                        "bg-red-700 border-red-900":
                          logItem.status === "in-repair",
                      }
                    )}
                  >
                    {logItem.status}
                  </div>
                  <div className="w-[25%] text-center">{logItem.date}</div>
                  <div>{logItem.issue}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">No Maintenance history available</div>
          )}

          {/* {asset.otherConfig?.processor && (
            <p>Processor: {asset.otherConfig.processor}</p>
          )}
          {asset.otherConfig?.ram && <p>RAM: {asset.otherConfig.ram}</p>}
          {asset.otherConfig?.storage && (
            <p>Storage: {asset.otherConfig.storage}</p>
          )}
          {asset.otherConfig?.resolution && (
            <p>Resolution: {asset.otherConfig.resolution}</p>
          )}
          {!asset.otherConfig && (
            <p>No configuration available for this asset</p>
          )} */}
        </div>
      </div>
      <div className="m-5 space-y-4 dark:bg-gray-800 rounded-md">
        <div className="p-4 md:p-5 border-b dark:border-gray-600">
          <h5 className="font-medium">User Log</h5>
        </div>

        <div className="p-4 md:p-5">
          {asset.historyLog.userHistory.length > 0 ? (
            <div>
              {asset.historyLog.userHistory.map((logItem) => (
                <div className="flex items-center w-full">
                  <div className="p-1 min-w-[105px] px-2 text-center bg-gray-600 rounded-full">
                    {logItem.from}
                  </div>
                  {logItem.to && (
                    <div className="bg-gray-600 h-[2px] w-10"></div>
                  )}
                  {logItem.to && (
                    <div className="p-1 min-w-[105px] px-2 text-center bg-gray-600 rounded-full">
                      {logItem.to}
                    </div>
                  )}
                  <div className="w-[30%] mx-5 text-center">{logItem.user}</div>
                  <div className="text-center">
                    {logItem.location}-{logItem.desk}
                  </div>
                  {/* <div className="w-[15%] text-center">{logItem.desk}</div> */}
                  {/* {logItem.from && (
                <div className="flex">
                  <p className="w-[10%] p-3 bg-gray-600"></p>
                  <div className="w-[20%] text-center bg-gray-600 rounded-full">
                    {logItem.to}
                  </div>
                </div>
              )} */}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">No user history available</div>
          )}
          {/* {asset.historyLog.userHistory.map((logItem) => (
            <div className="flex items-center w-full">
              <div className="p-1 min-w-[105px] px-2 text-center bg-gray-600 rounded-full">
                {logItem.from}
              </div>
              {logItem.to && <div className="bg-gray-600 h-[2px] w-10"></div>}
              {logItem.to && (
                <div className="p-1 min-w-[105px] px-2 text-center bg-gray-600 rounded-full">
                  {logItem.to}
                </div>
              )}
              <div className="w-[30%] mx-5 text-center">{logItem.user}</div>
              <div className="text-center">
                {logItem.location}-{logItem.desk}
              </div> */}
          {/* <div className="w-[15%] text-center">{logItem.desk}</div> */}
          {/* {logItem.from && (
                <div className="flex">
                  <p className="w-[10%] p-3 bg-gray-600"></p>
                  <div className="w-[20%] text-center bg-gray-600 rounded-full">
                    {logItem.to}
                  </div>
                </div>
              )} */}
          {/* </div>
          ))} */}
        </div>
        {/* <div className="p-4 md:p-5">
          {asset.historyLog.userHistory.map((logItem) => (
            <div className="flex items-center w-full mb-3">
              <div className="p-1 min-w-[105px] px-2 text-center bg-gray-600 rounded-full">
                {logItem.from}
              </div>
              {logItem.to && <div className="bg-gray-600 h-[2px] w-10"></div>}
              {logItem.to && (
                <div className="p-1 min-w-[105px] px-2 text-center bg-gray-600 rounded-full">
                  {logItem.to}
                </div>
              )}
              <div className="w-[30%] mx-5 text-center">{logItem.user}</div>
              <div className="text-center">
                {logItem.location}-{logItem.desk}
              </div>



              <div className="w-[15%] text-center">{logItem.desk}</div>
              {logItem.from && (
                <div className="flex">
                  <p className="w-[10%] p-3 bg-gray-600"></p>
                  <div className="w-[20%] text-center bg-gray-600 rounded-full">
                    {logItem.to}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ModalContentHistoryLog;
