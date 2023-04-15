import { Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

function HeroText({}: Props) {
  return (
    <>
      <Heading p={8} size="3xl" textTransform="uppercase" textAlign="center" color="white">
        Hey, I'm Cody Stine
      </Heading>
      <Text color="white" textAlign="center" fontSize="2xl">
        A Fullstack developer focused on bringing ideas to life.
      </Text>
      <Text color="white" textAlign="center" fontSize="2xl">
        No project is too big or small.
      </Text>
    </>
  );
}

export default HeroText;
