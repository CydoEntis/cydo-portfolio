import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function ContentWrapper({ children }: Props) {
  return (
    <Box
      margin="0 auto"
      width={{ sm: "100%", md: "100%", lg: "100", xl: "90%", "2xl": "75%" }}
    >
      {children}
    </Box>
  );
}

export default ContentWrapper;
