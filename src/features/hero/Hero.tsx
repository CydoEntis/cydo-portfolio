import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import HeroImage from "../../components/HeroImage";
import HeroText from "../../components/HeroText";
import CustomButton from "../../components/CustomButton";

import BgWrapper from "../../components/BgWrapper";

type Props = {};

function Hero({}: Props) {
  return (
    <BgWrapper height={"90vh"}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100%"
        w="100%"
      >
        <HeroImage />
        <HeroText />
        <Stack p={5} gap="1rem" direction="row">
          <CustomButton text="My Work" />
          <CustomButton text="Contact" />
        </Stack>
      </Flex>
    </BgWrapper>
  );
}

export default Hero;
