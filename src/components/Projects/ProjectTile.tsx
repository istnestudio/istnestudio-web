import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components"
import { main } from "../../colors";
import { PaddingXY } from "../Stylings/Paddings";

const ProjectTile = ({  
  title,
  link,
  image
}: Queries.DatoCmsProject) => {
  React.useEffect(() => {

  }, [])

  return(
    <Wrapper>
      <HoverBox>
        <ProjectTitle>{title}</ProjectTitle>
      </HoverBox>
      <GatsbyImage 
        image={image?.gatsbyImageData as unknown as IGatsbyImageData}
        alt="title"
        style={{ width: "100%" }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
`;

const HoverBox = styled(PaddingXY)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  background: ${main}CC;
  z-index: 10;
`;

const ProjectTitle = styled.h3`
  color: white;
  font-size: 32px;
  line-height: 48px;
  font-weight: 400;

  @media screen and(min-width: 1150px){
    font-size: 36px;
    line-height: 64px;
  }
`;

export default ProjectTile