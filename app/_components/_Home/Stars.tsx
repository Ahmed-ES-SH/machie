import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface StarsProps {
  goldStars: number;
  grayStars: number;
}
const Stars: React.FC<StarsProps> = ({ goldStars, grayStars }) => {
  return (
    <div className="stars flex items-center gap-1 ml-2 ">
      {Array.from({ length: goldStars }, (_, index) => (
        <FontAwesomeIcon
          className="opacity-50 dark:opacity-100"
          width={17}
          color="gold"
          key={index}
          icon={faStar}
        />
      ))}
      {Array.from({ length: grayStars }, (_, index) => (
        <FontAwesomeIcon
          className="opacity-50"
          width={17}
          color="gray"
          key={index}
          icon={faStar}
        />
      ))}
    </div>
  );
};

export default Stars;
