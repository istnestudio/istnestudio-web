import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";
import { dark } from "../../colors";
import useProjects from "../../hooks/useProjects";
import { PaddingXY } from "../Stylings/Paddings";
import ProjectTile from "./ProjectTile";

const Projects = () => {
  const projects = useProjects();

  return(
    <Wrapper>
      <ProjectsTiles>
        {projects.map(( project ) => <ProjectTile {...project}/>)}
      </ProjectsTiles>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background: ${dark};
`;

const ProjectsTiles = styled(PaddingXY)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 24px;

  @media screen and (min-width: 1150px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1550px){
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Projects;