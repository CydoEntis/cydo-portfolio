import { Box } from "@chakra-ui/react";
import React from "react";
import Work from "./Work";

import Blueprint from "../../assets/Blueprint.png"
import AmiiboParty from "../../assets/Amiibo-Party.png"

const works = [
  {
    id: 1,
    title: "Build Buddy",
    description:
      "Build Buddy is an Age of Empires 4 build order website that allows users to easily search for, create and rate different build orders.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    liveLink: "",
    frontendLink: "",
    backendLink: ""
  },
  {
    id: 2,
    title: "Blueprint",
    description:
      "Blue Print allows users to track and manage all jobs they've applied for in one central place.",
    imageUrl:
      Blueprint,
    liveLink: "https://blueprint-nine.vercel.app/jobs",
    frontendLink: "https://github.com/CydoEntis/blueprint-client",
    backendLink: "https://github.com/CydoEntis/blueprint-api"
  },
  {
    id: 3,
    title: "Amiibo Party",
    description:
      "Amiibo Party helps collectors manage their colletion of Amiibo's, keeping track of all collected and uncollected amiibos.",
    imageUrl:
      AmiiboParty,
    liveLink: "https://amiibo-party-frontend.vercel.app/",
    frontendLink: "https://github.com/CydoEntis/amiibo-party-frontend",
    backendLink: "https://github.com/CydoEntis/amiibo-party-backend"
  },
];

type Props = {};

function WorkList({}: Props) {
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
        />
      ))}
    </>
  );
}

export default WorkList;
