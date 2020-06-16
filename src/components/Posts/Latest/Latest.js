import React from 'react'
import { Link } from 'gatsby'

import { Post, StyledImg, Title, Date, Excerpt } from './style'

const Latest = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <>
      {heroImage && body && (
        <Post>
          <Link to={`${props.basePath}/${slug}/`}>
            <StyledImg fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
            <Title>{title}</Title>
            <Date>{publishDate}</Date>
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: body.childMarkdownRemark.excerpt,
              }}
            />
          </Link>
        </Post>
      )}
    </>
  )
}

export default Latest
