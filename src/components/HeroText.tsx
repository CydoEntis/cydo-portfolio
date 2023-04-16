import { Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

function HeroText({}: Props) {
  return (
    <>
      <Heading p={[2, 5, 8, 10]} size={["2xl", "2xl", "2xl", "3xl"]} textTransform="uppercase" textAlign="center" color="white">
        Hey, I'm Cody Stine
      </Heading>
      <Text color="white" textAlign="center" fontSize={["lg", "xl", "xl", "2xl"]}>
        A Fullstack developer focused on bringing ideas to life.
      </Text>
      <Text color="white" textAlign="center" fontSize={["lg", "xl", "xl", "2xl"]}>
        No project is too big or small.
      </Text>
    </>
  );
}

export default HeroText;
