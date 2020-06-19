import React from 'react'

import { StyledWrapper } from './style'

const Wrapper = props => {
  return <StyledWrapper top={props.top}>{props.children}</StyledWrapper>
}

export default Wrapper
