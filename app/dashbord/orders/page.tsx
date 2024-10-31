import PaginatedTable from "@/app/_components/_Dashbord/_mainpage/PagenationTable";
import HeadTable from "@/app/_components/_Dashbord/HeadTable";
import { ordersdetails } from "@/app/constants/constantsDashbord";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "orders",
  description: "Created by Next js",
};
const Orders: React.FC = () => {
  const headers = ["id", "user_email", "order", "order_status", "created_at"];
  return (
    <>
      <div className="h-[88vh] w-full mt-[65px]">
        <div className="w-full  dark:bg-secend_dash bg-light_bg rounded-md px-3 py-3">
          <HeadTable title="All Orders" linktitle="" path="" />
          <PaginatedTable
            headers={headers}
            api="/orders"
            apidelete="/order"
            staticData={[]}
          />
        </div>
      </div>
    </>
  );
};

export default Orders;
