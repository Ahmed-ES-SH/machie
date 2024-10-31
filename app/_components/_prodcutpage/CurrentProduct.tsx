import React from "react";
import Stars from "../_Home/Stars";
import {
  Box,
  CircleAlert,
  CircleCheck,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Description_reciew from "./Description_reciew";
import ProductSlider from "./ProductSlider";
import { Allproducts, socialicons } from "@/app/constants/constantsDetails";
import { prodcttype } from "@/app/constants/types";
import CounterAndFavbtn from "./CounterAndFavbtn";

interface type {
  title: any;
}

export default function CurrentProduct({ title }: type) {
  let cleantilte = title.replace(/%20/g, " ").trim().toLowerCase();

  const product = Allproducts.find(
    (product) => product.title.toLowerCase() === cleantilte
  );

  return (
    <>
      {product && (
        <div className="w-full">
          <div className="w-[98%] m-auto mt-8 px-4 flex max-lg:flex-col items-start gap-6 font-sans ">
            <ProductSlider
              images={[
                product?.img || "",
                product?.img || "",
                product?.img || "",
                product?.img || "",
              ]}
            />
            <div className="content max-lg:ml-0 ml-6 w-full flex flex-col items-start gap-8 ">
              <h1 className="text-3xl font-semibold dark:text-white">
                {product?.title}
              </h1>
              <div className="center text-gray-300 my-3">
                <p>modal : A24B429 |</p>
                <p>SKU : HM34|22</p>
              </div>
              <div className="center">
                <Stars goldStars={5} grayStars={0} />
                <p className="px-2 py-1 bg-[#ddd] shadow-sm text-center">
                  1 Review
                </p>
              </div>
              {product?.stock != 0 ? (
                <div className="center bg-green-400/20 text-green-400 w-fit ml-1 px-3 py-1 rounded-md mt-4">
                  <CircleCheck />
                  <p>in stock</p>
                </div>
              ) : (
                <div className="center bg-red-400/20 text-red-400 w-fit ml-1 px-3 py-1 rounded-md mt-4">
                  <CircleAlert />
                  <p>out stock</p>
                </div>
              )}
              <div className="price center font-semibold font-sans pb-6 border-b w-full">
                <h1 className="py-2 text-red-500 text-4xl">
                  {" "}
                  ${product?.priceAfterDiscount}
                </h1>
                <del className=" text-gray-300 text-3xl">${product?.price}</del>
              </div>
              <div className="couter+btn overflow-hidden w-full flex flex-col items-start border rounded-md py-3 ">
                <CounterAndFavbtn product={product} />
                <div className="px-4 py-6 mt-4 center dark:text-white max-sm:text-[11px]">
                  <div className="center max-sm:text-[11px]">
                    <Box />
                    <p>2-days for delivery |</p>
                  </div>
                  <p className="max-sm:text-[11px]">
                    Speedy and reliable parcel delivery
                  </p>
                </div>
              </div>
              <div className="center overflow-hidden p-4 rounded-md w-full font-light text-[16px] bg-yellow-100 text-yellow-500 dark:text-yellow-400 dark:bg-secend_dash">
                <ShoppingBag />
                <p className="whitespace-nowrap max-md:text-[10px] ">
                  Other people want this. 11 people have this in their carts
                  right now.
                </p>
              </div>
              <div className="center py-2 text-[18px] font-light  dark:text-white ">
                <p>Category : </p>
                <Link className="text-sky-500 hover:text-sky-700" href={"#"}>
                  {product?.category}
                </Link>
              </div>
              <div className="social flex items-center gap-5">
                {socialicons.map((icon, index) => (
                  <div
                    key={index}
                    className={`${icon.bg} w-[30px] h-[30px] flex items-center justify-center   text-white rounded-full`}
                  >
                    <FontAwesomeIcon icon={icon.icon} />{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Description_reciew
            title={product?.title}
            descriptopn={product?.title}
          />
        </div>
      )}
    </>
  );
}
