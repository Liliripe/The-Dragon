import styled from '@emotion/styled'
import { theme } from '../../theme'

export const Title = styled.h1`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 44px;
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${theme.colors.text};
  }
`
