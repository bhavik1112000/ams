import clsx from "clsx";
import React, { useState } from "react";

const DeleteModalContent = ({ serialNo }: { serialNo: string }) => {
  const [wantToReplace, setWantToReplace] = useState(false);
  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWantToReplace(!wantToReplace);
  };
  return (
    <div className="relative pb-1 bg-white rounded-md shadow dark:bg-gray-800">
      <div className="p-4 md:p-5 rounded-t">
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          Really want to unassign this asset?
        </h3>
        <div className="space-y-4 dark:bg-gray-700 rounded-md">
          <div className="pt-5 pb-4 m-4">
            <div className="pl-1 flex w-full">
              <input
                id="default-checkbox"
                type="checkbox"
                onChange={checkboxHandler}
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Select if old asset needs repair
              </label>
            </div>
            <div className="mt-5">
              <label
                htmlFor="issue"
                className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                disabled={!wantToReplace}
                type="text"
                id="first_name"
                className={clsx(
                  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  {
                    "dark:bg-gray-600": wantToReplace === false,
                  }
                )}
                placeholder="Write an issue"
                required
              />
            </div>
          </div>
        </div>
        <div className="text-end">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Unassign
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModalContent;
