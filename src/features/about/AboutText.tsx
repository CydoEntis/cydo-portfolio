import { Box, Button, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Subheading from "../../components/headings/Subheading";
import ContentContainer from "../../components/containers/ContentContainer";
import PageLinkButton from "../../components/buttons/PageLinkButton";

type Props = {};

function AboutText({}: Props) {
  return (
    <ContentContainer >
      <Subheading text="Get to know me!" />
      <Text  lineHeight={10} py={5} fontSize={["lg", "xl", "xl", "2xl"]} variant={{base: "base"}}>
        I'm a <strong>Full Stack Developer</strong> focused on building
        applications that lead to the success of the overall product. Over my
        years of development I have acquired the <strong>tools</strong> to
        complete any task presented to me. Check out some of my{" "}
        <strong>work</strong>, and don't hesitate to <strong>contact me</strong>{" "}
        if you are interested in working with me. No project is to big or small
        for me to tackle. 🙂
      </Text>
      <PageLinkButton text="Contact Me" link="contact" />
    </ContentContainer>
  );
}

export default AboutText;
