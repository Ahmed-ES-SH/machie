import Image from "next/image";
import React from "react";

const DropLangs = () => {
  const data = [
    {
      title: "EN",
      img: "/images/flag-1.webp",
    },
    {
      title: "BN",
      img: "/images/flag-2.webp",
    },
    {
      title: "AR",
      img: "/images/flag-3.webp",
    },
  ];
  return (
    <>
      <div className="w-[100px] h-fit absolute top-[100%] -left-9 p-2 bg-light_bg  dark:bg-[#0f172a] rounded-md dark:text-white text-black shadow-md ">
        <ul className="flex flex-col items-start gap-4 w-full">
          {data.map((lang, index) => (
            <li
              key={index}
              className="flex items-center justify-between cursor-pointer px-2 w-full hover:bg-white duration-200 hover:text-black rounded-md py-2 "
            >
              <Image
                src={lang.img}
                alt="lang"
                width={1024}
                height={1280}
                className="w-[30px] h-[30px] rounded-full"
              />
              <p>{lang.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropLangs;
