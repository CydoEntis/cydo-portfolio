import BgWrapper from "../../components/wrappers/BgWrapper";
import ContentWrapper from "../../components/wrappers/ContentWrapper";
import SectionHeading from "../../components/headings/SectionHeading";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import DefaultButton from "../../components/buttons/DefaultButton";
import emailjs from "@emailjs/browser";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import ToastMessage from "../../components/toast/ToastMessage";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

function ContactForm() {
  const toast = useToast();

  const schema: ZodType<ContactFormData> = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    subject: z.string().min(3).max(50),
    message: z.string().min(10).max(200),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const sendEmail = (data: ContactFormData, e: any) => {
    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        e.target,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          toast({
            position: "top",
            duration: 1500,
            render: () => <ToastMessage message="Email sent sucessfully" />,
          });
          reset();
        },
        (error) => {
          toast({
            position: "top",
            duration: 1500,
            status: "error",
            title: error.text,
          });
        }
      );
  };

  return (
    <BgWrapper id="contact">
      <Box minHeight="100vh" py={[20, 20, 56, 56]} px={[2, 2, 10, 10]}>
        <ContentWrapper>
        <SectionHeading text="contact me" />
        <Stack
          width="100%"
          as="form"
          id="contact"
          bg={useColorModeValue("#FAFBFB", "#141414")}
          p={[0, 5, 10, "3rem"]}
          borderRadius=".8rem"
          gap={3}
          onSubmit={handleSubmit(sendEmail)}
        >
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="name" fontSize={["lg", "xl", "xl", "2xl"]}>
              Name
            </FormLabel>
            <Input
              id="name"
              type="text"
              h={[12, 12, 12, 16]}
              fontSize={["lg", "xl", "xl", "2xl"]}
              lineHeight={{
                sm: "sm",
                md: "md",
                lg: "lg",
                xl: "lg",
                "2xl": "xl",
              }}
              focusBorderColor="#B7FD00"
              {...register("name")}
            />

            <FormErrorMessage fontSize={["sm", "md", "lg", "xl"]}>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel fontSize={["lg", "xl", "xl", "2xl"]}>Email</FormLabel>
            <Input
              type="email"
              h={[12, 12, 12, 16]}
              fontSize={["lg", "xl", "xl", "2xl"]}
              lineHeight={{
                sm: "sm",
                md: "md",
                lg: "lg",
                xl: "lg",
                "2xl": "xl",
              }}
              focusBorderColor="#B7FD00"
              {...register("email")}
            />
            <FormErrorMessage fontSize={["sm", "md", "lg", "xl"]}>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.subject}>
            <FormLabel fontSize={["lg", "xl", "xl", "2xl"]}>Subject</FormLabel>
            <Input
              type="text"
              h={[12, 12, 12, 16]}
              fontSize={["lg", "xl", "xl", "2xl"]}
              lineHeight={{
                sm: "sm",
                md: "md",
                lg: "lg",
                xl: "lg",
                "2xl": "xl",
              }}
              focusBorderColor="#B7FD00"
              {...register("subject")}
            />
            <FormErrorMessage fontSize={["sm", "md", "lg", "xl"]}>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.message}>
            <FormLabel fontSize={["lg", "xl", "xl", "2xl"]}>Message</FormLabel>
            <Textarea
              fontSize={["lg", "xl", "xl", "2xl"]}
              focusBorderColor="#B7FD00"
              size="lg"
              boxSize="sm"
              resize="none"
              w="100%"
              {...register("message")}
            />
            <FormErrorMessage fontSize={["sm", "md", "lg", "xl"]}>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>
          <DefaultButton text="send" type="submit" />
        </Stack>
        </ContentWrapper>
      </Box>
    </BgWrapper>
  );
}

export default ContactForm;
