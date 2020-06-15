import styled from '@emotion/styled'
import { theme } from '../../theme'

export const StyledButton = styled.a`
  color: #fff;
  background-color: ${theme.colors.text};
  border: 1px solid ${theme.colors.text};
  border-radius: 4px;
  padding: 10px 18px 11px;
  font-size: 14px;
  transition: all ease-in-out 0.2s;

  :hover {
    color: #fff;
    background: ${theme.colors.tertiary};
    border: 1px solid ${theme.colors.tertiary};
  }
`
