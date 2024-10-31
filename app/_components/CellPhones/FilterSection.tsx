"use client";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const FilterSection = ({ setcats }: any) => {
  const categories = [
    "iphone",
    "phone Accesserios",
    "Phone Cases",
    "Postpaid Phones",
    "Prepaid Phones",
    "Prepaid Plans",
    "Refurbished Phones",
    "Samsung Galaxy",
    "Straight Talk",
    "Unlocked Phones",
  ];

  const colors = [
    { name: "black", color: "black" },
    { name: "Blue", color: "#1e73be" },
    { name: "Brown", color: "#49271d" },
    { name: "Gray", color: "#bfbfbf" },
    { name: "green", color: "#50b948" },
    { name: "Red", color: "#cb2028" },
  ];

  const [selectedCategories, setSelectedCategories] = useState<any>([]);
  const [rangevalue, setrangevalue] = useState<string>("2500");

  setcats(selectedCategories);

  const handleCheckboxChange = (event: any) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category: string) => category !== value)
      );
    }
  };

  return (
    <>
      <div className="w-full h-full mt-4 ">
        <div>
          <h1 className="H-1 py-3 border-b dark:text-secend_text ">
            product Categories
          </h1>
          <div className="mt-3  px-2 dark:bg-main_dash">
            {categories.map((cat, index) => (
              <div key={index} className="flex items-center gap-4 py-3 ">
                <input
                  id={cat}
                  className=""
                  value={cat}
                  type="checkbox"
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor={cat}
                  className="text-[15px] dark:text-secend_text"
                >
                  {cat}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h1 className="H-1 py-3 border-b dark:text-secend_text ">
            Filter by Price
          </h1>
          <div className="w-[95%] m-auto mt-6 ">
            <div className="flex items-center justify-between dark:text-secend_text">
              <p>price : $20 -- $ {rangevalue}</p>
              <button className="bg-gray-400 dark:bg-secend_dash dark:text-secend_text px-4 py-2 rounded-md">
                Filter
              </button>
            </div>
            <input
              min={20}
              max={6000}
              onChange={(e) => setrangevalue(e.target.value)}
              type="range"
              className=" w-full mt-3 h-[10px]"
            />
          </div>
        </div>
        <div className="mt-8">
          <h1 className="H-1 py-3 border-b dark:text-secend_text ">
            Filter by color
          </h1>
          <div className="w-[95%] m-auto mt-6">
            {colors.map((color, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center justify-between gap-6 py-3 w-full group"
              >
                <div className="flex items-center justify-between  gap-6">
                  <span
                    style={{ background: color.color }}
                    className={`w-[25px] h-[25px] rounded-full flex items-center justify-center `}
                  >
                    <CheckIcon
                      className="text-white duration-150 opacity-0 group-hover:opacity-100"
                      width={13}
                    />
                  </span>
                  <p className="dark:text-secend_text">{color.name}</p>
                </div>
                <p className="text-gray-400">(2)</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h1 className="H-1 py-3 border-b dark:text-secend_text ">
            Product Status
          </h1>
          <div className="px-2 mt-3 w-[95%] m-auto ">
            <div className="flex items-center gap-4 py-3 ">
              <input
                id="in-stock"
                className=""
                value="in-stock"
                type="checkbox"
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="in-stock"
                className="text-[15px] dark:text-secend_text"
              >
                in stock
              </label>
            </div>
            <div className="flex items-center gap-4 py-3 ">
              <input
                id="on-sale"
                className=""
                value="on-sale"
                type="checkbox"
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="on-sale"
                className="text-[15px] dark:text-secend_text"
              >
                on sale
              </label>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="H-1 py-3 border-b dark:text-secend_text ">Brands</h1>
          <div className="px-2 mt-3 w-[95%] m-auto ">
            <div className="flex items-center gap-4 py-3 w-full justify-between ">
              <div className="flex items-center gap-4 ">
                <input
                  onChange={handleCheckboxChange}
                  id="apple"
                  className=""
                  value="Apple"
                  type="checkbox"
                />
                <label
                  htmlFor="apple"
                  className="text-[15px] dark:text-secend_text"
                >
                  Apple
                </label>
              </div>
              <p className="dark:text-secend_text">(5)</p>
            </div>
            <div className="flex items-center gap-4 py-3 w-full justify-between ">
              <div className="flex items-center gap-4 ">
                <input
                  onChange={handleCheckboxChange}
                  id="samsung"
                  className=""
                  value="samsung"
                  type="checkbox"
                />
                <label
                  htmlFor="samsung"
                  className="text-[15px] dark:text-secend_text"
                >
                  samsung
                </label>
              </div>
              <p className="dark:text-secend_text">(9)</p>
            </div>
          </div>
        </div>
        <div className="mt-4 w-[95%] m-auto">
          <Image
            src={"/images/widget-banner.jpg"}
            alt=""
            width={1024}
            height={1280}
            className="w-full h-[80vh] border border-black"
          />
        </div>
      </div>
    </>
  );
};

export default FilterSection;
