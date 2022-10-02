import styled from "styled-components";
import { darkGray, gray, main } from "../../colors";

export default styled.input`
  background: ${gray};
  padding: 24px;
  width: 100%;
  font-size: 16px;
  color: black;
  border: none;
  font-weight: 500;
  resize: none;

  &:focus{
    outline: 2px solid ${main};
  }

  &::placeholder{
    color: ${darkGray};
  }

  @media screen and (min-width: 800px){
    padding: 32px;
  }
`;