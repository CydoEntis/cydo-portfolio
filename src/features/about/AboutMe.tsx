import { Badge, Box, Center, Flex, Grid, Heading, Tag } from "@chakra-ui/react";
import React from "react";
import Tools from "../../components/Tools";
import AboutText from "../../components/AboutText";

type Props = {};

function AboutMe({}: Props) {
  return (
    <Box py={20} px={5} bg="#FAFBFB">
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Heading textTransform="uppercase">About Me</Heading>
          <Badge my={5} bg="#B7FE00" h="6px" w="30px" borderRadius=".8rem"></Badge>
        </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} p={5}>
        <AboutText />
        <Tools />
      </Grid>
    </Box>
  );
}

export default AboutMe;
