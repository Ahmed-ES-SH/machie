import Image from "next/image";
import React from "react";
import { RightCornerDeatiles } from "../../constants/constantsDetails";

const DualBanners = () => {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2">
      {RightCornerDeatiles.map((item, index) => (
        <div key={index} className="relative h-[40vh] w-full">
          <Image
            width={1024}
            height={1024}
            src={item.img}
            alt="img-banner"
            className="border w-full h-full objext-contain shadow-lg rounded-md"
          />
          <div className="content absolute left-14 top-1/2 -translate-y-1/2 max-md:left-2 max-md:top-[60%]">
            <p className="firstLine w-fit h-fit  text-sky-500 p-1 font-normal text-[14px]">
              WEEKEND DISCOUND
            </p>
            <p className="firstTitle font-meduim py-1 text-3xl max-md:text-2xl">
              {item.title}
            </p>
            <p className=" py-4 text-[16px]">{item.desc}</p>
            <button className="btn-shop py-2 px-4 bg-sky-400 rounded-full text-white">
              Shop now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DualBanners;
