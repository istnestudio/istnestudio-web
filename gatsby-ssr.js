import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link 
      rel="preload"
      href="fonts/OpenSauceSans-Bold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="sauceSans"
    />,
    <link 
      rel="preload"
      href="fonts/OpenSauceSans-Light.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="sauceSans"
    />,
    <link 
      rel="preload"
      href="fonts/OpenSauceSans-Medium.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="sauceSans"
    />,
    <link 
      rel="preload"
      href="fonts/OpenSauceSans-SemiBold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="sauceSans"
    />,
  ])
}