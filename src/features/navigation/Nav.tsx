import React  from "react";
import Navbar from "./Navbar";
import NavList from "./NavList";
import Logo from "../../components/logos/Logo";
import NavButton from "./NavButton";
import ThemeToggler from "../../components/theme/ThemeToggler";
import {
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Button,
  Center,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

type Props = {};

function Nav({}: Props) {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Navbar>
      <Logo text={"Cody Stine"} />
      {isDesktop ? (
        <>
          <NavList>
            <NavButton link={"home"} text={"Home"} />
            <NavButton link={"about"} text={"About Me"} />
            <NavButton link={"work"} text={"My Work"} />
            <NavButton link={"contact"} text={"Contact"} />
            <ThemeToggler />
          </NavList>
        </>
      ) : (
        <>
          <Button onClick={onOpen}>
            <GiHamburgerMenu />
          </Button>
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody bg={useColorModeValue("#FAFBFB", "#141414")} p={5}>
                <Button onClick={onClose} position="absolute" right="5%">
                  <IoMdClose />
                </Button>
                <Center>
                  <Stack gap={5} mt={20}>
                    <NavButton link={"home"} text={"Home"} />
                    <NavButton link={"about"} text={"About Me"} />
                    <NavButton link={"work"} text={"My Work"} />
                    <NavButton link={"contact"} text={"Contact"} />
                    <ThemeToggler />
                  </Stack>
                </Center>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Navbar>
  );
}

export default Nav;
