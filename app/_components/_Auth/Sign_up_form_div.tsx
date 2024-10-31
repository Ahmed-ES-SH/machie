"use client";
import { useVariables } from "@/app/context/VariablesContext";
import React from "react";

interface typeprops {
  children: React.ReactNode;
}

export default function Sign_up_form_div({ children }: typeprops) {
  const { leftright, setleftright } = useVariables();
  return (
    <>
      <div
        style={{
          display: leftright ? "block" : "none",
          opacity: leftright ? "1" : "0",
        }}
        className="w-1/2  ml-auto relative  max-lg:w-full duration-300 max-lg:dark:bg-transparent  dark:bg-main_bar dark:text-secend_text"
      >
        {children}
      </div>
    </>
  );
}
