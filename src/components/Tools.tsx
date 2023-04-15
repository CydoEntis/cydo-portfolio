import { Box, GridItem, Heading, Tag, Wrap } from "@chakra-ui/react";
import React from "react";
import Subheading from "./Subheading";
import ContentContainer from "./ContentContainer";

const tools = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS3",
  },
  {
    id: 3,
    name: "JavaScript",
  },
  {
    id: 4,
    name: "TypeScript",
  },
  {
    id: 5,
    name: "Sass",
  },
  {
    id: 6,
    name: "React",
  },
  {
    id: 7,
    name: "Node Js",
  },
  {
    id: 8,
    name: "MongoDB",
  },
  {
    id: 9,
    name: "Express",
  },
  {
    id: 10,
    name: "Java",
  },
  {
    id: 11,
    name: "Spring Boot",
  },
  {
    id: 12,
    name: "JUnit",
  },
  {
    id: 13,
    name: "Mockito",
  },
  {
    id: 14,
    name: "MySql",
  },
  {
    id: 15,
    name: "Material UI",
  },
  {
    id: 16,
    name: "Tailwind Css",
  },
  {
    id: 17,
    name: "Chakra UI",
  },
];

type Props = {};

function Tools({}: Props) {
  return (
    <ContentContainer>
      <Subheading text="My tools" />
      <Wrap spacing="12px">
        {tools.map((tool) => (
          <Tag p={5} key={tool.id}>
            {tool.name}
          </Tag>
        ))}
      </Wrap>
    </ContentContainer>
  );
}

export default Tools;
