"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import { Experience, ProfileData } from "@/lib/types";
import { LuGraduationCap } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";

const icons = [
  { icon: React.createElement(LuGraduationCap) },
  { icon: React.createElement(CgWorkAlt) },
  { icon: React.createElement(FaReact) },
  { icon: React.createElement(FaReact) },
];

export default function Experience(props: ProfileData) {
  const { theme } = useTheme();
  return (
    <section>
      <VerticalTimeline
        animate={true}
        lineColor={`${
          theme === "light" ? "#606971" : "rgba(255, 255, 255, 0.2)"
        }`}
      >
        {props.experiences?.map((item: Experience, index: any) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={icons[index].icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
              visible={true}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="text-justify !mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
