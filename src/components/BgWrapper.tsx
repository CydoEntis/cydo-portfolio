import React from "react";

import BgDark from "../assets/bg-dark.svg";
import BgLight from "../assets/bg-light.svg";
import { Box, useColorMode } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  height?: string;
};

function BgWrapper({ children, height }: Props) {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="home"
      p={10}
      height={height}
      backgroundImage={colorMode === "light" ? BgLight : BgDark}
      bgSize="contain"
    >
      {children}
    </Box>
  );
}

export default BgWrapper;
