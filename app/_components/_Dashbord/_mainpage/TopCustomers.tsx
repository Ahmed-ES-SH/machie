import React from "react";
import ShortMenue from "./ShortMenue";
import { fourusers, TopThree } from "@/app/constants/constantsDashbord";
import Image from "next/image";
import { Crown } from "lucide-react";

const TopCustomers = () => {
  return (
    <>
      <div className="w-[70%] max-lg:w-full h-fit  rounded-md dark:bg-secend_dash bg-light_bg">
        <div className="head flex mt-4 items-center justify-between border-b px-4 border-gray-300/30 pb-4">
          <h1 className="text-xl dark:dark:text-white text-black ">
            Top Customers
          </h1>
          <ShortMenue />
        </div>
        <div className="topthree max-md:w-full grid grid-cols-3 max-md:grid-cols-1 gap-[4rem] justify-items-center px-6 mt-28">
          {TopThree.map((card, index) => (
            <div
              key={index}
              className={`${
                index == 1
                  ? "bg-yellow-400/20 -translate-y-6"
                  : "bg-purple-400/20"
              }       card relative w-full flex flex-col items-center justify-center   h-[200px] max-md:h-[250px] rounded-md`}
            >
              <div className="img relative ">
                <div className="absolute z-[30]  left-1/2 -translate-x-1/2 -top-[100px] border-2 border-yellow-400 rounded-full  w-[80px] h-[80px]">
                  <Image
                    className="rounded-full "
                    src={card.imgsrc}
                    alt={card.name}
                    width={1024}
                    height={1280}
                  />
                  <span className="w-[25px] h-[25px] font-bold flex items-center justify-center text-[14px] bg-yellow-400 text-center dark:text-white absolute -bottom-1 right-0 rounded-full">
                    {card.posation}
                  </span>
                  {index == 1 && (
                    <Crown
                      className="absolute   left-[45%] -translate-x-1/2 -top-[18px]"
                      color="gold"
                      width={40}
                    />
                  )}
                </div>
              </div>
              <h1 className="title dark:text-white text-[16px]">{card.name}</h1>
              <span className="money mt-2 px-3 py-1 bg-purple-500 rounded-md dark:text-white font-bold">
                {card.money}
              </span>
              <div className="percent flex items-center justify-between px-4 w-full dark:text-white text-[15px] mt-4 ">
                <p>Score</p>
                <p>{card.score}</p>
              </div>
              <div className="bar w-[95%] h-[8px] bg-gray-300/20 rounded-full  relative">
                <span
                  style={{ width: card.score }}
                  className={` ${
                    index == 1 ? "bg-green-400" : "bg-purple-400"
                  } h-[8px]  rounded-full absolute`}
                ></span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 w-full">
          {fourusers.map((user, index) => (
            <div
              key={index}
              className="max-md:flex-col max-md:w-full flex items-center max-md:items-stretch justify-between p-2 hover:bg-purple-500/20 duration-200 rounded-md "
            >
              <div className="avatar flex items-center gap-2">
                <div className="img relative ">
                  <div className=" border-2 border-yellow-400 rounded-full  w-[30px] h-[30px] max-md:h-[80px] max-md:w-[80px]">
                    <Image
                      className="rounded-full "
                      src={user.imgsrc}
                      alt={user.name}
                      width={1024}
                      height={1280}
                    />
                    <span className="w-[15px] h-[15px] max-md:w-[30px] max-md:h-[30px] font-bold flex items-center justify-center text-[14px] bg-yellow-400 text-center dark:text-white absolute -bottom-1 right-0 rounded-full">
                      {user.posation}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="whitespace-nowrap dark:text-gray-400/50 text-[14px] max-md:text-[11px]">
                    {user.name}
                  </p>
                  <p className="whitespace-nowrap text-black/80 dark:text-secend_text text-[13px] max-md:text-[10px]">
                    {user.email}
                  </p>
                </div>
              </div>
              <span className="max-md:w-fit money mt-2 px-3 py-1 bg-purple-500 rounded-md dark:text-white text-[14px] font-bold">
                {user.money}
              </span>
              <div className="w-1/4 max-md:w-full">
                <div className="percent flex items-center justify-between  w-full dark:text-white text-[15px] mt-4 ">
                  <p>Score</p>
                  <p>{user.score}</p>
                </div>
                <div className="bar w-[95%] h-[8px] bg-gray-300/20 rounded-full  relative">
                  <span
                    style={{ width: user.score }}
                    className={` bg-${user.color} h-[8px]  rounded-full absolute`}
                  ></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopCustomers;
