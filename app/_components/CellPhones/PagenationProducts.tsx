"use client";
import React, { useState } from "react";
import {
  allproducts,
  BestSellerscontent,
  LatestDealsContent,
  NewProductscontent,
  phones,
} from "@/app/constants/constantsDetails";
import { prodcttype } from "@/app/constants/types";
import ProductCard from "../_RightCorner/ProductCard";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Use_data } from "@/app/context/Data_context";

interface PagenationProductsProps {
  cats: string[];
  setcats: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function PagenationProducts({
  cats,
  setcats,
}: PagenationProductsProps) {
  const { products } = Use_data();

  const [currentpage, setcurrentpage] = useState(1);
  const itemsperpage = 20;
  const totalpages = Math.ceil(allproducts.length / itemsperpage);

  const handleClick = (page: any) => {
    setcurrentpage(page);
  };

  const handlePrev = () => {
    if (currentpage > 1) {
      setcurrentpage(currentpage - 1);
    }
  };

  const handleNext = () => {
    if (currentpage < totalpages) {
      setcurrentpage(currentpage + 1);
    }
  };

  const currentitems = allproducts.slice(
    (currentpage - 1) * itemsperpage,
    currentpage * itemsperpage
  );

  return (
    <>
      <div className="w-full h-full relative  py-2">
        {cats.length > 0 && (
          <div className="w-[97%] m-auto h-fit py-4 px-2">
            <ul className="flex items-center gap-2 flex-wrap">
              {cats.map((cat, index) => (
                <li
                  key={index}
                  onClick={() =>
                    setcats((prev) => prev.filter((_, ine) => ine !== index))
                  }
                  className="cursor-pointer whitespace-nowrap text-[14px] font-light flex items-center gap-2 rounded-md px-2 py-1 border dark:border-secend_text dark:bg-secend_dash dark:text-white"
                >
                  <X width={16} />
                  <p>{cat}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="products-- gap-4 grid max-lg:grid-cols-4 grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 md:justify-items-center">
          {currentitems.map((product: prodcttype, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className="rounded-b-lg px-4 py-2 w-fit m-auto mt-4 ">
          <ol className="flex justify-end gap-1 text-xs font-medium">
            <li>
              <button
                onClick={handlePrev}
                className={`inline-flex border-black/50 dark:bg-secend_dash bg-light_bg dark:text-white size-8 items-center justify-center rounded border text-gray-900 rtl:rotate-180 ${
                  currentpage === 1 ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={currentpage === 1}
              >
                <span className="">
                  <ArrowLeft width={12} />
                </span>
              </button>
            </li>

            {Array.from({ length: totalpages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => handleClick(index + 1)}
                  className={`block size-8 rounded border ${
                    currentpage === index + 1
                      ? "border-blue-600 bg-blue-600 "
                      : "border-black/50 dark:bg-main_dash bg-light_bg "
                  } dark:text-white text-center leading-8`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={handleNext}
                className={`inline-flex size-8 items-center justify-center rounded border border-black/50 dark:bg-secend_dash bg-light_bg dark:text-white rtl:rotate-180 ${
                  currentpage === totalpages
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
                disabled={currentpage === totalpages}
              >
                <span className="">
                  <ArrowRight width={12} />
                </span>
              </button>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
