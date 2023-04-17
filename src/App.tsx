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
import ContactForm from "./features/contact/ContactForm";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Hero />
      <AboutMe />
      <Works />
      <ContactForm />
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
