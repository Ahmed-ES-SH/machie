"use client";
import React from "react";
import Image from "next/image";
import { useVariables } from "@/app/context/VariablesContext";
import { motion } from "framer-motion";
import Link from "next/link";
const HoverImage = () => {
  const { leftright, width } = useVariables();
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={
          width > 992 ? (leftright ? { x: "0%" } : { x: "100%" }) : { x: 0 }
        }
        transition={{ duration: 0.3, ease: "linear" }}
        className={` h-full w-[50%] absolute top-0    max-lg:w-full max-lg:z-[-1] `}
      >
        <section className="relative flex h-full items-end bg-gray-900 ">
          <Image
            width={1024}
            height={1280}
            alt="background"
            src="https://images.pexels.com/photos/9888656/pexels-photo-9888656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="absolute top-0 left-0 inset-0 h-full w-full object-cover "
          />

          <div className=" max-lg:hidden relative block lg:p-12">
            <Link className="block text-white" href="/">
              <Image
                width={1024}
                height={1280}
                alt="logo"
                src={"/images/icon.png"}
                className="w-[50px]"
              />
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to machie 🌟
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default HoverImage;
