import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components"
import { PaddingXY } from "../../Stylings";
import { main } from "../../../colors";
import LinkIcon from "../../../images/svgs/link.inline.svg";

const ProjectTile = ({  
  title,
  link,
  image
}: Queries.DatoCmsProject) => {
  return(
    <Wrapper>
      <HoverBox>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectButton text="Zobacz projekt live" href={link || "#"}>
          <LinkIcon/>
        </ProjectButton>
      </HoverBox>
      <GatsbyImage 
        image={image?.gatsbyImageData as unknown as IGatsbyImageData}
        alt="title"
        style={{ width: "100%", height: "100%" }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  aspect-ratio: 161 / 121;

  div:first-child{
    transition: .2s opacity;
  }

  &:hover{
    div:first-child{
      opacity: 1
    }
  }
`;

const HoverBox = styled(PaddingXY)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  background: ${main}CC;
  z-index: 10;
  opacity: 0;
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

const ProjectButton = ({ children, text, href }: ProjectButtonProps) => (
  <ButtonWrapper href={href}>
    <p>{text}</p>
    {children}
  </ButtonWrapper>
)

type ProjectButtonProps = React.PropsWithChildren<{
  href: string,
  text: string
}>

const ButtonWrapper = styled.a`
  width: fit-content;
  padding: 16.5px;
  border-radius: 25vw;
  border: 2px solid white;
  color: white;
  font-size: 20px;

  &:hover{
    color: white;
  }

  p{
    margin: 0;
    display: none;
    pointer-events: none;

    @media screen and (min-width: 800px){
      display: inherit;
    }
  }

  svg{
    display: inherit;

    @media screen and (min-width: 800px){
      display: none;
    }
  }

  @media screen and (min-width: 800px){
    padding: 10px 24px;
  }
`;

export default ProjectTile