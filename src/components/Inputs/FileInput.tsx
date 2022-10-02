import * as React from "react";
import styled from "styled-components";
import { darkGray, lightMain } from "../../colors";
import Plus from "../../images/svgs/plus.inline.svg";
import { Input } from "../Stylings";

const FileInput = ({ children, ...dom }: FileInputProps ) => (
  <Label as="label">
    <Plus/>
    {children}
    <input
      type="file"
      {...dom}
    />
  </Label>
)

const Label = styled(Input)`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  width: 100%;
  height: 128px;
  border: 2px dashed ${lightMain};
  color: ${darkGray};

  input{
    display: none;
  }
`;

type FileInputProps = 
  React.PropsWithChildren<React.HTMLAttributes<HTMLInputElement>>;

export default FileInput;