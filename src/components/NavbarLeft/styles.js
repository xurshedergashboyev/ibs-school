import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarStyled = styled.nav`
  width: 100px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #ece9ec;
  display: flex;
  flex-direction: column;
  ${(props) => !props.left && "display: none"};
  @media only screen and (max-width: 1024px) {
    width: 100%;
    display: ${(props) => (props.left ? "none" : "flex")};
    flex-direction: column;
    height: unset;
    position: unset;
    top: unset;
    left: unset;
    bottom: unset;
    background-color: white;
  }
`;

export const Logo = styled(Link)`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavsStyled = styled.div`
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NavLinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #50667b;
  opacity: 1;
  cursor: pointer;
  padding: 8px 0 !important;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 0.5s;
  @media only screen and (max-width: 1024px) {
    border-bottom: 1px solid rgb(172, 172, 172);
  }

  &:hover {
    /* opacity: .7; */
    color: #50667b;
    background-color: white;
  }
  &:active {
    background-color: white;
    opacity: 0.7;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const NavIcon = styled.div`
  color: #ffbf2b;
  //height: fit-content;
  display: flex;
  opacity: 1;
  @media only screen and (max-width: 1024px) {
    position: absolute;
    left: 16px;
  }
`;

export const NavName = styled.div`
  font-size: 16px;
  color: #a4a4a7;
`;

export const LogoImg = styled.img`
  width: 70px;
`;
