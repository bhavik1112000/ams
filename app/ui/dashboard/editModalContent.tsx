import { assets } from "@/data";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const EditModalContent = ({
  user,
  serialNo,
}: {
  user: string;
  serialNo: string;
}) => {
  // useEffect(() => {

  // }, [third])

  const [wantToReplace, setWantToReplace] = useState(false);

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWantToReplace(!wantToReplace);
  };

  return (
    <div className="relative pb-1 bg-white rounded-md shadow dark:bg-gray-800">
      <div className="p-4 md:p-5 rounded-t">
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          Assign Replacement
        </h3>
        <form className="max-w-full">
          <select
            id="countries"
            className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled hidden selected>
              Available Replacements
            </option>
            {assets
              .filter(
                (asset) =>
                  asset.status === "available" && asset.category === serialNo
              )
              .map((asset) => (
                <option value={asset.serialNo}>{asset.serialNo}</option>
              ))}
            {/* <option selected>Available Replacements</option> */}
            {/* <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option> */}
          </select>
          <div className="w-full space-y-4 flex flex-col dark:bg-gray-700 rounded-md">
            <div className="pt-2 pb-4 m-4">
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

            {/* <div className="flex items-center">
    <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
</div> */}
          </div>
          <div className="text-end">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Replace
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModalContent;
