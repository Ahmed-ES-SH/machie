import React from "react";
import First_half from "./navbar/First_half";
import Secend_half from "./navbar/Secend_half";

const Navbar = () => {
  return (
    <>
      <div className=" dark:bg-main_bar dark:text-white dark:border-secend_text  pt-2 m-auto border-b ">
        <First_half />
        <Secend_half />
      </div>
    </>
  );
};

export default Navbar;
