import * as React from "react";
import styled from "styled-components";
import ProjectTile from "./ProjectTile";
import { PaddingXY } from "../../Stylings";
import useProjects from "../../../hooks/useProjects";
import { dark } from "../../../colors";

const Projects = () => {
  const projects = useProjects();

  return(
    <Wrapper>
      <ProjectsTiles>
        {projects.slice(0, 6).map(( project ) => 
          <ProjectTile {...project} key={project.id}/>
        )}
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