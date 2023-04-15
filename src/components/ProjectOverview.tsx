import { Box, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  description: string;
};

function ProjectOverview({}: Props) {
  return (
    <Box w="50%">
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi,
        molestias eveniet sint quibusdam pariatur quisquam totam corporis
        aspernatur dolorem aperiam temporibus quis consequatur! Nobis, minima?
        Quos, illo. Iste, et? Expedita repellat provident aliquam ab unde
        praesentium accusantium placeat, qui, laboriosam eos fugit tenetur
        reiciendis voluptas quaerat asperiores explicabo harum omnis commodi
        illo deleniti nesciunt neque iusto rem. Recusandae, harum. Rerum itaque
        illum non tempora corrupti ut minus eum provident ullam, saepe
        voluptatem quae temporibus nostrum facilis, expedita consequatur? Id
        iure vero maxime sed vitae asperiores modi fuga sint voluptas? Alias ad
        magnam libero at minima? Ab ex dolorum exercitationem harum, neque non
        eaque incidunt eius quas sed quos iusto quo nostrum blanditiis at
        laboriosam fuga iste cupiditate? Sit, asperiores. Soluta ratione
        suscipit iure nemo praesentium doloremque mollitia consequuntur a unde,
        debitis error libero, esse qui? Quidem non aspernatur omnis repudiandae
        odit odio, adipisci quisquam voluptas eligendi a, dolor ipsa.
      </Text>
    </Box>
  );
}

export default ProjectOverview;
