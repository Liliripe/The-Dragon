import React from 'react'

import { Wrapper, BgImg, Title } from './style'

const Hero = props => (
  <Wrapper height={props.height}>
    <BgImg fluid={props.image.fluid} backgroundColor={'#eeeeee'} />
    <Title>{props.title}</Title>
  </Wrapper>
)

export default Hero
