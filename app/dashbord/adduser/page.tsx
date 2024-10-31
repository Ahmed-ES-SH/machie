import { UserRoundPlus } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Metadata } from "next";
import { instance } from "@/app/_components/Api/axios";
import { Apis } from "@/app/_components/Api/Api";
import Form from "@/app/_components/_Dashbord/Form";

export const metadata: Metadata = {
  title: "Add-user",
  description: "Created by Next js",
};

const AddUser = () => {
  const formInputs = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter The Name...",
      title: "Name:",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter The Email...",
      title: "Email:",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter The password...",
      title: "Password: ",
    },
  ];

  return (
    <>
      <div className="h-full mt-20 px-4 py-4 dark:bg-secend_dash bg-light_bg w-[99%] rounded-md m-auto">
        <h1 className="w-fit text-2xl font-serif font-thin px-4 py-2 bg-orange-400 rounded-md dark:text-white flex items-center gap-2 border border-transparent hover:border-orange-400 hover:border  hover:bg-transparent hover:scale-110 duration-200">
          <p>Add User</p>
          <UserRoundPlus />
        </h1>
        <div className="flex items-center gap-6 w-full relative">
          <Form
            inputs={formInputs}
            image_or_images={true}
            api={Apis.register}
            direct="/dashbord/users"
            category={false}
          />
          <Image
            className="h-full  w-1/2 max-lg:hidden "
            src={"/dashbord/undraw_login_re_4vu2.svg"}
            alt="undraow"
            width={1024}
            height={1280}
          />
        </div>
      </div>
    </>
  );
};

export default AddUser;
