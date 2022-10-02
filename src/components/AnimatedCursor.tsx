import * as React from "react";
import styled from "styled-components";
import gsap from "gsap";

const pointerTags = [
  "button", 
  "a", 
  "article", 
  "select", 
  "input",
  "textarea",
  "label"
];

const pointerSelectors = [
  ".select", 
  ".select-choice", 
  ".select-wrapper"
];

const AnimatedCursor = () => {
  const [isPointing, setPointingState] = React.useState<boolean>();

  const cursor = React.useRef<HTMLDivElement>(null);
  const timer = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const cursorEl = cursor.current;
    if (!cursorEl) return;

    const [ring, dot] = cursorEl.children;

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      gsap.to(dot, {
        left: clientX,
        top: clientY,
        opacity: 1,
        duration: 0.1,
      });

      gsap.to(ring, {
        left: clientX,
        top: clientY,
        duration: 0.5,
        scale: isPointing ? 0 : 1,
        opacity: isPointing ? 0 : 1,
      });

      timer.current && clearTimeout(timer.current);

      timer.current = setTimeout(() => {
        gsap.to(ring, { opacity: 0, scale: 0 });
      }, 400);
    };

    const handleMouseOverOut = (e: MouseEvent, out: boolean) => {
      const target = e.target as HTMLElement | null;

      const checkSelectors = () =>
        pointerSelectors.filter(
          (selector) => target?.matches(selector) !== false
        ).length > 0;

      console.log(checkSelectors());

      if (
        !target ||
        (!pointerTags.includes(target.tagName.toLocaleLowerCase()) &&
          !checkSelectors())
      )
        return;

      setPointingState(!out);
      const size = out ? 9 : 60;

      gsap.to(dot, {
        width: size,
        height: size,
        duration: 0.5,
        ease: "expo.inOut",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", (e) => handleMouseOverOut(e, false));
    window.addEventListener("mouseout", (e) => handleMouseOverOut(e, true));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", (e) =>
        handleMouseOverOut(e, false)
      );
      window.removeEventListener("mouseout", (e) =>
        handleMouseOverOut(e, true)
      );
    };
  }, [isPointing]);

  return (
    <Cursor ref={cursor}>
      <CursorRing />
      <CursorDot />
    </Cursor>
  );
};

const Cursor = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 200;
  background: white;
  mix-blend-mode: difference;

  @media (pointer: none), (pointer: coarse) {
    display: none;
    cursor: inherit !important;
  }
`;

const CursorRing = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 1px solid #faff65;
  border-radius: 50vw;
  transform: translate(-50%, -50%);
  z-index: 101;
  pointer-events: none;
`;

const CursorDot = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 9px;
  height: 9px;
  border-radius: 25vw;
  transform: translate(-50%, -50%);
  z-index: 100;
  mix-blend-mode: difference;
  background: #faff65;
  pointer-events: none;
`;

export default AnimatedCursor;
