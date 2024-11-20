"use client";

import Card from "@/app/ui/dashboard/card";
import React from "react";
import { assetRecord, assets } from "../../../data";
import Search from "@/app/ui/dashboard/search";
import { useGlobalContext } from "@/app/context/GlobalContext";
import RecentActivities from "@/app/ui/dashboard/recentActivities";

// const cardData = [
//   {
//     title: "CPU",
//     available: 30,
//     inUse: 50,
//     inRepair: 4,
//     scrap: 2,
//   },
//   {
//     title: "Screen",
//     available: 30,
//     inUse: 50,
//     inRepair: 4,
//     scrap: 2,
//   },
//   {
//     title: "Keyboard",
//     available: 30,
//     inUse: 50,
//     inRepair: 4,
//     scrap: 2,
//   },
//   {
//     title: "Mouse",
//     available: 30,
//     inUse: 50,
//     inRepair: 4,
//     scrap: 2,
//   },
//   {
//     title: "Headphone",
//     available: 30,
//     inUse: 50,
//     inRepair: 4,
//     scrap: 2,
//   },
//   {
//     title: "Laptop",
//     available: 30,
//     inUse: 50,
//     inRepair: 4,
//     scrap: 2,
//   },
// ];

const Page = () => {
  const { searchInput } = useGlobalContext();
  return (
    <>
      <Search />
      <div className="p-6 md:p-12">
        <div className="relative grid grid-cols-3 lg:grid-cols-4 gap-3 flex-wrap">
          {/* {searchInput
          ? assets
              .filter((asset) => asset.user === searchInput)
              .map((asset) => (
                <Card
                  id={asset.serialNo}
                  category={asset.category}
                  serialNo={asset.serialNo}
                  brand={asset.brand}
                  model={asset.model}
                  // inRepair={asset.inRepair}
                  // scrap={asset.scrap}
                />
              ))
          : assetRecord.map((asset) => (
              <Card
                id={asset.category}
                category={asset.category}
                available={asset.available}
                inUse={asset.inUse}
                inRepair={asset.inRepair}
                scrap={asset.scrap}
              />
            ))} */}
          {assetRecord.map((asset) => (
            <Card
              id={asset.category}
              category={asset.category}
              available={asset.available}
              inUse={asset.inUse}
              inRepair={asset.inRepair}
              scrap={asset.scrap}
              isClickable={true}
            />
          ))}
        </div>
        <RecentActivities />
      </div>
    </>
  );
};

export default Page;
