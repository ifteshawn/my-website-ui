import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import {
  LuHome,
  LuUser2,
  LuBriefcase,
  LuLaptop,
  LuMessageCircle,
  LuMail,
} from "react-icons/lu";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Experience from "@/components/experience";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(LuHome),
  },
  {
    name: "About",
    hash: "#about",
    icon: React.createElement(LuUser2),
  },
  // {
  //   name: "Services",
  //   hash: "#services",
  //   icon: React.createElement(LuBriefcase),
  // },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(LuLaptop),
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(LuMail),
  },
] as const;

export const experiencesData = [
  {
    title: "Software Quality Assurance Engineer",
    location: "JB-Hifi, AU",
    description:
      "Detail-oriented QA Engineer with expertise in designing and executing test strategies. Proficient in manual and automated testing, identifying defects, and collaborating with cross-functional teams to ensure software quality. Effective in fast-paced environments, committed to delivering high-quality software products.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },
  {
    title: "Retail Salesperson",
    location: "JB-Hifi, AU",
    description:
      "Dynamic retail professional specializing in electronics. Demonstrated expertise in customer engagement, product knowledge, and sales. Adept at creating positive shopping experiences, driving sales, and providing tailored product recommendations.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Sales Consultant",
    location: "Hugo Boss, AU",
    description:
      "Results-driven Sales Consultant with a focus on Hugo Boss luxury products. Proven track record in delivering top-notch customer service, driving sales, and exceeding targets. Passionate about the fashion industry and dedicated to creating a premium shopping experience. Adept at product knowledge and maintaining a strong brand image.",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "Finance Assistant",
    location: "British Council, KSA",
    description:
      "Detail-oriented Finance Assistant with a strong foundation in financial processes and data analysis. Proficient in handling financial transactions, reconciliations, and maintaining accurate records. Skilled in utilizing financial software and contributing to the efficient operation of finance departments. Committed to precision, confidentiality, and supporting financial team objectives.",
    icon: React.createElement(FaReact),
    date: "2018 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "https://websiteiftestorage.blob.core.windows.net/$web/corpcomment.png",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "https://websiteiftestorage.blob.core.windows.net/$web/rmtdev.png",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "https://websiteiftestorage.blob.core.windows.net/$web/wordanalytics.png",
  },
] as const;

export const skillsData = [
  {
    title: "Front-End Development",
    icons: [
      React.createElement(FaHtml5),
      React.createElement(FaCss3),
      React.createElement(FaJs),
      React.createElement(FaReact),
      React.createElement(SiNextdotjs),
      React.createElement(SiFramer),
      React.createElement(FaWordpress),
    ],
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "jQuery",
      "Tailwind CSS",
      "Framer",
      "Jest",
    ],
  },
  {
    title: "Back-End Development",
    icons: [
      React.createElement(FaHtml5),
      React.createElement(FaCss3),
      React.createElement(FaJs),
      React.createElement(FaReact),
      React.createElement(SiNextdotjs),
      React.createElement(SiFramer),
      React.createElement(FaWordpress),
    ],
    tools: [".NET", "C#", "Java", "LINQPad", "xUnit"],
  },
  {
    title: "Database",
    icons: [],
    tools: ["MsSQL server", "Azure Cosmos DB", "Mongo DB"],
  },
  {
    title: "Other Skills",
    icons: [],
    tools: ["Postman", "Postman automation", "Github desktop"],
  },
] as const;

//  about data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-End Development",
        icons: [
          React.createElement(FaHtml5),
          React.createElement(FaCss3),
          React.createElement(FaJs),
          React.createElement(FaReact),
          React.createElement(SiNextdotjs),
          React.createElement(SiFramer),
          React.createElement(FaWordpress),
        ],
        tools: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React.js",
          "Next.js",
          "jQuery",
          "Tailwind CSS",
          "Framer motion",
          "Jest",
        ],
      },
      {
        title: "Back-End Development",
        icons: [
          React.createElement(FaHtml5),
          React.createElement(FaCss3),
          React.createElement(FaJs),
          React.createElement(FaReact),
          React.createElement(SiNextdotjs),
          React.createElement(SiFramer),
          React.createElement(FaWordpress),
        ],
        tools: [".NET", "C#", "Java", "LINQPad", "xUnit"],
      },
      {
        title: "Database",
        icons: [],
        tools: ["MsSQL server", "Azure Cosmos DB", "Mongo DB"],
      },
      {
        title: "Other Skills",
        icons: [],
        tools: ["Postman", "Postman automation", "Github desktop"],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
          "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
      },
      {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
          "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
      },
      {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
          "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Azure Fundamentals Certification - Microsoft",
        stage: "2023",
      },
      {
        title:
          "Master of Software Design & Development with distinction - Central Queensland University, Rockhampton, AU",
        stage: "2022",
      },
      {
        title:
          "Bachelor of Economics (Specialization: Finance) - International Islamic University, Kuala Lumpur, MY",
        stage: "2018",
      },
    ],
  },
];

// credentials data
export const credentialsData = [
  {
    title: "Azure Fundamentals Certification",
    institute: "Microsoft",
    description:
      "Gained proficiency in foundational Azure concepts. Demonstrated expertise in understanding cloud services, Azure pricing, and basic cloud computing principles. Certified to navigate the Azure portal, deploy virtual machines, and grasp key cloud concepts essential for cloud-based solutions.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Master of Software Design & Development with distinction",
    institute: "CQUniversity, AU",
    description:
      "Completed Master's in Software Design and Development with Distinction, emphasizing advanced skills in software engineering. Proven ability in modern development methodologies and practices. Recognized for academic excellence.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Bachelor of Economics (Specialization: Finance)",
    institute: "IIUM, MY",
    description:
      "Acquired a solid foundation in economic theory and financial principles. Developed analytical and research skills to assess and navigate financial landscapes.",
    icon: React.createElement(FaReact),
    date: "2018",
  },
] as const;
