import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`


  :root{
    color-scheme: dark;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
  }

  html {
    font-size: 16px;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.background.main};
    color: ${({ theme }) => theme.colors.text.main};
    font-family: "Roboto", sans-serif;

  }

  a {
    text-decoration: none;
    color: var(--textD6);
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
      border-radius: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color:${({ theme }) => theme.colors.primary.secondary};
      border-radius: 5px;
  }

  @keyframes entering {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide_left {
    from {
      transform: translateX(50%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1 !important;
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed !important;
  }

  button ,a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
