"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import ThemeSwitch from "./theme-switcher";
import { useTheme } from "@/context/theme-context";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Nav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme } = useTheme();

  return (
    // <div className="fixed flex sm:flex-col w-full sm:w-[3rem] bottom-0 right-0 sm:right-[9%] sm:top-1/2 sm:-translate-y-1/2">
    <div className="fixed sm:flex-col w-full sm:w-[3rem] bottom-0 sm:right-[1%] sm:top-[60%] sm:-translate-y-1/2">
      <motion.nav
        className="flex h-[3.5rem] items-center justify-center sm:gap-y-[3rem] sm:h-max px-8 sm:px-3.5 sm:py-5 sm:rounded-full z-[999] 
      bg-gray-200/25 border border-white border-opacity-60 shadow-lg shadow-black/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="sm:flex items-center justify-between sm:justify-center w-full">
          <ul className="flex justify-between sm:flex-col gap-y-10 text-2xl">
            {links.map((link) => {
              return (
                <motion.li
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  key={link.hash}
                  className="group relative"
                >
                  <Link
                    className={clsx(
                      "hover:text-amber-900 transition-all duration-300",
                      {
                        "text-amber-900": activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {/* tooltip */}
                    <div className="absolute pr-[4.5rem] right-0 hidden sm:group-hover:flex">
                      <div className="bg-white relative flex items-center p-[6px] rounded-[3px]">
                        <div className="text-[12px] leading-none font-semibold capitalize">
                          {link.name}
                        </div>
                        {/* triangle */}
                        <div
                          className="border-solid border-l-white border-l-8 border-y-transparent
                      border-y-[6px] border-r-0 absolute -right-2"
                        ></div>
                      </div>
                    </div>
                    {/* icon */}
                    <div className="">
                      {link.icon}
                    </div>
                  </Link>
                </motion.li>
              );
            })}
            <div className="flex sm:hidden">
              <ThemeSwitch />
            </div>
          </ul>
        </div>
      </motion.nav>
      <motion.div
        className="items-center hidden sm:flex sm:mt-3 group w-[3rem] h-[3rem] 
      hover:text-amber-900 transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute pr-[4.5rem] right-0 hidden sm:group-hover:flex">
          <div className="bg-white relative flex items-center p-[6px] rounded-[3px]">
            <div className="text-[12px] leading-none font-semibold capitalize">
              {theme == "dark" ? "Light mode" : "Dark mode"}
            </div>
            {/* triangle */}
            <div
              className="border-solid border-l-white border-l-8 border-y-transparent
                      border-y-[6px] border-r-0 absolute -right-2"
            ></div>
          </div>
        </div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="group"
        >
          <ThemeSwitch />
        </motion.div>
      </motion.div>
    </div>
  );
}
