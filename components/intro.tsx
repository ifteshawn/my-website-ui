"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

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
        <div className="h-full container">
          {/* title */}
          <h1 className="h1">
            Transforming Ideas <br /> Into{" "}
            <span className="text-amber-950">Digital Reality</span>
          </h1>
          <br />
          {/* subtitle */}
          <p className=" text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
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
