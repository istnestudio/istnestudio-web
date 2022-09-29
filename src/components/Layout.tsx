import * as React from "react";
import Global from "./Stylings/Global";
import Nav from "./Nav";
import Main from "./Stylings/Main";
import AnimatedCursor from "./AnimatedCursor";

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