/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Sign_in_form_div from "./Sign_in_form_div";
import Bg_button from "./BgButton";
import Form from "../_Dashbord/Form";
import Link from "next/link";
import Cookie from "cookie-universal";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const cookie = Cookie();
  const router = useRouter();

  const [form, setform] = useState({});
  const handelchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handlesign = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); // منع السلوك الافتراضي للنموذج
    const randnumber = Math.floor(Math.random() * 1000000); // توليد رقم عشوائي بين 0 و 999999

    try {
      cookie.set("machie_token", randnumber.toString()); // حفظ الرقم العشوائي ككعكة
      router.push("/"); // الانتقال إلى الصفحة الرئيسية
    } catch (error) {
      console.log(error); // تسجيل أي أخطاء تحدث
    }
  };
  return (
    <>
      <Sign_in_form_div>
        <div className="w-full max-lg:w-full h-fit py-4 relative bg-sky-300 dark:bg-main_bar dark:text-secend_text   flex items-center">
          <h1 className="text-4xl font-extralight  font-serif  px-4 py-2 bg-blue-400 rounded-md ml-4 text-white dark:bg-main_bar ">
            Sign in
          </h1>
          <Link
            href={"/"}
            className="  w-[60px] h-[60px] rounded-full  absolute right-2  top-10 bg-white dark:bg-main_bar dark:text-secend_text flex items-center justify-center "
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
        <div className="px-4 py-2 mt-4 self-center border border-secend_text shadow-md  rounded-md  w-[98%] m-auto my-4 bg-transparent max-lg:dark:bg-transparent  dark:bg-secend_dash dark:text-secend_text">
          <form onSubmit={handlesign}>
            <div>
              <label
                htmlFor={"email"}
                className="block text-sm font-medium dark:text-secend_text   font-serif text-md py-2"
              >
                Email:
              </label>
              <input
                id={"email"}
                className="p-4 duration-150 outline-none focus:valid:border-green-400 focus:invalid:border-red-400 border-2 border-secend_text dark:border-gray-300 my-2 w-full rounded-md text-sm text-black dark:text-gray-700 shadow-sm"
                name={"email"}
                type={"email"}
                readOnly
                value={"admin@gmail.com"}
                placeholder={"Enter Your Email ..."}
                onChange={handelchange}
              />
            </div>
            <div>
              <label
                htmlFor={"password"}
                className="block text-sm font-medium dark:text-secend_text   font-serif text-md py-2"
              >
                Password:
              </label>
              <input
                id={"password"}
                className="p-4 duration-150 outline-none focus:valid:border-green-400 focus:invalid:border-red-400 border-2 border-secend_text dark:border-gray-300 my-2 w-full rounded-md text-sm text-black dark:text-gray-700 shadow-sm"
                name={"password"}
                type={"password"}
                value={"password"}
                readOnly
                placeholder={"Enter Your Password ..."}
                onChange={handelchange}
              />
            </div>
            <input
              className="p-4 px-12 my-4 mx-2 hover:scale-105 hover:bg-transparent border border-transparent cursor-pointer duration-300 hover:border-orange-400 rounded-md block bg-orange-400 dark:text-white w-fit lg:ml-auto"
              type="submit"
              value={`Sign`}
            />
          </form>
          <div className=" w-fit  ">
            <p className="mt-4 text-sm text-red-500 sm:mt-0">
              you don't have an acounnt?
            </p>
            <Bg_button />
          </div>
        </div>
      </Sign_in_form_div>
    </>
  );
};

export default SignInForm;
