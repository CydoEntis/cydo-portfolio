import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function ContentContainer({ children }: Props) {
  return (
    <Box
      width={{ sm: "100%", md: "100%", lg: "100", xl: "90%", "2xl": "50%" }}
      p={[0, 5, 5, 10]}
    >
      {children}
    </Box>
  );
}

export default ContentContainer;
