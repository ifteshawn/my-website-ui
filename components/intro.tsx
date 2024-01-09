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
        className="flex flex-col-reverse sm:flex-row gap-y-10 sm:gap-x-[5rem] mt-[1rem]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <div className="flex flex-col items-center sm:max-w-[37.5rem] gap-y-5 text-zinc-600 dark:text-zinc-400">
          <div className="h-full container">
            {/* title */}
            <h1 className="h1 text-black dark:text-zinc-300">
              Hi! I am Ifte. I live on the Sunshine Coast and I am a{" "}
              <span className="text-amber-950 dark:text-white">
                Software Developer.
              </span>
            </h1>
            <br />
            {/* subtitle */}
            <div className="text-justify">
              <h3>
                What got me into this field?{" "}
                <span className="font-semibold text-amber-900 dark:text-white">
                  Short answer?
                </span>{" "}
                - Laziness and a distaste for monotony.
              </h3>
              <br></br>
              <h3>
                <span className="font-semibold text-amber-900 dark:text-white">
                  Long answer? and a sprinkle of wisdom?
                </span>{" "}
                - Well... you might want to grab a coffee for this...
              </h3>
              <p>
                After a degree in economics (which I had no interest in btw), I
                started working in corporate finance, where I soon found myself
                occupied with the mundane tasks associated with the job. Got
                sick of em reeeal quick, prompting me to explore ways of
                automating these tasks. That's when I stumbled upon this magical
                thing called{" "}
                <span className="text-amber-950 dark:text-white">
                  "Programming"
                </span>
                .
              </p>
              <br></br>
              <p>
                My first program was a script I found on Stack Overflow, which I
                somehow modified to streamline Windows tasks, such as attaching
                receipts to a thousand emails and sending them to the right
                recipients with just a click of a button. Imagine doing all of
                that manually... can you blame me?
              </p>
              <br></br>
              <p>
                Honestly, till today I don't know what that script was. But hey,
                everything can lead to a good outcome if you want it to, right?
              </p>
              <br></br>
              <p>
                There were two paths I could have taken— one leading me to
                cultivating my interest in{" "}
                <span className="text-amber-900 dark:text-white">
                  "making life easier"
                </span>{" "}
                a.k.a{" "}
                <span className="text-amber-900 dark:text-white">
                  software development
                </span>{" "}
                (obviously the good), and the other involving hating my job,
                whining about it, sucking it up (as people would often advise),
                and eventually quitting, leading to a cycle of dissatisfaction
                about life. You see where I'm going with this?
              </p>
              <br></br>
              <p>
                The point is, if I hadn't tried to find a way out of the rut I
                was in, I would not have discovered something good. Quitting and
                hating is not the answer. The answer is being patient while we
                find a way. Anyway.. life's a roller coaster. Enjoy it.
              </p>
              <br></br>
              <p>
                This is where you say -{" "}
                <span className="text-amber-900 dark:text-white">
                  "Cool story bro."
                </span>
              </p>
            </div>
          </div>
          <div className="flex w-full mt-[2rem]">
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
            className="translate-z-0 w-full max-w-[15rem] sm:min-w-[18rem] sm:max-w-md rotate-3 rounded-2xl shadow-lg shadow-black/10"
          />
        </div>
      </motion.div>
    </section>
  );
}
