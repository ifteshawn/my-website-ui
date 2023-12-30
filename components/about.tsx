"use client";

import { aboutData } from "@/lib/data";
import React, { useState } from "react";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import { ProfileData } from "@/lib/types";

export default function About(props: ProfileData) {
  const [index, setIndex] = useState(0);

  return (
    <section id="about" className="scroll-mt-28 w-full">
      {/* <div className="flex justify-center gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4"> */}
      <div className="flex justify-center gap-x-4 mb-4">
        {aboutData.map((item, itemIndex) => {
          return (
            <h1
              key={itemIndex}
              className={`${
                index === itemIndex &&
                "text-amber-900 after:w-[100%] after:bg-accent after:transition-all after:duration-300"
              }
            cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </h1>
          );
        })}
      </div>
      {/* <div className="flex justify-center py-2"> */}
      <div className="flex items-center justify-center py-2">
          {aboutData[index].title === "experience" && <Experience {...props} />}
          {aboutData[index].title === "credentials" && <Education {...props}/>}
          {aboutData[index].title === "skills" && <Skills {...props}/>}
      </div>
    </section>
  );
}
