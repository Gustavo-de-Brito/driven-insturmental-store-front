import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
height: 100%;

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export default globalStyle;