import { Button, Flex, Link, Stack, useColorMode } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function NavList({ children }: Props) {
  return (
    <Flex alignItems={"center"}>
      <Stack direction={"row"} spacing={7}>
        {children}
      </Stack>
    </Flex>
  );
}

export default NavList;
