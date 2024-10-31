"use client";
import { useVariables } from "@/app/context/VariablesContext";
import React from "react";
interface SignInFormDivProps {
  children: React.ReactNode;
}
export default function Sign_in_form_div({ children }: SignInFormDivProps) {
  const { leftright } = useVariables();
  return (
    <>
      <div
        style={{
          display: leftright ? "none" : "flex",
          opacity: leftright ? "0" : "1",
        }}
        className="w-1/2 flex flex-col items-center justify-between h-screen relative max-lg:dark:bg-transparent  max-lg:w-full duration-300 dark:bg-main_bar dark:text-secend_text"
      >
        {children}
      </div>
    </>
  );
}
