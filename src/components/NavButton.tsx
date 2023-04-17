import { Button, Link } from "@chakra-ui/react";
import React from "react";

type Props = {
    link: string;
    text: string;
};

function NavButton({link, text}: Props) {
  return (
    <Button>
      <Link href={link}>{text}</Link>
    </Button>
  );
}

export default NavButton;
