import styled from '@emotion/styled'
import { theme } from '../../theme'

export const StyledLogo = styled.svg`
  display: block;
  margin: 0 auto;
  padding: 20px 0 0;
  max-width: 100%;
`
export const LogoText = styled.h1`
  font-size: 2.1vw;
  text-align: center;
  font-weight: bold;
  font-style: italic;
  padding: 10px 0 0;

  @media screen and (max-width: ${theme.responsive.medium}) {
    font-size: 24px;
  }
`
