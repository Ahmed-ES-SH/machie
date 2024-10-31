"use client";
import React from "react";
import { VariablesProvider } from "../context/VariablesContext";

const layoutsignpage = ({ children }: any) => {
  return (
    <VariablesProvider>
      <main className="w-full">{children}</main>
    </VariablesProvider>
  );
};

export default layoutsignpage;
