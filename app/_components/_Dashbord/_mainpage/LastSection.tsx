import React from "react";
import Map from "./Map";
import LeftTopComponent from "./LeftTopComponent";
import { TopSellproducts } from "@/app/constants/constantsDashbord";

const LastSection = () => {
  return (
    <section className="w-full m-auto px-4 mt-2 grid grid-cols-2  gap-3  max-lg:grid-cols-1">
      <LeftTopComponent
        state={true}
        data={TopSellproducts}
        title="Top Sell"
        width={100}
      />
      <Map />
    </section>
  );
};

export default LastSection;
