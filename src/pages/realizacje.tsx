import * as React from "react";
import styled from "styled-components";
import { dark } from "../colors";
import SectionName from "../components/SectionName";
import { Projects } from "../components/Sections";

const Realizations = () => {
  return(
    <Wrapper>
      <Projects limit={false}/>
      <SectionName>Realizacje</SectionName>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding-top: 16px;
  padding-bottom: 80px;
  background: ${dark};
`;

export default Realizations