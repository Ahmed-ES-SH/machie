import { ClipboardPlus } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Form from "@/app/_components/_Dashbord/Form";
import { Apis } from "@/app/_components/Api/Api";

export const metadata: Metadata = {
  title: "Add-Vendor",
  description: "Created by Next js",
};

const AddVendor = () => {
  const formInputs = [
    {
      name: "vendor_name",
      type: "text",
      placeholder: "Enter The vendor_name...",
      title: "vendor_name:",
    },
    {
      name: "store_name",
      type: "text",
      placeholder: "Enter The store_name...",
      title: "store_name:",
    },
    {
      name: "storedescription",
      type: "text",
      placeholder: "Enter The store Description...",
      title: "store Description: ",
    },
    {
      name: "vendor_email",
      type: "email",
      placeholder: "Enter The vendor Email...",
      title: "vendor_email: ",
    },
    {
      name: "vendor_phone",
      type: "phone",
      placeholder: "Enter The  vendor Phone...",
      title: " vendor_phone: ",
    },
    {
      name: "storeurl",
      type: "text",
      placeholder: "Enter The  store Url...",
      title: " store Url: ",
    },
    {
      name: "adress",
      type: "text",
      placeholder: "Enter The  adress...",
      title: " adress: ",
    },
  ];

  const handelchange = () => {};
  return (
    <>
      <div className="h-full  mt-16 px-4 py-4 dark:bg-secend_dash bg-light_bg w-[99%] rounded-md m-auto">
        <h1 className="w-fit text-2xl font-serif font-thin px-4 py-2 bg-orange-400 rounded-md dark:text-white flex items-center gap-2 border border-transparent hover:border-orange-400 hover:border  hover:bg-transparent hover:scale-110 duration-200">
          <p>Add Vendor</p>
          <ClipboardPlus />
        </h1>
        <div className="flex items-center gap-6 w-full relative">
          <Form
            inputs={formInputs}
            image_or_images={true}
            api={Apis.addvendor}
            direct="/dashbord/vendors"
            category={true}
          />
          <Image
            className="h-full self-center w-1/2 max-lg:hidden "
            src={"/dashbord/vendor.svg"}
            alt="undraow"
            width={1024}
            height={1280}
          />
        </div>
      </div>
    </>
  );
};

export default AddVendor;
