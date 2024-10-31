import React from "react";
import SignInForm from "../_components/_Auth/SignInForm";
import Sign_up_form from "../_components/_Auth/Sign_up_form";
import HoverImage from "../_components/_Auth/HoverImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-page",
  description: "Created by Next js",
};

const page = () => {
  return (
    <>
      <div className="flex duration-300 items-start justify-between w-full h-fit relative ">
        <SignInForm />
        <Sign_up_form />
        <HoverImage />
      </div>
    </>
  );
};

export default page;
