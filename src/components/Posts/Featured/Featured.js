import React from 'react'
import { Link } from 'gatsby'

import { StyledCol, StyledImg, Credit, Title, Description, Author } from './style'

const Featured = ({ slug, heroImage, title, author, body, ...props }) => {
  return (
    <StyledCol xs={6} md={3} className="border-right">
      {heroImage && body && (
        <>
          <Link to={`${props.basePath}/${slug}/`}>
            <StyledImg
              Tag="section"
              fluid={heroImage.fluid}
              backgroundColor={`#eeeeee`}
            />
          </Link>
          <div>
            <Credit>Getty Images</Credit>
            <Title>{title}</Title>
            <Description
              dangerouslySetInnerHTML={{
                __html: body.childMarkdownRemark.excerpt,
              }}
            />
            <Author>{author}</Author>
          </div>
        </>
      )}
    </StyledCol>
  )
}

export default Featured
