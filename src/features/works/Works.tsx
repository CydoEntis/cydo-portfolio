import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import WorkList from "./WorkList";
import ContentWrapper from "../../components/wrappers/ContentWrapper";
import SectionHeading from "../../components/headings/SectionHeading";

type Props = {};

function Works({}: Props) {
  return (
    <Box id="work">
      <ContentWrapper>
        <SectionHeading text="my work" />
        <WorkList />
      </ContentWrapper>
    </Box>
  );
}

export default Works;
