import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type Props = {
    children: React.ReactNode;
};

function Navbar({children}: Props) {
  return (
    <Box
    //   boxShadow="0 10px 100px rgba(0,0,0,.1)"
      bg={useColorModeValue("#fff", "#121212")}
      px={4}
      position="fixed"
      w="100%"
      zIndex="99"
      borderBottom="1px solid #B7FD00"
    >
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        {children}


      </Flex>
    </Box>
  );
}

export default Navbar;
