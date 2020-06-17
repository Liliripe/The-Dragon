import styled from '@emotion/styled'
import { theme } from '../../../theme'
import BackgroundImage from 'gatsby-background-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const StyledRow = styled(Row)`
    .border-right:last-of-type {
        border-right: 0 !important;
    }
`
export const StyledCol = styled(Col)`
    margin: 20px 0;
    padding-top: 20px;
    border-top: 1px solid ${theme.colors.border};
`
export const StyledImg = styled(BackgroundImage)`
    width: 100%;
    height: 150px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
export const Credit = styled.p`
  font-size: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: right;
  opacity: 0.6;
  margin: 5px 0 0;
`
export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  margin: 0 0 10px;
`
export const Description = styled.p`
    font-family: ${theme.fonts.heading};
    font-size: 1rem;
    margin-bottom: 10px;
`
export const Author = styled.p`
  font-weight: 900;
  text-transform: uppercase;
  margin: 20px 0 0;
  letter-spacing: 0.5px;
  font-size: 0.55rem;
`
