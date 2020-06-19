import styled from '@emotion/styled'
import { theme } from '../../../theme'
import Col from 'react-bootstrap/Col'

export const StyledCol = styled(Col)`
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
`