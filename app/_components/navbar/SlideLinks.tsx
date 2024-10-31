"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faBars,
  faClock,
  faLaptop,
  faMobileScreenButton,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { slidelinks } from "@/app/constants/Links";
import HoverSection from "./HoverSection";
import { usePathname } from "next/navigation";

const SlideLinks = ({ state, width, posation }: any) => {
  const pathname = usePathname();
  const currentstate = pathname.length > 2 ? false : true;
  const [open, setopen] = useState(currentstate);

  return (
    <>
      <div className="dark:bg-main_bar z-[99]">
        <div
          onClick={() => setopen(!open)}
          style={{ width: `${width}px` }}
          className={`flex items-center  justify-between dark:bg-secend_dash dark:text-secend_text bg-[#eee]  cursor-pointer py-3 px-2`}
        >
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              className="text-gray-400 dark:text-secend_text"
              width={14}
              icon={faBars}
            />
            <p className="">All Departments</p>
          </div>
          <FontAwesomeIcon
            className="text-gray-400 dark:text-secend_text"
            width={14}
            icon={faAngleDown}
          />
        </div>
        {/* //////////////////////////////////////////slide linkes */}
        <div
          style={{
            height: open ? "584px" : "0",
            visibility: open ? "visible" : "hidden",
            width: `${width}px`,
            position: posation,
          }}
          className={`duration-500 slide-links dark:bg-main_bar bg-white    border`}
        >
          {
            <ul
              style={{ opacity: open ? "1" : "0" }}
              className=" text-[14px] duration-700  ul-slide"
            >
              <HoverSection />
              {slidelinks.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center py-4 justify-between  p-4 cursor-pointer hover:bg-[#ddd] dark:hover:bg-secend_dash duration-300"
                >
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon color="gray" width={14} icon={link.icon} />
                    <p>{link.title}</p>
                  </div>
                  <FontAwesomeIcon color="gray" width={14} icon={link.icon_2} />
                </li>
              ))}
            </ul>
          }
        </div>
      </div>
    </>
  );
};

export default SlideLinks;
