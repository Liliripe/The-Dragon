import styled from '@emotion/styled'
import Col from 'react-bootstrap/Col'

export const StyledHeader = styled.div`
    .header-active {
        .menu-buttons,
        .logo-text,
        .subscribe-button {
            position: fixed;
            top: 15px;
        }
        .subscribe-button {
            width: 23%;
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