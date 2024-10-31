import DynamicPage from "@/app/_components/_Dashbord/DynamicPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Edit-user",
  description: "Created by Next.js",
};

const page = () => {
  const inputs: {
    [key: string]: string;
  }[] = [
    { name: "name", label: "Name :", type: "text" },
    { name: "email", label: "Email :", type: "email" },
    { name: "role", label: "Role :", type: "text" },
    { name: "image", type: "file" },
  ];
  return (
    <>
      <div>
        <DynamicPage
          imgsrc="/dashbord/undraw_login_re_4vu2.svg"
          inputs={inputs}
          api="/user"
          direct="/dashbord/users"
        />
      </div>
    </>
  );
};

export default page;
