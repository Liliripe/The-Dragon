import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Latest from './Latest'

const List = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulPost {
          edges {
            node {
              title
              id
              slug
              publishDate(formatString: "MMMM DD, YYYY")
              heroImage {
                title
                fluid(maxWidth: 1800) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
                ogimg: resize(width: 1800) {
                  src
                }
              }
              body {
                childMarkdownRemark {
                  html
                  excerpt(pruneLength: 80)
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Row>
        <Col xs={12} sm={3}>
          {data.allContentfulPost.edges.slice(0, 2).map(({ node: post }) => (
            <Latest key={post.id} {...post} basePath="" />
          ))}
        </Col>

        <Col xs={12} sm={6}>
          {data.allContentfulPost.edges.slice(2, 3).map(({ node: post }) => (
            <Latest key={post.id} {...post} basePath="" />
          ))}
        </Col>

        <Col xs={12} sm={3}>
          {data.allContentfulPost.edges.slice(3, 7).map(({ node: post }) => (
            <Latest key={post.id} {...post} basePath="" />
          ))}
        </Col>
      </Row>
    )}
  />
)

export default List
