import { ordersdetails } from "@/app/constants/constantsDashbord";
import React from "react";
import PaginatedTable from "./PagenationTable";

const OrdersTable = () => {
  const headers = ["invoice", "username", "date", "price", "status"];
  return (
    <>
      <div className="w-[70%] max-lg:w-full  dark:bg-secend_dash bg-light_bg rounded-md px-3 py-3">
        <div className="head  border-b px-2 border-gray-300/30 pb-4">
          <h1 className="text-xl dark:text-white ">Recent Orders</h1>
        </div>

        <PaginatedTable
          headers={headers}
          staticData={ordersdetails}
          api=""
          apidelete=""
        />
      </div>
    </>
  );
};

export default OrdersTable;
