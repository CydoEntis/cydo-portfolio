import { Box, Button, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Subheading from "./Subheading";
import ContentContainer from "./ContentContainer";

type Props = {};

function AboutText({}: Props) {
  return (
    <ContentContainer>
      <Subheading text="Get to know me!" />
      <Text fontSize="2xl" lineHeight={10}>
        I'm a <strong>Full Stack Developer</strong> focused on building
        applications that lead to the success of the overall product. Over my
        years of development I have acquired the <strong>tools</strong> to
        complete any task presented to me. Check out some of my{" "}
        <strong>work</strong>, and don't hesitate to <strong>contact me</strong>{" "}
        if you are interested in working with me. No project is to big or small
        for me to tackle. 🙂
      </Text>
      <Button my={5} p={8} w="250px" fontSize="2xl" bg="#B7FD00">
        Contact Me
      </Button>
    </ContentContainer>
  );
}

export default AboutText;
