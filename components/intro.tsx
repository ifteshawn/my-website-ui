"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BsArrowRight } from "react-icons/bs";

export default function Intro() {
  const { ref } = useSectionInView("Home", "-40% 0px 0px");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section id="home" ref={ref} className="scroll-mt-28">
      {/* text */}
      <motion.div
        className="flex flex-col-reverse sm:flex-row gap-y-10 sm:gap-x-[5rem] mt-[1rem] items-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <div>
          <div className="h-full container">
            {/* title */}
            <h1 className="h1">
              Hi! I am Iftekhar. <br /> A{" "}
              <span className="text-amber-950 dark:text-white">Software Developer</span>
            </h1>
            <br />
            {/* subtitle */}
            <p className=" text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
          <div className="w-[14rem] mt-[2rem]">
            <Link
              href="#contact"
              className="group bg-black/[0.8] dark:bg-white text-white dark:text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
        <div className="lg:max-w-none object-cover z-[999]">
          {/* image */}
          <Image
            src={"/img1.png"}
            width={800}
            height={800}
            alt=""
            className="translate-z-0 w-full max-w-[12rem] sm:max-w-md rotate-3 rounded-2xl shadow-lg shadow-black/10"
          />
        </div>
      </motion.div>
    </section>
  );
}
