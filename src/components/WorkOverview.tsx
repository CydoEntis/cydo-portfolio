import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ContentContainer from "./ContentContainer";
import Subheading from "./Subheading";

type Props = {
  title: string;
  description: string;
};

function WorkOverview({ title, description }: Props) {
  return (
    <ContentContainer>
      <Subheading text={title} />
      <Text fontSize="2xl">{description}</Text>
      <Button>Learn More</Button>
    </ContentContainer>
  );
}

export default WorkOverview;
