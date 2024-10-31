import { LucideLayers2 } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Input_Image from "@/app/_components/_Dashbord/Input_Image";
import Form from "@/app/_components/_Dashbord/Form";
import { Apis } from "@/app/_components/Api/Api";

export const metadata: Metadata = {
  title: "Add-Catgeory",
  description: "Created by Next js",
};

const AddCategory = () => {
  const formInputs = [
    {
      name: "title",
      type: "text",
      placeholder: "Enter The Title...",
      title: "title:",
    },
  ];

  return (
    <>
      <div className="h-full mt-16 px-4 py-4 dark:bg-secend_dash bg-light_bg w-[99%] rounded-md m-auto">
        <h1 className="w-fit text-2xl font-serif font-thin px-4 py-2 bg-orange-400 rounded-md dark:text-white flex items-center gap-2 border border-transparent hover:border-orange-400 hover:border  hover:bg-transparent hover:scale-110 duration-200">
          <p>Add Category</p>
          <LucideLayers2 />
        </h1>
        <div className="flex items-center gap-6 w-full relative">
          <Form
            inputs={formInputs}
            api={Apis.addcategory}
            direct="/dashbord/categories"
            image_or_images={true}
            category={false}
          />
          <Image
            className="h-full  w-1/2 max-lg:hidden "
            src={"/dashbord/undraw_collection_re_4h7d.svg"}
            alt="undraow"
            width={1024}
            height={1280}
          />
        </div>
      </div>
    </>
  );
};

export default AddCategory;
