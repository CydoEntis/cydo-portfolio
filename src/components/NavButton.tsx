import { Button, Link } from "@chakra-ui/react";
import React from "react";

type Props = {
  link: string;
  text: string;
};

function NavButton({ link, text }: Props) {
  return (
    <Link
      textDecoration="none"
      _hover={{ textDecoration: "none" }}
      href={link}
    >
      <Button>{text}</Button>
    </Link>
  );
}

export default NavButton;
