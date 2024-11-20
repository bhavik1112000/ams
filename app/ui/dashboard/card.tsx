"use client";

import { useGlobalContext } from "@/app/context/GlobalContext";
import React from "react";
import Modal from "./table";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface AssetInventoryProps {
  id: string;
  category: string;
  available?: number;
  inUse?: number;
  inRepair?: number;
  scrap?: number;
  brand?: string;
  model?: string;
  serialNo?: string;
  editModal?: boolean;
  setEditModal?: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModal?: boolean;
  setDeleteModal?: React.Dispatch<React.SetStateAction<boolean>>;
  getSerialNo?: (value: string) => void;
  isClickable?: boolean;
}

const Card: React.FC<AssetInventoryProps> = ({
  id,
  category,
  available,
  inUse,
  inRepair,
  scrap,
  serialNo,
  brand,
  model,
  editModal,
  setEditModal,
  deleteModal,
  setDeleteModal,
  getSerialNo,
  isClickable = true,
}) => {
  const { toggleModal } = useGlobalContext();
  // const {type} = usePathname();
  return (
    <div className="block w-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {isClickable ? (
        <Link
          href={`/asset-inventory/${category.toLowerCase()}`}
          onClick={toggleModal}
        >
          <div className="p-6">
            <h5
              className={`${
                category === "cpu" ? "uppercase" : "capitalize"
              } mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}
            >
              {category}
            </h5>
            {available !== undefined && (
              <>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Available: {available}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  In Use: {inUse}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  In Repair: {inRepair}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Scrap: {scrap}
                </p>
              </>
            )}
          </div>
        </Link>
      ) : (
        <div className="p-6">
          <h5
            className={`${
              category === "cpu" ? "uppercase" : "capitalize"
            } mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}
          >
            {category}
          </h5>

          {serialNo && (
            <>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Serial No: {serialNo}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Brand: {brand}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Model: {model}
              </p>
              <div className="flex justify-end mt-3">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white hover:dark:text-green-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  onClick={() => {
                    setEditModal && setEditModal(true);
                    getSerialNo && getSerialNo(category);
                  }}
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                  />
                </svg>
                <svg
                  className="w-6 h-6 ml-2 text-gray-800 dark:text-white hover:dark:text-red-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  onClick={() => {
                    setDeleteModal && setDeleteModal(true);
                    getSerialNo && getSerialNo(category);
                  }}
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                  />
                </svg>
              </div>
            </>
          )}
        </div>
      )}
      {/* {isClickable && (
        <Link
          href={`/asset-inventory/${category.toLowerCase()}`}
          onClick={toggleModal}
          className="block max-w-56 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5
            className={`${
              category === "cpu" ? "uppercase" : "capitalize"
            } mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}
          >
            {category}
          </h5> */}

      {/* <p className="font-normal text-gray-700 dark:text-gray-400">
          Available: {available}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          In Use: {inUse}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          In Repair: {inRepair}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Scrap: {scrap}
        </p> */}
    </div>
  );
};

export default Card;
