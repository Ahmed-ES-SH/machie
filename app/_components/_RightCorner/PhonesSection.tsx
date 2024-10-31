"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import MainHead from "../_Home/MainHead";
import {
  BestSellerscontent,
  DetailsMobail,
} from "@/app/constants/constantsDetails";
import ProductCard from "./ProductCard";
import { Use_data } from "@/app/context/Data_context";

const PhonesSection = () => {
  return (
    <>
      <div className="max-lg:h-fit h-full  overflow-hidden">
        <MainHead title={"Smartphones & Accessories"} />
        <section className="max-md:flex-col flex items-start justify-between py-3 w-full h-full ">
          <div className="phone-card max-md:w-full  h-fit  w-[30%] relative border  rounded-md shadow-lg self-satrt  ">
            <div className="IMAGE-CARD relative ">
              <Image
                className="sahdow-lg object-cover border-b h-[80%] w-full "
                src={"/images/category-banner.jpg"}
                alt="phone-banner"
                width={1024}
                height={1280}
              />
              <div className="content absolute left-14 top-6  max-md:left-2 dark:text-secend_text ">
                <p className="firstLine w-fit h-fit  text-sky-500 p-1 font-normal text-[14px]">
                  SAMSUNG PHONE
                </p>
                <p className="firstTitle font-meduim py-1 text-3xl max-md:text-2xl">
                  Galaxy A46
                </p>
                <p className=" py-4 text-[16px]">
                  Don't miss the last opportunity.
                </p>
                <button className="btn-shop py-2 px-4 bg-sky-400 rounded-full text-white">
                  Shop now
                </button>
              </div>
            </div>
            <div className="details ">
              <h1 className="title px-3 py-4 dark:text-white">Cell Phones</h1>
              {DetailsMobail.map((detail, index) => (
                <div
                  key={index}
                  className="font-normal text-[14px] flex items-center justify-between w-full text-gray-400 py-1 px-3"
                >
                  <p>{detail.title}</p>
                  <p>({detail.number})</p>
                </div>
              ))}
            </div>
          </div>
          <div className="phones max-xl:pt-[10px] w-[68%] max-md:w-full relative">
            <div className="products h-full m-auto gap-4 max-lg:gap-y-11  grid grid-cols-3 max-xl:grid-cols-2  max-lg:grid-cols-2  max-md:justify-items-center">
              {BestSellerscontent.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PhonesSection;
