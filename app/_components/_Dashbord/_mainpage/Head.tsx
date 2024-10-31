"use client";
import React from "react";
import { Calendar } from "lucide-react";
import { useVariables } from "@/app/context/VariablesContext";
import Calendarapp from "../../Calenter";
const Head = () => {
  const { cal, setcal, opensidebar } = useVariables();
  return (
    <>
      <div className="head flex items-center justify-between w-full px-4 mt-20">
        <h1
          style={{ marginLeft: opensidebar ? "20px" : "0" }}
          className="dark:text-white text-black text-3xl  font-serif font-extralight"
        >
          Machic Dashboard
        </h1>
        <div className="relative">
          <div
            onClick={() => setcal(!cal)}
            className=" cursor-pointer flex items-center gap-2 px-3 py-2 text-[14px] bg-purple-600 rounded-md text-white"
          >
            <Calendar width={16} />
            <h1 className="whitespace-nowrap">pick a date</h1>
          </div>
          {cal && (
            <div className="culender absolute right-0 top-[50px] z-[50]">
              <Calendarapp />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Head;
