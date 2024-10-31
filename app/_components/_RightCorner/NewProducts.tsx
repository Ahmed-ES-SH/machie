"use client";
import React from "react";
import MainHead from "../_Home/MainHead";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { prodcttype } from "@/app/constants/types";

const NewProducts = ({
  data,
  title,
}: {
  data: prodcttype[];
  title: string;
}) => {
  return (
    <div className="w-full h-full">
      <MainHead title={title} />
      <div className="mt-4 max-md:w-full w-[940px] ">
        <Swiper
          slidesPerView={5}
          loopAdditionalSlides={3}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
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
          {data.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewProducts;
