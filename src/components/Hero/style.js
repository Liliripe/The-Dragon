import styled from '@emotion/styled'
import { theme } from '../../theme'
import Img from 'gatsby-image'

export const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
  height: auto;
`
export const BgImg = styled(Img)`
  position: absolute;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`
