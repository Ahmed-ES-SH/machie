"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { linksLeft } from "../../constants/Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCartShopping,
  faGlassWater,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import MobailSideBar from "../_mobailsidebar/MobailSideBar";
import DarkModeToggle from "../DarkModeToggle";
import Link from "next/link";
import { Usecart } from "@/app/context/Cart_context";
import { Use_data } from "@/app/context/Data_context";
import UserButton from "../_Auth/UserButton";
import Cookie from "cookie-universal";

const First_half = () => {
  const { currentuser } = Use_data();
  const [isdark, setisdark] = useState(false);
  const { cartitems, gettotal } = Usecart();
  const total = gettotal(cartitems);
  const cookie = Cookie();
  const token = cookie.get("machie_token");
  const [openmenue, setopenmenue] = useState(false);
  useEffect(() => {
    const checkDarkMode = () => {
      setisdark(document.documentElement.classList.contains("dark"));
    };

    // تحقق من الوضع المظلم عند تركيب المكون
    checkDarkMode();

    // إذا كنت ترغب في الاستماع لتغييرات الفئة (اختياري)
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    // تنظيف المتابعة عند إلغاء التركيب
    return () => {
      observer.disconnect();
    };
  }, []);

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };
  const transitionSettings = {
    type: "spring",
    stiffness: 500,
    damping: 40,
    duration: 0.3,
  };
  return (
    <>
      <div className="w-full  py-2  flex items-center justify-between relative border-b dark:border-secend_text dark:bg-main_bar dark:text-white ">
        <ul className="flex items-center gap-3 px-3 max-xl:hidden">
          {linksLeft.map((link, index) => (
            <li className="text-[14px] " key={index}>
              {link}
            </li>
          ))}
        </ul>

        <div className="max-xl:m-auto">
          <ul className="flex items-center gap-3 h-fit px-2">
            <li>
              <DarkModeToggle />
            </li>
            <li className="text-[14px]  max-md:text-[10px] whitespace-nowrap">
              Order Tracking
            </li>
            <li className="flex flex-col   self-center  cursor-pointer lang ">
              <div className="text-[14px]  flex items-center gap-2 px-2  ">
                <p>English</p>
                <FontAwesomeIcon color="gray" width={12} icon={faCaretDown} />
              </div>

              <div className="w-fit z-[30] h-fit bg-[#eee] dark:bg-secend_dash dark:text-secend_text p-2 mt-3   shadow-lg border  list_lang ">
                <p className="py-1">English</p>
                <p className="py-1">Spanish</p>
                <p className="py-1">Germen</p>
              </div>
            </li>
            <li className="flex flex-col   self-center  cursor-pointer mo ">
              <div className="text-[14px]  flex items-center gap-2 px-3">
                <p> USD</p>
                <FontAwesomeIcon color="gray" width={12} icon={faCaretDown} />
              </div>
              <div className="w-fit h-fit bg-[#eee] dark:bg-secend_dash dark:text-secend_text px-4 mt-3  font-medium shadow-lg border  list_mo z-[99] ">
                <p className="py-1">USD</p>
                <p className="py-1">INR</p>
                <p className="py-1">GBP</p>
              </div>
            </li>
            <li>
              <UserButton />
            </li>
          </ul>
        </div>
      </div>
      <div className="p-2 py-6 flex items-center justify-evenly max-sm:justify-between gap-4 dark:bg-main_bar dark:text-white px-2">
        <div
          className="lg:hidden text-[30px] max-sm:text-[25px]"
          onClick={() => setopenmenue(!openmenue)}
        >
          <FontAwesomeIcon className="" color="gray" icon={faBars} />
        </div>

        <Link href={"/"} className="logo   max-lg:w-[150px] w-[150px]">
          <Image
            src={isdark ? "/images/logo-light.png" : "/images/logo-dark.png"}
            alt="logo"
            width={1024}
            height={1280}
            className="max-md:w-[150px] m-auto"
          />
        </Link>
        <div className="input_search flex items-center max-xl:hidden ">
          <select className="h-[3.125rem] dark:bg-secend_dash dark:text-secend_text border border-[#d9dde3] dark:border-secend_text outline-none rounded-l-md">
            <option value="ALL">All</option>
            <option value="ONE">ONE</option>
            <option value="TWO">TWO</option>
          </select>
          <div className="flex items-center relative">
            <input
              className=" outline-none w-[560px] placeholder:p-12 px-14 h-[3.125rem] border border-[#d9dde3] dark:border-secend_text dark:bg-secend_dash dark:text-secend_text   bg-[#ffffff]"
              type="text"
              name="search"
              placeholder="Search Your favourit Products ... "
            />
            <div className="icon absolute text-gray-300 left-0 p-4">
              <FontAwesomeIcon width={23} icon={faSearch} />
            </div>
          </div>
          <input
            className=" h-[3.130rem] rounded-r-md border border-[#d9dde3] dark:border-secend_text bg-[#041e42]  px-4 outline-none text-white "
            type="submit"
            name="search"
            value={"Search"}
          />
        </div>
        <div className="right_icons flex gap-8 max-sm:gap-[5px] items-center  ">
          {!token && (
            <Link
              href={"/signin"}
              className="user flex items-center gap-2 md:text-[30px] max-sm:text-[25px] "
            >
              <FontAwesomeIcon color="gray" className="  " icon={faUser} />
              <div className="max-xl:hidden">
                <p className=" font-thin text-[12px] text-gray-400">Sign In</p>
                <p className="text-[13px]">Account</p>
              </div>
            </Link>
          )}
          <div className=" relative max-xl:hidden text-[28px]">
            <FontAwesomeIcon color="gray" className="" icon={faHeart} />
            <span className="w-[25px] h-[25px] rounded-full bg-yellow-400  text-center text-[13px] p-1 absolute -top-4 left-4 flex items-center justify-center">
              18
            </span>
          </div>

          <Link href={"/cart"} className="cart px-4 flex items-center gap-2 ">
            <div className="relative">
              <FontAwesomeIcon
                className="text-[35px] max-sm:text-[20px]"
                color="gray"
                icon={faCartShopping}
              />
              {cartitems.length >= 1 && (
                <span className="w-[25px] h-[25px] rounded-full bg-yellow-400  text-center text-[13px] p-1 absolute -top-4 -right-4 flex items-center justify-center">
                  {cartitems && cartitems.length >= 1 && cartitems.length}
                </span>
              )}
            </div>
            {total && total > 1 && (
              <div className="pl-4 max-md:hidden">
                <p className=" font-thin text-[12px] text-gray-400">Total</p>
                <p> {total}</p>
              </div>
            )}
          </Link>
        </div>
      </div>
      {openmenue && (
        <motion.div
          variants={sidebarVariants}
          transition={transitionSettings}
          initial="hidden"
          animate="visible"
          exit="exit"
          className=" fixed top-0 left-0 z-[999999] "
        >
          <MobailSideBar openmenue={openmenue} setopenmenue={setopenmenue} />
        </motion.div>
      )}
    </>
  );
};

export default First_half;
