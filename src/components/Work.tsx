import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import WorkImage from "./WorkImage";
import WorkOverview from "./WorkOverview";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
};

function Work({ imageUrl, title, description }: Props) {
  return (
    <Box p={5}>
      <Flex direction="row">
        <WorkImage imageUrl={imageUrl} />
        <WorkOverview title={title} description={description} />
      </Flex>
    </Box>
  );
}

export default Work;
