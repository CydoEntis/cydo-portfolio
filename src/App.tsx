import "./App.css";
import {

  Stack,

  Button,

  Box,
  Avatar,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
  extendTheme,

} from "@chakra-ui/react";

import AboutMe from "./features/about/AboutMe";

import Hero from "./features/hero/Hero";
import Works from "./features/works/Works";


function App() {
  return (
    <>
      <Box
        boxShadow="0 10px 100px rgba(0,0,0,.1)"
        bg={useColorModeValue("white", "gray.900")}
        px={4}
        position="fixed"
        w="100%"
        zIndex="99"
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box>CS</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button>Home</Button>
              <Button>About Me</Button>
              <Button>My Work</Button>
              <Button>Contact Me</Button>

            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Hero />
      <AboutMe />
      <Works />
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
