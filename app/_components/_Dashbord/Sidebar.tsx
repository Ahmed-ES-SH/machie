import { sidebardetailes } from "@/app/constants/constantsDashbord";
import { useVariables } from "@/app/context/VariablesContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const { opensidebar } = useVariables();
  const path = usePathname();

  return (
    <>
      <div
        style={{ width: opensidebar ? "200px" : "71px" }}
        className={`relative flex items-center  gap-2 max-xl:${
          opensidebar ? "hidden" : "block"
        }`}
      >
        <div
          style={{ width: opensidebar ? "200px" : "71px" }}
          className={` h-full shadow-md  mt-[120px]  hidden-scrollbar duration-200 border-r dark:border-gray-300/20 border-black/10 text-black dark:text-[#94a3b8] text-[20px] dark:bg-main_bar z-[99]`}
        >
          <div className="mb-[60px] flex flex-col items-start justify-center relative">
            {sidebardetailes.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                style={{
                  backgroundColor: link.path === path ? "purple" : "",
                  color: link.path === path ? "orange" : "",
                }}
                className="group flex items-center relative justify-between w-full px-3 py-6 duration-200 hover:bg-purple-600"
              >
                <div
                  style={{ margin: opensidebar ? "0" : "auto" }}
                  className=""
                >
                  {link.icon}
                </div>
                <p
                  style={{
                    visibility: opensidebar ? "visible" : "hidden",
                    display: opensidebar ? "block" : "none",
                  }}
                  className="text-[14px] w-fit ml-auto whitespace-nowrap"
                >
                  {link.title}
                </p>
                {!opensidebar && (
                  <h2 className="absolute invisible  group-hover:visible z-[9999] text-white top-1/2 -translate-y-1/2 left-[100px] text-[12px] px-2 py-1 bg-orange-500 whitespace-nowrap rounded-md after:content-[''] after:w-0 after:h-0 after:border-t-[5px] after:border-t-transparent after:border-b-[5px] after:border-b-transparent after:border-r-[5px] after:border-r-orange-400 after:absolute after:-left-3 after:top-1/2 after:-translate-y-1/2">
                    {link.title}
                  </h2>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
