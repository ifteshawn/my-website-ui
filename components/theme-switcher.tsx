import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="sm:bg-white dark:sm:bg-gray-950  bg-opacity-60 sm:w-[3rem] sm:h-[3rem] 
      sm:border border-white border-opacity-60 shadow-lg rounded-full 
      flex items-center justify-center hover:scale-[1.08] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
