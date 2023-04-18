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
  liveLink: string;
  frontendLink: string;
  backendLink: string;
};

function Work({
  liveLink,
  frontendLink,
  backendLink,
  imageUrl,
  title,
  description,
}: Props) {
  return (
    <ContentWrapper>
      <FlexWrapper >
        <WorkImage imageUrl={imageUrl} />
        <WorkOverview
          liveLink={liveLink}
          frontendLink={frontendLink}
          backendLink={backendLink}
          title={title}
          description={description}
        />
      </FlexWrapper>
    </ContentWrapper>
  );
}

export default Work;
