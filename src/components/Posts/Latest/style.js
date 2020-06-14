import styled from '@emotion/styled'
import { theme } from '../../../theme'
import Img from 'gatsby-image'

export const Post = styled.li`
  position: relative;
  border: 1px solid ${theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${theme.colors.text};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${theme.responsive.small}) {
        padding-bottom: ${props => (featured ? '40%' : '60%')};
      }
    }
  }
`
export const StyledImg = styled(Img)`
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
`
export const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`
export const Date = styled.h3`
  margin: 0 1rem 0.5rem 1rem;
  color: gray;
`
export const ReadingTime = styled.h4`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`
export const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`