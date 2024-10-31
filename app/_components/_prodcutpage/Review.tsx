import React from "react";
import Stars from "../_Home/Stars";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Review = ({ stars, setstars, title }: any) => {
  return (
    <>
      <div className="mt-4">
        <h1 className="text-xl font-semibold py-4 px-1 dark:text-white">
          1 review for | {title}
        </h1>
        <div className="avater-comment center p-2 rounded-md dark:bg-secend_dash ">
          <Image
            height={1280}
            width={1024}
            alt="user"
            src={"/images/user-without-img.jpg"}
            className="w-[60px] h-[60px] rounded-full"
          />
          <div className="flex flex-col items-start gap-2 dark:text-white">
            <Stars goldStars={5} grayStars={0} />
            <p className="dark:text-secend_text">admin - September 10, 2021</p>

            <p className="comment">
              Sed perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>
        <div className="form-parent">
          <h1 className="text-xl font-semibold py-4 px-1 dark:text-white pb-3 border-b">
            Add a review
          </h1>
          <p className="my-4 dark:text-white">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <p className="my-2 dark:text-white">Your rating *</p>
          <div className="rating-section center">
            <div
              onClick={() => setstars(1)}
              className="1-star  border-r w-fit cursor-pointer"
            >
              {Array.from({ length: 1 }, (_, index) => (
                <FontAwesomeIcon
                  className="opacity-50 duration-150 dark:opacity-100 mr-3"
                  width={17}
                  key={index}
                  icon={faStar}
                  color={stars == 1 ? "gold" : "gray"}
                />
              ))}
            </div>
            <div
              onClick={() => setstars(2)}
              className="2-star  border-r w-fit cursor-pointer"
            >
              {Array.from({ length: 2 }, (_, index) => (
                <FontAwesomeIcon
                  className="opacity-50 duration-150 dark:opacity-100 mr-3"
                  width={17}
                  color={stars == 2 ? "gold" : "gray"}
                  key={index}
                  icon={faStar}
                />
              ))}
            </div>
            <div
              onClick={() => setstars(3)}
              className="3-star  border-r w-fit cursor-pointer"
            >
              {Array.from({ length: 3 }, (_, index) => (
                <FontAwesomeIcon
                  className="opacity-50 duration-150 dark:opacity-100 mr-3"
                  width={17}
                  color={stars == 3 ? "gold" : "gray"}
                  key={index}
                  icon={faStar}
                />
              ))}
            </div>
            <div
              onClick={() => setstars(4)}
              className="4-star  border-r w-fit cursor-pointer"
            >
              {Array.from({ length: 4 }, (_, index) => (
                <FontAwesomeIcon
                  className="opacity-50 duration-150 dark:opacity-100 mr-3"
                  width={17}
                  color={stars == 4 ? "gold" : "gray"}
                  key={index}
                  icon={faStar}
                />
              ))}
            </div>
            <div
              onClick={() => setstars(5)}
              className="5-star   w-fit cursor-pointer"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <FontAwesomeIcon
                  className="opacity-50 duration-150 dark:opacity-100 mr-3"
                  width={17}
                  color={stars == 5 ? "gold" : "gray"}
                  key={index}
                  icon={faStar}
                />
              ))}
            </div>
          </div>
          <p className="my-2 dark:text-white">Your review *</p>
          <form className="">
            <textarea className="w-full px-2 py-2 bg-gray-200 outline-none dark:bg-white  h-[25vh] rounded-md" />
            <div className="py-2 h-fit">
              <label className="  dark:text-white font-light">Name*</label>
              <input
                className="w-full mt-1 bg-gray-200 outline-none dark:bg-white  py-3 px-1 rounded-md"
                type="text"
                placeholder="Your Name ..."
              />
            </div>
            <div className="py-2 h-fit">
              <label className="  dark:text-white font-light">Email*</label>
              <input
                className="w-full  bg-gray-200 outline-none dark:bg-white mt-1 py-3 px-1 rounded-md"
                type="email"
                placeholder="Your Email ..."
              />
            </div>
            <div className="py-2">
              <input type="checkbox" />
              <label className="ml-2 dark:text-white">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <input
              className="px-4 py-2 text-white text-center bg-secend_dash rounded-md border border-secend_text"
              type="submit"
              value={"Add"}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Review;
