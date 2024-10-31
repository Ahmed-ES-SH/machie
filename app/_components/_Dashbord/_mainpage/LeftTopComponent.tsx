import Image from "next/image";
import React from "react";
import ShortMenue from "./ShortMenue";

interface type {
  state: boolean;
  data:
    | {
        title: string;
        imgsrc: string;
        price: string;
        sales: string;
      }[]
    | {
        id: string;
        name: string;
        created_at: string;
        money: string;
        email: string;
        posation: string;
        score: string;
        imgsrc: string;
        color?: string;
      }[];
  title: string;
  width: number;
}

const LeftTopComponent: React.FC<type> = ({ state, data, title, width }) => {
  return (
    <>
      <div
        className={` w-[${width}%] max-lg:w-full  dark:bg-secend_dash bg-light_bg rounded-md  py-3  `}
      >
        <div className="head flex items-center justify-between border-b px-2 border-gray-300/30 pb-4">
          <h1 className="text-xl dark:text-white text-black ">{title}</h1>
          {state ? (
            <select className="cursor-pointer outlien-none border-none  px-4 py-2 text-[14px] text-gray-400/40 bg-main_dash rounded-md text-white">
              <option className="dark:text-gray-400/40 text-black ">
                jun 12
              </option>
              <option className="dark:text-gray-400/40 text-black ">
                jun 13
              </option>
              <option className="dark:text-gray-400/40 text-black ">
                jun 14
              </option>
            </select>
          ) : (
            <ShortMenue />
          )}
        </div>
        <div
          className={`products ${
            state ? "h-[570px]" : "h-[500px]"
          } px-2 overflow-y-auto`}
        >
          {data &&
            data.map((item: any, index: number) => (
              <div
                key={index}
                className={`flex items-center px-3 py-2 ${
                  index !== data.length - 1 ? "border-b border-gray-300/30" : ""
                } justify-between`}
              >
                <div className="content flex items-center gap-2">
                  <Image
                    className="w-[40px] h-[40px] rounded-md"
                    src={item.imgsrc}
                    alt="item_img"
                    width={1024}
                    height={1280}
                  />
                  <div className="title-price">
                    <p className="whitespace-nowrap dark:text-gray-400/50 text-black/70 text-[14px]">
                      {state ? item.title : item.name}
                    </p>
                    <p className="whitespace-nowrap dark:text-secend_text text-[13px]">
                      {state ? item.price : item.email}
                    </p>
                  </div>
                </div>
                <p
                  className={` ${
                    state ? "dark:text-secend_text" : "text-sky-400"
                  }  text-[14px]`}
                >
                  <span className="px-1">
                    {state ? item.sales + " sales" : item.money}
                  </span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default LeftTopComponent;
