import { Box, Center, Text, Link } from "@chakra-ui/react";
import React from "react";

type Props = {
  text: string;
  icon: React.ReactNode;
  link: string;
};

function LinkButton({ link, icon, text }: Props) {
  return (
    <Link
      href={link}
      my={2}
      target="_blank"
      isExternal
      textTransform="uppercase"
      color="#333"
      bg="#B7FD00"
      _hover={{ bg: "#abd43f" }}
      w={["120px", "125px", "150px", "175px"]}
      py={[3, 3, 3, 4]}
      px={2}
      borderRadius=".4rem"
      fontSize={[".8rem", ".9rem", ".95rem", "1rem"]}
      fontWeight="bold"
    >
      <Center>
        {icon}
        <Text mx={3}>{text}</Text>
      </Center>
    </Link>
  );
}

export default LinkButton;
