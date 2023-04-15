import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ProfilePic from "../assets/avatar-min.png";
import Console from "../assets/console.png";
import Computer from "../assets/computer.png";
import Keyboard from "../assets/keyboard.png";

type Props = {};

function HeroImage({}: Props) {
  return (
    <Box p={3}>
      <Image
        borderRadius="100%"
        src={ProfilePic}
        width="250px"
        marginBottom="2rem"
        margin="0 auto"
      />
    </Box>
  );
}

export default HeroImage;
