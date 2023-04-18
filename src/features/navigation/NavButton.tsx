import { Button } from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";

type Props = {
  link: string;
  text: string;
};

function NavButton({ link, text }: Props) {
  return (
    <Link to={link} spy={true} smooth={true} offset={100} duration={500}>
      <Button>{text}</Button>
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
