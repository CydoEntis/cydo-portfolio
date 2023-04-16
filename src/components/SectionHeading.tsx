import { Badge, Flex, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  text: string;
};

function SectionHeading({ text }: Props) {
  return (
    <Flex
      pt="5rem"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading textTransform="uppercase">{text}</Heading>
      <Badge my={5} bg="#B7FE00" h="6px" w="30px" borderRadius=".8rem"></Badge>
    </Flex>
  );
}

export default SectionHeading;