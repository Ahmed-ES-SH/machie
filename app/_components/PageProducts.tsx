import React from "react";
import HeadPage from "./CellPhones/HeadPage";
import Currentpage from "./CellPhones/Currentpage";

const PageProducts = () => {
  return (
    <>
      <div className="w-full h-fit mt-8 ">
        <HeadPage />
        <Currentpage />
      </div>
    </>
  );
};

export default PageProducts;
