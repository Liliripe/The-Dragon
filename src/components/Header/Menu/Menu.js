import React from 'react'
import Col from 'react-bootstrap/Col'

import { MenuLinks, StyledLink } from './style'

const Menu = ({ width, offset }) => {
  return (
    <Col xs={{ width: width, offset: offset }}>
      <MenuLinks>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Posts</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Business</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Technology</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Pages</StyledLink>
        </li>
      </MenuLinks>
    </Col>
  )
}

export default Menu
