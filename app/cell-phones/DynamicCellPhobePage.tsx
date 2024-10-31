import React from "react";
import FirstSectionCellPhones from "../_components/CellPhones/FirstSectionCellPhones";
import Navbar from "../_components/Navbar";
import MinyNav from "../_components/MinyNav";
import PageProducts from "../_components/PageProducts";
import Viewedproducts from "../_components/CellPhones/Viewedproducts";
import HeadPage from "../_components/CellPhones/HeadPage";
import Footer from "../_components/_Dashbord/Footer";
export default function DynamicCellPhobePage() {
  return (
    <>
      <Navbar />
      <div className=" mt-6 px-2 m-auto">
        <FirstSectionCellPhones />
        <MinyNav />
        <PageProducts />
        <Viewedproducts />
      </div>
      <Footer />
    </>
  );
}
