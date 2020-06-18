import styled from '@emotion/styled'
import { theme } from '../../../theme'
import Img from 'gatsby-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const StyledRow = styled(Row)`
    margin-bottom: 20px;
`
export const StyledCol = styled(Col)`
    margin-top: 60px;
    margin-bottom: 50px;

    @media screen and (max-width: ${theme.responsive.medium}) {
        display: none;
    }
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
export const StyledImage = styled(Img)`
    width: 65px;
    height: 65px;
    border-radius: 100%;

    @media screen and (max-width: ${theme.responsive.xlarge}) {
        width: 40px;
        height: 40px;
    }
`
export const StyledInfo = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Name = styled.strong`
    font-weight: 600;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
`
export const Description = styled.p`
    opacity: 0.7;
    font-size: 0.8rem;
    line-height: 1.2rem;
`
