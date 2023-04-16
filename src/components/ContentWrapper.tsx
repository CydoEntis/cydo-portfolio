import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function ContentWrapper({ children }: Props) {
  return (
    <Box margin="0 auto" width="100%">
      {children}
    </Box>
  );
}

export default ContentWrapper;
