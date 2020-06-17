import React from 'react'
import { Link } from 'gatsby'

import { Post, StyledImg, Title, Excerpt } from './style'

const Latest = ({ slug, heroImage, title, author, body, ...props }) => {
  return (
    <>
      {heroImage && body && (
        <Post className="border-bottom">
          <Link to={`${props.basePath}/${slug}/`}>
            <StyledImg
              Tag="section"
              fluid={heroImage.fluid}
              backgroundColor={`#eeeeee`}
              className={props.size}
            />
            <Title>{title}</Title>
            <p>{author}</p>
            {props.description && (
              <Excerpt
                dangerouslySetInnerHTML={{
                  __html: body.childMarkdownRemark.excerpt,
                }}
              />
            )}
          </Link>
        </Post>
      )}
    </>
  )
}

export default Latest
