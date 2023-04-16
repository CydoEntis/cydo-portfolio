import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import WorkList from "../../components/WorkList";
import ContentWrapper from "../../components/ContentWrapper";
import SectionHeading from "../../components/SectionHeading";

type Props = {};

function Works({}: Props) {
  return (
    <Box p={10}>
      <ContentWrapper>
        <SectionHeading text="my work"/>
        <WorkList />
      </ContentWrapper>
    </Box>
  );
}

export default Works;
