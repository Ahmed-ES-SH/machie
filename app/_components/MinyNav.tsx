"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MinyNav = () => {
  const navs = usePathname();
  const navsarray = ["Home"];
  navsarray.push(...navs.split("/"));
  const filternav = navsarray.filter((nav) => nav != "");
  return (
    <>
      <div className="w-fit h-[40px] py-4 ml-4">
        <ul className="flex items-center gap-2 ">
          {filternav.map((link, index: any) => (
            <Link
              href={`/${index == 0 ? "/" : link}`}
              className="px-4 py-2 text-center rounded-lg w-[140px] max-md:w-[100px] whitespace-nowrap overflow-hidden text-ellipsis  dark:bg-secend_dash dark:text-secend_text bg-light_bg"
              key={index}
            >{`${index == 0 ? "" : "/"}${link}`}</Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MinyNav;
