import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Tools from "./Tools";
import AboutText from "./AboutText";
import ContentWrapper from "../../components/wrappers/ContentWrapper";
import SectionHeading from "../../components/headings/SectionHeading";
import FlexWrapper from "../../components/wrappers/FlexWrapper";

type Props = {};

function AboutMe({}: Props) {
  return (
    <Flex
      id="about"
      w="100%"
      bg={useColorModeValue("#FAFBFB", "#141414")}
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      py={56}
      px={[2, 2, 10, 10]}
    >
      <ContentWrapper>
        <SectionHeading text="about me" />
        <FlexWrapper>
          <AboutText />
          <Tools />
        </FlexWrapper>
      </ContentWrapper>
    </Flex>
  );
}

export default AboutMe;
