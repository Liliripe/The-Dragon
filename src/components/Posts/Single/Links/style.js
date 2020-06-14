import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  margin: -2em 0 0 0;
  padding: 0 1.5em 2em;
`
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    background: ${props => props.theme.colors.primary};
    color: white;
    padding: 1em;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`
export const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`
export const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`