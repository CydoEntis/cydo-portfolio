import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function ContentContainer({ children }: Props) {
  return (
    <Box w="40%" p={10}>
      {children}
    </Box>
  );
}

export default ContentContainer;
