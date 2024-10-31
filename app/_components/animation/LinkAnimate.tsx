"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const LinkAnimate: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Link className="text-sky-500 flex items-center " href={"/"}>
      <p>{title}</p>
      <motion.div
        initial={{ x: 0 }}
        // animate={{ x: [0, 5, 0] }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, repeatType: "loop", repeat: Infinity }}
      >
        <FontAwesomeIcon className="px-2" icon={faArrowRight} />
      </motion.div>
    </Link>
  );
};

export default LinkAnimate;
