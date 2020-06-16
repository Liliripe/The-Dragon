import React from 'react'
import PropTypes from 'prop-types'

import {} from './style'

const Contributors = ({
  slug,
  heroImage,
  title,
  publishDate,
  body,
  ...props
}) => {
  return (
    <>
      {heroImage && body && (
        <Post featured={props.featured}>
          <Link to={`${props.basePath}/${slug}/`}>
            <StyledImg fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
            <Title>{title}</Title>
            <Date>{publishDate}</Date>
            <ReadingTime>
              {body.childMarkdownRemark.timeToRead} min read
            </ReadingTime>
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

export default Contributors
