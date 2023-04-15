import React from "react";
import { Button } from "@chakra-ui/react";
type Props = {
  text: string;
};

function CustomButton({ text }: Props) {
  return (
    <Button
      textTransform="uppercase"
      bg="#B7FD00"
      w="175px"
      py={7}
      px={10}
      fontSize="1.2rem"
      fontWeight="bold"
    >
      {text}
    </Button>
  );
}

export default CustomButton;
