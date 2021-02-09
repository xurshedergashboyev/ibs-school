import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CloseIcon,
  Header,
  NavbarTopNavsAndUserStyled,
  NavbarTopStyled,
  NavLink,
  NavsStyled,
  PageName,
  SearchBox,
  SearchIcon,
  SearchInput,
  SearchResult,
  SearchWrapper,
  User,
  LogoImg,
  SidebarLand,
  SidebarNone,
} from "./styles";
import LanguageSelector from "../LanguageSelector";

//Icons
import { ReactComponent as VoiceOfMarketing } from "../../assets/icons/voice-of-marketing.svg";
import { ReactComponent as Search } from "../../assets/icons/search-icon.svg";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";
import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as Messages } from "../../assets/icons/messages.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

//User Image
import UserImg from "../../assets/images/user.png";
import ibsSvg from "../../assets/images/ibs.png";
import NavbarToggle from "../NavbarToggle";

const NavbarTop = ({ pageName, item }) => {
  const [searchPressed, setSearchPressed] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Header>
      <NavbarTopStyled>
        <PageName>
          {pageName}
          <Link to="/">
            <LogoImg src={ibsSvg} />
          </Link>
        </PageName>
        <NavbarTopNavsAndUserStyled>
          <NavsStyled>
            <LanguageSelector />
            <NavLink>
              <VoiceOfMarketing />
            </NavLink>
            <NavLink onClick={() => setSearchPressed(!searchPressed)}>
              <Search />
            </NavLink>
            <NavLink>
              <Notification />
            </NavLink>
            <NavLink>
              <Like />
            </NavLink>
            <NavLink>
              <Messages />
            </NavLink>
          </NavsStyled>
          <User>
            <img src={UserImg} alt="" />
          </User>
          <SidebarLand>
            <NavbarToggle
              setOpen={setOpen}
              open={open}
              className="navbarToggle"
            />
            <SidebarNone open={open} setOpen={setOpen} />
          </SidebarLand>
          {/*<MenuBarIcon onClick={() => setIsNavbarOpen(!isNavbarOpen)}>*/}
          {/*  <Menu />*/}
          {/*</MenuBarIcon>*/}
        </NavbarTopNavsAndUserStyled>
      </NavbarTopStyled>

      {/*Search Things*/}

      <SearchWrapper open={searchPressed} item={item}>
        <SearchBox>
          <SearchIcon>
            <Search />
          </SearchIcon>
          <SearchInput placeholder="Search" />
          <CloseIcon onClick={() => setSearchPressed(!searchPressed)}>
            <Close />
          </CloseIcon>
        </SearchBox>
        <SearchResult>
          {/*search result*/}
        </SearchResult>
      </SearchWrapper>

      {/*<ToggleNavbarBox open={isNavbarOpen}>*/}
      {/*<Sidebar open={isNavbarOpen} />*/}
      {/*<ToggleNavbarHeader>*/}
      {/*  <SearchIcon*/}
      {/*    search*/}
      {/*    onClick={() => {*/}
      {/*      setSearchPressed(!searchPressed);*/}
      {/*      setIsNavbarOpen(!isNavbarOpen);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Search />*/}
      {/*  </SearchIcon>*/}
      {/*  <Logo to="/">*/}
      {/*    <LogoImg src={ibsSvg} />*/}
      {/*  </Logo>*/}
      {/*  <SearchIcon cancel onClick={() => setIsNavbarOpen(!isNavbarOpen)}>*/}
      {/*    <Cancel />*/}
      {/*  </SearchIcon>*/}
      {/*</ToggleNavbarHeader>*/}
      {/*<UnderHeader>*/}
      {/*  <UnderHeaderItems>*/}
      {/*    <NavLink>*/}
      {/*      <Like />*/}
      {/*    </NavLink>*/}
      {/*    <NavLink>*/}
      {/*      <Messages />*/}
      {/*    </NavLink>*/}
      {/*  </UnderHeaderItems>*/}
      {/*  <LanguageSelector />*/}
      {/*</UnderHeader>*/}
      {/*<NavbarLeft setPageName={setPageName} />*/}
      {/*</ToggleNavbarBox>*/}
    </Header>
  );
};

export default NavbarTop;
