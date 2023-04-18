import { Box, Button, HStack, Heading, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import ContentContainer from "../../components/containers/ContentContainer";
import Subheading from "../../components/headings/Subheading";
import LinkButton from "../../components/buttons/LinkButton";
import { BsGlobe } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import BuiltWith from "./BuiltWith";
import { Tool } from "./WorkList";

type Props = {
  title: string;
  description: string;
  liveLink?: string;
  frontendLink?: string;
  backendLink?: string;
  tools: Tool[];
};

function WorkOverview({
  liveLink,
  frontendLink,
  backendLink,
  title,
  description,
  tools,
}: Props) {
  return (
    <ContentContainer>
      <Subheading text={title} />
      <Text fontSize={["lg", "xl", "xl", "2xl"]} py={5}>
        {description}
      </Text>
      <BuiltWith tools={tools} />
      <Wrap gap={3}>
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
          text="Backend"
          icon={<FaGithubAlt fontSize={20} />}
        />
      </Wrap>
    </ContentContainer>
  );
}

export default WorkOverview;
