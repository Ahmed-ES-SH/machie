import React from "react";
import Link from "next/link";
import Image from "next/image";
import { threeElement } from "@/app/constants/constantsDetails";
import LinkAnimate from "../animation/LinkAnimate";
import { ArrowRight } from "lucide-react";

const ThreeCards = () => {
  return (
    <>
      <div className="grid justify-items-center grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-4 px-3  pt-11  w-full">
        {threeElement.map((ele, index) => (
          <div
            key={index}
            className="dark:bg-secend_dash dark:border-secend_text border card w-full  h-[40vh] flex items-center  gap-4 p-2  rounded-md shadow-lg"
          >
            <div className="dark:text-secend_text flex gap-4 items-center justify-between max-md:justify-around max-sm:justify-between w-full px-2 ">
              <div className="image w-[45%] max-md:w-[90%]">
                <Image
                  src={ele.img}
                  alt={ele.title}
                  width={1024}
                  height={1280}
                  className=" w-[150px] h-[20vh] object-cover rounded-md"
                />
              </div>
              <div className="content w-[60%] max-md:w-[90%]">
                <h1 className="text-[18px] dark:text-white">{ele.title}</h1>
                <ul>
                  {ele.nots.map((not, i) => (
                    <li
                      className="py-2 text-gray-500 text-[14px]  whitespace-nowrap"
                      key={i}
                    >
                      {not}
                    </li>
                  ))}
                </ul>
                <Link
                  className="whitespace-nowrap text-[14px] mt-8"
                  href={`/cell-phones`}
                >
                  <p className="dark:text-white flex items-center gap-2">
                    <p>{ele.link}</p>
                    <ArrowRight width={18} />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ThreeCards;
