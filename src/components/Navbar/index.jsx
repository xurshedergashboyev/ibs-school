import React, { useState } from "react";

import {
  Header,
  AllItems,
  Logo,
  NavbarItemLink,
  Container,
  LogoImg,
} from "./styles";

//comp
import NavbarToggle from "../NavbarToggle";
import Sidebar from "../Sidebar";
import ibsSvg from "../../assets/images/ibs.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Header>
      <Container>
        <AllItems>
          <Logo style={{ fontSize: 25 }}>
            <NavbarItemLink to="/">
              <LogoImg src={ibsSvg} />
            </NavbarItemLink>
          </Logo>
          <NavbarToggle setOpen={setOpen} open={open} />
          <Sidebar open={open} setOpen={setOpen} />
        </AllItems>
      </Container>
    </Header>
  );
};

export default Navbar;
