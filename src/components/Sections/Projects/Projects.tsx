import * as React from "react";
import styled from "styled-components";
import ProjectTile from "./ProjectTile";
import { PaddingXY } from "../../Stylings";
import useProjects from "../../../hooks/useProjects";
import { dark } from "../../../colors";

const Projects = ({ limit }: ProjectsProps) => {
  const projects = useProjects();
  limit ??= true;

  return(
    <Wrapper>
      <ProjectsTiles>
        {[...(limit ? projects.slice(0, 6) : projects)].map(( project ) => 
          <ProjectTile {...project} key={project.id}/>
        )}
      </ProjectsTiles>
    </Wrapper>
  )
}

interface ProjectsProps{
  limit?: boolean
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  background: ${dark};
`;

const ProjectsTiles = styled(PaddingXY)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  place-items: center;
  gap: 24px;

  @media screen and (min-width: 1150px){
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Projects;