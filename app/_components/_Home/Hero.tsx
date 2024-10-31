"use client";
import React from "react";
import Image from "next/image";
import { EffectCreative, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderContent } from "../../constants/constantsDetails";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

const Hero = () => {
  return (
    <>
      <div className=" shadow-lg rounded-md max-md:px-2  w-[78%] h-[584px] ml-[21%] max-xl:ml-0 max-xl:w-[99%] py-2">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          loopAdditionalSlides={3}
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
          // creativeEffect={{
          //   prev: {
          //     shadow: true,
          //     translate: [0, 0, -400],
          //   },
          //   next: {
          //     translate: ["100%", 0, 0],
          //   },
          // }}
          // modules={[EffectCreative, Autoplay]}
          className="mySwiper"
        >
          {SliderContent.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`h-[584px] w-full outline-none object-conatin  relative`}
              >
                <Image
                  width={1024}
                  height={1280}
                  src={slide.img_src}
                  priority={true}
                  alt="image"
                  className=" bg-cover w-full h-full object-right rounded-md"
                />
                <div className="content absolute left-14 top-1/2 -translate-y-1/2 max-md:left-2 max-md:top-[60%]">
                  <p className="firstLine w-fit h-fit rounded-full bg-yellow-400 p-1 font-normal text-[14px]">
                    WEEKEND DISCOUND
                  </p>
                  <p className="firstTitle font-meduim py-1 text-5xl max-md:text-3xl">
                    {slide.title}
                  </p>
                  <p className="secendTitle font-bold py-1 text-7xl max-md:text-4xl">
                    {slide.bold_title}
                  </p>
                  <p className="discountline py-4 text-[20px]">
                    Last cell for up to{" "}
                    <span className="font-bold text-red-500 text-3xl">
                      {slide.disocunt_percent}
                    </span>{" "}
                    off !
                  </p>
                  <button className="btn-shop py-4 px-8 bg-sky-400 rounded-full text-white">
                    Shop now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
