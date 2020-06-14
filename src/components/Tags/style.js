import styled from '@emotion/styled'
import { theme } from '../../theme'

export const List = styled.ul`
  width: 100%;
  margin: 0 auto 1em auto;
  max-width: ${theme.sizes.maxWidthCentered};
`
export const Tag = styled.li`
  display: inline-block;
  margin: 0 0.25em 0.25em 0;
  a {
    float: left;
    transition: 0.2s;
    background: ${theme.colors.tertiary};
    padding: 0.5em;
    border-radius: 2px;
    text-transform: capitalize;
    text-decoration: none;
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.secondary};
    &:hover {
      background: ${theme.colors.secondary};
    }
  }
`