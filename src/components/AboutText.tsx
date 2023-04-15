import { Box, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

function AboutText({}: Props) {
  return (
    <GridItem p={10}>
      <Heading>Get to know me!</Heading>
      <Text fontSize="xl" py={5}>
        I'm a <strong>Full Stack Developer</strong> focused on building
        applications that lead to the success of the overall product. Over my
        years of development I have acquired the <strong>tools</strong> to
        complete any task presented to me. Check out some of my{" "}
        <strong>work</strong>, and don't hesitate to <strong>contact me</strong>{" "}
        if you are interested in working with me. No project is to big or small
        for me to tackle. 🙂
      </Text>
    </GridItem>
  );
}

export default AboutText;
