import React from 'react'

import { Wrapper } from './style'

const Body = props => {
  return (
    <Wrapper
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default Body
