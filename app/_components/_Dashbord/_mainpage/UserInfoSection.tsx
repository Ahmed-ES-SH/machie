import React from "react";
import LeftTopComponent from "./LeftTopComponent";
import { users } from "@/app/constants/constantsDashbord";
import OrdersTable from "./OrdersTable";

const UserInfoSection = () => {
  return (
    <>
      <section className="w-full m-auto px-4 mt-2 flex items-center gap-3 max-lg:flex-col">
        <LeftTopComponent
          state={false}
          data={users}
          title="Transaction History"
          width={30}
        />
        <OrdersTable />
      </section>
    </>
  );
};

export default UserInfoSection;
