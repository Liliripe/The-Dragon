import styled from '@emotion/styled'
import { theme } from '../../theme'
import Row from 'react-bootstrap/Row'

export const StyledHeader = styled.header`
    position: relative;
    width: 100%;
    margin-bottom: 30px;
`
export const Navigation = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 98;
`
export const Primary = styled.div`
    position: relative;
    width: 100%;
    background-color: ${theme.colors.purple};
`
export const Secondary = styled.div`
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    width: 100%;
    background-color: ${theme.colors.darkPurple};
`
export const StyledRow = styled(Row)`
    height: 60px;
    align-content: center;
`