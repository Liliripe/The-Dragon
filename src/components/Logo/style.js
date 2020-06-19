import styled from '@emotion/styled'
import { theme } from '../../theme'

export const StyledLogo = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: 0;
  right: 0;

  .logo-image {
    position: relative;
    margin: 0 auto;
    text-align: center;
    height: auto;
    width: ${props => props.width};
    z-index: 99;
  }
`
export const LogoText = styled.h1`
  font-size: 2.1vw;
  text-align: center;
  font-weight: bold;
  font-style: italic;

  @media screen and (max-width: ${theme.responsive.medium}) {
    font-size: 24px;
  }
`
