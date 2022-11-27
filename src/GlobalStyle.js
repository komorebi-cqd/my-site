import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
:root {
    font-family: OpSRegular, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 400;
  
    color-scheme: light dark;
    color: #fff;
    background-color: #E5E5E5;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  html{
    min-width: 320px;
    min-height: 100vh;
  }
  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
  }
  #root{
    width: 100%;
    height: 100vh;
  }
  a{
    text-decoration: none;
  }
`

export default GlobalStyle;