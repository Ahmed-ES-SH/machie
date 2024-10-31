import { NewProductscontent } from "@/app/constants/constantsDetails";
import Image from "next/image";
import React from "react";

const TrendingProducts = () => {
  return (
    <div className="dark:bg-secend_dash dark:text-secend_text">
      <h1 className="px-4 border-b text-xl font-normal whitespace-nowrap">
        Trending Products
      </h1>
      <div className=" h-fit py-6 px-2 shadow-md gap-y-8 flex-col flex items-center justify-start">
        {NewProductscontent.map((item, index) => (
          <div
            className="w-full h-[20vh] px-3 gap-8 flex items-center justify-between"
            key={index}
          >
            <Image
              className="w-[35%] h-full rounded-md"
              src={item.img || ""}
              alt="image"
              width={1024}
              height={1280}
            />
            <div className="w-1/2">
              <h1 className="p-2 text-[13px] max-md:text-[15px]">
                {item.title}
              </h1>
              <div className="price flex items-center p-2 gap-3">
                <h1 className="py-2 text-red-500 text-[18px]">
                  ${item.priceAfterDiscount}
                </h1>
                <del className=" text-gray-300 text-[14px]">${item.price}</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
