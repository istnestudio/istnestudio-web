import { createGlobalStyle } from "styled-components";
import { darkMain, lightMain } from "../../colors";

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
    background: white;
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
    cursor: none !important;
  }

  input, textarea{
    font-family: "Open Sauce Sans";
  }

  .tl-edges{
    overflow: hidden;
  }

  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;

    @media screen and (min-width: 800px){
        width: 12px;
        height: 12px;
    }
  }

  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${darkMain};
    border: 0px none #ffffff;
  }

  ::-webkit-scrollbar-track {
    background: ${lightMain};
    border: 0px none #ffffff;
  }
  
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;