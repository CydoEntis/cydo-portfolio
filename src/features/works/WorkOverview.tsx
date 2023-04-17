import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ContentContainer from "../../components/containers/ContentContainer";
import Subheading from "../../components/headings/Subheading";
import PageLinkButton from "../../components/buttons/PageLinkButton";

type Props = {
  title: string;
  description: string;
};

function WorkOverview({ title, description }: Props) {
  return (
    <ContentContainer>
      <Subheading text={title} />
      <Text fontSize="2xl" py={5} variant={{ base: "base" }}>
        {description}
      </Text>
      <PageLinkButton text="Learn More" link="#contact" />
    </ContentContainer>
  );
}

export default WorkOverview;
