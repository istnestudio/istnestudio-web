import * as React from "react";
import styled from "styled-components";
import { dark, main } from "../colors";
import selects, { logo } from "../selects";
import HamburgerMenu from "./HamburgerMenu";
import { PaddingX } from "./Stylings/Paddings";
import Link from "./Link";

const Nav = () => {
  const [ open, setOpenState ] = React.useState(false);

  return(
    <Wrapper as="nav">
      <Logo open={open}>{logo}</Logo>
      <Selects>
        {selects.map(({ display, href }) => (
          <Select key={href}>
            <Link to={href}>{display}</Link>
          </Select>
        ))}
      </Selects>
      <HamburgerMenu onToggle={setOpenState}/>
    </Wrapper>
  )
}

const Wrapper = styled(PaddingX)`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 101;
  
  @media screen and (min-width: 1150px){
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

const hoverEffect = () => `
  position: relative;
  transition: .2s color;

  &::after{
    content: "";
    position: absolute;
    left: 0;
    top: 110%;
    width: 100%;
    height: 2.5px;
    background: ${main};
    transition: .2s transform;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover{
    color: ${main};
    cursor: pointer;

    &::after{
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const Logo = styled.a<{ open: boolean }>`
  position: relative;
  z-index: 101;
  font-size: 24px;
  font-weight: 600;
  transition: .25s color;
  color: ${({ open }) => open ? "white" : dark};
  ${() => hoverEffect()};

  @media screen and (min-width: 1550px){
    font-size: 26px;
  }
`;

const Selects = styled.ul`
  display: none;
  list-style: none;
  gap: 24px;
  align-items: center;
  justify-content: center;
  
  @media screen and (min-width: 1150px){
    display: flex;
  }

  @media screen and (min-width: 1550px){
    gap: 36px;
  }
`;

const Select = styled.li`
  font-size: 16px;
  ${() => hoverEffect()};

  @media screen and (min-width: 1550px){
    font-size: 19px;
  }
`;

export default Nav;