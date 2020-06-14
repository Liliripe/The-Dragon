import React from 'react'

import { Wrapper, Date, ReadingTime } from './style'

const Details = props => {
  return (
    <Wrapper>
      <Date>📅 {props.date}</Date>
      <span>•</span>
      <ReadingTime>{`⏱️${props.timeToRead} min read `}</ReadingTime>
    </Wrapper>
  )
}

export default Details
