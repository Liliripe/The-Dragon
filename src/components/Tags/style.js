import styled from '@emotion/styled'
import { theme } from '../../theme'

export const List = styled.ul`
  width: 100%;
  max-width: ${theme.sizes.maxWidthCentered};
`
export const Tag = styled.h2`
  display: inline-block;
  margin: 0 0.25em 0 0;
  a {
    float: left;
    transition: 0.2s;
    text-transform: uppercase;
    text-decoration: none;
    color: ${theme.colors.textContrast};
    font-size: 24px;
  }
`
