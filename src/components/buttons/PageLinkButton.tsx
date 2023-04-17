import React from "react";
import { Box, Button, Link } from "@chakra-ui/react";
type Props = {
  link: string;
  text: string;
};

function PageLinkButton({ link, text }: Props) {
  return (
    <Link href={link} textDecoration="none" _hover={{ textDecoration: "none" }}>
      <Box
        as="button"
        textTransform="uppercase"
        color="#333"
        bg="#B7FD00"
        _hover={{ bg: "#abd43f" }}
        w={["120px", "125px", "150px", "175px"]}
        py={[3, 3, 3, 4]}
        px={2}
        borderRadius=".4rem"
        fontSize={[".8rem", "1,05rem", "1.15rem", "1.2rem"]}
        fontWeight="bold"
      >
        {text}
      </Box>
    </Link>
  );
}

export default PageLinkButton;
