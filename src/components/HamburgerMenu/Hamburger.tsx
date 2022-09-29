import * as React from "react";
import styled from "styled-components";

const Hamburger = React.forwardRef<HTMLDivElement>((_props, ref) => (
  <Wrapper ref={ref}>
    <Line />
    <Line />
    <Line />
  </Wrapper>
))

const Wrapper = styled.div`
  width: 24px;
  height: 18px;
`;

const Line = styled.div`
  width: 24px;
  height: 3px;
  background: black;
  margin: 4px 0;
  
  &:first-child{
      margin-top: 0;
  }
`;

export default Hamburger;