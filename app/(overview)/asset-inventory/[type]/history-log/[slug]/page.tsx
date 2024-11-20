"use client";

import Modal from "@/app/ui/dashboard/modal";
import ModalContentHistoryLog from "@/app/ui/dashboard/modalContentHistoryLog";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { category, slug } = useParams();
  return <ModalContentHistoryLog category={category} serialNo={slug} />;
};

export default Page;
