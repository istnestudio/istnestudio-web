import { graphql, useStaticQuery } from "gatsby";

const useProjects = () =>
  useStaticQuery<ProjectsProps>(graphql`
    {
      allDatoCmsProject(
        sort: { order: DESC, fields: meta___publishedAt }
      ) {
        nodes {
          id
          title
          link
          image {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `).allDatoCmsProject.nodes;

type ProjectsProps = { allDatoCmsProject: Queries.DatoCmsProjectConnection };

export default useProjects;
