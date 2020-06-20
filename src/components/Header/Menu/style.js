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
    li:first-of-type:after {
        content: ' ';
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${theme.colors.secondary};
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