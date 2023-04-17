import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import WorkImage from "./WorkImage";
import WorkOverview from "./WorkOverview";
import ContentWrapper from "../../components/wrappers/ContentWrapper";
import FlexWrapper from "../../components/wrappers/FlexWrapper";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
};

function Work({ imageUrl, title, description }: Props) {
  return (
    <ContentWrapper>
      <FlexWrapper>
        <WorkImage imageUrl={imageUrl} />
        <WorkOverview title={title} description={description} />
      </FlexWrapper>
    </ContentWrapper>
  );
}

export default Work;
