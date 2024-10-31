"use client";
import React from "react";
import { motion } from "framer-motion";

const DiscountAnimate = ({ discount }: any) => {
  // const percent = Math.ceil((price / discount) * 100);
  return (
    <motion.h1
      transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
      // animate={{
      //   scale: [0.9, 1.1, 1.1, 0.9, 0.9],
      //   borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      //   x: [-120, 10, 10, -120, -120],
      // }}
      className={`p-2  ${
        discount >= 40 ? "bg-green-400" : "bg-red-400"
      } text-white rounded-full border-dashed border  absolute top-2 left-4`}
    >
      {discount}
    </motion.h1>
  );
};

export default DiscountAnimate;
