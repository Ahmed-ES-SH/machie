import React from "react";
import {
  faAngleLeft,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useVariables } from "@/app/context/VariablesContext";
const SearchPart = () => {
  const { setopensidebar, opensidebar } = useVariables();
  return (
    <>
      <div className="h-full  px-4 ml-3 flex items-center gap-6 border-l border-gray-400/20">
        <FontAwesomeIcon
          onClick={() => setopensidebar(!opensidebar)}
          className=" cursor-pointer"
          width={12}
          icon={opensidebar ? faBars : faAngleLeft}
        />
        <div className="flex items-center gap-3 max-md:hidden">
          <FontAwesomeIcon className="" width={12} icon={faMagnifyingGlass} />

          <p className="p-1 text-[14px]">Search...</p>
        </div>
      </div>
    </>
  );
};

export default SearchPart;
