"use client";
import { useVariables } from "@/app/context/VariablesContext";
import React from "react";

export default function Bg_button(): React.JSX.Element {
  const { leftright, setleftright } = useVariables();
  return (
    <>
      <button
        onClick={() => setleftright(!leftright)}
        className="text-sky-700 font-bold underline z-[99999] relative cursor-pointer"
      >
        {leftright ? "Log in" : "sign up"}
      </button>
    </>
  );
}
