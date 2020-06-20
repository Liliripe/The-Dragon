import styled from '@emotion/styled'
import { theme } from '../../../theme'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const StyledRow = styled(Row)`
  margin-bottom: 10px;
  padding-bottom: 10px;
`
export const StyledCol = styled(Col)`
  margin-top: 60px;
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
export const PostTitle = styled.h5`
  font-weight: 600;
  margin-bottom: 20px;
`
export const Author = styled.p`
  font-weight: 900;
  text-transform: uppercase;
  margin: 20px 0 0;
  letter-spacing: 0.5px;
  font-size: 0.55rem;
`