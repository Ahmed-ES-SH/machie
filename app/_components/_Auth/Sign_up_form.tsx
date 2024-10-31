import React from "react";
import Image from "next/image";
import Bg_button from "./BgButton";
import Form from "../_Dashbord/Form";
import Sign_up_form_div from "./Sign_up_form_div";
import Link from "next/link";

export default function Sign_up_form() {
  const inputs = [
    { name: "name", type: "text", title: "Name :" },
    { name: "email", type: "email", title: "Email :" },
    { name: "password", type: "password", title: "Password :" },
    {
      name: "password_confirmation",
      type: "password",
      title: "Password Confirmation :",
    },
  ];

  return (
    <Sign_up_form_div>
      <div className="w-full max-lg:w-full h-fit py-4 relative bg-sky-300 dark:bg-main_bar dark:text-secend_text   flex items-center">
        <h1 className="text-4xl font-extralight  font-serif  px-4 py-2 bg-blue-400 rounded-md ml-4 text-white dark:bg-main_bar ">
          Sign up
        </h1>
        <Link
          href={"/"}
          className="  w-[60px] h-[60px] rounded-full  absolute right-2  top-10 bg-white dark:bg-main_bar  dark:text-secend_text flex items-center justify-center "
        >
          <Image
            width={1024}
            height={1280}
            alt="logo"
            src={"/images/icon.png"}
            className="w-[50px] h-[50px] rounded-full "
          />
        </Link>
      </div>

      <div className="px-4 py-2  border border-secend_text/50 shadow-md shadow-black rounded-md bg-transparent w-[98%] m-auto my-6">
        <Form
          inputs={inputs}
          api={"/register"}
          direct="/"
          category={false}
          image_or_images={undefined}
        />
        <div className=" w-fit  ">
          <p className="mt-4 text-sm text-red-500 sm:mt-0">
            you already have an acounnt?
          </p>
          <Bg_button />
        </div>
      </div>
    </Sign_up_form_div>
  );
}
