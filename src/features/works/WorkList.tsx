import { Box } from "@chakra-ui/react";
import React from "react";
import Work from "./Work";

import Blueprint from "../../assets/Blueprint.png";
import AmiiboParty from "../../assets/Amiibo-Party.png";

const works = [
  {
    id: 1,
    title: "Build Buddy",
    description:
      "Build Buddy is an Age of Empires 4 build order website that allows users to easily search for, create and rate different build orders.",
    imageUrl:
      "https://www.ageofempires.com/wp-content/uploads/2021/08/AoE4_KeyArt_1920x1080.jpg",
    liveLink: "",
    frontendLink:
      "https://github.com/CydoEntis/age-of-empires-build-orders-client",
    backendLink:
      "https://github.com/CydoEntis/age-of-empires-4-build-orders-api",
    tools: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "Material UI",
      },
      {
        id: 3,
        name: "React",
      },
      {
        id: 4,
        name: "Redux",
      },
      {
        id: 5,
        name: "Java",
      },
      {
        id: 6,
        name: "Spring Boot",
      },
      {
        id: 7,
        name: "MySql",
      },
    ],
  },
  {
    id: 2,
    title: "Blueprint",
    description:
      "Blue Print allows users to track and manage all jobs they've applied for in one central place.",
    imageUrl: Blueprint,
    liveLink: "https://blueprint-nine.vercel.app/jobs",
    frontendLink: "https://github.com/CydoEntis/blueprint-client",
    backendLink: "https://github.com/CydoEntis/blueprint-api",
    tools: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "Tailwind CSS",
      },
      {
        id: 3,
        name: "React",
      },
      {
        id: 4,
        name: "Node",
      },
      {
        id: 5,
        name: "Express",
      },
      {
        id: 6,
        name: "Mongo DB",
      },
      {
        id: 7,
        name: "Redux",
      },
    ],
  },
  {
    id: 3,
    title: "Amiibo Party",
    description:
      "Amiibo Party helps collectors manage their colletion of Amiibo's, keeping track of all collected and uncollected amiibos.",
    imageUrl: AmiiboParty,
    liveLink: "https://amiibo-party-frontend.vercel.app/",
    frontendLink: "https://github.com/CydoEntis/amiibo-party-frontend",
    backendLink: "https://github.com/CydoEntis/amiibo-party-backend",
    tools: [
      {
        id: 1,
        name: "JavaScript",
      },

      {
        id: 2,
        name: "CSS3",
      },
      {
        id: 3,
        name: "React",
      },
      {
        id: 4,
        name: "Node",
      },
      {
        id: 5,
        name: "Express",
      },
      {
        id: 6,
        name: "Mongo DB",
      },
    ],
  },
];

export interface Tool {
  id: number;
  name: string;
}

function WorkList() {
  return (
    <>
      {works.map((work) => (
        <Work
          key={work.id}
          title={work.title}
          description={work.description}
          imageUrl={work.imageUrl}
          liveLink={work.liveLink}
          frontendLink={work.frontendLink}
          backendLink={work.backendLink}
          tools={work.tools}
        />
      ))}
    </>
  );
}

export default WorkList;
