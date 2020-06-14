import styled from '@emotion/styled'
import { theme } from '../../theme'

export const Title = styled.h1`
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
  margin: 0 0 3rem 0;
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${theme.colors.text};
  }
`
