import styled from '@emotion/styled'
import { theme } from '../../theme'

export const StyledLogo = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: 0;
  right: 0;

  .logo-active {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background-color: ${theme.colors.darkPurple};
    border: 10px solid ${theme.colors.darkPurple};
    border-radius: 100%;
    transition: border ease-in-out 0.2s;
  }
  .logo-image {
    position: relative;
    margin: 0 auto;
    text-align: center;
    height: auto;
    width: ${props => props.width};
    z-index: 99;

    @media screen and (max-width: ${theme.responsive.large}) {
      background-color: ${theme.colors.darkPurple};
      padding: 0 10px 10px;
      border-radius: 100%;
      border: 5px solid ${theme.colors.darkPurple};
    }
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
