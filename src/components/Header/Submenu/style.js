import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { theme } from '../../../theme'

export const SearchLinks = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: space-between;

  li {
    position: relative;
  }
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

  :hover:before {
    content: ' ';
    position: absolute;
    top: 25%;
    left: -10%;
    right: -10%;
    height: 50%;
    background-color: ${theme.colors.yellow};
    opacity: 0.3;
  }
`
export const Media = styled.div`
  display: none;

  @media screen and (max-width: ${theme.responsive.large}) {
    display: flex;
    justify-content: flex-end;

    div {
        transition: opacity ease-in-out 0.2s;
    }
    div:before {
        color: ${theme.colors.secondary};
        opacity: 1;
        font-size: 0.9rem;
        margin-left: 10px;
        padding: 8px;
        background-color: #56426c;
        border-radius: 100%;
        text-align: center;
    }
    div:hover {
        opacity: 0.8;
    }
  }
`