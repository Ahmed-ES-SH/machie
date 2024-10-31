import PaginatedTable from "@/app/_components/_Dashbord/_mainpage/PagenationTable";
import HeadTable from "@/app/_components/_Dashbord/HeadTable";
import {
  categoriesdata,
  ordersdetails,
} from "@/app/constants/constantsDashbord";
import React from "react";
import { Metadata } from "next";
import { Apis } from "@/app/_components/Api/Api";
export const metadata: Metadata = {
  title: "categories",
  description: "Created by Next js",
};
const Categories: React.FC = () => {
  const headers = ["id", "image", "title"];
  return (
    <>
      <div className="h-[88vh] w-full mt-[65px]">
        <div className="w-full  dark:bg-secend_dash bg-light_bg rounded-md px-3 py-3">
          <HeadTable
            title="All Categories"
            linktitle="Add Category"
            path="/dashbord/addcategory"
          />
          <PaginatedTable
            apidelete=""
            staticData={categoriesdata}
            headers={headers}
            api=""
          />
        </div>
      </div>
    </>
  );
};

export default Categories;
