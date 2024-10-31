"use client";
import React, { useState } from "react";
import FilterSection from "./FilterSection";
import PagenationProducts from "./PagenationProducts";

const Currentpage = () => {
  const [cats, setcats] = useState<any>([]);
  return (
    <>
      <div className="flex items-start gap-2 w-full h-full text-left">
        <div className="w-[28%] h-full border-r dark:border-secend_text max-lg:hidden">
          <FilterSection setcats={setcats} />
        </div>
        <div className="w-[70%] max-lg:w-full overflow-hidden  h-full">
          <PagenationProducts setcats={setcats} cats={cats} />
        </div>
      </div>
    </>
  );
};

export default Currentpage;
