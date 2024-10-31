import React from "react";
import LinkAnimate from "../animation/LinkAnimate";

const MainHead: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="main-head pt-8 border-b flex items-center justify-between">
      <h1 className="block whitespace-nowrap text-3xl max-sm:text-lg font-normal dark:text-white ">
        {title}
      </h1>
      <LinkAnimate title={"View all"} />
    </div>
  );
};

export default MainHead;
