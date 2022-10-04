import * as React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components";
import Layout from "../layouts";
import { PaddingX } from "../components/Stylings/Paddings";
import { dark } from "../colors";
import SectionName from "../components/SectionName";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

const About = ({
  data: { datoCmsAbout },
}: PageProps<Pick<Queries.Query, "datoCmsAbout">>) => {
  if (!datoCmsAbout) return null;

  const { description, title, supported } = datoCmsAbout;

  return (
    <Layout background={dark} color="white">
      <Wrapper>
        <SectionName>O nas</SectionName>
        <Description>{description}</Description>
        <Technologies>
          <Description as="h1">{title}</Description>
          <TechnologiesImages>
            {(supported as Queries.DatoCmsFileField[]).map(({ gatsbyImageData, filename }) => (
              <GatsbyImage 
                key={filename}
                objectFit="contain"
                objectPosition="center"
                image={gatsbyImageData as unknown as IGatsbyImageData}
                alt={filename || ""}
              />
            ))}
            
          </TechnologiesImages>
        </Technologies>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled(PaddingX)`
  padding-top: 48px;
  background: ${dark};
  min-height: 100vh;
  height: fit-content;

  @media screen and (min-width: 1150px) {
    padding-top: 96px;
    padding-left: 175px;
  }
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 48px;
  font-size: 20px;
  line-height: 40px;
  font-weight: 500;
  color: white;

  @media screen and (min-width: 1150px) {
    font-size: 36px;
    line-height: 64px;
    width: 52%;
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;

  @media screen and (min-width: 1150px) {
    gap: 48px;
  }
`;

const TechnologiesImages = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 62px;
  width: 100%;
  padding-bottom: 217px;

  .gatsby-image-wrapper:nth-child(3n) {
    flex: 0 0 100%;
  }

  img{
    object-fit: contain !important;
  }

  @media screen and (min-width: 1150px) {
    width: 52%;
    justify-content: flex-start;

    .gatsby-image-wrapper {
      

      &:nth-child(3n){
        flex: inherit;
      }
    }
  }
`;

export const query = graphql`
  {
    datoCmsAbout {
      title
      description
      supported {
        filename
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

export default About;
