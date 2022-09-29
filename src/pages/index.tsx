import * as React from "react";
import styled from "styled-components";
import { graphql, PageProps } from 'gatsby';
import { PaddingX } from '../components/Stylings/Paddings';
import Title from "../components/Stylings/Title";
import Description from "../components/Stylings/Description";
import { dark, main } from "../colors";
import Button from "../components/Stylings/Button";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

const Home = ({ data: {
  home: { title, description, button, image: homeImage },
  projects,
  partners,
  slogan
} }: PageProps<HomeData>) => {
  console.log(homeImage);
  return (
    <Wrapper>
      <Landing>  
        <LandingImage>
          {homeImage && (
            <GatsbyImage
              image={homeImage.gatsbyImageData as unknown as IGatsbyImageData}
              alt="Home image"
              objectFit="cover"
            />
          )}
        </LandingImage>
        <LandingContent>
          <LandingText>
            <Title
              as="h1"
              color={main}
            >
              {title}
            </Title>
            <Description color={dark}>
              {description}
            </Description>
          </LandingText>
          <Button>{button}</Button>
        </LandingContent>
      </Landing>
    </Wrapper>
  );
};

export const Head = () => (
  <title>Istne Studio</title>
)

export const query = graphql`
  {
    home: datoCmsHome{
      title,
      description,
      button,
      image{
        gatsbyImageData(
          width: 828,
          height: 700,
          placeholder: BLURRED
        )
      }
    },
    projects: allDatoCmsProject{
      edges{
        node{
          id,
          title,
          link,
          image{ 
            gatsbyImageData(placeholder: BLURRED) 
          }
        }
      }
    },
    partners: allDatoCmsPartner{
      edges{
        node{
          id,
          image{
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    },
    slogan: datoCmsSlogan{
      title
    }
  }
`
interface HomeData {
  home: Queries.DatoCmsHome,
  projects: Queries.DatoCmsProjectConnection,
  partners: Queries.DatoCmsPartnerConnection,
  slogan: Queries.DatoCmsSlogan
}

const Wrapper = styled.div`
  margin-top: 72px;
  min-height: 100vh;
`;

const Landing = styled.div`
  position: relative;

  @media screen and (min-width: 800px){
    height: 100vh;
  }
`;

const LandingContent = styled(PaddingX)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media screen and (min-width: 800px){
    position: absolute;
    bottom: calc(32px + 96px + 84px);
    width: fit-content;
    max-width: 500px;
  }

  @media screen and (min-width: 1150px){
    max-width: 750px;
  }
`;

const LandingText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LandingImage = styled.div`
  position: absolute;
  width: 100%;
  height: 150%;
  top: -80px;
  right: -60px;

  div:first-child{
    position: absolute;
    opacity: 0.2;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 800px){
      opacity: 1;
      right: 0;
      top: 0;
    }
  }

  img{
    object-fit: cover;
  }

  @media screen and (min-width: 800px){
    height: 70%;
    width: 60%;
    right: 0;
    top: 0%;
  }
  
  @media screen and (min-width: 1150px){
    height: 100%;
    width: 50%;
    right: 0;
    top: calc(-54px - 96px);
  }
`;

export default Home;