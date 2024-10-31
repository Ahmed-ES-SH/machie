import DynamicPage from "@/app/_components/_Dashbord/DynamicPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Edit-vendor",
  description: "Created by Next.js",
};

const page = () => {
  const inputs: {
    [key: string]: string;
  }[] = [
    { name: "vendor_name", label: "vendor Name :", type: "text" },
    { name: "store_name", label: "store Name :", type: "text" },
    { name: "vendor_email", label: "vendor Email :", type: "email" },
    { name: "vendor_phone", label: "vendor phone :", type: "phone" },
    { name: "storeurl", label: "store url :", type: "text" },
    { name: "adress", label: "adress :", type: "text" },
    { name: "category", label: "category :", type: "text" },
    { name: "logo", type: "file" },
  ];
  return (
    <>
      <div>
        <DynamicPage
          imgsrc="/dashbord/vendor.svg"
          inputs={inputs}
          api="/vendor"
          direct="/dashbord/vendors"
        />
      </div>
    </>
  );
};

export default page;
