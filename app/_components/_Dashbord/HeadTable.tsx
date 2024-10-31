import React from "react";
import Link from "next/link";
import { UserRoundPlus } from "lucide-react";

interface type {
  title: string;
  linktitle: string;
  path: string;
}

const HeadTable: React.FC<type> = ({ title, linktitle, path }) => {
  return (
    <>
      <div className="head flex items-center justify-between border-b px-2 border-gray-300/30 pb-4">
        <h1 className="text-xl dark:text-white  ">{title}</h1>
        {path != "" && (
          <Link
            className="px-3 py-1 bg-orange-400 rounded-md dark:text-white flex items-center gap-2 border border-transparent hover:border-orange-400 hover:border  hover:bg-transparent hover:scale-110 duration-200"
            href={path}
          >
            <p>{linktitle}</p>
            <UserRoundPlus />
          </Link>
        )}
      </div>
    </>
  );
};

export default HeadTable;
