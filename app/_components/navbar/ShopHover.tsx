import { linksshop } from "@/app/constants/constantsDetails";
import React from "react";

const ShopHover = () => {
  return (
    <>
      <div className="w-[23%] dark:bg-main_bar ">
        <h1 className="whitespace-nowrap py-2 text-sky-400">Shop Listes</h1>
        <ul>
          {linksshop.map((link, index) => (
            <li
              className=" whitespace-nowrap py-2 ml-1 hover:ml-2 duration-200 hover:text-gray-400"
              key={index}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[23%]">
        <h1 className="whitespace-nowrap py-2 text-sky-400">Product Detail</h1>
        <ul>
          {linksshop.map((link, index) => (
            <li
              className=" whitespace-nowrap py-2 ml-1 hover:ml-2 duration-200 hover:text-gray-400"
              key={index}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[23%]">
        <h1 className="whitespace-nowrap py-2 text-sky-400">Shop Pages</h1>
        <ul>
          {linksshop.map((link, index) => (
            <li
              className=" whitespace-nowrap py-2 ml-1 hover:ml-2 duration-200 hover:text-gray-400"
              key={index}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[23%]">
        <h1 className="whitespace-nowrap py-2 text-sky-400">Shop Layouts</h1>
        <ul>
          {linksshop.map((link, index) => (
            <li
              className=" whitespace-nowrap py-2 ml-1 hover:ml-2 duration-200 hover:text-gray-400 "
              key={index}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShopHover;
