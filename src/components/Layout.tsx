import * as React from "react";
import Nav from "./Nav";
import AnimatedCursor from "./AnimatedCursor";
import { Main, Global } from "./Stylings";
import { dark, main } from "../colors";
import { Contact, Footer } from "./Sections";

const navColors: NavColorsDict = {
  "/realizacje": {
    color: "white",
    background: dark
  },
  "/kontakt": {
    color: "white",
    background: main
  }
}

interface NavColorsDict{
  [ location: string ]: {
    color: string,
    background: string
  }
}

const Layout = ({ children }: React.PropsWithChildren) => (
  <>
    <header>
      <Nav
        color={navColors[location.pathname]?.color} 
        background={navColors[location.pathname]?.background} 
      />
    </header>
    <Main>
      <Global />
      <AnimatedCursor />
      {children}
      <Contact/>
      <Footer/>
    </Main>
  </>
)

export default Layout;