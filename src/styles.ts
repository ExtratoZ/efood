import { createGlobalStyle } from 'styled-components';

export const colors = {
  salmon: '#E66767',
  background: '#FFF8F2',
  Footer: '#FFEBD9',
  white: '#FFFFFF'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.background}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
