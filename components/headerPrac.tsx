import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./socials";

export default function headerPrac() {
  return (
    // <header className="absolute top-[1rem] z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <header className="px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={220}
              height={0}
              quality={95}
              alt=""
              priority={true}
              className="h-auto"
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
}
