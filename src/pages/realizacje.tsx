import * as React from "react";
import styled from "styled-components";
import { dark } from "../colors";
import SectionName from "../components/SectionName";
import { Projects } from "../components/Sections";
import Layout from "../layouts";

const Realizations = () => {
  return(
    <Layout
      color="white"
      background={dark}
    >
      <Wrapper>
        <Projects limit={false}/>
        <SectionName>Realizacje</SectionName>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding-top: 16px;
  padding-bottom: 80px;
  background: ${dark};
`;

export default Realizations