import { Badge, Flex, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  text: string;
};

function SectionHeading({  text }: Props) {
  return (
    <Flex
      pb={20}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        textTransform="uppercase"
        size={["xl", "xl", "xl", "2xl"]}
        variant={{ base: "base" }}
      >
        {text}
      </Heading>
      <Badge my={5} bg="#B7FE00" h="6px" w="30px" borderRadius=".8rem"></Badge>
    </Flex>
  );
}

export default SectionHeading;
