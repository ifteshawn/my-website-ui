"use client";
import React from "react";
import Project from "./projectComponent";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { ProfileData, ProjectData } from "@/lib/types";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Projects(props: ProfileData) {
  const { ref } = useSectionInView("Projects", 1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? (props.projects?.length ?? 0) - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === (props.projects?.length ?? 0) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

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
    <motion.section
      id="projects"
      ref={ref}
      className="scroll-mt-28"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      {" "}
      <h2 className="h2 text-center mb-12">Projects</h2>
      <div className="flex bg-center max-w-3xl relative group" {...handlers}>
        {props.projects?.map((item: ProjectData, itemIndex: any) => {
          return (
            <div
              key={itemIndex}
              className={`flex ${
                itemIndex === currentIndex ? "flex" : "hidden"
              }`}
            >
              <Project {...item} />
            </div>
          );
        })}

        {/* <!-- Slider indicators --> */}
        <div className="absolute flex items-center justify-center gap-x-2 bottom-0 w-full mb-4">
          {props.projects?.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className={`${
                  itemIndex === currentIndex
                    ? "bg-white"
                    : //   : "bg-white/20 dark:bg-gray-800/20"
                      "bg-white/40"
                } w-2 h-2 rounded-full cursor-pointer`}
                data-carousel-indicator={itemIndex}
                onClick={() => setCurrentIndex(itemIndex)}
              />
            );
          })}
        </div>
        {/* <!-- Slider controls --> */}
        <BsChevronCompactLeft
          onClick={prevSlide}
          className="absolute top-1/2 -translate-x-0 -translate-y-1/2 left-5 text-3xl rounded-full p-2 bg-black/20 text-white cursor-pointer hidden group-hover:flex"
        />
        <BsChevronCompactRight
          onClick={nextSlide}
          className="absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 text-3xl rounded-full p-2 bg-black/20 text-white cursor-pointer hidden group-hover:flex"
        />
      </div>
    </motion.section>
  );
}
