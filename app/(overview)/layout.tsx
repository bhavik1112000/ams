"use client";

import SideBar from "@/app/ui/dashboard/sideBar";
import React from "react";
import NavBar from "../ui/dashboard/navBar";
import { useGlobalContext } from "../context/GlobalContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <div>
      <NavBar />
      <div className="flex flex-col lg:flex-row lg:overflow-hidden ">
        <div
          className=" w-full lg:w-64"
          // className={`${
          //   isSidebarOpen ? "block" : "hidden"
          // } w-full md:block md:w-64 fixed md:relative z-20 bg-gray-800 md:bg-transparent h-full transition-transform`}
        >
          <SideBar isSidebarOpen={isSidebarOpen} />
        </div>
        <div className="flex-grow w-full lg:w-[calc(100%-256px)] transition-transform lg:overflow-y-auto mt-28 lg:mt-14">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
