import React from "react";
import LeftTopComponent from "./LeftTopComponent";
import TopCustomers from "./TopCustomers";
import { TopSellproducts } from "@/app/constants/constantsDashbord";

const TopSection = () => {
  return (
    <>
      <section className="w-full m-auto px-4 mt-2 flex items-center gap-3 max-lg:flex-col">
        <LeftTopComponent
          state={true}
          data={TopSellproducts}
          title="Top Sell"
          width={30}
        />
        <TopCustomers />
      </section>
    </>
  );
};

export default TopSection;
