import { Box, Image } from "@chakra-ui/react";
import ProfilePic from "../../assets/avatar-min.png";

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
