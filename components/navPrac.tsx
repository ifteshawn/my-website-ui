"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function NavPrac() {
  return (
    <motion.nav
      className="flex items-center fixed bottom-0 right-0 sm:right-[2%] sm:top-1/2 sm:-translate-y-1/2 
      w-full sm:w-[3.25rem] h-[3.5rem] sm:h-max px-8 sm:px-4 sm:py-8 sm:rounded-full z-[999] 
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
                className="group"
              >
                <Link
                  className="hover:text-amber-900 transition-all duration-300"
                  href={link.hash}
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
                  <div>{link.icon}</div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
