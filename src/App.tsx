import "./App.css";
import {
  Stack,
  Button,
  Box,
  Flex,
  useColorModeValue,
  Switch,
  useColorMode,
  Heading,
  Link,
  FormControl,
  FormLabel,
  Input,
  Center,
  HStack,
  Textarea,
} from "@chakra-ui/react";
import BgDark from "./assets/bg-dark.svg";
import BgLight from "./assets/bg-light.svg";

import AboutMe from "./features/about/AboutMe";

import Hero from "./features/hero/Hero";
import Works from "./features/works/Works";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import ContentWrapper from "./components/ContentWrapper";
import SectionHeading from "./components/SectionHeading";
import BgWrapper from "./components/BgWrapper";
import CustomButton from "./components/CustomButton";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        boxShadow="0 10px 100px rgba(0,0,0,.1)"
        bg={useColorModeValue("#fff", "#121212")}
        px={4}
        position="fixed"
        w="100%"
        zIndex="99"
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading textTransform="uppercase" size="lg" letterSpacing={5}>
              Cody Stine
            </Heading>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button>
                <Link href="#home">Home</Link>
              </Button>
              <Button>
                <Link href="#about">About Me</Link>
              </Button>
              <Button>
                <Link href="#works">My Work</Link>
              </Button>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <FaMoon /> : <FaSun />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Hero />
      <AboutMe />
      <Works />
      <BgWrapper>
        <ContentWrapper>
          <SectionHeading text="contact me" />
          <Stack
            margin="0 auto"
            bg={useColorModeValue("#FAFBFB", "#141414")}
            p="3rem"
            width="40%"
            height="3xl"
            borderRadius=".8rem"
          >
            <FormControl>
              <FormLabel fontSize={["lg", "xl", "xl", "2xl"]}>Name</FormLabel>
              <Input
                placeholder="Enter your name"
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
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={["lg", "xl", "xl", "2xl"]}>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your name"
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
              />
            </FormControl>
            <FormLabel fontSize={["lg", "xl", "xl", "2xl"]}>Message</FormLabel>
            <Textarea
              focusBorderColor="#B7FD00"
              size="lg"
              boxSize="sm"
              resize="none"
              w="100%"
            />
            <CustomButton text="send"/>
          </Stack>
        </ContentWrapper>
      </BgWrapper>
    </>

    // <Card maxW="sm">
    //   <CardBody>
    //     {/* <Image

    // /> */}
    //     <Stack mt="6" spacing="3">
    //       <Heading size="md">Living room Sofa</Heading>
    //       <Text>
    //         This sofa is perfect for modern tropical spaces, baroque inspired
    //         spaces, earthy toned spaces and for people who love a chic design
    //         with a sprinkle of vintage design.
    //       </Text>
    //       <Text color="blue.600" fontSize="2xl">
    //         $450
    //       </Text>
    //     </Stack>
    //   </CardBody>
    //   <Divider />
    //   <CardFooter>
    //     <ButtonGroup spacing="2">
    //       <Button variant="solid" colorScheme="blue">
    //         Buy now
    //       </Button>
    //       <Button variant="ghost" colorScheme="blue">
    //         Add to cart
    //       </Button>
    //     </ButtonGroup>
    //   </CardFooter>
    // </Card>
  );
}

export default App;
