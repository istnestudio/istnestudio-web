import { graphql, useStaticQuery } from "gatsby";

const usePartners = () =>
  useStaticQuery<PartnersProps>(graphql`
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

type PartnersProps = { allDatoCmsPartner: Queries.DatoCmsPartnerConnection };
export default usePartners;
