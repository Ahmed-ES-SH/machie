"use client";
import React from "react";
import MainHead from "../_Home/MainHead";
import ProductCard from "./ProductCard";
import { Use_data } from "@/app/context/Data_context";

const BestSellers = () => {
  const { bestsellers } = Use_data();

  return (
    <>
      <MainHead title={"Best Sellers"} />
      <div className="products h-fit m-auto gap-4 justify-items-center max-lg:gap-y-11 pt-2  grid grid-cols-4 max-md:grid-cols-2 max-xl:grid-cols-3 max-sm:grid-cols-2 max-md:justify-items-center">
        {bestsellers.map((product: any, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default BestSellers;
