import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    // <div className="flex items-center justify-center w-full h-screen bg-light_bg dark:bg-main_dash">
    //   <ReactLoading
    //     type={"bubbles"}
    //     color={"#f97316"}
    //     height={"30%"}
    //     width={"30%"}
    //   />
    // </div>
    <div className="h-screen bg-light_bg dark:bg-main_dash flex items-center justify-center text-2xl dark:text-white">
      الجدول لا يحتوى على بيانات حتى الأن
    </div>
  );
};

export default Loading;
