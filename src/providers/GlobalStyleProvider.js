import { createGlobalStyle } from "styled-components";

import { blue100, fontFamily } from "../constants";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-size: 20px 20px;
    background-image: linear-gradient(to right, ${blue100} 0.5px, transparent 0.5px), 
      linear-gradient(to bottom, ${blue100} 0.5px, transparent 0.5px);
    background-position: 10px 10px;
  }

  // --- Mapbox Overrides ---

  .mapboxgl-ctrl-logo {
    display: none !important;
  }

  .mapboxgl-popup-content {
    padding: 0;
    border-radius: 6px;
    box-sizing: border-box;
  }

  .mapboxgl-popup-close-button {
    display: none !important;
  }

  .mapboxgl-popup-tip {
    display: none !important;
  }
`;

export default GlobalStyle;
