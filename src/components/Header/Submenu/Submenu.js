import React from 'react'
import { Link } from 'gatsby'
import SimpleLineIcon from 'react-simple-line-icons'
import Col from 'react-bootstrap/Col'

import { SearchLinks, StyledLink, Media } from './style'

const Submenu = ({ width, offset }) => {
  return (
    <Col xs={{ width: width, offset: offset }}>
      <SearchLinks>
        <li>
          <StyledLink to="/">Player Tips</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Mechanics</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Interviews</StyledLink>
        </li>
        <li>
          <StyledLink to="/">About</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Contact</StyledLink>
        </li>
      </SearchLinks>

      <Media>
        <Link to="/">
          <SimpleLineIcon name="social-youtube" />
        </Link>
        <Link to="/">
          <SimpleLineIcon name="social-reddit" />
        </Link>
        <Link to="/">
          <SimpleLineIcon name="social-steam" />
        </Link>
      </Media>
    </Col>
  )
}

export default Submenu
