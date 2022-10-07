import { css, createGlobalStyle } from "styled-components"

export const size = {
  small: 400,
  medium: 480,
  mediumL: 960,
  large: 1140,
  xlarge: 1400,
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const aboveLand = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
  @media screen and (orientation:landscape)
  and (min-device-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const GlobalStyles = createGlobalStyle`
body {
  scroll-behavior: smooth;
  padding: 0;
  margin: 0;
  height:100%; 
  overflow-x: hidden;
}
a {
  text-decoration: none;
}
ul {
  margin: 0 auto;
  list-style-type: none;
}
.masthead {
  width: 100%;
  min-height: 100vh;
  position: fixed !important;
  left: 0;
  right: 0;
  bottom: 0;
  
}`
