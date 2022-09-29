import styled from "styled-components";

export default styled.p<{ color?: string }>`
  margin: 0;
  font-size: 20px;
  color: ${({ color }) => color || "white"};
  line-height: 32px;
`;