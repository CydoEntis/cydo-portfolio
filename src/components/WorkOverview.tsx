import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  description: string;
};

function WorkOverview({title, description}: Props) {
  return (
    <Box w="50%">
      <Heading>{title}</Heading>
      <Text>
        {description}
      </Text>
    </Box>
  );
}

export default WorkOverview;
