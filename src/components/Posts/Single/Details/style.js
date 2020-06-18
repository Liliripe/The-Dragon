import styled from '@emotion/styled'
import { theme } from '../../../../theme'

export const Wrapper = styled.div`
  margin: 0 auto 32px;
  padding: 0 0 32px;
  max-width: ${theme.sizes.maxWidth};
  border-bottom: 1px solid ${theme.colors.text};
`
export const Date = styled.p`
  display: inline-block;
  font-size: 11px;
`
export const Author = styled.span`
  display: inline;
  color: ${theme.colors.textContrast};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
  margin: 0 0.5em 0 0;
`
