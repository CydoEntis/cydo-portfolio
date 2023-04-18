import { Tag, Wrap } from "@chakra-ui/react";
import React from "react";
import { Tool } from "./WorkList";

type Props = {tools: Tool[]};

function BuiltWith({tools}: Props) {
  return (
    <Wrap spacing="12px" py={5}>
      {tools.map((tool) => (
        <Tag
          p={5}
          key={tool.id}
          fontSize={{ sm: "sm", md: "md", lg: "md", xl: "md", "2xl": "lg" }}
        >
          {tool.name}
        </Tag>
      ))}
    </Wrap>
  );
}

export default BuiltWith;
