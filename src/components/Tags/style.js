import styled from '@emotion/styled'
import { theme } from '../../theme'

export const List = styled.ul`
  width: 100%;
  max-width: ${theme.sizes.maxWidthCentered};
`
export const Tag = styled.h2`
  display: inline-block;
  margin: 0 0.1em 0 0;
  a {
    float: left;
    transition: 0.2s;
    text-decoration: none;
    padding: 5px;
    font-weight: 900;
    font-family: ${theme.fonts.body};
    text-transform: uppercase;
    margin: 20px 0 0;
    letter-spacing: 0.5px;
    font-size: 0.55rem;
    color: white;
    background: black;
    border-radius: 4px;
  }
  .purple {
    background-color: ${theme.colors.textContrast};
  }
  .red {
    background-color: ${theme.colors.red};
  }
  .yellow {
    background-color: ${theme.colors.yellow};
  }
  .teal {
    background-color: ${theme.colors.teal};
  }
  .green {
    background-color: ${theme.colors.green};
  }
`
