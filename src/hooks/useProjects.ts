import { graphql, useStaticQuery } from "gatsby";

const useProjects = () =>
  useStaticQuery<Pick<Queries.Query, "allDatoCmsProject">>(graphql`
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

export default useProjects;
