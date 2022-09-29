import * as React from "react";
import Global from "./Stylings/Global";
import Nav from "./Nav";
import Main from "./Stylings/Main";

const Layout = ({ children }: React.PropsWithChildren) => (
  <>
    <header>
      <Nav/>
    </header>
    <Main>
      <Global/>
      {children}
    </Main>
  </>
)

export default Layout;