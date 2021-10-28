import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  body {
		background-color: ${props => props.theme.colors.body};
		transition: background .25s linear;
  }
`
 
export default GlobalStyle