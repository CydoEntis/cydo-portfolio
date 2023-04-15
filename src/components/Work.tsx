import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import WorkImage from "./WorkImage";
import WorkOverview from "./WorkOverview";
import ContentWrapper from "./ContentWrapper";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
};

function Work({ imageUrl, title, description }: Props) {
  return (
    <ContentWrapper>
      <Flex direction="row" justifyContent="center">
        <WorkImage imageUrl={imageUrl} />
        <WorkOverview title={title} description={description} />
      </Flex>
    </ContentWrapper>
  );
}

export default Work;
