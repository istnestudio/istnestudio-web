import { graphql, useStaticQuery } from "gatsby";

const usePartners = () =>
  useStaticQuery<Pick<Queries.Query, "allDatoCmsPartner">>(graphql`
    {
      allDatoCmsPartner {
        nodes {
          id
          link
          image {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `).allDatoCmsPartner.nodes;

export default usePartners;
