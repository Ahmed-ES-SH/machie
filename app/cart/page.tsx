import React from "react";
import Navbar from "../_components/Navbar";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Cart – Machic – Electronics Store eCommerce Theme",
};

const DynamicMainCard = dynamic(
  () => import("../_components/_Cart/Main_cart"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <div className="w-full h-fit">
      <Navbar />
      <DynamicMainCard />
    </div>
  );
};

export default page;
