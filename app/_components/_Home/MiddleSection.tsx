import React from "react";
import LeftCorner from "./LeftCorner";
import RightCorner from "./RightCorner";

const MiddleSection = () => {
  return (
    <>
      <div className="conatiner flex-row-reverse  flex items-center justify-between  max-xl:flex-col ">
        <RightCorner />
        <LeftCorner />
      </div>
    </>
  );
};

export default MiddleSection;
