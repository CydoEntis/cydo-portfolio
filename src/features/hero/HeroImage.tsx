import { Box, Image } from "@chakra-ui/react";
import ProfilePic from "../../assets/avatar-min.png";

type Props = {};

function HeroImage({}: Props) {
  return (
      <Image
        borderRadius="100%"
        src={ProfilePic}
        width={{ sm: "175px", md: "200px", lg: "250px", xl: "250px", "2xl": "350px" }}
        marginBottom="2rem"
        margin="0 auto"
      />
  );
}

export default HeroImage;
