import styled from '@emotion/styled'
import { theme } from '../../theme'

export const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${theme.sizes.maxWidth};
  border-top: 1px solid ${theme.colors.secondary};
  padding: 10px 0;
`

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  align-items: center;
`

export const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${theme.colors.text};
  }
`
