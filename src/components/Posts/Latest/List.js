import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Row from 'react-bootstrap/Row'

import Latest from './Latest'
import { StyledCol } from './style'

const List = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulPost {
          edges {
            node {
              title
              author
              id
              slug
              publishDate(formatString: "MMMM DD, YYYY")
              heroImage {
                title
                fluid(maxWidth: 1800) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
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
        <StyledCol xs={12} sm={3} className="border-right">
          {data.allContentfulPost.edges.slice(0, 2).map(({ node: post }) => (
            <Latest key={post.id} size="medium" {...post} basePath="" />
          ))}
        </StyledCol>

        <StyledCol xs={12} sm={6}>
          {data.allContentfulPost.edges.slice(2, 3).map(({ node: post }) => (
            <Latest
              key={post.id}
              size="large"
              description
              {...post}
              basePath=""
            />
          ))}
        </StyledCol>

        <StyledCol xs={12} sm={3} className="border-left">
          {data.allContentfulPost.edges.slice(3, 7).map(({ node: post }) => (
            <Latest key={post.id} size="small" {...post} basePath="" />
          ))}
        </StyledCol>
      </Row>
    )}
  />
)

export default List
