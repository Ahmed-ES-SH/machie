import React from "react";
import DualBanners from "./DualBanners";
import OddBanner from "../_RightCorner/OddBanner";
import LatestDeals from "../_RightCorner/LatestDeals";
import DiscountBanner from "../_RightCorner/DiscountBanner";
import BestSellers from "../_RightCorner/BestSellers";
import PhonesSection from "../_RightCorner/PhonesSection";
import NewProducts from "../_RightCorner/NewProducts";
import {
  BestSellerscontent_2,
  NewProductscontent,
} from "@/app/constants/constantsDetails";

const RightCorner = () => {
  const data = [...BestSellerscontent_2, ...BestSellerscontent_2];
  return (
    <>
      <div className="w-full self-start p-2 h-fit   ">
        <DualBanners />
        <div className=" w-full relative h-fit">
          <BestSellers />
          <OddBanner imgsrc={"/images/banner-4.jpg"} />
        </div>
        <LatestDeals />
        <DiscountBanner />
        <PhonesSection />
        <OddBanner imgsrc={"/images/cell-3.jpg"} />
        <NewProducts data={NewProductscontent} title={"New Proudtcs"} />
        <NewProducts data={data} title={"Other Products"} />
      </div>
    </>
  );
};

export default RightCorner;
