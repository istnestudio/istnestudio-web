import * as React from "react";
import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";
import Link from "./Link";
import { PaddingX } from "./Stylings";
import { dark, darkMain, main } from "../colors";
import selects, { logo } from "../selects";

const Nav = ({ color, background }: NavProps) => {
  const [ open, setOpenState ] = React.useState(false);

  color ??= dark;
  background ??= "white";

  return(
    <Wrapper as="nav" background={background} color={color}>
      <Link to="/">
        <Logo 
          className="logo"
          color={color}
          onClick={() => setOpenState(false)}
        >
          {logo}
        </Logo>
      </Link>
      <Selects>
        {selects.map(({ display, href }) => (
          <Select key={href} color={color || ""} onClick={() => setOpenState(false)}>
            <Link to={href}>{display}</Link>
          </Select>
        ))}
      </Selects>
      <HamburgerMenu onToggle={setOpenState} color={color}/>
    </Wrapper>
  )
}

export enum NavTheme{
  Light = 1,
  Dark
}

interface NavProps{
  color?: string,
  background?: string,
}

const Wrapper = styled(PaddingX)<{ background: string, color: string }>`
  background: ${({ background }) => background};
  transition: .1s background .5s;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 26px;
  padding-bottom: 24px;
  z-index: 101;
  
  button > div > div{
    background: ${({ color }) => color};
  }
  
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
    background: ${darkMain};
    transition: .2s transform;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover{
    &::after{
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const Logo = styled.p<{ color: string }>`
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 101;
  font-size: 24px;
  font-weight: 600;
  transition: .25s color;
  color: ${({ color }) => color};
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

const Select = styled.li<{ color: string }>`
  font-size: 16px;
  color: ${({ color }) => color};
  ${() => hoverEffect()};

  @media screen and (min-width: 1550px){
    font-size: 19px;
  }
`;

export default Nav;