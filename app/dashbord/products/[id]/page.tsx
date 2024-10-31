import DynamicPage from "@/app/_components/_Dashbord/DynamicPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Edit-product",
  description: "Created by Next.js",
};

const page = () => {
  const inputs: {
    [key: string]: string;
  }[] = [
    { name: "title", label: "Title :", type: "text" },
    { name: "description", label: "description :", type: "text" },
    { name: "stock", label: "stock :", type: "text" },
    { name: "price", label: "price :", type: "text" },
    { name: "discount", label: "discount :", type: "phone" },
    { name: "images", type: "file" },
  ];
  return (
    <>
      <div>
        <DynamicPage
          imgsrc="/dashbord/addproduct.svg"
          inputs={inputs}
          api="/product"
          direct="/dashbord/products"
        />
      </div>
    </>
  );
};

export default page;
