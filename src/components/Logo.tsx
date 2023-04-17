import { Box, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  text: string;
};

function Logo({ text }: Props) {
  return (
    <Box>
      <Heading textTransform="uppercase" size="lg" letterSpacing={5}>
        {text}
      </Heading>
    </Box>
  );
}

export default Logo;
