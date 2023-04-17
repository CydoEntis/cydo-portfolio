import { Button, Flex, Link, Stack, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const { colorMode, toggleColorMode } = useColorMode();

type Props = {};

function NavContainer({}: Props) {
  return (
    <Flex alignItems={"center"}>
      <Stack direction={"row"} spacing={7}>

        <Button>
          <Link href="#about">About Me</Link>
        </Button>
        <Button>
          <Link href="#works">My Work</Link>
        </Button>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </Button>
      </Stack>
    </Flex>
  );
}

export default NavContainer;
