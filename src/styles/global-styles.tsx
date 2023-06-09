import { createGlobalStyle } from "styled-components";

// IMPORT FONTS

import GilroyExtra from "../assets/fonts/Gilroy-ExtraBold.ttf";
import GilroySemi from "../assets/fonts/Gilroy-SemiBold.ttf";

export const GlobalStyles = createGlobalStyle`
  
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyExtra}) format('truetype');
    font-weight: 800;
  }
  
  @font-face {
    font-family: 'Gilroy';
    src: local('GilroySemi'),
      url(${GilroySemi}) format('truetype');
    font-weight: 600;
  }

  *, *::before,*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  border: 0 solid transparent;
}

// prevent iOS font size change
html {
  -webkit-text-size-adjust: 100%;
}

// reset body line-height
body {
  min-height: 100vh;
  line-height: 1;
  text-rendering: optimizeSpeed;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  background: linear-gradient(140deg, #131a15 0%, #4B2CB2 100%);
}

// all media elements set to block and full width
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  max-width: 100%;
}

// inherit fonts for inputs and buttons
input,
button,
textarea,
select {
  font: inherit;
  line-height: inherit;
  color: inherit;
}

// collapse table
table {
  border-collapse: collapse;
  border-spacing: 0;
}

// assign button hover state
button, [role="button"] {
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: 0;
  }
}

ul, ol, dl {
  margin: 0;
  padding: 0;
  display: block;
  align-items: center;
  list-style-type: none;
}

.container {
    max-width: 1210px;
    width: 100%;
    margin: 0 auto;
    padding: 0 25px;
    overflow-y: hidden;
  }
`;
