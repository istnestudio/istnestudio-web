import * as React from "react";
import styled from "styled-components";
import { PaddingX } from "./Stylings";

const SectionName = ({ children }: React.PropsWithChildren) => {
  const pageName = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const pageElement = pageName.current;
    const parent = pageElement?.parentElement;

    if (parent) parent.style.position = "relative";

    const handleScroll = () => {
      if (!parent || !pageElement) return;

      const h1 = window.scrollY + window.innerHeight - 120;
      const h2 = Math.floor(parent.getBoundingClientRect().height);

      if (h1 <= h2) {
        pageElement.style.position = "fixed";
        return;
      }

      pageElement.style.position = "absolute";
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageName ref={pageName}>
      <PageNameInfo>{children}</PageNameInfo>
      <PageNameLine />
    </PageName>
  );
};

const PageName = styled(PaddingX)`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 256px;
  background: linear-gradient(360deg, black 18.95%, rgba(0, 0, 0, 0) 100%);
  z-index: 50;
  pointer-events: none;
  gap: 32px;
`;

const PageNameInfo = styled.p`
  padding: 0;
  margin: 0;
  display: flex;
  color: white;
  width: fit-content;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: space-between;
  font-size: 20px;
`;

const PageNameLine = styled.div`
  position: relative;
  bottom: 44.5px;
  flex-grow: 1;
  width: fit-content;
  height: 2px;
  background: white;

  @media screen and (min-width: 1150px) {
    width: fit-content;
  }
`;

export default SectionName;
