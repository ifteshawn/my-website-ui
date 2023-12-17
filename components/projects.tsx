'use client'

import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./project";

export default function Projects() {
  return (
    <section>
      <div>
        <div className="flex justify-center gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {/* <div className="text-amber-900 after:w-[100%] after:bg-accent after:transition-all after:duration-300 cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0"> */}
            Projects
          {/* </div> */}
        </div>
        <div>
          {projectsData.map((item, itemIndex) => (
            <React.Fragment key={itemIndex}>
              <Project {...item} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
