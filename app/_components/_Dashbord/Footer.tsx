import React from "react";

const Footer = () => {
  return (
    <>
      <div className="overflow-hidden w-full mt-[80px] z-[999]">
        <div className="w-full  bottom-0  px-20  h-[60px] max-md:h-fit flex items-center justify-between dark:text-secend_text text-sm py-2  dark:bg-secend_dash bg-light_bg max-sm:flex-col max-sm:items-start max-sm:px-2 ">
          <p className="p-1 whitespace-nowrap">
            COPYRIGHT © 2024 DashTail All rights Reserved
          </p>
          <p className="p-1 whitespace-nowrap">
            Hand-crafted & Made by{" "}
            <span className="text-red-500">Ahmed Esmail</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
