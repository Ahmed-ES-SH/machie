import React from "react";
import Image from "next/image";
import DiscountAnimate from "../animation/DiscountAnimate";
import CountdownTimer from "../_Home/CountdownTimer";
import Stars from "../_Home/Stars";
const CardTimer = ({ imgsrc }: { imgsrc: string }) => {
  return (
    <>
      <h1 className="px-4 border-b text-xl font-normal whitespace-nowrap dark:text-white ">
        Deals of the week!
      </h1>
      <div>
        <div className="border-b  cursor-pointer z-[99999] h-full relative bg-white dark:bg-secend_dash dark:text-secend_text  w-full   rounded-md shadow-md overflow-hidden  group  hover:shadow-lg  hover:border   duration-300 ">
          <div className="">
            <Image
              className="w-[220px] dark:w-full h-[55vh] m-auto"
              src={imgsrc}
              alt="img-banner"
              width={1024}
              height={1280}
            />
          </div>
          <div className="flex items-center justify-center flex-col px-4">
            <div className="text-[18px] text-sky-400  p-2 h-[90px] text-center group">
              <p className="group-hover:border-b-2 border-sky-400 ">
                Bose Noise Cancelling
              </p>
              <p className="group-hover:border-b-2 border-sky-400 ">
                Wireless Bluetooth
              </p>
            </div>
            <Stars goldStars={4} grayStars={1} />
            <div className=" pt-2 px-2">
              <div className="price">
                <del className=" text-gray-300 text-[14px]">$479.00</del>
                <h1 className="py-2 text-red-500 text-[18px]"> $439.00</h1>
              </div>
            </div>
            <h1 className=" text-gray-400 text-[12px] border-b px-2">
              2 - day Delivery
            </h1>
          </div>
          <DiscountAnimate discount={"%11"} />
          <CountdownTimer />
        </div>
      </div>
    </>
  );
};

export default CardTimer;
