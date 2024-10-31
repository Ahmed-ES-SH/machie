"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faAngleDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { linksLeft } from "@/app/constants/Links";
import Image from "next/image";
import { mainlinks, slidelinks } from "@/app/constants/Links";

const SidebarMobail = () => {
  const [open, setopen] = useState(false);
  const [openShop, setopenShop] = useState(false);

  return (
    <>
      <div className=" relative w-[350px]   h-fit shadow-lg border ">
        <div className="rounded-t-lg px-4 flex items-center justify-between w-full h-[60px] bg-[#031624] ">
          <Image
            className=" w-[120px] h-[30px] "
            src={"/logo-light.png"}
            alt="logo"
            width={1024}
            height={1024}
          />
          <FontAwesomeIcon
            className="text-[30px]"
            color="white"
            icon={faClose}
          />
        </div>
        <div
          style={{
            display: openShop ? "hidden" : "visible",
            width: openShop ? "0px" : "100%",
            transition: ".2s",
          }}
          className="parentLinks "
        >
          <div className="px-4 mt-8 border-b pb-2 border-gray-400 ">
            <div
              onClick={() => setopen(!open)}
              className="border-b pb-3 flex items-center shadow-md  justify-between bg-[#eee]  cursor-pointer py-3 px-2"
            >
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon color="gray" width={14} icon={faBars} />
                <p className="bg-[#eee]">All Departments</p>
              </div>
              <FontAwesomeIcon color="gray" width={14} icon={faAngleDown} />
            </div>
            <div
              style={{
                height: open ? "584px" : "0",
                visibility: open ? "visible" : "hidden",
              }}
              className="  duration-500 slide-links w-full   border"
            >
              {
                <ul
                  style={{ opacity: open ? "1" : "0" }}
                  className=" text-[14px] duration-700  ul-slide"
                >
                  {slidelinks.map((link, index) => (
                    <li
                      key={index}
                      className="flex items-center py-4 justify-between  p-4 cursor-pointer hover:bg-[#ddd] duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon
                          color="gray"
                          width={14}
                          icon={link.icon}
                        />
                        <p>{link.title}</p>
                      </div>
                      <FontAwesomeIcon
                        color="gray"
                        width={14}
                        icon={link.icon_2}
                      />
                    </li>
                  ))}
                </ul>
              }
            </div>
            <div>
              <ul className="flex flex-col  items-start gap-3">
                {mainlinks.map((link, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between pt-4 gap-3 px-2 w-full"
                    onClick={() =>
                      link.title === "Shop" && setopenShop(!openShop)
                    }
                  >
                    <p>{link.title}</p>
                    <FontAwesomeIcon color="gray" width={14} icon={link.icon} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full  py-1 flex flex-col items-start px-2 justify-between relative border-b ">
            <ul className="flex items-start px-2 flex-col gap-3 ">
              {linksLeft.map((link, index) => (
                <li className="text-[14px] " key={index}>
                  {link}
                </li>
              ))}
            </ul>

            <div className="">
              <ul className="flex flex-col  items-center gap-3 h-[20px] ">
                <li className="text-[14px] "> Order Tracking </li>
                <li className="flex flex-col   self-start  cursor-pointer lang ">
                  <div className="text-[14px]  flex items-center gap-2 px-2  ">
                    <p>English</p>
                    <FontAwesomeIcon
                      color="gray"
                      width={12}
                      icon={faCaretDown}
                    />
                  </div>

                  <div className="w-fit z-[30] h-fit bg-[#eee] p-2 mt-3   shadow-lg border  list_lang ">
                    <p className="py-1">English</p>
                    <p className="py-1">Spanish</p>
                    <p className="py-1">Germen</p>
                  </div>
                </li>
                <li className="flex flex-col   self-start  cursor-pointer mo">
                  <div className="text-[14px]  flex items-center gap-2 px-3">
                    <p> USD</p>
                    <FontAwesomeIcon
                      color="gray"
                      width={12}
                      icon={faCaretDown}
                    />
                  </div>
                  <div className="w-fit h-fit bg-[#eee] px-4 mt-3  font-medium shadow-lg border  list_mo ">
                    <p className="py-1">USD</p>
                    <p className="py-1">INR</p>
                    <p className="py-1">GBP</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarMobail;
