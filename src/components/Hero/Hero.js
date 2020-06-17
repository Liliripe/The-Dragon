import React from 'react'

import { Wrapper, BgImg } from './style'

const Hero = props => (
  <Wrapper height={props.height}>
    <BgImg fluid={props.image.fluid} backgroundColor={'#eeeeee'} />
  </Wrapper>
)

export default Hero
