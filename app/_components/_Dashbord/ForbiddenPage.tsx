import React from "react";
import styles from "../../Css/forbidden.module.css";
import Link from "next/link";
const ForbiddenPage = () => {
  return (
    <div className={`${styles.body}`}>
      <h1 className={`${styles.text} ${styles.h1}`}>
        <span>403</span>
      </h1>
      <Link
        className="px-8 py-2 text-center text-white text-xl bg-orange-500 cursor-pointer z-[999] mt-11 rounded-md shadow-md"
        href={"/"}
      >
        Home
      </Link>
    </div>
  );
};

export default ForbiddenPage;
