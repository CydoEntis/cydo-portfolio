import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { BsFillEnvelopeCheckFill } from "react-icons/bs";
import React from "react";

type Props = {
  message: string;
};

function ToastMessage({ message }: Props) {
  return (
    <Box color="#333" bg="#B7FD00" borderRadius=".4rem" p={5} fontWeight="bold">
      <Flex alignItems="center">
        <BsFillEnvelopeCheckFill fontSize="2rem" />
        <Text mx={3} fontSize={["lg", "xl", "xl", "2xl"]}>{message}</Text>
      </Flex>
    </Box>
  );
}

export default ToastMessage;
