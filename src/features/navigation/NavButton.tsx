import { Button } from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";

type Props = {
  link: string;
  text: string;
  onClose?: () => void;
};

function NavButton({ link, text, onClose }: Props) {
  return (
    <Link activeClass="active" to={link} spy={true} smooth={true} offset={100} duration={500}>
      <Button w="100px" onClick={onClose}>
        {text}
      </Button>
    </Link>
    // <Link
    //   textDecoration="none"
    //   _hover={{ textDecoration: "none" }}
    //   href={link}
    // >
    //
    // </Link>
  );
}

export default NavButton;
