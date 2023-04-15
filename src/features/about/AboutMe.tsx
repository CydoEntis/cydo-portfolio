import {
  Badge,
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import Tools from "../../components/Tools";
import AboutText from "../../components/AboutText";
import ContentWrapper from "../../components/ContentWrapper";
import SectionHeading from "../../components/SectionHeading";

type Props = {};

function AboutMe({}: Props) {
  return (
    <Box h="75vh" py={5} bg="#FAFBFB">
      <ContentWrapper>
        <SectionHeading text="about me"/>

        <Flex w="100%" justifyContent="center">
          <AboutText />
          <Tools />
        </Flex>
        </ContentWrapper>
    </Box>
  );
}

export default AboutMe;
