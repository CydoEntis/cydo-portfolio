import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ContentContainer from "./ContentContainer";
import Subheading from "./Subheading";
import CustomButton from "./CustomButton";

type Props = {
  title: string;
  description: string;
};

function WorkOverview({ title, description }: Props) {
  return (
    <ContentContainer>
      <Subheading text={title} />
      <Text fontSize="2xl" py={5}>{description}</Text>
      <CustomButton text="Learn More"/>
    </ContentContainer>
  );
}

export default WorkOverview;
