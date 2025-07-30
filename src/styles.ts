import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  salmon: '#E66767',
  background: '#FFF8F2',
  lightSalmon: '#FFEBD9',
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

  a {
    color: ${colors.lightSalmon};
  }
`;

export const Button = styled.button`
  background-color: ${colors.salmon};
  padding: 4px 6px;
  color: ${colors.lightSalmon};
  font-size: 14px;
  font-weight: 700;
  border: none;
  margin-right: 8px;
`
export const Section = styled.div`
  display: inline-block;
  text-align: center;
  justify-content: center;
  width: 100%;
`

export default GlobalStyle;
