import styled from '@emotion/styled'
import { theme } from '../../../theme'
import BackgroundImage from 'gatsby-background-image'
import Col from 'react-bootstrap/Col'

export const StyledCol = styled(Col)`
  div:last-of-type {
    border-bottom: 0 !important;
  }

  .medium {
    @media screen and (max-width: ${theme.responsive.medium}) {
      display: none;
    }
  }
  .large {
    text-align: center;
  }
`
export const Post = styled.div`
  transition: background 0.2s;
  padding: 10px 0;

  .small-image {
    height: 70px;
  }
  .medium-image {
    height: 140px;
  }
  .large-image {
    height: 310px;
  }
`
export const StyledImg = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  margin: 0 0 10px;

  .small-title {
    font-size: 1rem;
  }
  .large-title {
    font-size: 2.4rem;
    display: block;
    padding: 0 20px 10px;
  }
`
export const Credit = styled.p`
  font-size: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: right;
  opacity: 0.6;
  margin: 5px 0 0;
`
export const Author = styled.p`
  font-weight: 900;
  text-transform: uppercase;
  margin: 20px 0 0;
  letter-spacing: 0.5px;
  font-size: 0.55rem;

  @media screen and (max-width: ${theme.responsive.medium}) {
    margin-bottom: 30px;
  }
`
export const Excerpt = styled.p`
  .large-description {
    font-family: ${theme.fonts.heading};
    font-size: 22px;
    line-height: 1.3;
    padding: 0 30px;
    font-weight: 600;
  }
`