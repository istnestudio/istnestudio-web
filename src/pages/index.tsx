import * as React from "react";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";
import { PaddingX } from "../components/Stylings/Paddings";
import Title from "../components/Stylings/Title";
import Description from "../components/Stylings/Description";
import { dark, main } from "../colors";
import Button from "../components/Stylings/Button";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Projects from "../components/Projects/Projects";

const Home = ({ 
  data: {
    datoCmsHome: {
      image,
      title,
      button,
      description
    }
  },
}: HomeProps) => {
  return (
    <Wrapper>
      <Landing>
        {image && (
          <GatsbyImage
            image={image.gatsbyImageData as unknown as IGatsbyImageData}
            alt="Home image"
            style={{ position: "absolute", right: 0 }}
          />
        )}
        <LandingImage>
        </LandingImage>
        <LandingContent>
          <LandingText>
            <Title as="h1" color={main}>
              {title}
            </Title>
            <Description color={dark}>{description}</Description>
          </LandingText>
          <Button>{button}</Button>
        </LandingContent>
      </Landing>
      <Projects/>
    </Wrapper>
  );
};

export const Head = () => <title>Istne Studio</title>;

export const query = graphql`
  {
    datoCmsHome {
      title
      description
      button
      image {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

type HomeProps = PageProps<{ datoCmsHome: Queries.DatoCmsHome }>;

const Wrapper = styled.div`
  margin-top: 72px;

  @media screen and (min-width: 1150px){
    margin-top: 0;
  }
`;

const Landing = styled.div`
  position: relative;

  img:last-child{
    opacity: 0.2 !important;

    @media screen and (min-width: 800px){
      opacity: 1 !important;
      transform: scale(1);
    }

    @media screen and (min-width: 1150px){
      transform: scale(1.22);
    }
  }

  @media screen and (min-width: 800px) {
    height: calc(100vh - 78px);
  }

  @media screen and (min-width: 1150px) {
    height: calc(100vh - 96px);
  }
`;

const LandingContent = styled(PaddingX)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media screen and (min-width: 800px) {
    position: absolute;
    bottom: 96px;
    width: fit-content;
    max-width: 500px;
  }

  @media screen and (min-width: 1150px) {
    max-width: 750px;
    bottom: 64px;
  }

  @media screen and (min-width: 1550px) {
    max-width: 950px;
    bottom: 64px;
  }
`;

const LandingText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LandingImage = styled.div`
  position: absolute;

  div:first-child {
    position: absolute;
    opacity: 0.2;

    @media screen and (min-width: 800px) {
      opacity: 1;
      right: 0;
      top: 0;
    }
  }
`;

export default Home;
