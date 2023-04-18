import React from "react";

import BgDark from "../../assets/bg-dark.svg";
import BgLight from "../../assets/bg-light.svg";
import { Box, useColorMode } from "@chakra-ui/react";

type Props = {
  id?: string;
  children: React.ReactNode;
  height?: string;
};

function BgWrapper({ id, children, height }: Props) {
  const { colorMode } = useColorMode();

  return (
    <Box
      id={id}
      p={[0, 0, 10, 10]}
      height={height}
      backgroundImage={colorMode === "light" ? BgLight : BgDark}
      bgSize="contain"
    >
      {children}
    </Box>
  );
}

export default BgWrapper;
