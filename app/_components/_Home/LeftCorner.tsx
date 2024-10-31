import React from "react";
import Ponits from "../_LeftCorner/Ponits";
import SpicalCardPhone from "../_LeftCorner/SpicalCardPhone";
import CardTimer from "../_LeftCorner/CardTimer";
import TrendingProducts from "../_LeftCorner/TrendingProducts";

const LeftCorner = () => {
  return (
    <>
      <div className="w-[31%] flex flex-col gap-6 p-2 max-xl:w-full self-start">
        <Ponits />
        <SpicalCardPhone />
        <CardTimer imgsrc={"/images/category-2.jpg"} />
        <TrendingProducts />
        <CardTimer imgsrc={"/images/echo1-400x400.jpg"} />
      </div>
    </>
  );
};

export default LeftCorner;
