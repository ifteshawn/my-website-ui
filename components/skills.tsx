import { ProfileData, Skill } from "@/lib/types";
import React from "react";
import { motion } from "framer-motion";

export default function Skills(props: ProfileData) {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.17 * index,
      },
    }),
  };

  return (
    // <div className="flex flex-col w-full">
    <div className="items-center justify-center">
      {props.skills?.map((item: Skill, itemIndex: any) => {
        return (
          <div key={itemIndex} className="">
            <motion.ul
              className="flex mt-4 mb-5 gap-2"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={itemIndex}
            >
              <div className="flex sm:justify-end min-w-[7rem] sm:min-w-[12rem] md:min-w-[13rem] max-w-[7rem] sm:max-w-none">
                {item.title}:
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tools?.map((tool, toolIndex) => {
                  return (
                    <div key={toolIndex} className="">
                      <li
                        className="flex bg-black/[0.7] dark:bg-white/10 dark:text-white/80 px-3 py-1 
                        text-[0.9rem] uppercase tracking-wider text-white rounded-e-lg 
                        dark:hover:bg-white/20 transition-all"
                      >
                        {tool}
                      </li>
                    </div>
                  );
                })}
              </div>
            </motion.ul>
          </div>
        );
      })}
    </div>
  );
}
