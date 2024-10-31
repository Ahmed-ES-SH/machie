"use client";
import { VariablesProvider } from "@/app/context/VariablesContext";
import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import RequiredAuth from "./RequiredAuth";
import Footer from "./Footer";
import styles from "../../Css/dashbord.module.css";

interface typeprops {
  children: React.ReactNode;
}

export default function Client_layout({ children }: typeprops) {
  return (
    <>
      <VariablesProvider>
        <RequiredAuth>
          <div className={`${styles.body}`}>
            <Topbar />
            <div className="flex w-full gap-2">
              <Sidebar />
              <main className="w-full overflow-hidden ">{children}</main>
            </div>
            <Footer />
          </div>
        </RequiredAuth>
      </VariablesProvider>
    </>
  );
}
