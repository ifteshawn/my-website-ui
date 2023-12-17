"use client";

import { aboutData } from "@/lib/data";
import React, { useState } from "react";

export default function About() {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <section>
      <div className="px-20">
        <div className="flex justify-center gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-amber-900 after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                }
            cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                {"stage" in item && <div>{item.stage}</div>}
                {"icons" in item && (
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
