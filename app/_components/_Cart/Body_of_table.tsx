"use client";
import React from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { Usecart } from "@/app/context/Cart_context";
import { prodcttype } from "@/app/constants/types";
export default function Body_of_table({ item }: { item: prodcttype }) {
  const { getquantity, increasequantity, decreasequantity } = Usecart();
  const quantity = getquantity(item.title);
  return (
    <>
      <tr className="dark:text-secend_text text-left">
        <td className="p-2 mx-2 max-sm:text-[12px]">
          <Image
            src={item.img || ""}
            alt="image"
            height={1280}
            width={1024}
            className="w-[60px] h-[60px] rounded-md shadow-md"
          />
        </td>
        <td className="whitespace-nowrap   text-left mx-2 max-sm:text-[12px] font-light max-w-[200px] overflow-hidden">
          <p className="text-ellipsis overflow-hidden w-[150px]">
            {item?.title}
          </p>
        </td>
        <td className="font-light text-left mx-2 max-sm:text-[12px]">
          ${item?.price}
        </td>
        <td className="font-light text-left mx-2 max-sm:text-[12px]">
          <div className="counter w-fit max-md:px-1 max-md:py-1 max-sm:w-[60px] max-md:ml-0  flex items-center max-md:justify-between gap-3 px-2 py-3 border border-black dark:border-secend_text rounded-md dark:text-white dark:bg-secend_dash">
            <Minus
              className="cursor-pointer"
              onClick={() => decreasequantity(item.title)}
            />
            <p>{getquantity(item.title)}</p>
            <Plus
              className="cursor-pointer"
              onClick={() => increasequantity(item.title)}
            />
          </div>
        </td>
        <td className="font_light mx-2 max-sm:text-[12px]  text-left">
          ${Number(quantity * Number(item.price)).toFixed(2)}
        </td>
      </tr>
    </>
  );
}
