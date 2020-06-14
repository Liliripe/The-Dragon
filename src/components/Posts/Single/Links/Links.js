import React from 'react'

import { Wrapper, Box, PreviousLink, NextLink } from './style'

const Links = props => {
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <PreviousLink to={`${props.basePath}/${props.previous.slug}/`}>
            &#8592; Prev
          </PreviousLink>
        )}
        {props.next && (
          <NextLink to={`${props.basePath}/${props.next.slug}/`}>
            Next &#8594;
          </NextLink>
        )}
      </Box>
    </Wrapper>
  )
}

export default Links
