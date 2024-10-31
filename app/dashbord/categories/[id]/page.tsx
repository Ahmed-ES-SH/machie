import DynamicPage from "@/app/_components/_Dashbord/DynamicPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Edit-category",
  description: "Created by Next.js",
};

const page = () => {
  const inputs: {
    [key: string]: string;
  }[] = [
    { name: "title", label: "Title :", type: "text" },
    { name: "image", type: "file" },
  ];
  return (
    <>
      <div className="w-full h-full">
        <DynamicPage
          imgsrc="/dashbord/undraw_collection_re_4h7d.svg"
          inputs={inputs}
          api="/category"
          direct="/dashbord/categories"
        />
      </div>
    </>
  );
};

export default page;
