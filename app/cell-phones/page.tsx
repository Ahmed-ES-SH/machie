import React from "react";
import { Metadata } from "next";
import FirstSectionCellPhones from "../_components/CellPhones/FirstSectionCellPhones";
import Navbar from "../_components/Navbar";
import MinyNav from "../_components/MinyNav";
import PageProducts from "../_components/PageProducts";
import Viewedproducts from "../_components/CellPhones/Viewedproducts";
import HeadPage from "../_components/CellPhones/HeadPage";
import Footer from "../_components/_Dashbord/Footer";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Cell Phones – Machic – Electronics Store eCommerce Theme",
  description: "Created by Next.js",
};

const Dynamicpage = dynamic(() => import("./DynamicCellPhobePage"), {
  ssr: false,
});

const page = () => {
  return (
    <>
      <Dynamicpage />
    </>
  );
};

export default page;
