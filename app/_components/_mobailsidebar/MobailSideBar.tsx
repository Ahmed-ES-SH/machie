"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faAngleDown,
  faBars,
  faCaretDown,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import SlideLinks from "../navbar/SlideLinks";
import { mainlinksmobail } from "../../constants/Links";
import { AnimatePresence, motion } from "framer-motion";
import SideLang from "../../../SideLang";
import SidebarSubLinks from "./SidebarSubLinks";
import SideMo from "./SideMo";
import Link from "next/link";

// main component ///////////////////////////////////////////////////////////////////////

const MobailSideBar = ({ setopenmenue, openmenue }: any) => {
  const [open, setopen] = useState(false);
  const [submenue, setsubmenue] = useState("");

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  const mainMenuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  const subMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  const transitionSettings = {
    type: "spring",
    stiffness: 500,
    damping: 40,
    duration: 0.3,
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={sidebarVariants}
        transition={transitionSettings}
        className="side-bar w-[320px] h-screen relative bg-white dark:bg-secend_dash dark:text-secend_text shadow-lg overflow-y-auto overflow-x-hidden"
      >
        <div className="head w-full h-[50px] bg-[#031624] px-3  flex items-center justify-between">
          <Image
            className="w-[150px] h-[35px]"
            src="/images/logo-light.png"
            alt="logo"
            width={1024}
            height={1280}
          />
          <FontAwesomeIcon
            onClick={() => setopenmenue(!openmenue)}
            className="text-white"
            icon={faClose}
          />
        </div>
        <AnimatePresence>
          {submenue === "" && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mainMenuVariants}
              transition={transitionSettings}
            >
              <div className="mt-4 flex items-center justify-center border-b pb-3 px-2 border-gray-300">
                <SlideLinks posation={"block"} state={false} width={280} />
              </div>
              {/* //////////////// main links */}
              <div className="pb-3 border-b border-gray-300">
                <ul className="flex flex-col items-start gap-3 relative">
                  <li
                    onClick={() => setsubmenue("shop")}
                    className="cursor-pointer flex items-center  p-4 justify-between w-full pt-4 gap-3  px-4 "
                  >
                    <p>shop</p>
                    <FontAwesomeIcon
                      color="gray"
                      width={14}
                      icon={faCaretRight}
                    />
                  </li>
                  {mainlinksmobail.map((link, index) => (
                    <Link
                      href={link.to ? link.to : "#"}
                      key={index}
                      className="flex items-center justify-between w-full pt-4 gap-3  px-4 "
                    >
                      <p>{link.title}</p>
                      <FontAwesomeIcon
                        color="gray"
                        width={14}
                        icon={link.icon}
                      />
                    </Link>
                  ))}
                </ul>
              </div>
              <div className="pt-3">
                <ul className="flex flex-col items-start gap-6 h-[20px] w-full ">
                  <li className="text-[14px]  p-2"> Order Tracking </li>
                  <li
                    onClick={() => setsubmenue("lang")}
                    className="flex flex-col w-full cursor-pointer"
                  >
                    <div className="text-[17px]  flex items-center justify-between w-full gap-2 px-2  ">
                      <p>English</p>
                      <FontAwesomeIcon
                        color="gray"
                        width={14}
                        icon={faCaretRight}
                      />
                    </div>
                  </li>
                  <li
                    onClick={() => setsubmenue("mo")}
                    className="flex flex-col w-full cursor-pointer"
                  >
                    <div className="text-[17px]  flex items-center justify-between  gap-2 px-3">
                      <p> USD</p>
                      <FontAwesomeIcon
                        color="gray"
                        width={14}
                        icon={faCaretRight}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
          {submenue === "shop" && (
            <SidebarSubLinks
              setsubmenu={setsubmenue}
              submenue={submenue}
              subtitle="Shop"
            />
          )}
          {submenue === "lang" && (
            <SideLang
              setsubmenu={setsubmenue}
              submenue={submenue}
              subtitle="Languages"
            />
          )}
          {submenue === "mo" && (
            <SideMo
              setsubmenu={setsubmenue}
              submenue={submenue}
              subtitle="Currency"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default MobailSideBar;
