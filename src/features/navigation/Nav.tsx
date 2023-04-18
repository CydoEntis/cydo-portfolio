import React from "react";
import Navbar from "./Navbar";
import NavList from "./NavList";
import Logo from "../../components/logos/Logo";
import NavButton from "./NavButton";
import ThemeToggler from "../../components/theme/ThemeToggler";

type Props = {};

function Nav({}: Props) {
  return (
    <Navbar>
      <Logo text={"Cody Stine"} />
      <NavList>
        <NavButton link={"home"} text={"Home"} />
        <NavButton link={"about"} text={"About Me"} />
        <NavButton link={"work"} text={"My Work"} />
        <NavButton link={"contact"} text={"Contact"} />
        <ThemeToggler />
      </NavList>
    </Navbar>
  );
}

export default Nav;
