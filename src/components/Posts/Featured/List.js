import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'

import Featured from './Featured'
import { StyledRow } from './style'

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
                  excerpt(pruneLength: 120)
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Container fluid>
        <StyledRow>
          {data.allContentfulPost.edges.slice(7, 11).map(({ node: post }) => (
            <Featured key={post.id} {...post} basePath="" />
          ))}
        </StyledRow>
      </Container>
    )}
  />
)

export default List
