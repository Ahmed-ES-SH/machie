"use client";
import React, { useState } from "react";
import Review from "./Review";

const Description_reciew = ({ descriptopn, title }: any) => {
  const [state, setstate] = useState(true);
  const [stars, setstars] = useState(0);
  return (
    <>
      <div className="w-full mt-6 px-4 py-2">
        <div className="center pb-2 border-b dark:text-white text-xl ">
          <p
            className={`${
              state == false && "text-gray-300 opacity-50 cursor-pointer"
            } duration-150`}
            onClick={() => setstate(true)}
          >
            Description
          </p>
          <p
            className={`${
              state == true && "text-gray-300 opacity-50 cursor-pointer"
            }`}
            onClick={() => setstate(false)}
          >
            Review(1)
          </p>
        </div>
        {state ? (
          <div className="mt-4 dark:text-white ">{descriptopn}</div>
        ) : (
          <Review title={title} stars={stars} setstars={setstars} />
        )}
      </div>
    </>
  );
};

export default Description_reciew;
