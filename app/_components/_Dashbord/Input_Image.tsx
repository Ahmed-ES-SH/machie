"use client";
import React, { useRef } from "react";
import Image from "next/image";

interface typeimage {
  setimage: React.Dispatch<React.SetStateAction<File>>;
  image: any;
}

const Input_Image: React.FC<typeimage> = ({ setimage, image }) => {
  const openinput = useRef<any>(null);

  return (
    <>
      <div className="">
        <label
          htmlFor="images"
          className="block text-sm font-medium text-secend_text max-lg:text-white max-lg:font-light font-serif text-md py-2"
        >
          Image:
        </label>
        <input
          ref={openinput}
          id="images"
          className=""
          name="images"
          type="file"
          // onChange={handleImageChange}
          hidden
        />
        {image != "" ? (
          <Image
            className="h-[250px] w-1/2 shadow-md rounded-md dark:shadow-white  "
            src={URL.createObjectURL(image)}
            alt="image"
            width={1024}
            height={1280}
          />
        ) : (
          <div
            onClick={() => openinput.current.click()}
            className="w-full  h-[35vh] px-4 py-2 flex items-center justify-center border-2 border-orange-400 border-dashed "
          >
            <Image
              className="h-full  w-full  "
              src={"/dashbord/upload-img.svg"}
              alt="undraow"
              width={1024}
              height={1280}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Input_Image;
