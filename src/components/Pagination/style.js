import styled from '@emotion/styled'
import { theme } from '../../theme'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  width: 100%;
  margin: -1.5rem auto 2.5rem;
  max-width: ${theme.sizes.maxWidth};
  padding: 0 1.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
`
export const Button = styled(Link)`
  background: ${theme.colors.primary};
  color: white;
  padding: 1rem;
  border-radius: 2px;
  margin: 0 0 0 0.5rem;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s all;
  @media (hover: none) {
    background: ${theme.colors.primary} !important;
  }
`
export const Numbers = styled.div`
  border: 1px solid ${theme.colors.secondary};
  border-radius: 2px;
  display: inline-block;
  padding: 1rem;
  background-color: white;
  position: relative;
  transition: 0.3s all;
  svg {
    fill: ${theme.colors.text};
    margin: 0 0 0 0.25rem;
    transition: 0.3s all;
  }
  &:hover {
    background: ${theme.colors.tertiary};
  }
  @media (hover: none) {
    background: white !important;
  }
`
export const Select = styled.select`
  font-size: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: transparent;
  option {
    color: black;
  }
`
