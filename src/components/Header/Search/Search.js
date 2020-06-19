import React from 'react'
import Col from 'react-bootstrap/Col'

import { SearchLinks, StyledLink } from './style'

const Search = ({ width, offset }) => {
  return (
    <Col xs={{ width: width, offset: offset }}>
      <SearchLinks>
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
        <li>
          <StyledLink to="/">Shop</StyledLink>
        </li>
      </SearchLinks>
    </Col>
  )
}

export default Search
