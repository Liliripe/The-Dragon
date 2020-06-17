import React from 'react'

import { Wrapper, Date, Author } from './style'

const Details = props => {
  return (
    <Wrapper>
      <Author>{props.author}</Author>
      <Date>{props.date}</Date>
    </Wrapper>
  )
}

export default Details
