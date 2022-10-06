import * as React from "react";
import Nav from "../components/Nav";
import AnimatedCursor from "../components/AnimatedCursor";
import { Main, Global } from "../components/Stylings";
import { Contact, Footer } from "../components/Sections";
import { dark } from "../colors";

const Layout = ({ 
  children, 
  color, 
  background, 
  displayContactForm,
  displayContactFormTitle
}: LayoutProps) => {
  color ||= dark;
  background ||= "white";
  displayContactForm ??= true;
  displayContactFormTitle ??= true;

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
        {displayContactForm && 
          <Contact displayTitle={displayContactFormTitle}/>
        }
        <Footer />
      </Main>
    </>
  );
}

type LayoutProps = React.PropsWithChildren<{
  color?: string,
  background?: string,
  displayContactFormTitle?: boolean,
  displayContactForm?: boolean,
}>

export default Layout;