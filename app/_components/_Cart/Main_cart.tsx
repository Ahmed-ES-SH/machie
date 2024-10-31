"use client";
import { Usecart } from "@/app/context/Cart_context";
import Image from "next/image";
import React, { useState } from "react";
import Body_of_table from "./Body_of_table";
import Link from "next/link";
import { instance } from "../Api/axios";
import { Use_data } from "@/app/context/Data_context";
import { useRouter } from "next/navigation";
import { prodcttype } from "@/app/constants/types";

const Main_cart = () => {
  const { gettotal, cartitems, setcartitems, Clear_cart } = Usecart();
  const { currentuser } = Use_data();
  const router = useRouter();
  const headers = ["image", "Product", "Price", "Quantity", "Subtotal"];
  const total = gettotal(cartitems);
  const [refresh, setrefresh] = useState(false);

  const handelclear = () => {
    Clear_cart();
    setrefresh((prev) => !prev);
  };

  const handelsend = async () => {
    try {
      const formorder = new FormData();
      formorder.append("user_email", currentuser.email);
      formorder.append("adress", "fake adress");
      formorder.append("user_id", currentuser.id);
      formorder.append("vendor_id", "1");
      formorder.append("category_id", "1");
      formorder.append("order", JSON.stringify(cartitems));
      const res = await instance.post("/order/add", formorder);
      console.log(res);
      handelclear();
      setcartitems([]);
    } catch (err) {
      console.log(err);
      alert("You Need to login first");
    }
  };

  return (
    <>
      {cartitems && cartitems.length >= 1 ? (
        <div className="flex items-start max-lg:flex-col gap-6 mt-8">
          <div className="w-[75%] max-lg:w-full h-fit px-4 py-2 ">
            <div className="check_free dark:bg-secend_dash shadow-md  relative w-full h-[60px] overflow-hidden px-4 py-2 rounded-md bg-[#ddd]  dark:text-white">
              <p>Your order qualifies for free shipping!</p>
              <span className="bar absolute bottom-4 left-3 w-[95%]  h-[7px] rounded-full bg-green-600" />
            </div>
            <div className="table_of_orders overflow-auto w-full h-fit py-2 mt-4 bg-[#ddd] dark:bg-secend_dash rounded-md ">
              <table className="w-full px-4 overflow-auto">
                <thead className="dark:text-secend_text  border-b border-black dark:border-white pb-2  ">
                  <tr className="text-left px-1">
                    {headers.map((head: string, index: number) => (
                      <th
                        className="font-light  text-left max-sm:text-[12px]"
                        key={index}
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="">
                  {cartitems.map((item: prodcttype, index: number) => (
                    <Body_of_table key={index} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-full h-[150px] py-2 px-4 max-sm:px-2 mt-4 bg-[#ddd] dark:bg-secend_dash rounded-md flex max-md:flex-col max-md:items-start max-md:gap-6 items-center justify-between">
              <div className="flex items-center max-md:self-end">
                <input
                  className="w-[200px] h-[50px] px-2 py-2 rounded-l-md bg-transparent border dark:border-secend_text border-black   outline-none"
                  type="text"
                />
                <input
                  className="px-4 py-2 h-[50px] text-white bg-main_dash rounded-r-md font-light"
                  type="submit"
                  value={"Applay cobon"}
                />
              </div>
              <button
                onClick={handelclear}
                className="bg-main_dash rounded-md whitespace-nowrap px-6 py-4 text-white"
              >
                Remove All
              </button>
            </div>
          </div>
          <div className="mt-4 w-[25%] max-lg:w-full px-4">
            <h1 className="text-xl dark:text-white">Cart totals</h1>
            <div className="flex items-center justify-between mt-4 px-2 pb-2 border-b border-black dark:border-white dark:text-secend_text">
              <h1 className="">Subtotal</h1>
              <p className="">${total}</p>
            </div>
            <div className="flex items-center justify-between px-2 dark:text-white pb-4 border-b border-black dark:border-white">
              <p>Shipping</p>
              <div className="flex flex-col items-end ">
                <div className="flex items-center gap-2 text-[14px]  py-2">
                  <label>Free shipping</label>
                  <input type="radio" />
                </div>
                <div className="flex items-center gap-2 text-[14px]  py-2">
                  <label>Local pickup</label>
                  <input type="radio" />
                </div>
                <p className="py-2 text-[13px]">Shipping to NY.</p>
                <p className="text-[17px] mt-2 text-sky-500">Change address</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 py-6 pb-2 border-b border-black dark:border-white dark:text-white">
              <h1>Total</h1>
              <p className="text-[20px] text-secend_text">${total}</p>
            </div>
            <button
              onClick={Clear_cart}
              className="w-full h-[60px] rounded-md dark:bg-sky-600 bg-main_dash text-white mt-4"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8  w-[98%] m-auto max-lg:h-full  h-fit px-4 py-2 bg-light_bg dark:bg-secend_dash rounded-md flex flex-col items-center justify-center ">
          <h1 className="text-xl font-semibold py-6 dark:text-white">
            You have not added the product yet 😑 😑.
          </h1>
          <Image
            src={"/images/undraw_empty_cart_co35.svg"}
            alt="emty_cart"
            height={1280}
            width={1024}
            className="w-[400px]"
          />
          <Link
            className="mt-8 px-8 py-2 bg-main_dash  text-white rounded-md"
            href={"/cell-phones"}
          >
            Go to the Shop
          </Link>
        </div>
      )}
    </>
  );
};

export default Main_cart;
