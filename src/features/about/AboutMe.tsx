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
import FlexWrapper from "../../components/FlexWrapper";

type Props = {};

function AboutMe({}: Props) {
  return (
    <ContentWrapper>
      <SectionHeading text="about me" />
      <FlexWrapper>
        <AboutText />
        <Tools />
      </FlexWrapper>
    </ContentWrapper>
  );
}

export default AboutMe;
