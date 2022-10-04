import * as React from "react";
import Nav from "../components/Nav";
import AnimatedCursor from "../components/AnimatedCursor";
import { Main, Global } from "../components/Stylings";
import { Contact, Footer } from "../components/Sections";
import { dark } from "../colors";

const Layout = ({ 
  children, color, background, displayTitle 
}: LayoutProps) => {
  color ||= dark;
  background ||= "white";
  displayTitle ??= true;

  return (
    <>
      <header>
        <Nav
          color={color}
          background={background} 
        />
      </header>
      <Main>
        <Global />
        <AnimatedCursor />
        {children}
        <Contact displayTitle={displayTitle}/>
        <Footer />
      </Main>
    </>
  );
}

type LayoutProps = React.PropsWithChildren<{
  color?: string,
  background?: string,
  displayTitle?: boolean,
}>

export default Layout;