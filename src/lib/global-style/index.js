import { createGlobalStyle } from 'styled-components';
import { prop } from 'styled-tools';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    font-family: -apple-system, "Helvetica Neue", Arial, sans-serif;
    font-weight: normal;
  }

  article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  body {
  /*    filter: blur(5px);*/
      background-color: #ebedf0;
  }

  .nanobar {
    width: 100%;
    height: 4px;
    z-index: 9999;
    top: 0;
  }
  
  .bar {
    width: 0;
    height: 100%;
    transition: height 0.3s;
    background-color: rgb(178, 221, 255);
  }
  
  .nanobar .bar {
    visibility: hidden;
  }

  .nanobar .bar:first-child {
    visibility: visible;
  }
`;
