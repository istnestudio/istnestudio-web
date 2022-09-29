import styled from "styled-components";

export default styled.p<{ color?: string }>`
  margin: 0;
  font-size: 20px;
  color: ${({ color }) => color || "white"};
  line-height: 32px;

  @media screen and (min-width: 1550px){
    font-size: 25px;
    line-height: 40px;
  }
`;