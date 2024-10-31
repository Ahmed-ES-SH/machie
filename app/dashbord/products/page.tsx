import PaginatedTable from "@/app/_components/_Dashbord/_mainpage/PagenationTable";
import HeadTable from "@/app/_components/_Dashbord/HeadTable";
import { ordersdetails } from "@/app/constants/constantsDashbord";
import React from "react";
import { Metadata } from "next";
import { allproducts } from "@/app/constants/constantsDetails";
export const metadata: Metadata = {
  title: "products",
  description: "Created by Next js",
};
const Products: React.FC = () => {
  const headers = ["id", "title", "img", "price", "priceAfterDiscount"];
  return (
    <>
      <div className="h-[88vh] w-full mt-[65px]">
        <div className="w-full  dark:bg-secend_dash bg-light_bg rounded-md px-3 py-3">
          <HeadTable
            title="All Products"
            linktitle="Add Product"
            path="/dashbord/addproduct"
          />
          <PaginatedTable
            apidelete=""
            staticData={allproducts}
            headers={headers}
            api=""
          />
        </div>
      </div>
    </>
  );
};

export default Products;
