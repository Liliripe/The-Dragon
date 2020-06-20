import React from 'react'
import { Link } from 'gatsby'
import SimpleLineIcon from 'react-simple-line-icons'
import Col from 'react-bootstrap/Col'

import { MenuLinks, StyledLink, MenuButton } from './style'

const Menu = ({ width, offset }) => {
  return (
    <Col xs={{ width: width, offset: offset }}>
      <MenuLinks>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/">All Posts</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Lore & Story</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Videos</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Writers</StyledLink>
        </li>
      </MenuLinks>

      <MenuButton>
        <Link to="/">
          <SimpleLineIcon name="menu" />
          <span>Menu</span>
        </Link>
      </MenuButton>
    </Col>
  )
}

export default Menu
