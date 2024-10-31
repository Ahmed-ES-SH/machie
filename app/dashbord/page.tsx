import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Head from "../_components/_Dashbord/_mainpage/Head";
import UserInfoSection from "../_components/_Dashbord/_mainpage/UserInfoSection";
import LastSection from "../_components/_Dashbord/_mainpage/LastSection";

export const metadata: Metadata = {
  title: "dashbord",
  description: "Created by Next js",
};

// قم بتحميل المكون بدون التقديم على جانب الخادم
const FirstCanvesSectiondynamic = dynamic(
  () => import("../_components/_Dashbord/_mainpage/FirstCanvesSection"),
  {
    ssr: false,
  }
);
const SecendCanvesSectionndynamic = dynamic(
  () => import("../_components/_Dashbord/_mainpage/SecendCanvesSection"),
  {
    ssr: false,
  }
);
const TopSectiondynamic = dynamic(
  () => import("../_components/_Dashbord/_mainpage/TopSection"),
  {
    ssr: false,
  }
);
const FourCardsdynamic = dynamic(
  () => import("../_components/_Dashbord/_mainpage/FourCards"),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <>
      <Head />
      <FourCardsdynamic />
      <FirstCanvesSectiondynamic />
      <TopSectiondynamic />
      <SecendCanvesSectionndynamic />
      <UserInfoSection />
      <LastSection />
    </>
  );
}
