import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import WorkList from "./WorkList";
import ContentWrapper from "../../components/wrappers/ContentWrapper";
import SectionHeading from "../../components/headings/SectionHeading";

type Props = {};

function Works({}: Props) {
  return (
    <Box
      minHeight="100vh"
      py={[20, 20, 56, 56]}
      px={[0, 0, 10, 10, 10]}
      id="work"
    >
      <ContentWrapper>
        <SectionHeading text="my work" />
        <WorkList />
      </ContentWrapper>
    </Box>
  );
}

export default Works;
