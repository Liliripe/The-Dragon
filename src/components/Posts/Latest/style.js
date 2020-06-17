import styled from '@emotion/styled'
import { theme } from '../../../theme'
import BackgroundImage from 'gatsby-background-image'
import Col from 'react-bootstrap/Col'

export const StyledCol = styled(Col)`
  div:last-of-type {
    border-bottom: 0 !important;
  }
`
export const Post = styled.div`
  transition: background 0.2s;
  padding: 10px 0;

  .small {
    height: 45px;
  }
  .medium {
    height: 130px;
  }
  .large {
    height: 440px;
  }
`
export const StyledImg = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
export const Title = styled.h2`
`
export const Date = styled.h3`
`
export const ReadingTime = styled.h4`
`
export const Excerpt = styled.p`
`