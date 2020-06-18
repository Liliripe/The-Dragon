import styled from '@emotion/styled'
import { theme } from '../../../../theme'
require('prismjs/themes/prism.css')

export const Wrapper = styled.div`
  padding: 10px 0 0;
  margin: 10px auto 0;
  max-width: ${theme.sizes.maxWidth};
  border-top: 1px solid ${theme.colors.secondary};
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 16px 0;
  }

  a {
    transition: 0.2s;
    color: ${theme.colors.secondary};
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }

  ::after {
    background-color: #000;
    content: '';
    display: block;
    height: 1px;
    margin: 16px auto;
    width: 96px;
  }
`
