import { Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

function HeroText({}: Props) {
  return (
    <>
      <Heading
        p={[2, 5, 8, 10]}
        size={{ sm: "xl", md: "2xl", lg: "2xl", xl: "3xl", "2xl": "3xl" }}
        textTransform="uppercase"
        textAlign="center"
        variant={{ base: "base" }}
      >
        Hey, I'm Cody Stine
      </Heading>
      <Text
        textAlign="center"
        fontSize={{ sm: "lg", md: "lg", lg: "xl", xl: "2xl", "2xl": "3xl" }}
        variant={{ base: "base" }}
      >
        A Fullstack developer focused on bringing ideas to life.
      </Text>
      <Text
        textAlign="center"
        fontSize={{ sm: "lg", md: "lg", lg: "xl", xl: "2xl", "2xl": "3xl" }}
        variant={{ base: "base" }}
      >
        No project is too big or small.
      </Text>
    </>
  );
}

export default HeroText;
