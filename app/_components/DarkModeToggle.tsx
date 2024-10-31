"use client";
import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-main_dash");
    }
  }, []);

  const toggleDarkMode = () => {
    if (typeof document !== "undefined") {
      setDarkMode((prevMode) => {
        const newMode = !prevMode;
        localStorage.setItem("darkMode", newMode.toString());
        if (newMode) {
          document.documentElement.classList.add("dark");
          document.body.classList.add("bg-main_dash");
        } else {
          document.documentElement.classList.remove("dark");
          document.body.classList.remove("bg-main_dash");
        }
        return newMode;
      });
    }
  };

  return (
    <button className="duration-200" onClick={toggleDarkMode}>
      {darkMode ? (
        <p className="text-[20px]">🌗</p>
      ) : (
        <p className="text-[20px]">🌙</p>
      )}
    </button>
  );
};

export default DarkModeToggle;
