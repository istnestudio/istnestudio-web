import * as React from "react";
import styled from "styled-components";
import { dark } from "../colors";
import SectionName from "../components/SectionName";
import { Projects } from "../components/Sections";
import SEO from "../components/Seo";
import Layout from "../layouts";

const Realizations = () => {
  return (
    <Layout color="white" background={dark}>
      <Wrapper>
        <Projects limit={false} />
        <SectionName>Realizacje</SectionName>
      </Wrapper>
    </Layout>
  );
};

export const Head = () => 
  <SEO
    title="Realizacje"
  />;

const Wrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 80px;
  background: ${dark};
`;

export default Realizations;
