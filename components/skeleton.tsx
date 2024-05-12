import { aboutData } from "@/lib/data";
import React from "react";

export default function Skeleton() {
  return (
    <div className="w-[90%] sm:w-[100%] gap-y-20 h-full animate-pulse">
      {/* text */}
      <div className="flex flex-col-reverse justify-end sm:justify-center mt-[2rem] mb-[2rem] sm:flex-row gap-y-10 sm:gap-x-[5rem] sm:w-[100%] ">
        <div className="flex flex-col w-[100%] sm:max-w-[37.5rem] gap-y-5">
          <div className="container">
            {/* title */}
            <h1 className="h1 h-4 w-1/2 rounded-xl bg-gray-600"></h1>
            <br />
            {/* text*/}
            <div className="text-justify">
              <br />
              <p className="mt-2 block h-3 rounded-xl bg-gray-600 text-sm font-medium"></p>
              <br />
              <p className="mt-2 block h-3 rounded-xl bg-gray-600 text-sm font-medium"></p>
              <br />
              <br />
              <p className="mt-2 block h-3 rounded-xl bg-gray-600 text-sm font-medium"></p>
              <br />
              <p className="mt-2 block h-3 rounded-xl bg-gray-600 text-sm font-medium"></p>
              <br />
              <p className="mt-2 block h-3 rounded-xl bg-gray-600 text-sm font-medium"></p>
              <br />
              <br />
              <p className="mt-2 block h-3 rounded-xl bg-gray-600 text-sm font-medium"></p>
              <br />
              <p className="mt-2 block h-3 rounded-xl bg-gray-600 text-sm font-medium"></p>
            </div>
          </div>
          {/* Contact btn */}
          <div className=" mt-[2rem] h-[1.5rem] w-[30%] bg-gray-600 rounded-full"></div>
        </div>
        <div className="aspect-square max-h-[18rem] max-w-[18rem] sm:min-h-[20rem] sm:min-w-[22rem] h-auto sm:max-h-[22rem] rounded-2xl rotate-3 bg-gray-300">
          {/* image */}
        </div>
      </div>

      {/* // about section */}
      <div className="flex-col my-[5rem]">
        <div className="flex justify-center gap-x-4 mb-4">
          {aboutData.map((item, itemIndex) => {
            return <h1 key={itemIndex} className="h1 h-6 w-[8rem] rounded-xl bg-gray-600"></h1>;
          })}
        </div>
        <div className="flex justify-center">
          <div className="w-[100%] sm:w-[80%] h-[25rem] mt-[3rem] bg-gray-300 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
