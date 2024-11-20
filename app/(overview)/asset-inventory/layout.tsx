"use client";

import Search from "@/app/ui/dashboard/search";
import SideBar from "@/app/ui/dashboard/sideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Search /> */}
      {children}
    </>
  );
};

export default Layout;
