import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { theme } from '../../../theme'

export const MenuLinks = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: space-between;

  li {
    position: relative;
  }

  /* Effect 21: borders slight translate */

  li a::before,
  li a::after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${theme.colors.textContrast};
    content: '';
    opacity: 0;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    -moz-transition: opacity 0.3s, -moz-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  li a::before {
    top: -5px;
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  li a::after {
    bottom: -5px;
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    transform: translateY(10px);
  }

  li a:hover,
  li a:focus {
    color: #fff;
  }

  li a:hover::before,
  li a:focus::before,
  li a:hover::after,
  li a:focus::after {
    opacity: 1;
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    transform: translateY(0px);
  }
  /* End Effect 21 */

  @media screen and (max-width: ${theme.responsive.xlarge}) {
    li:last-of-type {
      display: none;
    }
  }
  @media screen and (max-width: ${theme.responsive.large}) {
    display: none;
  }
`
export const StyledLink = styled(Link)`
  color: ${theme.colors.secondary} !important;
  transition: color ease-in-out 0.2s;
  position: relative;
`
export const MenuButton = styled.div`
  display: none;

  @media screen and (max-width: ${theme.responsive.large}) {
    display: block;

    a {
      display: flex;
      align-items: center;
      color: ${theme.colors.secondary};
    }
    span {
      padding-left: 10px;
      font-weight: 600;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
  }
`
