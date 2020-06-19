import styled from '@emotion/styled'
import { theme } from '../../theme'

export const StyledWrapper = styled.div`
    width: 96%;
    max-width: ${theme.sizes.maxWidth};
    margin: ${props => (props.top ? props.top : '0')} auto 0;
`