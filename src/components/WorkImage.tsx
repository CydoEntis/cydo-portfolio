import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ContentContainer from "./ContentContainer";

type Props = { imageUrl: string };

function WorkImage({ imageUrl }: Props) {
  return (
    <ContentContainer>
      <Image
        borderRadius=".8rem"
        w="100%"
        minHeight={{ sm: "100%", md: "100%", lg: "300px" }}
        src={imageUrl}
      />
    </ContentContainer>
  );
}

export default WorkImage;
