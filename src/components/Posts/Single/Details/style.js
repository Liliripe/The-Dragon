import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`
export const Date = styled.p`
  display: inline-block;
`
export const ReadingTime = styled.p`
  display: inline-block;
`
