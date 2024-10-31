import { DiamondPlus } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Form from "@/app/_components/_Dashbord/Form";
import { Apis } from "@/app/_components/Api/Api";
import DarkModeToggle from "@/app/_components/DarkModeToggle";

export const metadata: Metadata = {
  title: "Add-product",
  description: "Created by Next js",
};

const AddProduct = () => {
  const formInputs = [
    {
      name: "title",
      type: "text",
      placeholder: "Enter The Name...",
      title: "Name:",
    },
    {
      name: "description",
      type: "text",
      placeholder: "Enter The Description...",
      title: "description:",
    },
    {
      name: "price",
      type: "text",
      placeholder: "Enter The price...",
      title: "price: ",
    },
    {
      name: "discount",
      type: "text",
      placeholder: "Enter The discount...",
      title: "discount: ",
    },
    {
      name: "stock",
      placeholder: "Enter The stock...",
      title: "stock: ",
      type: "text",
    },
    {
      name: "sku",
      placeholder: "Enter The sku...",
      title: "sku: ",
      type: "text",
    },
  ];

  return (
    <>
      <DarkModeToggle />
      <div className="h-full mt-16 px-4 py-4 dark:bg-secend_dash  w-[99%] rounded-md m-auto">
        <h1 className="w-fit text-2xl font-serif font-thin px-4 py-2 bg-orange-400 rounded-md dark:text-white flex items-center gap-2 border border-transparent hover:border-orange-400 hover:border  hover:bg-transparent hover:scale-110 duration-200">
          <p>Add Product</p>
          <DiamondPlus />
        </h1>
        <div className="flex items-center gap-6 w-full relative ">
          <Form
            inputs={formInputs}
            image_or_images={false}
            api={Apis.addproduct}
            direct="/dashbord/products"
            category={true}
          />
          <Image
            className="h-full  w-1/2   self-center max-lg:hidden "
            src={"/dashbord/addproduct.svg"}
            alt="undraow"
            width={1024}
            height={1280}
          />
        </div>
      </div>
    </>
  );
};

export default AddProduct;
