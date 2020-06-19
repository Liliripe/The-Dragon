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