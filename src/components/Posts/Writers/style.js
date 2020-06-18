import styled from '@emotion/styled'
import { theme } from '../../../theme'
import BackgroundImage from 'gatsby-background-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const StyledRow = styled(Row)`
    margin-bottom: 20px;
`
export const StyledCol = styled(Col)`
  margin-top: 60px;
  margin-bottom: 50px;
`
export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${theme.colors.border};

    p {
        font-family: ${theme.fonts.heading};
        text-transform: uppercase;
        font-size: 1.6rem;
        font-weight: 600;
    }
    a {
        font-size: 0.6rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        opacity: 0.7;
    }
`
export const StyledImage = styled(BackgroundImage)`
    min-width: 70px;
    max-width: 100%;
    height: 70px;
    border-radius: 70px;
    overflow: hidden;
`
export const StyledInfo = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Name = styled.strong``
export const Description = styled.p``
