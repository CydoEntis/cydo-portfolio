import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import HeroImage from "../../components/HeroImage";
import HeroText from "../../components/HeroText";
import BG from "../../assets/bg.svg";
import CustomButton from "../../components/CustomButton";

type Props = {};

function Hero({}: Props) {
  return (
    <Box p={10} height="90vh" backgroundImage={BG} bgSize="contain">
      <Flex flexDirection="column" justifyContent="center" alignItems="center" h="100%" w="100%">
        <HeroImage />
        <HeroText />
        <Stack p={5} gap="1rem" direction="row">
            <CustomButton text="My Work" />
            <CustomButton text="Contact" />
        </Stack>
      </Flex>
    </Box>
  );
}

export default Hero;