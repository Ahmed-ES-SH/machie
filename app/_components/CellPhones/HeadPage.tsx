"use client";
import { ArrowDown, LayoutDashboard, List } from "lucide-react";
import React from "react";
import Dropdown from "./Dropdown";
import { useVariables } from "@/app/context/VariablesContext";

const HeadPage = () => {
  const sortlines = [
    "Sort by popularity",
    "Sort by average rating",
    "Sort by latest",
    "Sort by price : low to high",
    "Sort by price : hight to low",
  ];

  const showing = ["16 items", "32 items", "48 items", "64 items"];

  const { opendropdown, setopendropdown } = useVariables();
  return (
    <>
      <div className="h-page     flex items-center justify-between w-full border-b pb-3 dark:text-secend_text ">
        <p className="text-[13px] max-md:hidden">showing 1–16 of 17 results</p>
        <div className="flex items-center gap-3 text-[13px]">
          <div className=" border-r relative">
            <div
              onClick={() => setopendropdown(opendropdown == "" ? "sort" : "")}
              className="flex items-center gap-3"
            >
              <p className="whitespace-normal">Sort by Latest</p>
              <ArrowDown className="text-gray-300 mr-2" width={12} />
            </div>
            {opendropdown == "sort" && <Dropdown lines={sortlines} />}
          </div>
          <div className=" border-r relative">
            <div
              onClick={() =>
                setopendropdown(
                  opendropdown == "" || opendropdown == "sort" ? "showing" : ""
                )
              }
              className="flex items-center gap-3"
            >
              <p>Showing : </p>
              <span className="flex items-center gap-2">
                16 items <ArrowDown className="text-gray-300 mr-2" width={12} />
              </span>
            </div>

            {opendropdown == "showing" && <Dropdown lines={showing} />}
          </div>
          <div className="flex items-center gap-3">
            <LayoutDashboard width={15} className="text-gray-300" />
            <List width={15} className="text-gray-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadPage;
