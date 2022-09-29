import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Open Sauce Sans";
    src: url("/fonts/OpenSauceSans-Medium.ttf");
  }

  @font-face {
    font-family: "Open Sauce Sans";
    src: url("/fonts/OpenSauceSans-Bold.ttf");
    font-weight: 800;
  }

  @font-face {
    font-family: "Open Sauce Sans";
    src: url("/fonts/OpenSauceSans-SemiBold.ttf");
    font-weight: 600;
  }

  @font-face {
    font-family: "Open Sauce Sans";
    src: url("/fonts/OpenSauceSans-Light.ttf");
    font-weight: 200;
  }

  html, body{
    padding: 0;
    margin: 0;
    font-family: "Open Sauce Sans";
  }

  a,
  a:hover,
  a:active{
    text-decoration: none;
    color: inherit;
    font-family: "Open Sauce Sans";
  }

  *,
  *::before,
  *::after{
    box-sizing: border-box;
  }

  .tl-edges{
    overflow: hidden;
  }
`;