import React from "react";

const Signuppanner = () => {
  return (
    <>
      <div className="w-[98%] my-8 bg-secend_dash overflow-hidden rounded-md m-auto max-md:flex-col flex items-center justify-between max-md:gap-4 max-md:items-start px-4 py-6">
        <div className="content text-white">
          <p>Sign Up For Newsletters</p>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span className="text-yellow-400">special offers.</span>
          </p>
        </div>
        <div className="flex items-center ">
          <input
            className="p-4 max-md:w-[90%] w-[380px] bg-white rounded-l-md"
            type="text"
            placeholder="Enter Your Email ..."
          />
          <input
            type="submit"
            value={"Submit"}
            className="p-4 bg-yellow-400 text-center rounded-r-md"
          />
        </div>
      </div>
    </>
  );
};

export default Signuppanner;
