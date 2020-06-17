import React from 'react'
import { Link } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Post, StyledImg, Title, Credit, Author, Excerpt } from './style'

const Latest = ({
  slug,
  heroImage,
  title,
  author,
  body,
  ...props
}) => {
  return (
    <>
      {heroImage && body && (
        <Post className={`border-bottom ${props.size}`}>
          {props.size == 'small' ? (
            <Row>
              <Col xs={7}>
                <Title>
                  <span className={`${props.size}-title`}>{title}</span>
                </Title>
                <Author>{author}</Author>
              </Col>
              <Col>
                <Link to={`${props.basePath}/${slug}/`}>
                  <StyledImg
                    Tag="section"
                    fluid={heroImage.fluid}
                    backgroundColor={`#eeeeee`}
                    className={`${props.size}-image`}
                  />
                </Link>
              </Col>
            </Row>
          ) : (
            <>
              <Link to={`${props.basePath}/${slug}/`}>
                <StyledImg
                  Tag="section"
                  fluid={heroImage.fluid}
                  backgroundColor={`#eeeeee`}
                  className={`${props.size}-image`}
                />
              </Link>
              <Credit>Getty Images</Credit>
              <Title>
                <span className={`${props.size}-title`}>{title}</span>
              </Title>
              {props.description && (
                <Excerpt>
                  <p
                    className={`${props.size}-description`}
                    dangerouslySetInnerHTML={{
                      __html: body.childMarkdownRemark.excerpt,
                    }}
                  />
                </Excerpt>
              )}
              <Author>{author}</Author>
            </>
          )}
        </Post>
      )}
    </>
  )
}

export default Latest
