"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { langs } from "@/app/constants/constantsDetails";

interface menue {
  setsubmenu: React.Dispatch<React.SetStateAction<string>>;
  submenue: string;
  subtitle: string;
}
const SideLang: React.FC<menue> = ({ setsubmenu, submenue, subtitle }) => {
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
      <div>
        <motion.ul
          key="subMenu"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={subMenuVariants}
          transition={transitionSettings}
          className="absolute top-12 left-0 w-full p-4"
        >
          <li>
            <button
              onClick={() => setsubmenu("")}
              className="w-full text-left py-4 text-[18px] font-semibold flex items-center gap-4"
            >
              <FontAwesomeIcon icon={faAngleLeft} />
              <p>{subtitle}</p>
            </button>
          </li>
          {langs.map((link, index) => (
            <li
              key={index}
              className="ml-8 py-2 flex items-center justify-between"
            >
              <p>{link.title}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </>
  );
};

export default SideLang;
