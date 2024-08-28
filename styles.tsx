import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export default styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-background-light: #ffffff;
    --color-text-light: #1a181f;
    /* --color-background-dark: #1a181f;
    --color-text-dark: #cecece; */

    /* --color-button: #1a1b1f;
    --color-button-hover: #f3a661;
    --color-buttonText: #001e1d; */

    --color-stroke: #1a181f;
    --color-tertiary: #76b1bd;
    /* --color-tertiary-hover: #e77862;  */

    --shadow-color: 0deg 0% 69%;
    --shadow-elevation-low: 0.3px 0.7px 0.9px hsl(var(--shadow-color) / 0.28),
      0.5px 1.1px 1.4px -1.2px hsl(var(--shadow-color) / 0.28),
      1.1px 2.6px 3.2px -2.5px hsl(var(--shadow-color) / 0.28);
    --shadow-elevation-medium: 0.3px 0.7px 0.9px hsl(var(--shadow-color) / 0.29),
      0.9px 2.2px 2.7px -0.8px hsl(var(--shadow-color) / 0.29),
      2.3px 5.3px 6.5px -1.7px hsl(var(--shadow-color) / 0.29),
      5.5px 12.8px 15.7px -2.5px hsl(var(--shadow-color) / 0.29);
    --shadow-elevation-high: 0.3px 0.7px 0.9px hsl(var(--shadow-color) / 0.27),
      1.5px 3.5px 4.3px -0.4px hsl(var(--shadow-color) / 0.27),
      2.7px 6.4px 7.8px -0.7px hsl(var(--shadow-color) / 0.27),
      4.5px 10.4px 12.7px -1.1px hsl(var(--shadow-color) / 0.27),
      7.1px 16.5px 20.2px -1.4px hsl(var(--shadow-color) / 0.27),
      11.1px 25.8px 31.6px -1.8px hsl(var(--shadow-color) / 0.27),
      16.8px 39.1px 47.9px -2.1px hsl(var(--shadow-color) / 0.27),
      24.7px 57.6px 70.5px -2.5px hsl(var(--shadow-color) / 0.27);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--color-background-light);
    color: var(--color-text-light);
    margin: 0;
  }

  h1 {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    transition: opacity 200ms ease;
    color: var(--color-text-dark);
    text-decoration: none;

    position: relative;
    transition: color 0.3s ease-in-out;

    &::before {
      content: "";
      position: absolute;
      top: 100%;
      width: 100%;
      height: 3px;
      background-color: var(--color-tertiary);
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover {
      color: var(--color-tertiary);
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }

  hr {
    width: 80vw;
    background-color: var(--color-stroke);
    opacity: 0.3;
  }

  p {
    color: var(--color-text-light);
    opacity: 0.6;
    font-weight: 600;
  }
`;
