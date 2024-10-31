import React from "react";
import Client_layout from "../_components/_Dashbord/Client_layout";

interface typeprops {
  children: React.ReactNode;
}

export default function Layoutdashbord({ children }: typeprops) {
  return (
    <>
      <Client_layout>{children}</Client_layout>
    </>
  );
}
