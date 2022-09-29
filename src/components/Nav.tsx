import * as React from "react";
import styled from "styled-components";
import { dark } from "../colors";
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

const Logo = styled.a<{ open: boolean }>`
  position: relative;
  z-index: 101;
  font-size: 24px;
  font-weight: 600;
  transition: .25s color;
  color: ${({ open }) => open ? "white" : dark};
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
`;

const Select = styled.li`
  font-size: 16px;
`;

export default Nav;