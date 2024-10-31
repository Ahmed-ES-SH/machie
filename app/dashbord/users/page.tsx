import React from "react";
import type { Metadata } from "next";
import PaginatedTable from "@/app/_components/_Dashbord/_mainpage/PagenationTable";
import HeadTable from "@/app/_components/_Dashbord/HeadTable";
import { instance } from "@/app/_components/Api/axios";
import { usersdata } from "@/app/constants/constantsDashbord";

export const metadata: Metadata = {
  title: "users",
  description: "Created by Next js",
};

const headers = ["id", "image", "account", "name", "creation_date"];
const users = () => {
  return (
    <>
      <div className="h-[90vh] w-full mt-[65px]">
        <div className="w-full  dark:bg-secend_dash bg-light_bg rounded-md px-3 py-3">
          <HeadTable
            title="All Users"
            linktitle="Add User"
            path="/dashbord/adduser"
          />
          <PaginatedTable
            staticData={usersdata}
            headers={headers}
            apidelete=""
            api=""
          />
        </div>
      </div>
    </>
  );
};

export default users;
