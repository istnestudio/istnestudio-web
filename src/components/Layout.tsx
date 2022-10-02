import * as React from "react";
import Nav from "./Nav";
import AnimatedCursor from "./AnimatedCursor";
import { Main, Global } from "./Stylings";

const Layout = ({ children }: React.PropsWithChildren) => (
  <>
    <header>
      <Nav/>
    </header>
    <Main>
      <Global/>
      {children}
    <AnimatedCursor/>
    </Main>
  </>
)

export default Layout;