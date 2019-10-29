import { css, createGlobalStyle } from 'styled-components'

export const theme = {
  black: "#212121",
  darkGray: "#272521",
  gray: "#756F63",
  white: "#fff",
  gold: "#BA8748",
  shadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)',
  position: {
    outerPadding: "4% 0",
    baseMargin: 6
  }
}

export const defaultFont = [
  'Merriweather',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  '"Helvetica Neue"',
  'sans-serif'
].join()

const screenBreak = {
  mobile: 992,
  phone: 650,
  small: 480,
  medium: 1024,
  xlarge: 1920,
  xxlarge: 2560
}

export const media = {
  mobile: inner => css`
    @media (max-width: ${screenBreak.mobile / 16}em) {
      ${inner}
    }
  `,
  phone: inner => css`
    @media (max-width: ${screenBreak.phone / 16}em) {
      ${inner}
    }
  `,
  small: inner => css`
    @media (max-width: ${screenBreak.small / 16}em) {
      ${inner}
    }
  `,
  custom: (n, inner) => css`
    @media (max-width: ${n / 16}em) {
      ${inner}
    }
  `,

  medium: inner => css`
    @media (min-width: ${screenBreak.medium / 16}em) {
      ${inner}
    }
  `,
  xlarge: inner => css`
    @media (min-width: ${screenBreak.xlarge / 16}em) {
      ${inner}
    }
  `,
  xxlarge: inner => css`
    @media (min-width: ${screenBreak.xxlarge / 16}em) {
      ${inner}
    }
  `
}

export const fontSize = size => css`
  font-size: ${size}rem;

  ${media.mobile(css`
    font-size: ${size - (size/5)}rem;
  `)}

  ${media.phone(css`
    font-size: ${size - (size/4)}rem;
  `)}

  ${media.xlarge(css`
    font-size: ${size*1.2}rem;
  `)}

  ${media.xxlarge(css`
    font-size: ${size*1.4}rem;
  `)}
`

export const GlobalStyle = createGlobalStyle`
  *::selection {
    color: ${theme.white};
    background: ${theme.black};
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    letter-spacing: 0.02rem;
    font-family: ${defaultFont};

    ${fontSize(1.5)}
  }

  a {
    color: ${theme.darkGray};
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
      color: ${theme.black};
    }
  }

  button, input {
    font-family: ${defaultFont};
    &:focus {
      outline: 0;
    }
  }

  .pigeon-attribution {
    background: transparent !important;
    padding: 2px 10px !important;
  }
`

export const border = css`
  border: 10px solid transparent;
  border-radius: 40px;
  overflow: hidden;
`
