import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import PageLinkButton from "../../components/buttons/PageLinkButton";

import BgWrapper from "../../components/wrappers/BgWrapper";

type Props = {};

function Hero({}: Props) {
  return (
    <BgWrapper height={"95vh"} id="home">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100%"
        w="100%"
        py={56}
      >
        <HeroImage />
        <HeroText />
        <Stack p={5} gap="1rem" direction="row">
          <PageLinkButton text="My Work" link="work" />
          <PageLinkButton text="Contact" link="contact" />
        </Stack>
      </Flex>
    </BgWrapper>
  );
}

export default Hero;
