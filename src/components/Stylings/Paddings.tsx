import * as React from "react";
import styled from "styled-components";

export const PaddingX = styled.div`
  padding: 0 24px;

  @media screen and (min-width: 1150px){
    padding: 0 64px;
  }
`;

export const PaddingY = styled.div`
  padding: 24px 0;

  @media screen and (min-width: 1150px){
    padding: 64px 0;
  }
`;

const PaddingXY = ({ children, ...props }: PaddingXYProps) => (
  <PaddingX {...props}>
    <PaddingY>
      {children}
    </PaddingY>
  </PaddingX>
)

type PaddingXYProps = 
  React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>

export default PaddingXY;