import styled from '@emotion/styled'
import { theme } from '../../theme'

export const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 60px auto 0;
  max-width: ${theme.sizes.maxWidth};
  border-top: 1px solid ${theme.colors.secondary};
  padding: 10px 0;

  @media screen and (max-width: ${theme.responsive.xlarge}) {
    width: 100%;
    text-align: center;
    padding: 30px 20px;
  }
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
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media screen and (min-width: ${theme.responsive.small}) {
    width: auto;
  }
`
export const LogoText = styled.h6`
  font-size: 1.5rem;
  font-weight: bold;
`
