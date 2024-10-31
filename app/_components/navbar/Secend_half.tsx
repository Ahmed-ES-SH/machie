import { mainlinks } from "@/app/constants/Links";
import { faAngleDown, faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SlideLinks from "./SlideLinks";
import ShopHover from "./ShopHover";
import SuperDiscoundHover from "./SuperDiscoundHover";
import Link from "next/link";

const Secend_half = () => {
  return (
    <>
      <div className="flex items-center relative  max-xl:hidden dark:bg-main_bar dark:text-white  pr-4">
        <SlideLinks posation="absolute" state={true} width={"250"} />
        {/* //////////////// main links */}
        <div>
          <ul className="flex items-center gap-3">
            <li className="flex items-center pt-4 gap-3  px-4 group cursor-pointer ">
              <p>Shop</p>
              <FontAwesomeIcon color="gray" width={14} icon={faAngleDown} />
              <div className="group-hover:visible dark:bg-main_bar dark:text-secend_text   invisible  w-full h-[50vh] grid grid-cols-4 shadow-xl bg-white px-4 py-2  absolute top-[52px] left-0 z-[999999999]">
                <ShopHover />
              </div>
            </li>
            {mainlinks.map((link, index) => (
              <Link
                href={link.to ? link.to : "#"}
                key={index}
                className="flex items-center pt-4 gap-3  px-4 cursor-pointer "
              >
                <p>{link.title}</p>
                <FontAwesomeIcon color="gray" width={14} icon={link.icon} />
              </Link>
            ))}
          </ul>
        </div>

        {/* //////////////////// right element */}
        <div className="ml-auto flex items-center gap-3 group ">
          <div className=" flex items-center justify-center w-[30px] h-[30px] rounded-full bg-red-500 border border-dashed dark:border-main_dash">
            <FontAwesomeIcon width={14} icon={faPercent} />
          </div>
          <div className="content text-[12px]">
            <p className="font-thin text-gray-400">Only this weekend</p>
            <h1>Super Discount</h1>
          </div>
          <FontAwesomeIcon width={14} icon={faAngleDown} />
          <div className="group-hover:visible invisible w-full h-fit shadow-xl bg-white dark:bg-main_bar dark:text-secend_text px-4 py-2 absolute top-[52px] left-0 z-[999999999]">
            <h1 className="text-[19px] font-semibold">
              Items on sale this week Top picks this week.
            </h1>
            <p>Up to 50% off the best selling products.</p>
            <div className=" pt-4 justify-items-center  grid grid-cols-6  dark:bg-main_bar dark:text-secend_text ">
              <SuperDiscoundHover />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secend_half;
