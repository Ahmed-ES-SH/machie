import { leftCornerFirst } from "@/app/constants/constantsDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Ponits = () => {
  return (
    <div className="firsthalf h-full w-full rounded-md shadow-lg dark:border-secend_text bg-[#fff] dark:bg-secend_dash dark:text-secend_text border">
      {leftCornerFirst.map((line, index) => (
        <div
          key={index}
          className="flex w-full text-[30px] items-center justify-between max-lg:justify-start gap-8 p-3 border-b "
        >
          <FontAwesomeIcon width={30} color="gray" icon={line.icon} />
          <div className="content leading-8 ">
            <h1 className=" font-[300] py-2 text-[18px] whitespace-nowrap ">
              {line.title}
            </h1>
            <p className="text-[14px] font-thin">{line.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ponits;
