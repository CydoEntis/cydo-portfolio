import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function ContentContainer({ children }: Props) {
  return (
    <Box
      width={["100%", "100%", "100%", "100%"]}
      p={[2, 5, 5, 10]}
    >
      {children}
    </Box>
  );
}

export default ContentContainer;
