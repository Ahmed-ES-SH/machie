/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const SpicalCardPhone = () => {
  return (
    <>
      <div className="dark:bg-secend_dash dark:text-secend_text relative overflow-hidden w-full  border shadow-md flex flex-col items-start max-md:items-center max-md:justify-center  h-[60vh] ">
        <div className="content px-4 w-full mt-6 m-auto  ">
          <p className="firstLine w-fit h-fit text-sky-500 p-1 font-normal text-[14px]">
            Super DISCOUND
          </p>
          <p className="firstTitle font-meduim py-1 text-[22px] max-md:text-[17px]">
            New Phone 11
          </p>
          <p className="secendTitle font-bold py-1 text-[12px] max-md:text-[12px]">
            Dont't miss the last opportunity
          </p>
          <button className="btn-shop my-3 py-2 px-3 bg-sky-400 rounded-full  text-white">
            Shop now
          </button>
        </div>

        <Image
          className="h-[50vh] w-full object-cover"
          src={"/images/category-1.jpg"}
          alt="image"
          width={1280}
          height={1024}
        />
      </div>
    </>
  );
};

export default SpicalCardPhone;
