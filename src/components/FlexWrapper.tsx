import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function FlexWrapper({ children }: Props) {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      direction={{ base: "column", lg: "column", xl: "row" }}
    >
      {children}
    </Flex>
  );
}

export default FlexWrapper;
