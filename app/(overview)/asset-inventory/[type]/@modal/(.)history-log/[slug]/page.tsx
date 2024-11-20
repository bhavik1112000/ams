"use client";

import Modal from "@/app/ui/dashboard/modal";
import ModalContentHistoryLog from "@/app/ui/dashboard/modalContentHistoryLog";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Children } from "react";

const Page = () => {
  // const router = useRouter();
  const { type, slug } = useParams(); // Access both slugs
  console.log(type, slug);
  return (
    <Modal>
      <ModalContentHistoryLog serialNo={slug} category={type} />
    </Modal>
  );
};

export default Page;
