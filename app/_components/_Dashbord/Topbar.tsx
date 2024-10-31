import {
  faAngleLeft,
  faBell,
  faEnvelopeOpen,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import DropLangs from "./DropLangs";
import { useVariables } from "@/app/context/VariablesContext";
import DropMessages from "./DropMessages";
import DropNotfaction from "./DropNotfaction";
import DropProfile from "./DropProfile";
import SearchPart from "./SearchPart";
import DarkModeToggle from "../DarkModeToggle";
import Link from "next/link";

const Topbar = () => {
  const { open, setopen, opensidebar } = useVariables();

  return (
    <>
      <div className="z-[999] w-full fixed top-0 left-0 h-[60px]  shadow-md border-b dark:border-gray-400/20 border-black/10 dark:bg-main_bar bg-[#eee]   flex items-center justify-between ">
        <div className="logo   flex items-center justify-center dark:text-gray-300/50 text-black   h-full">
          <Link href={"/"}>
            <div className="w-fit">
              <Image
                style={{ width: "50px" }}
                src={"/images/icon.png"}
                alt="logo"
                width={1280}
                height={1024}
                className="  h-[35px]  px-2 ml-2 "
              />
            </div>
          </Link>
          <SearchPart />
        </div>
        <div className="h-full flex items-center relative gap-8 mr-12">
          <DarkModeToggle />
          <div
            onClick={() => setopen(open === "langs" ? "" : "langs")}
            className="langs  cursor-pointer flex items-center gap-2"
          >
            <Image
              src={"/images/flag-1.webp"}
              alt="flag"
              width={1024}
              height={1280}
              className="w-[25px] h-[25px] rounded-full"
            />
            <p>EN</p>
            {open === "langs" && <DropLangs />}
          </div>
          <div
            className="relative cursor-pointer max-md:hidden"
            onClick={() => setopen(open === "messages" ? "" : "messages")}
          >
            <FontAwesomeIcon
              className="dark:text-gray-300/40 text-black"
              width={18}
              icon={faEnvelopeOpen}
            />
            <span className="w-[20px] h-[20px] text-[12px] text-white flex items-center justify-center rounded-full border-2 bg-purple-600 absolute -top-4 left-2">
              3
            </span>
            {open === "messages" && <DropMessages />}
          </div>
          <div
            className="relative cursor-pointer max-md:hidden"
            onClick={() => setopen(open === "nots" ? "" : "nots")}
          >
            <FontAwesomeIcon
              className="dark:text-gray-300/40 text-black"
              width={19}
              icon={faBell}
            />
            <span className="w-[20px] h-[20px] text-[12px] text-white flex items-center justify-center rounded-full border-2 bg-purple-600 absolute -top-4 left-2">
              5
            </span>
            {open === "nots" && <DropNotfaction />}
          </div>
          <div
            className="avatar cursor-pointer mr-3 "
            onClick={() => setopen(open === "profile" ? "" : "profile")}
          >
            <Image
              className="w-[40px] h-[40px] rounded-full"
              src={"/images/avatar-3.webp"}
              alt="avater"
              width={1024}
              height={1280}
            />
            {open === "profile" && <DropProfile />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
