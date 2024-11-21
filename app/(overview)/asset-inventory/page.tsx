"use client";

import Card from "@/app/ui/dashboard/card";
import React, { useEffect, useState } from "react";
// import { assetRecord } from "../../../data";
import Search from "@/app/ui/dashboard/search";
import { useGlobalContext } from "@/app/context/GlobalContext";
import RecentActivities from "@/app/ui/dashboard/recentActivities";
import { BACKEND_URL } from "@/config";

const Page = () => {
  const { searchInput } = useGlobalContext();
  const [assetRecord, setAssetRecord] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/asset/asset-categories`)
      .then((res) => res.json())
      .then((data) => {
        setAssetRecord(data.data);
      });
  }, []);

  return (
    <>
      <Search />
      <div className="p-6 md:p-12">
        <h1 className="text-3xl font-bold">Asset Categories</h1>
        <div className="mt-8 relative grid grid-cols-3 lg:grid-cols-4 gap-3 flex-wrap">
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
