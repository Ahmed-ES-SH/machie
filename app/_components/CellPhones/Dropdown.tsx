import React from "react";

const Dropdown: React.FC<{ lines: string[] }> = ({ lines }) => {
  return (
    <>
      <ul className="absolute z-[999] top-8 right-2 w-fit h-fit px-2 py-2 bg-white border rounded-md shadow-sm dark:bg-secend_dash">
        {lines.map((line: string, index: number) => (
          <li
            className="py-2 px-1 whitespace-nowrap cursor-pointer hover:bg-sky-500 hover:text-white rounded-sm duration-200"
            key={index}
          >
            {line}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
