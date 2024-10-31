import Image from "next/image";
import Link from "next/link";
import React from "react";

interface types {
  data: string[];
  imgsrc: string;
  title: string;
  state: boolean;
}

const HoverComponentslide: React.FC<types> = ({
  data,
  imgsrc,
  title,
  state,
}) => {
  return (
    <>
      {state && (
        <Image
          src={imgsrc}
          alt="image"
          width={1024}
          height={1024}
          className="w-full h-full absolute object-fill"
        />
      )}
      <div className="links z-[99999999999] pt-4 px-4 w-1/2 text-[14px] font-semibold flex flex-col items-start gap-4">
        <h1 className="h-[18px] font-bold">{title}</h1>
        <ul className="flex items-start flex-col gap-[20px] ">
          {data &&
            data.map((link, index) => (
              <Link
                className="ml-1 hover:ml-2 duration-100 hover:text-gray-300 dark:text-white dark:hover:text-secend_text"
                key={index}
                href={"/"}
              >
                {link}
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
};

export default HoverComponentslide;
