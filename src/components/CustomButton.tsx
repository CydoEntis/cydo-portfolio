import React from "react";
import { Button } from "@chakra-ui/react";
type Props = {
  text: string;
};

function CustomButton({ text }: Props) {
  return (
    <Button
      textTransform="uppercase"
      variant={{base: "base"}}
      // bg="#B7FD00"
      w={["120px", "125px", "150px", "175px"]}
      py={[6, 6, 6, 7]}
      px={10}
      fontSize={[".8rem", "1,05rem", "1.15rem", "1.2rem"]}
      fontWeight="bold"
    >
      {text}
    </Button>
  );
}

export default CustomButton;
