"use client";
import { Use_data } from "@/app/context/Data_context";
import { ArrowDown, LayoutDashboard, LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { instance } from "../Api/axios";
import Link from "next/link";
import Cookie from "cookie-universal";
export default function UserButton() {
  const { currentuser } = Use_data();
  const [open, setopen] = useState(false);
  const router = useRouter();
  const cookie = Cookie();
  const token = cookie.get("machie_token");
  async function handlelogut() {
    try {
      // const res = await instance.post("/logout");
      cookie.remove("machie_token");
      router.push("/signin");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {token && (
        <div
          onClick={() => setopen((prev) => !prev)}
          className="w-[200px] max-md:w-fit h-fit cursor-pointer p-1 z-[99999] flex items-center relative justify-between rounded-md bg-light_bg dark:bg-secend_dash dark:text-secend_text"
        >
          <div className="IMAGE-AVATAR">
            <Image
              className="w-[40px] h-[40px] rounded-md"
              width={1024}
              height={1280}
              src={
                currentuser == null
                  ? "/images/user-without-img.jpg"
                  : currentuser.image
              }
              alt=""
            />
          </div>
          <div className="center max-md:hidden">
            <h1 className="text-[14px] dark:text-white">Admin</h1>
            <ArrowDown className="dark:text-white" width={14} />
          </div>
          {open && (
            <div className="w-[200px] h-fit absolute -bottom-[97px] max-md:-left-[170px] rounded-md bg-light_bg dark:bg-main_bar dark:text-secend_text px-2 py-1">
              <ul>
                <Link
                  href={"/dashbord"}
                  className="py-2 px-1 flex items-center justify-between cursor-pointer"
                >
                  <p>Dashbord</p>

                  <LayoutDashboard width={14} />
                </Link>
                <li
                  onClick={() => handlelogut()}
                  className="py-2 px-1 flex items-center justify-between cursor-pointer"
                >
                  <p>logout</p>
                  <LogOut width={14} />
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
