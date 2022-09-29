import styled from "styled-components";

export default styled.h2<{ color?: string }>`
  margin: 0;
  font-size: 36px;
  color: ${({ color }) => color || "white"};
  font-weight: 600;
  line-height: 48px;

  @media screen and (min-width: 1150px){
    font-size: 48px;
    line-height: 64px;
  }

  @media screen and (min-width: 1550px){
    font-size: 64px;
    line-height: 96px;
  }
`;