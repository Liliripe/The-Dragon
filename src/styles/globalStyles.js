import { css } from '@emotion/core'
import { theme } from '../theme'

export const globalStyles = css`
  /* http://meyerweb.com/eric/tools/css/reset/
 v2.0 | 20110126
 License: none (public domain)
*/
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    /* stylelint-disable-next-line */
    font: inherit;
    vertical-align: baseline;
  }

  /* Added to Fix Footer to bottom of viewport */
  html,
  body {
    min-height: 100%;
    position: relative;
    max-width: 100%;
  }
  .siteRoot {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .siteContent {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }
  footer {
    width: 100%;
  }

  /* End Fix to Place Footer on Bottom of Viewport */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    font-size: 100%;
    font-variant-ligatures: none;
    font-family: 'Libre Franklin', sans-serif;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    font-weight: 400;
    background-color: ${theme.colors.background};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Cormorant', serif;
  }
  h1 {
    font-size: 4.6rem;
  }
  h2 {
    font-size: 3.6rem;
  }
  h3 {
    font-size: 2.8rem;
  }
  h4 {
    font-size: 2.2rem;
  }
  h5 {
    font-size: 1.8rem;
  }
  h6 {
    font-size: 1.6rem;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:invalid {
      box-shadow: none;
    }
    &:focus {
      outline: 5px auto #5e9ed6;
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  a,
  a:visited,
  a:active,
  a:hover {
    text-decoration: none;
  }
  a,
  a:visited {
    color: ${theme.colors.text};
    transition: color ease-in-out 0.2s;
  }
  a:hover,
  a:active {
    color: ${theme.colors.tertiary};
  }

  body:not(.user-is-tabbing) button:focus,
  body:not(.user-is-tabbing) input:focus,
  body:not(.user-is-tabbing) select:focus,
  body:not(.user-is-tabbing) textarea:focus,
  body:not(.user-is-tabbing) a:focus {
    outline: none;
  }
`
