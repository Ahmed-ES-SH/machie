"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import ProductCard from "../_RightCorner/ProductCard";
import { Use_data } from "@/app/context/Data_context";
import { Allproducts } from "@/app/constants/constantsDetails";

const Viewedproducts = () => {
  const { newproducts } = Use_data();
  return (
    <>
      <div className="w-[98%] m-auto mt-8">
        <h1 className="w-full border-b pb-3 dark:text-secend_text border-gray-400 font-serif font-semibold mt-8  text-2xl py-4">
          viewed Products
        </h1>
        <div className="mt-4 w-full">
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            loopAdditionalSlides={3}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {Allproducts.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Viewedproducts;
