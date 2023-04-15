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
  Image,
  Tag,
} from "@chakra-ui/react";

import BG from "./assets/bg.svg";
import ProfilePic from "./assets/avatar-min.png";

function App() {
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="fixed"
        w="100%"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button></Button>

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
      <Box  height="90vh" backgroundImage={BG} bgSize="contain">
        <Center h="90vh">
          <Flex
            flexDirection="column"
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              borderRadius="100%"
              src={ProfilePic}
              width="350px"
              marginBottom="2rem"
              margin="0 auto"
            />
            <Heading textAlign="center" color="white">
              Hey, I'm Cody Stine
            </Heading>
            <Text color="white" textAlign="center" fontSize="2xl">
              Fullstack developer focused on bringing ideas to life. No project
              is too big or small.
            </Text>
          </Flex>
        </Center>
      </Box>
      
      <Box border="2px solid orange" w="100%" p={5}>
        <Center>
          <Heading>About Me</Heading>
        </Center>
        <Flex justifyContent="center" alignItems="center">
          <Box w="50%" p={10}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quam
            omnis enim voluptatem praesentium possimus id eligendi, error
            doloremque necessitatibus deserunt dicta cupiditate nobis repellat
            tempora. Sunt deserunt beatae amet? Vel, natus cum, omnis at eius
            ullam ea hic porro officiis laudantium voluptatum rerum optio
            obcaecati animi enim sequi quaerat cupiditate, repudiandae est harum
            blanditiis. Saepe aperiam commodi ab harum. Vero hic obcaecati,
            culpa soluta eveniet rem aperiam. Asperiores corrupti officia
            deleniti. Odit at possimus voluptatem eos! Asperiores rem obcaecati
            quam recusandae dolore provident quae, temporibus neque voluptatem
            accusamus est. Hic reprehenderit quos error dignissimos suscipit
            tempora dicta aliquid veniam odio! Qui placeat laudantium iure
            repellat officia sit vitae ducimus. Aliquid hic minima reprehenderit
            repudiandae tempore excepturi animi culpa consectetur? Maxime
            laboriosam reprehenderit fuga necessitatibus vitae? Libero id illum
            necessitatibus, labore mollitia similique maiores itaque, quisquam
            quas voluptatibus, sed earum beatae facilis consequatur quo ab
            nesciunt quod temporibus illo accusamus! Blanditiis vel accusantium
            maxime repudiandae nulla itaque, doloremque impedit earum numquam
            ducimus vero voluptatum quas sapiente ullam, neque voluptas, commodi
            consectetur non magnam beatae! Repellat, laudantium magni. Ea, earum
            optio? Praesentium asperiores dolorum at, quos quam modi nobis odit
            suscipit repudiandae harum iste libero! Eum, harum deserunt! Unde
            perspiciatis temporibus et doloremque, voluptate quis obcaecati,
            neque quod error, ex animi! Expedita deleniti hic eligendi eos
            facilis vero tempore ipsa ratione sit rem ut, autem numquam dolores
            facere esse delectus dolore quaerat libero a error quas natus
            nesciunt! Repellendus, sed error?
          </Box>
          <Box p={5} w="50%" margin="0 auto">
            <Flex direction="column" justifyContent="center" alignItems="center">
              <Stack direction="row" spacing="12px" mb={2}>
                <Tag p={5}>HTML</Tag>
                <Tag p={5}>CSS3</Tag>
                <Tag p={5}>JavaScript</Tag>
              </Stack>
              <Stack direction="row" spacing="12px" mb={2}>
                <Tag p={5}>TypeScript</Tag>
                <Tag p={5}>Sass</Tag>
                <Tag p={5}>React</Tag>
              </Stack>
              <Stack direction="row" spacing="12px" mb={2}>
                <Tag p={5}>Node Js</Tag>
                <Tag p={5}>MongoDB</Tag>
                <Tag p={5}>Express</Tag>
              </Stack>
              <Stack direction="row" spacing="12px" mb={2}>
                <Tag p={5}>Java</Tag>
                <Tag p={5}>Spring Boot</Tag>
                <Tag p={5}>JUnit</Tag>
                <Tag p={5}>Mockito</Tag>
              </Stack>
              <Stack direction="row" spacing="12px" mb={2}>
                <Tag p={5}>MySql</Tag>
                <Tag p={5}>Material UI</Tag>
                <Tag p={5}>Tailwind Css</Tag>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
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
