import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Col from 'react-bootstrap/Col'

import { StyledRow, PostTitle, Author } from './style'

const Popular = ({ slug, heroImage, title, author, ...props }) => {
    return (
      <StyledRow className="border-bottom">
        <Col xs={6} md={4}>
          <Link to={`${props.basePath}/${slug}/`}>
            <Img
              Tag="section"
              fluid={heroImage.fluid}
              backgroundColor={`#eeeeee`}
            />
          </Link>
        </Col>

        <Col xs={6} md={8}>
          <PostTitle>{title}</PostTitle>
          <Author>{author}</Author>
        </Col>
      </StyledRow>
    )
}

export default Popular
