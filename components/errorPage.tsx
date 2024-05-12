import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <div className="flex flex-col">
      <h1 className="h1">Oops! Haywire somewhere!</h1>
      <br />
      <h2
        className="
        text-lg leading-10"
      >
        This will be fixed as soon as I realize that something's gone wrong.
      </h2>
      <motion.div
        className="flex flex-col items-center"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src={"/floatingSpaceman.png"}
          alt="404"
          width={500}
          height={500}
        />
      </motion.div>
    </div>
  );
}
