import { Box, Image } from "@chakra-ui/react";
import React from "react";

type Props = { imageUrl: string };

function WorkImage({ imageUrl }: Props) {
  return (
    <Box w="50%">
      <Image borderRadius=".8rem" src={imageUrl} />
    </Box>
  );
}

export default WorkImage;
