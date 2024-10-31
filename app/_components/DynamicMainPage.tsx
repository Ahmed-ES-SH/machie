import React from "react";
import Navbar from "./Navbar";
import Hero from "./_Home/Hero";
import Companys from "./_Home/Companys";
import MiddleSection from "./_Home/MiddleSection";
import ThreeCards from "./_RightCorner/ThreeCards";
import Footer from "./_Dashbord/Footer";

export default function DynamicMainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companys />
      <MiddleSection />
      <ThreeCards />
      <Footer />
    </>
  );
}
