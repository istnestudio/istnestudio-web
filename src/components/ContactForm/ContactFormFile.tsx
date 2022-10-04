import * as React from "react";
import styled from "styled-components";
import FileIcon from "../../images/svgs/file.inline.svg";
import { darkGray, main, red } from "../../colors";
import bytesToMb from "../../utils/bytesToMB";

const ContactFormFile = ({ size, name, onRemove }: ContactFormFileProps) => (
  <Wrapper>
    <FileIcon />
    <FileContent>
      <FileName>
        {name} <span>{bytesToMb(size)} MB</span>
      </FileName>
      <FileRemoveButton as="button" onClick={() => onRemove()}>
        usuń
      </FileRemoveButton>
    </FileContent>
  </Wrapper>
);

type ContactFormFileProps = React.PropsWithChildren<
  Pick<File, "size" | "name">
> & {
  onRemove: () => any;
};

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const FileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 800px){
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }
`;

const FileName = styled.p`
  font-size: 16px;
  color: ${darkGray};

  span {
    color: ${main};
    font-size: 13px;
    margin-left: 5px;
    font-weight: 600;
  }
`;

const FileRemoveButton = styled(FileName)`
  border: none;
  background: none;
  color: ${red};
  text-decoration: underline;
  padding: 0;
`;

export default ContactFormFile;
