/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
const OddBanner: React.FC<{ imgsrc: string }> = ({ imgsrc }) => {
  return (
    <div className=" mt-6 z-10 w-full  border rounded-md shadow-lg">
      <div className="relative h-[40vh] max-sm:h-[25vh] w-full">
        <Image
          className=" w-full object-cover"
          width={1280}
          height={1024}
          src={imgsrc}
          alt="image-banner"
        />
        <div className="content absolute left-14 top-1/2 -translate-y-1/2 max-md:left-2 max-md:top-[60%]">
          <p className="firstLine w-fit h-fit text-sky-500 p-1 font-normal text-[14px]">
            WEEKEND DISCOUND
          </p>
          <p className="firstTitle font-meduim py-1 text-[22px] max-md:text-[17px]">
            Momentum 3 Headphone
          </p>
          <p className="secendTitle font-bold py-1 text-[12px] max-md:text-[12px]">
            Dont't miss the last opportunity
          </p>
          <button className="btn-shop ">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default OddBanner;
