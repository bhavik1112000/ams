"use client";

import Search from "@/app/ui/dashboard/search";
// import Table from "@/app/ui/dashboard/table";
// import React from "react";

// const Page = ({ params }: { params: { category: string } }) => {
//   return <Table category={params.category} />;
// };

// export default Page;

// asset-inventory/[slug]/page.tsx

import Table from "@/app/ui/dashboard/table";
import UserDetails from "@/app/ui/dashboard/userDetails";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

const categories = ["cpu", "monitor", "keyboard", "mouse", "headphone"]; // List your known categories here

export default function SlugPage() {
  const { type } = useParams();
  // const { type } = router.query;

  useEffect(() => {
    if (typeof type === "string") {
      if (categories.includes(type as string)) {
        // Handle category view
        console.log("Rendering category view for:", type);
      } else {
        // Handle user view
        console.log("Rendering user view for:", type);
      }
    }
  }, [type]);

  return (
    <div>
      {typeof type === "string" && categories.includes(type as string) ? (
        <Table category={type} />
      ) : (
        <div>
          {/* <Search /> */}
          {/* User Profile: {type} */}
          {typeof type === "string" && <UserDetails type={type} />}
        </div>
      )}
    </div>
  );
}
