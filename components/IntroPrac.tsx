import React from "react";
import Image from "next/image";

export default function IntroPrac() {
  return (
    // <section className="">
    //   <div className="flex bg-primary/60 h-full w-full px-20 pt-10">
    //     {/* text */}
    //     {/* <div className="w-full h-full"> */}
    //       <div
    //         className="text-center flex flex-col justify-center xl:text-left
    //             h-full container mx-auto"
    //       >
    //         {/* title */}
    //         <h1 className="h1">
    //           Transforming Ideas <br /> Into{" "}
    //           <span className="text-amber-950">Digital Reality</span>
    //         </h1>
    //         <br />
    //         {/* subtitle */}
    //         <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //           enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //           nisi ut aliquip ex ea commodo consequat.
    //         </p>
    //       </div>
    //     {/* </div> */}
    //     <div className="max-w-md lg:max-w-none object-cover z-[999] pl-20">
    //       {/* image */}
    //       <Image
    //         src={"/img1.png"}
    //         width={800}
    //         height={800}
    //         alt=""
    //         className="translate-z-0 w-full h-auto rotate-3 rounded-2xl shadow-lg shadow-black/10"
    //       />
    //     </div>
    //   </div>
    // </section>


    <section className="flex flex-col-reverse sm:flex-row gap-y-10 sm:gap-x-[5rem] mt-[4rem] items-center">
        {/* text */}
          <div
            className="h-full container"
          >
            {/* title */}
            <h1 className="h1">
              Transforming Ideas <br /> Into{" "}
              <span className="text-amber-950">Digital Reality</span>
            </h1>
            <br />
            {/* subtitle */}
            <p className=" text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
    </section>
  );
}
