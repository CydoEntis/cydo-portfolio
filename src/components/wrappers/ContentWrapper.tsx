import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  id?: string;
  children: React.ReactNode;
};

function ContentWrapper({ id, children }: Props) {
  return (
    <Box
      margin="0 auto"
      width={{ sm: "100%", md: "100%", lg: "100", xl: "90%", "2xl": "85%", "3xl": "75%"}}
      id={id}
    >
      {children}
    </Box>
  );
}

export default ContentWrapper;
