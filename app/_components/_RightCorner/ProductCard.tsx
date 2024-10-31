"use client";
import React from "react";
import Image from "next/image";
import { prodcttype } from "@/app/constants/types";
import DiscountAnimate from "../animation/DiscountAnimate";
import Stars from "../_Home/Stars";
import { Check, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Usecart } from "@/app/context/Cart_context";

interface prodctprops {
  product: prodcttype;
}

export default function ProductCard({ product }: prodctprops) {
  const { setcartitems, cartitems } = Usecart();
  let count = 5 - Number(product?.stars);
  let goldstars = product.stars;
  const handleClick = () => {
    setcartitems((prev: { [key: string]: any }[]) => {
      const items = prev ?? [];
      const itemExists = items.find(
        (item: { [key: string]: any }) => item.title === product.title
      );
      if (itemExists) {
        return items;
      }
      const newItem = { ...product, quantity: 1 };
      return [...items, newItem];
    });
  };
  return (
    <>
      <div className="relative group w-full ">
        <Link
          href={`/product/${product.title}`}
          className=" cursor-pointer w-full rounded-t-md"
        >
          <div className="z-[99] h-fit relative w-full dark:bg-secend_dash dark:text-secend_text   rounded-md      hover:shadow-lg  hover:border dark:hover:border-secend_text  hover:scale-105 duration-300 ">
            <div className="shadow-md">
              <Image
                className=" w-full  m-auto"
                src={product?.img || ""}
                alt="img-banner"
                width={1024}
                height={1280}
              />
            </div>
            <div className="">
              <h1 className="text-[15px] p-2 h-[90px]  w-[90%]">
                {product.title.length >= 35
                  ? product.title.slice(0, 35) + "..."
                  : product.title}
              </h1>
              <Stars goldStars={Number(goldstars)} grayStars={count} />
              <div className="flex items-center justify-between pt-2 px-2">
                <div className="price">
                  <del className=" text-gray-300 text-[14px]">
                    ${product.price}
                  </del>
                  <h1 className="py-2 text-red-500 text-[18px]">
                    {" "}
                    ${product.priceAfterDiscount}
                  </h1>
                </div>
              </div>
              <h1 className=" text-gray-400 text-[12px]  px-2">
                2-day Delivery
              </h1>
              <DiscountAnimate discount={product.discount} />
            </div>
            <div className=" bg-transparent shadow-md w-full   invisible group-hover:visible group-hover:block dark:hover:bg-secend_dash duration-100">
              <ul
                style={{ listStyle: "inside" }}
                className="pt-2 z-[999] px-2 dark:text-secend_text"
              >
                {product.nots &&
                  product?.nots.map((not, i) => (
                    <li
                      className="text-[12px] max-sm:text-[10px] whitespace-nowrap"
                      key={i}
                    >
                      {not}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Link>
        <div
          onClick={handleClick}
          className="p-2 border dark:border-transparent shadow-md font-thin cursor-pointer absolute bottom-[75px] right-[10px] z-[999] hover:scale-105"
        >
          {cartitems &&
          cartitems.find(
            (item: { [key: string]: any }) => item.title == product.title
          ) ? (
            <Check className="text-green-400 " />
          ) : (
            <ShoppingCart
              width={20}
              className="text-green-400 dark:text-white "
            />
          )}
        </div>
      </div>
    </>
  );
}
