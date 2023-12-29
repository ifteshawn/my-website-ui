"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import Project from "./projectComponent";
import { projectsData } from "@/lib/data";
import { useState, useEffect } from "react";
import { initFlowbite } from "flowbite";

export default function Test() {
  // console.log("Component rendered");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    initFlowbite();
  }, []);

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
      <div className="w-full sm:w-[50%] h-[30rem]">
        <Carousel slideInterval={3000}>
          {projectsData.map((item, itemIndex) => {
            return (
              <div key={itemIndex}>
                {/* <Project {...item} /> */}
              </div>
            );
          })}
        </Carousel>
      </div>
  );
}
