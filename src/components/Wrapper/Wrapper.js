import React from 'react'

import { StyledWrapper } from './style'

const Wrapper = props => {
  return <StyledWrapper top={props.top} mobileTop={props.mobileTop}>{props.children}</StyledWrapper>
}

export default Wrapper
