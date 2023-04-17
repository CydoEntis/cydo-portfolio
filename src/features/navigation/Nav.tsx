import React from "react";
import Navbar from "../../components/Navbar";
import NavList from "../../components/NavList";
import Logo from "../../components/Logo";
import NavButton from "../../components/NavButton";
import ThemeToggler from "../../components/ThemeToggler";

type Props = {};

function Nav({}: Props) {
  return (
    <Navbar>
      <Logo text={"Cody Stine"} />
      <NavList>
        <NavButton link={"#home"} text={"Home"} />
        <NavButton link={"#about"} text={"About Me"} />
        <NavButton link={"#work"} text={"My Work"} />
        <NavButton link={"#contact"} text={"Contact"} />
        <ThemeToggler />
      </NavList>
    </Navbar>
  );
}

export default Nav;
