import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import styled, { keyframes } from "styled-components";
import usePartners from "../../hooks/usePartners";
import clamp from "../../utils/clamp";
import { PaddingX } from "../Stylings";

const desktopWidth = "240px";
const mobileWidth = "216px";
const animationLength = "10s";

const Partners = () => {
  const partners = usePartners();

  const doubledPartners = [
    ...partners,
    ...partners.map(({ id, image }) => ({
      id: `${id}-2`,
      image,
    })),
  ];

  return (
    <Wrapper as="section">
      <Track count={clamp(partners.length, partners.length, 8)}>
        <Slides count={partners.length}>
          {doubledPartners.map(({ id, image }) => (
            <Slide key={id}>
              <GatsbyImage
                image={image?.gatsbyImageData as unknown as IGatsbyImageData}
                alt={id}
                style={{ zIndex: -1 }}
              />
            </Slide>
          ))}
        </Slides>
      </Track>
    </Wrapper>
  );
};

const Wrapper = styled(PaddingX)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #000000 0%, #05009a 100%);
  width: 100%;
  height: 196px;
`;

const slide = (count: number, width: string) => keyframes`
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(calc((${width} * ${count} * -1)))
  }
`;

const Track = styled.div<{ count: number }>`
  position: relative;
  overflow-x: hidden !important;
  width: calc(${mobileWidth} * ${({ count }) => count});
  height: 100%;

  @media screen and (min-width: 800px) {
    width: calc(${desktopWidth} * ${({ count }) => count});
  }
`;

const Slides = styled.div<{ count: number }>`
  display: flex;
  position: absolute;
  height: 100%;
  width: calc(${mobileWidth} * ${({ count }) => count * 2});
  animation: ${({ count }) => slide(count, mobileWidth)} ${animationLength}
    linear infinite;

  @media screen and (min-width: 800px) {
    width: calc(${desktopWidth} * ${({ count }) => count * 2});
    animation: ${({ count }) => slide(count, desktopWidth)} ${animationLength}
      linear infinite;
  }
`;

const Slide = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0 64px;
  text-align: center;
  width: 88px;

  @media screen and (min-width: 800px) {
    width: 112px;
  }
`;

export default Partners;
