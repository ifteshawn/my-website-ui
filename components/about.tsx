"use client";

import { aboutData } from "@/lib/data";
import React, { useState } from "react";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import { ProfileData } from "@/lib/types";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function About(props: ProfileData) {
  const { ref } = useSectionInView("About", "-20% 0px -80%");
  const [index, setIndex] = useState(0);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="about" ref={ref} className="scroll-mt-28 w-full">
      <div className="flex justify-center gap-x-4 mb-4">
        {aboutData.map((item, itemIndex) => {
          return (
            <motion.h1
              key={itemIndex}
              className={`${
                index === itemIndex &&
                "text-amber-900 after:w-[100%] after:bg-accent after:transition-all after:duration-300"
              }
            cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-black dark:after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              {item.title}
            </motion.h1>
          );
        })}
      </div>
      <div className="flex items-center justify-center py-2">
        {aboutData[index].title === "experience" && <Experience {...props} />}
        {aboutData[index].title === "credentials" && <Education {...props} />}
        {aboutData[index].title === "skills" && <Skills {...props} />}
      </div>
    </section>
  );
}
