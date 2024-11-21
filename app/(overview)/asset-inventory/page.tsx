"use client";

import Card from "@/app/ui/dashboard/card";
import React from "react";
import { assetRecord } from "../../../data";
import Search from "@/app/ui/dashboard/search";
import { useGlobalContext } from "@/app/context/GlobalContext";
import RecentActivities from "@/app/ui/dashboard/recentActivities";

const Page = () => {
  const { searchInput } = useGlobalContext();
  return (
    <>
      <Search />
      <div className="p-6 md:p-12">
        <div className="relative grid grid-cols-3 lg:grid-cols-4 gap-3 flex-wrap">
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
