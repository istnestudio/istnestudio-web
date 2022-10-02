import * as React from "react";
import styled from "styled-components";
import { darkGray, main } from "../../colors";

const CheckboxInput = ({ children, error, ...dom }: CheckboxProps) => {
  const id = React.useId();

  return(
    <Wrapper>
      <Checkbox type="checkbox" {...dom} id={id}/>
      <Description htmlFor={id}>
        {children}<br />
        <ErrMsg>{error}</ErrMsg>
      </Description>
    </Wrapper>
  )
};

type CheckboxProps = React.PropsWithChildren<{
  error?: string
}> & Omit<React.HTMLAttributes<HTMLInputElement>, "id">

const Wrapper = styled.div`
  position: relative;
  display: grid;
  min-height: 43px;
  grid-template-columns: 32px 1fr;

  @media screen and (min-width: 1150px){
    padding: 19px 0;
  }
`;

const Checkbox = styled.input`
  width: 16px; 
  height: 16px; 
  cursor: pointer;
  -webkit-appearance: none;
  background: white;
  appearance: none;
  border: 1px solid ${darkGray};
  transition: background 0.15s;

  &:checked {
    border: 1px solid ${main};
    background: ${main};
  }
`;

const Description = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${darkGray};
  height: fit-content;
  gap: 10px;
  font-size: 14px;
  line-height: 17px;
  margin-top: 2px;
`;

const ErrMsg = styled.span`
  font-size: 12px;
  color: red;
  position: absolute;
  bottom: -24px;
`;

export default CheckboxInput;
