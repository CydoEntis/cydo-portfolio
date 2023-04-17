import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Tools from "./Tools";
import AboutText from "./AboutText";
import ContentWrapper from "../../components/wrappers/ContentWrapper";
import SectionHeading from "../../components/headings/SectionHeading";
import FlexWrapper from "../../components/wrappers/FlexWrapper";

type Props = {};

function AboutMe({}: Props) {
  return (
    <Box
      id="about"
      minHeight="70vh"
      w="100%"
      bg={useColorModeValue("#FAFBFB", "#141414")}
    >
      <ContentWrapper>
        <SectionHeading text="about me" />
        <FlexWrapper>
          <AboutText />
          <Tools />
        </FlexWrapper>
      </ContentWrapper>
    </Box>
  );
}

export default AboutMe;
