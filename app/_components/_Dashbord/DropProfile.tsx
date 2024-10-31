"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data, data_2 } from "@/app/constants/constantsDashbord";
import { useVariables } from "@/app/context/VariablesContext";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { instance } from "../Api/axios";

const DropProfile = () => {
  const { setopen } = useVariables();
  const router = useRouter();
  const containerRef = useRef<any>(null);
  const handleClickOutside = (event: { target: any }) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setopen(null);
    }
  };

  function handlelogut() {
    try {
      const res = instance.post("/logout");
      router.push("/signin");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        ref={containerRef}
        className="px-4 py-2 w-[270px] h-fit bg-light_bg  dark:bg-[#0f172a] text-black rounded-md border border-gray-300/30 absolute top-[100%] -left-4"
      >
        <div className="info flex items-center gap-3">
          <Image
            className="w-[40px] h-[40px] rounded-full"
            src={"/images/avatar-3.webp"}
            alt="avater"
            width={1024}
            height={1280}
          />
          <div className="flex flex-col items-start gap-1 dark:text-white/20 text-[14px]">
            <p className="dark:text-white/80 ">Dashtail</p>
            <p>@uxuidesigner</p>
          </div>
        </div>
        <div className="py-3 border-b">
          <ul className="dark:text-secend_text text-[15px]">
            {data.map((line, index) => (
              <li
                key={index}
                className="flex cursor-pointer dark:hover:text-white hover:text-purple-400  duration-200 items-center gap-4 py-1 "
              >
                <FontAwesomeIcon icon={line.icon} />
                <p>{line.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-3 ">
          <ul className="dark:text-secend_text  text-[15px] w-full">
            {data_2.map((line: any, index) => (
              <li
                key={index}
                className="dark:hover:text-white hover:text-purple-400 cursor-pointer flex items-center justify-between relative py-2 w-full group duration-200"
              >
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={line.icon} />
                  <p>{line.title}</p>
                </div>
                <FontAwesomeIcon icon={line.icon_2} />
                {line.hoverlinks?.length > 1 && (
                  <div className="duration-100 absolute dark:bg-main_dash bg-light_bg -left-[120px] top-0 w-fit h-fit py-2 border border-gray-300/30   rounded-md group-hover:visible invisible">
                    {line.hoverlinks?.map((link: any, index: number) => (
                      <p key={index} className="py-1 px-4">
                        {link}
                      </p>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li
              onClick={() => handlelogut()}
              className="dark:hover:text-white hover:text-purple-400 cursor-pointer flex items-center justify-between relative py-2 w-full group duration-200"
            >
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faPowerOff} />
                <p>Log out</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropProfile;
