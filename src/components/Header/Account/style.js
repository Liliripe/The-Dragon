import styled from '@emotion/styled'
import { theme } from '../../../theme'
import { Link } from 'gatsby'

export const Links = styled.ul`
    list-style-type: none;
    display: flex;

    li {
        padding-right: 28px;
    }
`
export const StyledLink = styled(Link)`
    color: ${theme.colors.secondary} !important;
    font-size: 0.9rem;
    transition: opacity ease-in-out 0.2s;
    opacity: 0.85;

    :hover {
        opacity: 1;
    }
`