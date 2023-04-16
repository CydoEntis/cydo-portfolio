import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ProfilePic from "../assets/avatar-min.png";
import Console from "../assets/console.png";
import Computer from "../assets/computer.png";
import Keyboard from "../assets/keyboard.png";

type Props = {};

function HeroImage({}: Props) {
  return (
      <Image
        borderRadius="100%"
        src={ProfilePic}
        maxWidth="250px"
        marginBottom="2rem"
        margin="0 auto"
      />
  );
}

export default HeroImage;
