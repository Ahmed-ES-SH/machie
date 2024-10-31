import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DiscountBanner = () => {
  return (
    <>
      <div className="bg-[#021523] w-full rounded-md h-fit text-white py-3">
        <div className="content  px-4 flex items-center justify-between">
          <div className="text px-4">
            <h1 className="p-2 text-[15px] font-normal">
              Super discount for your first purchase
            </h1>
            <p className="p-2 text-[13px] font-normal text-gray-200">
              Use discount code in checkout page.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon opacity={0.5} icon={faCodeBranch} />
            <p>FREE256MAC</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountBanner;
