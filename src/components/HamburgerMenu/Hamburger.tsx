import * as React from "react";
import styled from "styled-components";

const Hamburger = React.forwardRef<HTMLDivElement, { color: string }>(({ color }, ref ) => (
  <Wrapper ref={ref} color={color}>
    <Line />
    <Line />
    <Line />
  </Wrapper>
))

const Wrapper = styled.div<{ color: string }>`
  width: 24px;
  height: 18px;

  div{
    background: ${({ color }) => color};
  }
`;

const Line = styled.div`
  width: 24px;
  height: 3px;
  margin: 4px 0;
  
  &:first-child{
    margin-top: 0;
  }
`;

export default Hamburger;