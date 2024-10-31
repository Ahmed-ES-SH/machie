import PaginatedTable from "@/app/_components/_Dashbord/_mainpage/PagenationTable";
import HeadTable from "@/app/_components/_Dashbord/HeadTable";
import { ordersdetails, usersdata } from "@/app/constants/constantsDashbord";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "vendors",
  description: "Created by Next js",
};
const Vendors: React.FC = () => {
  const headers = ["id", "image", "name", "account", "creation_date"];
  return (
    <>
      <div className="h-[88vh] w-full mt-[65px]">
        <div className="w-full  dark:bg-secend_dash bg-light_bg rounded-md px-3 py-3">
          <HeadTable
            title="All Vendors"
            linktitle="Add Vendor"
            path="/dashbord/addvendor"
          />
          <PaginatedTable
            apidelete="/vendor"
            staticData={usersdata}
            headers={headers}
            api=""
          />
        </div>
      </div>
    </>
  );
};

export default Vendors;
