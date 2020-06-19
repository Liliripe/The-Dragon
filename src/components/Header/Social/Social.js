import React from 'react'
import { Link } from 'gatsby'
import SimpleLineIcon from 'react-simple-line-icons'

import { StyledCol } from './style'

const Social = ({ width, offset }) => {
  return (
    <StyledCol xs={{ width: width, offset: offset }}>
      <Link to="/">
        <SimpleLineIcon name="social-youtube" />
      </Link>
      <Link to="/">
        <SimpleLineIcon name="social-reddit" />
      </Link>
      <Link to="/">
        <SimpleLineIcon name="social-spotify" />
      </Link>
      <Link to="/">
        <SimpleLineIcon name="social-steam" />
      </Link>
      <Link to="/">
        <SimpleLineIcon name="social-github" />
      </Link>
      <Link to="/">
        <SimpleLineIcon name="paper-plane" />
      </Link>
    </StyledCol>
  )
}

export default Social
