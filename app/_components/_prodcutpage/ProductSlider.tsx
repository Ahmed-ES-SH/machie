"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface type {
  images: string[];
}

export default function ProductSlider({ images }: type) {
  const [currentimg, setcurrentimg] = useState<number>(0);

  return (
    <>
      <div className="relative max-md:w-full  gap-4 w-1/2 h-1/2">
        <motion.div
          key={currentimg}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[400px] h-full m-auto max-lg:w-full max-md:m-auto"
        >
          <Image
            src={images ? images[currentimg] : ""}
            alt="product"
            width={1024}
            height={1280}
            className="w-[400px] max-md:w-[80%] h-full max-md:m-auto rounded-md shadow-md "
          />
        </motion.div>
        <div className="w-full grid grid-cols-4  gap-2 mt-4 ">
          {images &&
            images.map((src: string, index: number) => (
              <div
                onClick={() => setcurrentimg(index)}
                key={index}
                className={` flex items-center justify-center duration-200 hover:scale-105 hover:opacity-100 ${
                  index == currentimg ? "opacity-100" : "opacity-40"
                } w-full cursor-pointer  shadow-md`}
              >
                <Image
                  src={src}
                  alt="product"
                  width={1024}
                  height={1280}
                  className="  w-full max-sm:w-[80%] rounded-sm  "
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
