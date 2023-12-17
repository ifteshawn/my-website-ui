"use client";
import { projectsData } from "@/lib/data";
import React, { useState } from "react";
import Project from "./projectPrac";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projectsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projectsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      id="projects-carousel"
      className="relative w-full group"
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-full">
        {/* <!-- Items --> */}
        {projectsData.map((item, itemIndex) => {
          return (
            <div
              key={itemIndex}
              className={`${
                itemIndex === currentIndex ? "block" : "hidden"
              } duration-700 ease-in-out ${
                itemIndex < currentIndex
                  ? "-translate-x-full"
                  : itemIndex > currentIndex
                  ? "translate-x-full"
                  : ""
              }`}
              data-carousel-item={itemIndex === currentIndex ? "active" : ""}
            >
              <Project {...item} />
            </div>
          );
        })}
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute flex items-center justify-center gap-x-2 bottom-0 w-full mb-4">
        {projectsData.map((item, itemIndex) => {
          return (
            <div
              key={itemIndex}
              className={`${
                itemIndex === currentIndex
                  ? "bg-white/50"
                  : "bg-white/20 dark:bg-gray-800/20"
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
        data-carousel-prev
      />
      <BsChevronCompactRight
        onClick={nextSlide}
        className="absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 text-3xl rounded-full p-2 bg-black/20 text-white cursor-pointer hidden group-hover:flex"
        data-carousel-next
      />
    </div>
  );
}
