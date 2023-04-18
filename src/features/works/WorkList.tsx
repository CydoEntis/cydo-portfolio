import { Box } from "@chakra-ui/react";
import React from "react";
import Work from "./Work";

const works = [
  {
    id: 1,
    title: "Build Buddy",
    description:
      "Build Buddy is an Age of Empires 4 build order website that allows users to easily search for, create and rate different build orders.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    overviewLink: "",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 2,
    title: "Blueprint",
    description:
      "Blue Print allows users to track and manage all jobs they've applied for in one central place.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    overviewLink: "",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 3,
    title: "Amiibo Party",
    description:
      "Amiibo Party helps collectors manage their colletion of Amiibo's, keeping track of all collected and uncollected amiibos.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    overviewLink: "",
    liveLink: "",
    githubLink: "",
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
        />
      ))}
    </>
  );
}

export default WorkList;
