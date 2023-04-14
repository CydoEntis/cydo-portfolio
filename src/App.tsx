import "./App.css";
import {
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Container,
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
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button >
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Box bg="blackAlpha.400" padding="4"></Box>
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
