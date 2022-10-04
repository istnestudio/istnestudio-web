import * as React from "react";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Projects, Partners } from "../components/Sections";
import { Description, Button, Title, PaddingX } from "../components/Stylings";
import Blob from "../images/svgs/blob-haikei.inline.svg";
import { dark, main } from "../colors";
import Layout from "../layouts";

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
  const scrollIntoContact = () =>
    document.querySelector("#contact-form")?.scrollIntoView({
      behavior: "smooth"
    });

  return (
    <Layout>
      <Wrapper>
        <Landing>
          <LandingBlob>
            <Blob/>
          </LandingBlob>
          {image && (
            <GatsbyImage
              image={image.gatsbyImageData as unknown as IGatsbyImageData}
              alt="Home image"
              style={{ position: "absolute", right: 0 }}
            />
          )}
          <LandingContent>
            <LandingText>
              <LandingTitle as="h1" color={main}>
                {title}
              </LandingTitle>
              <Description color={dark}>{description}</Description>
            </LandingText>
            <Button onClick={scrollIntoContact}>
              {button}
            </Button>
          </LandingContent>
        </Landing>
        <Projects/>
        <Partners/>
      </Wrapper>
    </Layout>
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
    top: -5vh;

    @media screen and (min-width: 800px){
      opacity: 1 !important;
      width: 60vw;
      top: 0;
    }

    @media screen and (min-width: 1150px){
      width: 55vw;
    }
  }

  @media screen and (min-width: 800px) {
    height: calc(100vh - 78px);
  }

  @media screen and (min-width: 1150px) {
    height: calc(100vh - 96px);
  }
`;

const LandingTitle = styled(Title)`
  @media screen and (min-width: 1550px){
    font-size: 64px;
    line-height: 96px;
  }
`;

const LandingBlob = styled.div`
  display: none;
  position: absolute;
  bottom: 0px;
  transform: scale(1.8);

  @media screen and (min-width: 1150px){
    display: inherit;
    right: -20vw;
    bottom: -5vh;
  }

  @media screen and (min-width: 1550px){
    display: inherit;
    right: -10vw;
    bottom: 10vh;
  }
`;

const LandingContent = styled(PaddingX)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-bottom: 48px;

  @media screen and (min-width: 800px) {
    position: absolute;
    bottom: 96px;
    width: fit-content;
    max-width: 500px;
    padding-bottom: 0;
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
