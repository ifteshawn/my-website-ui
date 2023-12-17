import { skillsData } from "@/lib/data";
import React from "react";

export default function Skills() {
  return (
    // <div className="flex flex-col w-full">
    <div className="items-center justify-center">
      {skillsData.map((item, itemIndex) => {
        return (
          <div key={itemIndex} className="">
            <ul className="flex mt-4 mb-5 gap-2">
              <div className="flex sm:justify-end min-w-[7rem] sm:min-w-[11.5rem] md:min-w-[13rem] max-w-[7rem] sm:max-w-none">
                {item.title}:
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool, toolIndex) => {
                  return (
                    <div key={toolIndex} className="">
                      <li
                        className="flex bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-e-lg"
                      >
                        {tool}
                      </li>
                    </div>
                  );
                })}
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
