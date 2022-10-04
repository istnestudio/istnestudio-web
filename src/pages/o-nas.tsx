import * as React from "react";
import styled from "styled-components";
import Layout from "../layouts";
import { PaddingX } from '../components/Stylings/Paddings';
import { dark } from "../colors";

const About = () => (
  <Layout
    background={dark}
    color="white"
  >
    <Wrapper>
      
    </Wrapper>
  </Layout>
);

const Wrapper = styled(PaddingX)`
  background: ${dark};
`;

export default About;