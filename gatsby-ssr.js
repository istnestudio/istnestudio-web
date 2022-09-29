import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link 
      rel="preload"
      href="fonts/OpenSauceSans-Bold.ttf"
      as="font"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link 
      rel="preload"
      href="fonts/OpenSauceSans-Light.ttf"
      as="font"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link 
      rel="preload"
      href="fonts/OpenSauceSans-Medium.ttf"
      as="font"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link 
      rel="preload"
      href="fonts/OpenSauceSans-SemiBold.ttf"
      as="font"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}