import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type Props = {};

function ThemeToggler({}: Props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
}

export default ThemeToggler;
