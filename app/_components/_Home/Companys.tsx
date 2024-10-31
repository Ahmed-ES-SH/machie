import React from "react";
import { companysimages } from "../../constants/constantsDetails";
import Image from "next/image";

const Companys = () => {
  return (
    <div className="grid container px-4 grid-cols-6 justify-between py-6 gap-[32px] max-lg:grid-cols-4 max-md:grid-cols-3  m-auto border-b	">
      {companysimages.map((img, index) => (
        <div key={index} className="p-8 max-sm:p-1">
          <Image
            className="opacity-50 object-contain  hover:opacity-100 duration-300 cursor-pointer"
            width={900}
            height={900}
            src={img}
            alt="image-company"
          />
        </div>
      ))}
    </div>
  );
};

export default Companys;
