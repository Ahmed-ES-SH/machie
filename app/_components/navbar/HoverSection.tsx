import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faClock,
  faLaptop,
  faMobileScreenButton,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import HoverComponentslide from "./HoverComponentslide";
import {
  cellphoneslinks,
  computerlinks,
  smartwatchlinks,
  tvlinks,
} from "@/app/constants/constantsDetails";
const HoverSection = () => {
  return (
    <>
      <li className=" group flex items-center py-4 justify-between  p-4 cursor-pointer hover:bg-[#ddd] dark:hover:bg-main_dash   ">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            color="gray"
            width={14}
            icon={faMobileScreenButton}
          />
          <p>Cell Phones</p>
        </div>
        <FontAwesomeIcon color="gray" width={14} icon={faAngleRight} />
        <div className="group-hover:visible invisible rounded-md absolute bg-white dark:bg-main_bar h-[584px] w-[450px] shadow-lg top-0 left-[102%] z-[999999999] flex">
          <HoverComponentslide
            data={cellphoneslinks.links}
            title={cellphoneslinks.title}
            imgsrc="/images/hover-1.png"
            state={true}
          />
        </div>
      </li>
      <li className=" group  flex items-center py-4 justify-between  p-4 cursor-pointer hover:bg-[#ddd] dark:hover:bg-main_dash ">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon color="gray" width={14} icon={faLaptop} />
          <p>Computers & Accessories</p>
        </div>
        <FontAwesomeIcon color="gray" width={14} icon={faAngleRight} />
        <div className="group-hover:visible invisible rounded-md absolute bg-white dark:bg-main_bar h-[584px] w-[450px] shadow-lg top-0 left-[102%] z-[999999999] flex">
          <HoverComponentslide
            data={computerlinks.links}
            title={computerlinks.title}
            imgsrc="/images/hover-3.png"
            state={true}
          />
        </div>
      </li>
      <li className=" group  flex items-center py-4 justify-between  p-4 cursor-pointer hover:bg-[#ddd] dark:hover:bg-main_dash ">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon color="gray" width={14} icon={faTv} />
          <p>Television & Video</p>
        </div>
        <FontAwesomeIcon color="gray" width={14} icon={faAngleRight} />
        <div className="group-hover:visible invisible rounded-md absolute bg-white dark:bg-main_bar h-[584px] w-[450px] shadow-lg top-0 left-[102%] z-[999999999] flex">
          <HoverComponentslide
            imgsrc="/images/hover-4.png"
            state={false}
            data={tvlinks.links}
            title={tvlinks.title}
          />
        </div>
      </li>
      <li className=" group  flex items-center py-4 justify-between  p-4 cursor-pointer hover:bg-[#ddd] dark:hover:bg-main_dash ">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon color="gray" width={14} icon={faClock} />
          <p>Smartwatches</p>
        </div>
        <FontAwesomeIcon color="gray" width={14} icon={faAngleRight} />
        <div className="group-hover:visible invisible rounded-md absolute bg-white dark:bg-main_bar h-[584px] w-[450px] shadow-lg top-0 left-[102%] z-[999999999] flex">
          <HoverComponentslide
            state={true}
            data={smartwatchlinks.links}
            title={smartwatchlinks.title}
            imgsrc="/images/hover-2.png"
          />
        </div>
      </li>
    </>
  );
};

export default HoverSection;
