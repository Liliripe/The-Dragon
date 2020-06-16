import styled from '@emotion/styled'
import Col from 'react-bootstrap/Col'
import { theme } from '../../theme'

export const StyledHeader = styled.div`
    position: relative;
    width: 100%;

    .header-active {
        .menu-buttons,
        .logo-text,
        .subscribe-button {
            z-index: 999;
            position: fixed;
            top: 15px;
        }
        .logo-text {
            top: 5px;
        }
        .subscribe-button {
            width: 23%;
        }
        ::after {
            content: ' ';
            width: 100%;
            height: 70px;
            position: fixed;
            z-index: 998;
            top: 0;
            left: 0;
            background-color: ${theme.colors.background};
        }
    }
`
export const StyledNav = styled.ul`
    display: flex;

    li {
        padding-right: 25px;
    }
`
export const NavCol = styled(Col)`
    height: 100px;
    display: flex;
    align-items: center;
`
export const LogoCol = styled(Col)`
    height: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
`