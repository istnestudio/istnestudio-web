import * as React from "react";
import gsap from "gsap";
import styled from "styled-components";
import Hamburger from "./Hamburger";

const HamburgerButton = React.forwardRef<
  HTMLButtonElement, 
  React.HTMLAttributes<HTMLButtonElement> & { color: string }
>(( 
  { onClick, color, ...props }, ref 
) => {
  const hamburger = React.useRef<HTMLDivElement>(null);
  const tl = React.useRef<gsap.core.Timeline>(gsap.timeline({ paused: true }));

  React.useEffect(() => {
    if (!hamburger.current) return;
    const [l1, l2, l3] = hamburger.current.childNodes;
    gsap.to([l1, l2, l3], { background: color, duration: 0.3 });

    tl.current.to(l2, { opacity: 0, duration: 0.3, ease: "expo.inOut", x: 0 }, 0)
      .to(l1, { rotation: -45, y: 6.55, duration: 0.3, ease: "expo.inOut" }, 0)
      .to(l3, { rotation: 45, y: -6.55, duration: 0.3, ease: "expo.inOut" }, 0)
      .reverse();
  }, [])

  const switchHamburger = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!hamburger.current) return;
    const [l1, l2, l3] = hamburger.current.childNodes;

    gsap.to([l1, l2, l3], { background: tl.current.reversed() ? "white" : color, duration: 0.3 });
    tl.current.reversed(!tl.current.reversed());
    onClick && onClick(e);
  }

  return (
    <Wrapper
      ref={ref}
      onClick={switchHamburger}
      type="button"
      aria-label="Otwórz menu"
      {...props}
    >
      <Hamburger ref={hamburger} color={color}/>
    </Wrapper>
  )
})

const Wrapper = styled.button`
  position: relative;
  z-index: 101;
  background: transparent;
  border: none;
  
  @media screen and (min-width: 1150px){
    display: none;
  }
`;

export default HamburgerButton;