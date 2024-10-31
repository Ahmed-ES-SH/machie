"use client";
import React from "react";
import { useTimer } from "react-timer-hook";

const CountdownTimer = () => {
  const time = new Date();
  time.setDate(time.getDate() + 1); // إضافة يوم
  time.setHours(time.getHours() + 12); // إضافة 12 ساعة

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: time,
  });

  return (
    <>
      <div className="w-3/4 py-3 m-auto flex items-center justify-center gap-3 ">
        <span className="p-2 text-center bg-gray-200 dark:bg-secend_dash dark:text-secend_text rounded-sm">
          {days}
        </span>
        :
        <span className="p-2 text-center bg-gray-200 dark:bg-secend_dash dark:text-secend_text rounded-sm">
          {hours}
        </span>
        :
        <span className="p-2 text-center bg-gray-200 dark:bg-secend_dash dark:text-secend_text rounded-sm">
          {minutes}
        </span>
        :
        <span className="p-2 text-center bg-gray-200 dark:bg-secend_dash dark:text-secend_text rounded-sm">
          {seconds}
        </span>
      </div>
      <h2 className="text-[13px] text-center text-gray-400 dark:text-white">
        Remains until the end of the offer
      </h2>
    </>
  );
};

export default CountdownTimer;
