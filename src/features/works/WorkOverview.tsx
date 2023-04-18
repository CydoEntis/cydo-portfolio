import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ContentContainer from "../../components/containers/ContentContainer";
import Subheading from "../../components/headings/Subheading";
import LinkButton from "../../components/buttons/LinkButton";
import { BsGlobe } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  liveLink?: string;
  frontendLink?: string;
  backendLink?: string;
};

function WorkOverview({
  liveLink,
  frontendLink,
  backendLink,
  title,
  description,
}: Props) {
  return (
    <ContentContainer>
      <Subheading text={title} />
      <Text fontSize={["lg", "xl", "xl", "2xl"]} py={5}>
        {description}
      </Text>

      <HStack gap={3}>
        <LinkButton
          link={liveLink!}
          text="Live Site"
          icon={<BsGlobe fontSize={20} />}
        />
        <LinkButton
          link={frontendLink!}
          text="Frontend"
          icon={<FaGithubAlt fontSize={20} />}
        />
        <LinkButton
          link={backendLink!}
          text="Backend "
          icon={<FaGithubAlt fontSize={20} />}
        />
      </HStack>
    </ContentContainer>
  );
}

export default WorkOverview;
