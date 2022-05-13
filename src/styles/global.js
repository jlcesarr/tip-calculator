import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Space Mono', sans-serif;
  }
`;
