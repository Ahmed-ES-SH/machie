import { NewProductscontent } from "@/app/constants/constantsDetails";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Stars from "../_Home/Stars";
import DiscountAnimate from "../animation/DiscountAnimate";

const SuperDiscoundHover = () => {
  return (
    <>
      {NewProductscontent.map((item, index) => (
        <div
          key={index}
          className="group dark:bg-main_bar dark:text-secend_text "
        >
          <div className="z-[99999] h-fit relative w-[200px]  dark:bg-main_bar dark:text-secend_text rounded-md  overflow-hidden    hover:shadow-lg  hover:border   duration-300 ">
            <div className="shadow-md dark:bg-main_bar dark:text-secend_text">
              <Image
                className="w-[220px] m-auto"
                src={item.img || ""}
                alt="img-banner"
                width={1024}
                height={1280}
              />
            </div>
            <div className="">
              <h1 className="text-[15px] p-2 h-[90px]">{item.title}</h1>
              <Stars
                goldStars={Number(item.stars)}
                grayStars={5 - Number(item.stars)}
              />
              <div className="flex items-center justify-between pt-2 px-2">
                <div className="price flex items-center gap-4">
                  <del className=" text-gray-300 text-[14px]">
                    ${item.price}
                  </del>
                  <h1 className="py-2 text-red-500 text-[18px]">
                    {" "}
                    ${item.priceAfterDiscount}
                  </h1>
                </div>
              </div>
              <h1 className=" text-gray-400 text-[12px] border-b px-2">
                {item.daysForDelviry}-day Delivery
              </h1>
              <DiscountAnimate discount={item.discount} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SuperDiscoundHover;
