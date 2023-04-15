import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectOverview from "./ProjectOverview";

type Props = { 
    imageUrl: string 
    title: string
    description: string
};

function ProjectCard({ imageUrl, title, description }: Props) {
  return (
    <Flex direction="row">
        <ProjectImage imageUrl={imageUrl} />
        <ProjectOverview title={title} description={description} />
    </Flex>
  );
}

export default ProjectCard;
