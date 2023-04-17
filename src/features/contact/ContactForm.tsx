import React from "react";
import BgWrapper from "../../components/BgWrapper";
import ContentWrapper from "../../components/ContentWrapper";
import SectionHeading from "../../components/SectionHeading";
import { FormLabel, Stack, Textarea, useColorModeValue } from "@chakra-ui/react";
import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";

type Props = {};

function ContactForm({}: Props) {

  return (
    <BgWrapper>
      <ContentWrapper>
        <SectionHeading text="contact me" />
        <Stack
          bg={useColorModeValue("#FAFBFB", "#141414")}
          p="3rem"
          height="3xl"
          borderRadius=".8rem"
          gap={3}
        >
          <FormInput label="Name" placeholder="Enter your name" type="text" />
          <FormInput
            label="Email"
            placeholder="Enter your email"
            type="email"
          />

          <FormLabel fontSize={["lg", "xl", "xl", "2xl"]}>Message</FormLabel>
          <Textarea
            focusBorderColor="#B7FD00"
            size="lg"
            boxSize="sm"
            resize="none"
            w="100%"
          />
          <CustomButton text="send" />
        </Stack>
      </ContentWrapper>
    </BgWrapper>
  );
}

export default ContactForm;
