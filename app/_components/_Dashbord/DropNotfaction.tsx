"use client";
import { useVariables } from "@/app/context/VariablesContext";
import Image from "next/image";
import React, { useState, useEffect, useRef, HtmlHTMLAttributes } from "react";

const DropNotfaction = () => {
  const { setopen } = useVariables();
  const data = [
    {
      img: "/dashbord/avatar-2.jpg",
      name: "Felecia Rower",
      partofmessage: "Cake pie jelly jelly ...",
      time: "10 am",
      active: true,
    },
    {
      img: "/dashbord/avatar-5.jpg",
      name: "Felecia Rower",
      partofmessage: "Cake pie jelly jelly ...",
      time: "10 am",
      active: false,
    },
    {
      img: "/dashbord/avatar-4.jpg",
      name: "Felecia Rower",
      partofmessage: "Cake pie jelly jelly ...",
      time: "10 am",
      active: true,
    },
    {
      img: "/dashbord/avatar-5.jpg",
      name: "Felecia Rower",
      partofmessage: "Cake pie jelly jelly ...",
      time: "10 am",
      active: false,
    },
    {
      img: "/dashbord/avatar-6.jpg",
      name: "Felecia Rower",
      partofmessage: "Cake pie jelly jelly ...",
      time: "10 am",
      active: true,
    },
    {
      img: "/dashbord/avatar-7.jpg",
      name: "Felecia Rower",
      partofmessage: "Cake pie jelly jelly ...",
      time: "10 am",
      active: true,
    },
    {
      img: "/dashbord/avatar-8.jpg",
      name: "Felecia Rower",
      partofmessage: "Cake pie jelly jelly ...",
      time: "10 am",
      active: false,
    },
  ];
  const containerRef = useRef<any>(null);
  const handleClickOutside = (event: any) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setopen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className=" w-[350px] absolute top-[130%] -left-[300px] bg-light_bg  dark:bg-[#0f172a] rounded-md text-black shadow-md "
      >
        <div className="head text-white text-[12px] px-2 w-full h-[50px] flex items-center justify-between  bg-[url('/dashbord/short-image9a7225c5-137.png')] bg-no-repeat bg-cover ">
          <h1>Notification</h1>
          <h1>Mark all as read</h1>
        </div>
        <ul className="flex flex-col items-start gap-4 w-full  h-[350px] overflow-y-auto">
          {data.map((user, index) => (
            <li
              key={index}
              className="flex items-center justify-between cursor-pointer px-2 w-full duration-300 hover:bg-purple-400  dark:hover:bg-white dark:hover:text-black rounded-md py-2 "
            >
              <div className="flex items-center gap-2">
                <Image
                  src={user.img}
                  alt="lang"
                  width={1024}
                  height={1280}
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div className="flex flex-col items-start">
                  <p>{user.name}</p>
                  <p className="text-[13px] font-thin">{user.partofmessage}</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-[70px] gap-3">
                <p className=" text-[12px] ">{user.time}</p>
                {user.active && (
                  <span className="w-[10px] h-[10px] rounded-full bg-purple-900"></span>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="w-[350px] h-[80px] border-t border-gray-300/20 mt-2 rounded-b-md bg-light_bg dark:bg-[#0f172a] flex items-center justify-center">
          <div className="w-[90%] py-4 flex items-center justify-center bg-purple-600 rounded-md shadow-md">
            View All
          </div>
        </div>
      </div>
    </>
  );
};

export default DropNotfaction;
