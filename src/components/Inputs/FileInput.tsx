import * as React from "react";
import styled from "styled-components";
import { darkGray, lightMain } from "../../colors";
import Plus from "../../images/svgs/plus.inline.svg";
import { Input } from "../Stylings";

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(({ children, itemRef, ...dom }, ref) => (
  <Label as="label">
    <Plus/>
    {children}
    <input
      ref={ref}
      type="file"
      {...dom}
    />
  </Label>
))

const Label = styled(Input)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  width: 100%;
  height: 128px;
  border: 2px dashed ${lightMain};
  color: ${darkGray};

  input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;

type FileInputProps = 
  React.PropsWithChildren<React.InputHTMLAttributes<HTMLInputElement>>;

export default FileInput;