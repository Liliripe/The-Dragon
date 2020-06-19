import React from 'react'
import Col from 'react-bootstrap/Col'

import { Links, StyledLink } from './style'

const Submenu = ({ width, offset }) => {
  return (
    <Col xs={{ width: width, offset: offset }}>
      <Links>
        <li>
          <StyledLink to="/">Advertisement</StyledLink>
        </li>
        <li>
          <StyledLink to="/">About</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Contact</StyledLink>
        </li>
      </Links>
    </Col>
  )
}

export default Submenu
