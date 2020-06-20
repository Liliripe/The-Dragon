import styled from '@emotion/styled'
import { theme } from '../../../theme'
import Col from 'react-bootstrap/Col'

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
export const BookList = styled.ol`
  li {
    border-bottom: 1px solid ${theme.colors.border};
    margin-bottom: 10px;
    padding-bottom: 20px;
  }
  li:last-of-type {
    border-bottom: 0;
  }
`
export const BookTitle = styled.h6`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
`
export const BookAuthor = styled.p`
  font-weight: 900;
  text-transform: uppercase;
  margin: 10px 0 0;
  letter-spacing: 0.5px;
  font-size: 0.55rem;
`